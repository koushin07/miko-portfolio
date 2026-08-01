import Image from "next/image"

type Logo = { name: string; src: string }

const employers: Logo[] = [
  { name: "Atlas Geotech", src: "/trustedbrand/Atlas Geotech.png" },
  { name: "DXC Technology", src: "/trustedbrand/DXC technology.png" },
]

const clients: Logo[] = [
  { name: "ACE", src: "/trustedbrand/ACE.png" },
  { name: "ASAP Roadworthys", src: "/trustedbrand/ASAP Roadworthys.png" },
  { name: "Boostlab", src: "/trustedbrand/Boostlab.jpg" },
  { name: "The Tech Academy", src: "/trustedbrand/the tech academy.png" },
]

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center justify-center h-14">
          <Image
            src={logo.src}
            alt={logo.name}
            width={120}
            height={48}
            className="object-contain max-h-full w-auto"
          />
        </div>
      ))}
    </div>
  )
}

export default function TrustedBrands() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          {/* Left — framing */}
          <div>
            <h2 className="text-h2 font-semibold text-foreground mb-4">Where I&apos;ve built</h2>
            <p className="text-muted-foreground text-base-custom max-w-[380px]">
              Enterprise ERP quality assurance through to independent full-stack delivery — two different kinds of
              rigor, both aimed at systems that hold up in production.
            </p>
          </div>

          {/* Right — two labelled groups */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Employed at
              </p>
              <LogoRow logos={employers} />
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Freelance &amp; contract clients
              </p>
              <LogoRow logos={clients} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
