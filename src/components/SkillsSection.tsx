import { Monitor, Database, MessageSquare, Users, FolderOpen } from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Computer Literacy",
    description: "Proficient in various software and digital tools",
  },
  {
    icon: Database,
    title: "Data & Document Handling",
    description: "Skilled in organizing and managing information",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Effective verbal and written communication",
  },
  {
    icon: Users,
    title: "Teamwork & Collaboration",
    description: "Works well with diverse teams and groups",
  },
  {
    icon: FolderOpen,
    title: "Organization Skills",
    description: "Efficient in planning and prioritizing tasks",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
              🧠 Skills & Interests
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              What I <span className="gradient-text">Bring</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
