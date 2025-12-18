import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ritzorama", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/riancteulp", label: "Twitter" },
    { icon: Mail, href: "mailto:rian.cteulp@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-32 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:hello@example.com"
                className="hover:text-primary transition-colors duration-300"
              >
                rian.cteulp@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>The internets</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="glow" size="xl" asChild className="mb-16">
            <a href="mailto:rian.cteulp@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Me a Message
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
