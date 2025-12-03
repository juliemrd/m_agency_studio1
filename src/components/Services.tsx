const services = [
  {
    number: "01",
    title: "Art Curation",
    description:
      "We identify and connect with emerging and established artists whose work aligns with your brand identity and spatial vision.",
  },
  {
    number: "02",
    title: "Brand Collaborations",
    description:
      "Strategic partnerships between artists and luxury brands — creating limited editions, capsule collections and co-branded experiences.",
  },
  {
    number: "03",
    title: "Site Installations",
    description:
      "Bespoke art installations for hotels, residences and public spaces that transform environments into cultural destinations.",
  },
  {
    number: "04",
    title: "Project Direction",
    description:
      "End-to-end creative direction from concept to completion — managing artists, production and installation with discretion.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="mb-16 md:mb-24">
          <p className="text-caption text-muted-foreground mb-6">What We Do</p>
          <h2 className="text-display-md max-w-2xl">
            Four pillars of creative partnership
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="bg-background p-8 md:p-12 group hover:bg-stone transition-colors duration-500"
            >
              <span className="text-caption text-muted-foreground block mb-8">
                {service.number}
              </span>
              <h3 className="text-display-md mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-body text-muted-foreground max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
