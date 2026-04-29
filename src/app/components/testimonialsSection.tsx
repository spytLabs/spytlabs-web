const testimonials = [
  {
    name: "Jarrod B",
    role: "Kepri Estate",
    quote:
      "Highly recommended, they did an impeccable job, well inside timelines I requested and to a standard much higher than I expected, including guidance on making things more efficient and effective at every step.",
    avatar: "/figma-assets/kepri-logo-small.png",
    nodeId: "4:268",
  },
  {
    name: "Liam J",
    role: "CEO, All Seasons SE",
    quote:
      "They are a pleasure to work with and is extremely good at what they does! I have worked on two projects with them so far and plan to continue working with them. I would highly recommend them.",
    avatar: "/figma-assets/default-prof-pic.jpg",
    nodeId: "4:315",
  },
  {
    name: "Ole Henrik",
    role: "Founder, OMC",
    quote:
      "SpytLabs is an excellent team to work with. They helped us create high-quality digital conetents for our socials and played a key role in improving our presence on YouTube. We truly enjoyed working with them and look forward to collaborating again in the future.",
    avatar: "/figma-assets/ole.jpeg",
    nodeId: "4:316",
  }
];  

export default function TestimonialsSection() {
  return (
    <section
      className=" pb-15 pt-5"
      data-node-id="4:322"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 sm:gap-14">
        <header className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-5 sm:px-11 sm:text-center">
          <h2
            className="section-title font-semibold text-black"
            data-node-id="3:250"
          >
            <span>Established </span>
            <span className="text-[#2d0da0]">partnerships</span>
            <span> and successful </span>
            <span className="text-[#2d0da0]">engagements</span>
          </h2>
          <p
            className="max-w-[1060px] text-[clamp(15px,1.5vw,34px)] leading-[1.45] font-regular text-[#77767e]"
            data-node-id="3:253"
          >
            We believe in partnership over transactions. Our client relationships
            grow over time and are defined by trust and meaningful outcomes.
          </p>
        </header>

        <div className="flex w-full gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:gap-8 lg:gap-10 sm:px-11 px-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" data-node-id="4:285">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative flex w-[85%] shrink-0 snap-center min-h-[330px] flex-col justify-between border border-black/30 p-6 sm:min-h-[380px] sm:w-[60%] lg:w-[45%] sm:p-10"
              data-node-id={item.nodeId}
            >
              <div className="flex items-center gap-5 sm:gap-8" data-node-id="4:265">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-[65px] rounded-full object-cover sm:size-[80px]"
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
          <div className="w-[1px] shrink-0 sm:w-[1px]"></div>
        </div>
      </div>
    </section>
  );
}
