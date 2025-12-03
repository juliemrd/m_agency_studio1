const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-caption text-muted-foreground mb-6">Contact</p>

          {/* aquí añadimos leading para que no se corten las letras */}
          <h2 className="text-display-lg mb-8 leading-[1.35]">
            Let's create
            <br />
            something meaningful
          </h2>

          <p className="text-body-lg text-muted-foreground mb-12 leading-relaxed">
            For inquiries about collaborations, installations or partnerships,
            we'd be pleased to hear from you.
          </p>

          {/* y aquí también */}
          <a
            href="mailto:contact@magencystudio.com"
            className="inline-block font-display text-2xl md:text-3xl font-semibold link-underline leading-[1.4]"
          >
            contact@magencystudio.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
