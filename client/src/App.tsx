/*
 * DESIGN: "Void Glass" Cyberpunk — App Router
 * Routes: / (bio), /portfolio, and all sub-pages
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MinecraftManagement from "./pages/portfolio/MinecraftManagement";
import MinecraftModeration from "./pages/portfolio/MinecraftModeration";
import MinecraftDevelopment from "./pages/portfolio/MinecraftDevelopment";
import DesignEmbeds from "./pages/portfolio/DesignEmbeds";
import DesignGraphics from "./pages/portfolio/DesignGraphics";
import DiscordBots from "./pages/portfolio/DiscordBots";
import MinecraftCategory from "./pages/portfolio/MinecraftCategory";
import DesignCategory from "./pages/portfolio/DesignCategory";
import DevelopmentCategory from "./pages/portfolio/DevelopmentCategory";

function Router() {
  useGoogleAnalytics();
  return (
    <>
      <Navbar />
      <Switch>
        {/* Bio page */}
        <Route path="/" component={Home} />

        {/* Portfolio main */}
        <Route path="/portfolio" component={Portfolio} />

        {/* Category pages */}
        <Route path="/portfolio/minecraft" component={MinecraftCategory} />
        <Route path="/portfolio/design" component={DesignCategory} />
        <Route path="/portfolio/development" component={DevelopmentCategory} />

        {/* Minecraft sub-pages */}
        <Route path="/portfolio/minecraft/management" component={MinecraftManagement} />
        <Route path="/portfolio/minecraft/moderation" component={MinecraftModeration} />
        <Route path="/portfolio/minecraft/development" component={MinecraftDevelopment} />

        {/* Design sub-pages */}
        <Route path="/portfolio/design/embeds" component={DesignEmbeds} />
        <Route path="/portfolio/design/graphics" component={DesignGraphics} />

        {/* Development sub-pages */}
        <Route path="/portfolio/development/minecraft" component={MinecraftDevelopment} />
        <Route path="/portfolio/development/discord-bots" component={DiscordBots} />

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
