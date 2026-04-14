const testimonials = [
  {
    name: "Nimal Perera",
    role: "CEO, Nexa Digital Solutions",
    quote:
      "Working with them felt less like hiring a service and more like gaining a strategic partner. From the very beginning, they took the time to understand our goals and challenges, and translated that into systems that actually deliver results. The impact on our efficiency and growth has been both immediate and long-term.",
    avatar: "/figma-assets/tertimonial-avt-1.png",
    nodeId: "4:268",
  },
  {
    name: "Kavindi Fernando",
    role: "Head of Operations, ElevateX Pvt Ltd",
    quote:
      "Their approach to automation completely changed how we operate. What impressed us most was not just the technology, but the thinking behind it. Every solution was built with scalability in mind, and we have seen a measurable improvement in both productivity and overall performance.",
    avatar: "/figma-assets/tertimonial-avt-2.png",
    nodeId: "4:315",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="border-b border-black/35 px-5 pb-16 pt-14 sm:px-11 sm:pb-20 sm:pt-18"
      data-node-id="4:322"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 sm:gap-14">
        <header className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center">
          <h2
            className="text-[clamp(42px,4vw,72px)] leading-[1.06] font-semibold tracking-[-0.04em] text-black"
            data-node-id="3:250"
          >
            <span>Established </span>
            <span className="text-[#2d0da0]">partnerships</span>
            <span> and successful </span>
            <span className="text-[#2d0da0]">engagements</span>
          </h2>
          <p
            className="max-w-[1060px] text-[clamp(18px,1.5vw,34px)] leading-[1.45] font-medium text-[#77767e]"
            data-node-id="3:253"
          >
            We believe in partnership over transactions. Our client relationships
            grow over time and are defined by trust and meaningful outcomes.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-2 xl:gap-9" data-node-id="4:285">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[330px] flex-col justify-between border border-black/30 p-6 sm:min-h-[420px] sm:p-10"
              data-node-id={item.nodeId}
            >
              <div className="flex items-center gap-5 sm:gap-8" data-node-id="4:265">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-[65px] rounded-full object-cover sm:size-[100px]"
                />
                <div className="min-w-0">
                  <h3 className="text-[clamp(30px,1.8vw,44px)] leading-[1.1] font-medium text-black">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[clamp(18px,1.2vw,32px)] leading-[1.25] font-medium text-[#333339]">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-[clamp(18px,1.2vw,34px)] leading-[1.45] font-normal text-[#333339]">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
