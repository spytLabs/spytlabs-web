import TestimonialVideo from "./TestimonialVideo";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  nodeId: string;
};

const testimonials: Testimonial[] = [
  // {
  //   name: "Jarrod B",
  //   role: "Kepri Estate",
  //   quote:
  //     "Highly recommended, they did an impeccable job, well inside timelines I requested and to a standard much higher than I expected, including guidance on making things more efficient and effective at every step.",
  //   avatar: "/figma-assets/kepri-logo-small.png",
  //   nodeId: "4:268",
  // },
  {
    name: "Liam J",
    role: "CEO, All Seasons SE",
    quote:
      "They are a pleasure to work with and is extremely good at what they does! I have worked on two projects with them so far and plan to continue working with them. I would highly recommend them.",
    nodeId: "4:315",
  },
  {
    name: "Ole Henrik",
    role: "Founder, OMC",
    quote:
      "spytLabs is an excellent team to work with. They helped us create high-quality digital conetents for our socials and played a key role in improving our presence on YouTube. We truly enjoyed working with them and look forward to collaborating again in the future.",
    avatar: "/figma-assets/ole.jpeg",
    nodeId: "4:316",
  }
];  

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section
      className="flex flex-col gap-10 px-12.5 pt-22 pb-22 sm:gap-14 max-[1060px]:px-5.5 max-[1060px]:pt-14 max-[1060px]:pb-14"
      data-node-id="4:322"
    >
      <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Client words</p>
          <h2 className="m-0 mt-3 section-title font-semibold text-black" data-node-id="3:250">
            Partners, <span className="text-[#2d0da0]">not projects.</span>
          </h2>
        </div>
        <p className="m-0 max-w-130 text-[clamp(15px,1.25vw,22px)] leading-[1.45] text-[#77767e]" data-node-id="3:253">
          Our client relationships grow over time and are defined by trust and meaningful outcomes. Here&apos;s what they say.
        </p>
      </header>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(0,1fr)]" data-node-id="4:285">
        <figure className="m-0 flex flex-col overflow-hidden rounded-lg bg-[#111114] text-white">
          <div className="relative aspect-[9/16] w-full max-lg:aspect-[4/5]">
            <TestimonialVideo
              src="/testimonials/janaka-inimankada.mp4"
              poster="/testimonials/janaka-inimankada.jpg"
              label="Video testimonial from Janaka Inimankada, Founder of Vidarshana Publishers"
            />
          </div>
          <figcaption className="p-6">
            <p className="m-0 text-[clamp(18px,1.3vw,22px)] font-semibold">Janaka Inimankada</p>
            <p className="m-0 mt-0.5 text-[15px] text-white/65">Founder, Vidarshana Publishers</p>
          </figcaption>
        </figure>

        {testimonials.map((item, i) => (
          <figure
            key={item.name}
            className={`m-0 flex flex-col justify-between gap-12 rounded-lg p-8 sm:p-10 lg:p-12 ${
              i % 2 === 0 ? "bg-[#f4f4f6] text-[#111114]" : "bg-[#111114] text-white"
            }`}
            data-node-id={item.nodeId}
          >
            <div>
              <span aria-hidden="true" className={`block text-[clamp(72px,7vw,120px)] leading-[0.7] font-semibold ${i % 2 === 0 ? "text-[#2d0da0]" : "text-[#7d63ff]"}`}>
                &ldquo;
              </span>
              <blockquote className="m-0 mt-4 text-[clamp(20px,1.7vw,30px)] leading-[1.35] font-medium tracking-[-0.015em]">
                {item.quote}
              </blockquote>
            </div>

            <figcaption className={`flex items-center gap-4 border-t pt-6 ${i % 2 === 0 ? "border-black/15" : "border-white/20"}`}>
              {item.avatar ? (
                <img src={item.avatar} alt={item.name} className="size-14 rounded-full object-cover" draggable={false} />
              ) : (
                <span
                  aria-hidden="true"
                  className={`flex size-14 items-center justify-center rounded-full text-[17px] font-semibold ${
                    i % 2 === 0 ? "bg-[#3200eb] text-white" : "bg-white text-[#111114]"
                  }`}
                >
                  {initials(item.name)}
                </span>
              )}
              <div>
                <p className="m-0 text-[clamp(18px,1.3vw,22px)] font-semibold">{item.name}</p>
                <p className={`m-0 mt-0.5 text-[15px] ${i % 2 === 0 ? "text-[#54535c]" : "text-white/65"}`}>{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
