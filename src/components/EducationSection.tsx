import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
              📚 Education
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center shadow-glow flex-shrink-0">
                <GraduationCap className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                    2nd Year College Student
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Laguna State Polytechnic University (LSPU)
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <p className="text-lg">
                    Bachelor of Science in Information Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
