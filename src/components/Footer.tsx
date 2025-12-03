const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-sm md:text-base font-medium tracking-[0.25em] uppercase">M Agency Studio</p>
          <p className="text-body text-muted-foreground text-sm">
            © {currentYear} M Agency Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
