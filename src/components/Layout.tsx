import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;