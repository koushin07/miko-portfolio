import Image from "next/image"

export default function TrustedBrands() {
  const logos = [
    { name: "ACE", src: "/trustedbrand/ACE.png" },
    { name: "ASAP Roadworthys", src: "/trustedbrand/ASAP Roadworthys.png" },
    { name: "Boostlab", src: "/trustedbrand/Boostlab.jpg" },
    { name: "DXC Technology", src: "/trustedbrand/DXC technology.png" },
    { name: "The Tech Academy", src: "/trustedbrand/the tech academy.png" },
  ]

  return (
    <section className="bg-white py-16  md:pb-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-h2 font-semibold text-foreground mb-4">Trusted by leading brands</h1>
            <p className="text-muted-foreground text-base-custom max-w-[380px]">
              Discover companies and partners I've worked with, highlighting expertise in QA, full-stack development,
              and systems & infrastructure. Each collaboration reflects a dedication to quality, innovation, and professional growth.
            </p>
          </div>

          {/* Right - Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-4 h-20">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={80}
                  height={40}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
