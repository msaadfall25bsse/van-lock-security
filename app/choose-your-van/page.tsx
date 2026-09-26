import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Choose Your Van - VanLock Security",
  description:
    "Please select a Vehicle Manufacturer below to browse our vehicle-specific security solutions.",
};

const manufacturers = [
  {
    name: "Citroen",
    slug: "/citroen/",
    logo: "/citroen-300-x-228.png",
  },
  {
    name: "Fiat",
    slug: "/fiat/",
    logo: "/fiat-logo-300-x-302.png",
  },
  {
    name: "Ford",
    slug: "/ford/",
    logo: "/ford-300-x-119.png",
  },
  {
    name: "Isuzu",
    slug: "/isuzu/",
    logo: "/isuzu-logo-23.png",
  },
  {
    name: "Iveco",
    slug: "/iveco/",
    logo: "/iveco-300-x-66.png",
  },
  {
    name: "Land Rover",
    slug: "/land-rover/",
    logo: "/land-rover-logo.png",
  },
  {
    name: "LEVC",
    slug: "/levc/",
    logo: "/levc-logo.png",
  },
  {
    name: "MAN",
    slug: "/man-vans/",
    logo: "/man-logo-300-x-175.png",
  },
  {
    name: "MAXUS",
    slug: "/maxus/",
    logo: "/maxus-logo.png",
  },
  {
    name: "Mercedes-Benz",
    slug: "/mercedes-benz/",
    logo: "/mercedes-benz-logo-300-x-179.png",
  },
  {
    name: "Nissan",
    slug: "/nissan/",
    logo: "/nissan-logo.png",
  },
  {
    name: "Peugeot",
    slug: "/peugeot/",
    logo: "/peugeot-logo-300-x-213.png",
  },
  {
    name: "Renault",
    slug: "/renault/",
    logo: "/renault-logo.png",
  },
  {
    name: "Toyota",
    slug: "/toyota/",
    logo: "/toyota-logo-300-x-249.png",
  },
  {
    name: "Vauxhall",
    slug: "/vauxhall/",
    logo: "/vauxhall-logo-300-x-249.png",
  },
  {
    name: "Volkswagen",
    slug: "/volkswagen/",
    logo: "/vw-badge-logo.png",
  },
];

export default function ChooseYourVanPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden flex flex-col">
      {/* 1. Transparent Header exactly as on live site */}
      <Header activePath="/choose-your-van" />

      {/* 2. Hero Section with main-banner-images.jpg background and exact gradient overlay */}
      <section className="relative overflow-hidden w-full bg-[#111111] pt-[150px] pb-[70px] sm:pt-[180px] sm:pb-[100px] lg:pt-[200px] lg:pb-[130px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/main-banner-images.jpg')`,
          }}
        />

        {/* Gradient Overlay: 180deg from #000000 0% to #2282C6 100% with opacity 0.83 */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #2282C6 100%)",
            opacity: 0.83,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-onest text-white text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-[1.2] lg:leading-[45px] tracking-tight mb-4 sm:mb-5">
            Choose Your Van
          </h1>
          <p className="font-manrope text-white text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[26px] lg:leading-[28px] max-w-[850px]">
            Please select a Vehicle Manufacturer below to browse our vehicle-specific security solutions.
          </p>
        </div>
      </section>

      {/* 3. Choose by Manufacturer Grid Section */}
      <section className="bg-white py-[50px] sm:py-[70px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-7 lg:gap-8 items-center">
            {manufacturers.map((brand, idx) => (
              <Link
                key={idx}
                href={brand.slug}
                className="group block bg-white rounded-[10px] p-5 sm:p-6 shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] border border-[#f0f0f0] transition-colors duration-200 flex items-center justify-center h-[140px] sm:h-[155px]"
              >
                <div className="relative w-full h-[85px] sm:h-[95px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
