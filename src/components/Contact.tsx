const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-caption text-muted-foreground mb-6">Contact</p>
          <h2 className="text-display-lg mb-8">
            Let's create
            <br />
            something meaningful
          </h2>
          <p className="text-body-lg text-muted-foreground mb-12">
            For inquiries about collaborations, installations or partnerships, 
            we'd be pleased to hear from you.
          </p>
          <a
            href="mailto:contact@magencystudio.com"
            className="inline-block font-display text-2xl md:text-3xl font-semibold link-underline"
          >
            contact@magencystudio.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
