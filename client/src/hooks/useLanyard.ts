import { useEffect, useState } from "react";

// Lanyard API types
export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  public_flags: number;
  global_name?: string;
}

export interface SpotifyData {
  track_id: string;
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  timestamps: {
    start: number;
    end: number;
  };
}

export interface Activity {
  id: string;
  name: string;
  type: number;
  state?: string;
  details?: string;
  application_id?: string;
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
  timestamps?: {
    start?: number;
    end?: number;
  };
  created_at: number;
}

export interface LanyardData {
  discord_user: DiscordUser;
  discord_status: "online" | "idle" | "dnd" | "offline";
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_web: boolean;
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
  activities: Activity[];
  kv: Record<string, string>;
}

interface UseLanyardReturn {
  data: LanyardData | null;
  loading: boolean;
  error: string | null;
}

export function useLanyard(userId: string): UseLanyardReturn {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let heartbeatInterval: ReturnType<typeof setInterval> | null = null;
    let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
    let isMounted = true;

    const connect = () => {
      try {
        ws = new WebSocket("wss://api.lanyard.rest/socket");

        ws.onopen = () => {
          // Send subscribe opcode
                ws!.send(
            JSON.stringify({
              op: 2,
              d: {
                subscribe_to_id: userId,
              },
            })
          );
        };

        ws.onmessage = (event) => {
          if (!isMounted) return;
          try {
            const message = JSON.parse(event.data);

            switch (message.op) {
              case 1: {
                // Hello - start heartbeat
                const interval = message.d.heartbeat_interval;
                heartbeatInterval = setInterval(() => {
                  if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ op: 3 }));
                  }
                }, interval);
                break;
              }
              case 0: {
                // Event
                if (
                  message.t === "INIT_STATE" ||
                  message.t === "PRESENCE_UPDATE"
                ) {
                  const presenceData = message.d[userId] || message.d;
                  if (presenceData) {
                    setData(presenceData);
                    setLoading(false);
                    setError(null);
                  }
                }
                break;
              }
            }
          } catch {
            // ignore parse errors
          }
        };

        ws.onerror = () => {
          if (!isMounted) return;
          setError("WebSocket error");
          setLoading(false);
        };

        ws.onclose = () => {
          if (!isMounted) return;
          if (heartbeatInterval) clearInterval(heartbeatInterval);
          // Reconnect after 5 seconds
          reconnectTimeout = setTimeout(() => {
            if (isMounted) connect();
          }, 5000);
        };
      } catch {
        if (!isMounted) return;
        setError("Failed to connect");
        setLoading(false);
      }
    };

    // Also fetch initial data via REST as fallback
    fetch(`https://api.lanyard.rest/v1/users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        if (!isMounted) return;
        if (json.success && json.data) {
          setData(json.data);
          setLoading(false);
        } else {
          // User not monitored or other error — stop loading
          setLoading(false);
          if (json.error) {
            setError(json.error.code || "unknown_error");
          }
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    connect();

    return () => {
      isMounted = false;
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
      if (ws) ws.close();
    };
  }, [userId]);

  return { data, loading, error };
}

export function getAvatarUrl(user: DiscordUser): string {
  if (user.avatar) {
    const isAnimated = user.avatar.startsWith("a_");
    const ext = isAnimated ? "gif" : "png";
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`;
  }
  const defaultIndex = (parseInt(user.id) >> 22) % 6;
  return `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "online":
      return "#43b581";
    case "idle":
      return "#faa61a";
    case "dnd":
      return "#f04747";
    default:
      return "#747f8d";
  }
}

export function getStatusLabel(status: string): string {
  switch (status) {
    case "online":
      return "Online";
    case "idle":
      return "Idle";
    case "dnd":
      return "Do Not Disturb";
    default:
      return "Offline";
  }
}
