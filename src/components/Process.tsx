const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your vision, space and audience.",
  },
  {
    step: "02",
    title: "Curation",
    description: "Identifying artists and concepts that resonate.",
  },
  {
    step: "03",
    title: "Development",
    description: "Refining the creative direction and logistics.",
  },
  {
    step: "04",
    title: "Realization",
    description: "Bringing the collaboration to life with precision.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-foreground text-primary-foreground">
      <div className="section-container">
        <div className="mb-16 md:mb-24">
          <p className="text-caption opacity-60 mb-6">Process</p>
          <h2 className="text-display-md max-w-xl">
            From concept to completion
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-full w-full h-px bg-primary-foreground/20" />
              )}
              
              <div className="flex md:flex-col gap-6 md:gap-0">
                <div className="flex items-center justify-center w-8 h-8 border border-primary-foreground/30 font-display text-sm">
                  {item.step}
                </div>
                <div className="md:mt-8">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body opacity-60">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
