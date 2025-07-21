import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Connect from "./pages/Connect";
import Guestbook from "./pages/Guestbook";
import Testimonials from "./pages/Testimonials";
import Links from "./pages/Links";
import Feedback from "./pages/Feedback";
import EngineRoom from "./pages/EngineRoom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/links" element={<Links />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/404" element={<EngineRoom />} />
            <Route path="*" element={<EngineRoom />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
