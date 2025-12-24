import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
              📩 Contact Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Feel free to reach out if you have any questions!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:aclariefaith@gmail.com"
              className="group glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center shadow-glow">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    aclariefaith@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium text-foreground">
                    Brgy. Paagahan, Mabitac, Laguna
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:aclariefaith@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground font-medium rounded-full shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
