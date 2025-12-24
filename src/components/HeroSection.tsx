import { MapPin, GraduationCap, Mail } from "lucide-react";
import clariePhoto from "@/assets/clarie-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-accent/30">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-animation-delayed" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary/40 rounded-full float-animation" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full float-animation-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/50 rounded-full float-animation" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="opacity-0 animate-fade-in-up mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 gradient-bg rounded-full blur-xl opacity-30 scale-110" />
              <img
                src={clariePhoto}
                alt="Clarie Faith M. Almendral"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-card shadow-glow"
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              👋 Welcome to my profile
            </span>
          </div>

          {/* Name */}
          <h1 className="opacity-0 animate-fade-in-up animation-delay-400 font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Clarie!</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up animation-delay-600 font-display text-xl md:text-2xl font-medium text-foreground/80 mb-8">
            Clarie Faith Almendral
          </p>

          {/* Info badges */}
          <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border/50">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">2nd Year BSIS Student</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border/50">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">LSPU</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800">
            <a
              href="mailto:aclariefaith@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground font-medium rounded-full shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
