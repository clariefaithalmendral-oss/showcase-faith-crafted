const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Passionate About <span className="gradient-text">Technology</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 border border-border/50">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              I am currently a <span className="text-foreground font-medium">BSIS student</span> who is passionate about technology, learning new skills, and building my career in the IT field. I enjoy exploring areas in{" "}
              <span className="text-primary font-medium">information systems</span>,{" "}
              <span className="text-primary font-medium">data management</span>,{" "}
              <span className="text-primary font-medium">development</span>,{" "}
              <span className="text-primary font-medium">design</span>, and{" "}
              <span className="text-primary font-medium">problem-solving</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
