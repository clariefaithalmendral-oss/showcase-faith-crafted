import { Target } from "lucide-react";

const GoalSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
              🎯 Career Goal
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              My <span className="gradient-text">Vision</span>
            </h2>
          </div>

          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-border/50 relative">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center shadow-glow">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                To become a <span className="text-foreground font-semibold">knowledgeable and skilled Information Systems professional</span> who can contribute to{" "}
                <span className="text-primary font-medium">digital innovation</span> and{" "}
                <span className="text-primary font-medium">organizational growth</span> through technology and teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
