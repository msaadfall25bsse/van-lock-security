import { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Contact VanLock Security | Van Security Installers UK",
  description:
    "Get in touch with VanLockSecurity for expert van lock installation and security solutions. We're here to help you protect your vehicle across the UK.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden flex flex-col">
      {/* Transparent Header */}
      <Header activePath="/contact" />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden w-full bg-[#111111] pt-[150px] pb-[70px] sm:pt-[180px] sm:pb-[100px] lg:pt-[200px] lg:pb-[130px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/blog-deadlock.webp')` }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #2282C6 100%)",
            opacity: 0.83,
          }}
        />
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-onest text-white text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-[1.2] lg:leading-[55px] tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full bg-white py-[60px] sm:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Contact Information */}
            <div>
              <p className="font-onest text-[14px] sm:text-[15px] font-bold text-[#2282C6] tracking-[2px] uppercase mb-2">
                CONTACT US
              </p>
              <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20] leading-[1.25] mb-5">
                Get in Touch With Us
              </h2>
              <p className="font-manrope text-[15px] text-[#555555] leading-[26px] mb-8">
                Have questions or need a quote? Our team is ready to assist you with any inquiries related to our services. Whether it’s a new project or general support, feel free to reach out. We’re just a call or message away!
              </p>

              {/* Contact Info Items */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[8px] bg-[#E9F7FE] flex items-center justify-center flex-shrink-0 text-[#2282C6]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-onest text-[16px] font-bold text-[#050B20] mb-1">
                      Phone No
                    </h3>
                    <a
                      href="tel:07446898025"
                      className="font-manrope text-[15px] text-[#555555] hover:text-[#2282C6] transition-colors"
                    >
                      07446898025
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[8px] bg-[#E9F7FE] flex items-center justify-center flex-shrink-0 text-[#2282C6]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-onest text-[16px] font-bold text-[#050B20] mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@vanlocksecurity.co.uk"
                      className="font-manrope text-[15px] text-[#555555] hover:text-[#2282C6] transition-colors"
                    >
                      info@vanlocksecurity.co.uk
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[8px] bg-[#E9F7FE] flex items-center justify-center flex-shrink-0 text-[#2282C6]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-onest text-[16px] font-bold text-[#050B20] mb-1">
                      Address
                    </h3>
                    <p className="font-manrope text-[15px] text-[#555555] leading-relaxed">
                      Van lock security 594 green lane , Ilford
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Message Us Form */}
            <div className="bg-[#E9F7FE] rounded-[15px] p-8 sm:p-10 border border-[#d6ecf9]">
              <h2 className="font-onest text-[24px] sm:text-[28px] font-bold text-[#050B20] mb-6">
                Message us
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full h-[50px] px-4 rounded-[6px] bg-white border border-[#E0E0E0] text-[15px] font-manrope text-[#333333] placeholder:text-[#888888] focus:outline-none focus:border-[#2282C6]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full h-[50px] px-4 rounded-[6px] bg-white border border-[#E0E0E0] text-[15px] font-manrope text-[#333333] placeholder:text-[#888888] focus:outline-none focus:border-[#2282C6]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="w-full h-[50px] px-4 rounded-[6px] bg-white border border-[#E0E0E0] text-[15px] font-manrope text-[#333333] placeholder:text-[#888888] focus:outline-none focus:border-[#2282C6]"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message"
                    required
                    className="w-full p-4 rounded-[6px] bg-white border border-[#E0E0E0] text-[15px] font-manrope text-[#333333] placeholder:text-[#888888] focus:outline-none focus:border-[#2282C6] resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full h-[50px] bg-[#2282C6] hover:bg-[#1a6ea9] text-white font-jakarta text-[15px] font-bold rounded-[6px] transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[380px] sm:h-[420px] bg-gray-100">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Van%20lock%20security%20594%20green%20lane%20%2C%20Ilford%20&t=m&z=15&output=embed&iwloc=near"
          title="Van lock security 594 green lane , Ilford "
          aria-label="Van lock security 594 green lane , Ilford "
          className="w-full h-full border-0"
        />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
