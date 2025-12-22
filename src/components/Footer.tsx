const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-accent/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display text-lg font-semibold gradient-text mb-2">
            Clarie Faith M. Almendral
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
