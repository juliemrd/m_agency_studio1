const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-elegant">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-caption text-muted-foreground mb-6 animate-fade-up">
            About
          </p>
          <h2 className="text-display-md mb-12 animate-fade-up-delay-1">
            Where art meets
            <br />
            intention
          </h2>
          <div className="space-y-8 text-body-lg text-muted-foreground animate-fade-up-delay-2">
            <p>
              M Agency Studio is a boutique creative consultancy bridging
              contemporary art with high-end hospitality and luxury brands. We
              craft meaningful partnerships between artists and the spaces that
              define today's cultural landscape.
            </p>
            <p>
              From site-specific installations to limited-edition
              collaborations, we translate artistic intention into architectural
              presence: with precision, curation and a distinctly modern
              aesthetic.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-foreground/20" />
            <div className="w-2 h-2 rounded-full bg-foreground/30" />
            <div className="w-16 h-px bg-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
