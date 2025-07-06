"use client";
import { applications } from "@/constants/global";
import Image from "next/image";
import { BsDropletFill } from "react-icons/bs";
import { GiCrystalGrowth } from "react-icons/gi";
import { TbVaccineBottle } from "react-icons/tb";
import ProductCard from "./ProductCard";

const LandingPage = () => {
  return (
    <div className="bg-green-50 text-green-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-white py-80 px-4 text-center bg-green-200 bg-[url('/images/cover.jpg')] bg-no-repeat bg-cover bg-blend-multiply">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sustainable Sodium Silicate for a Cleaner Future
        </h1>
        <p className="mt-4 text-lg">
          High-performance, eco-conscious solution for modern industries
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-white text-green-700 font-semibold py-2 px-4 rounded hover:bg-green-100">
            Order Now
          </button>
          <button className="bg-white text-green-700 font-semibold py-2 px-4 rounded hover:bg-green-100">
            Download Spec Sheet
          </button>
        </div>
      </section>
      {/* About Us */}
      <section id="about" className="py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg max-w-xl mx-auto">
          At <strong>BioEarthX Limited</strong>, we specialize in producing
          high-quality sodium silicate solutions engineered for industrial
          applications. Our products are crafted under rigorous standards to
          ensure consistency, efficiency, and sustainability for industries like
          construction, water treatment, and manufacturing.
        </p>
        <p className="text-lg max-w-xl mx-auto mt-4">
          Backed by innovation and a strong commitment to environmental
          responsibility, we provide scalable solutions for businesses seeking
          reliable and eco-conscious chemical materials.
        </p>
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="w-24 h-24">
            <Image
              src="/images/sodium-silicate-drum.png"
              alt="Sodium Silicate"
              width={100}
              height={100}
              quality={100}
            />
          </div>
          <span className="text-2xl">→</span>
          <div className="text-xl font-bold">Na₂SiO₃</div>
          <div className="flex items-center">
            <span className="text-2xl rotate-180">→</span>
            <div className="w-24 h-24">
              <Image
                src="/images/sodium-silicate-gel.png"
                alt="Sodium Silicate"
                width={100}
                height={100}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center flex-col items-center  ">
          <span className="text-2xl -rotate-90">→</span>
          <div className="w-24 h-24">
            <Image
              src="/images/sodium-silicate-crystal.png"
              alt="Sodium Silicate"
              width={100}
              height={100}
              quality={100}
            />
          </div>
        </div>
      </section>
      {/* Product Cards */}
      <section id="products" className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <ProductCard
            product={{
              buttonText: "Request Bulk Quote",
              description: "Various concentrations available",
              icon: TbVaccineBottle,
              title: "Liquid Sodium Silicate",
            }}
          />

          <ProductCard
            product={{
              buttonText: "Request Bulk Quote",
              description: "High purity",
              icon: BsDropletFill,
              title: "Sodium Silicate Gel",
            }}
          />

          <ProductCard
            product={{
              buttonText: "Request Bulk Quote",
              title: "Sodium Silicate Crystal",
              description: "Clear-glassy form",
              icon: GiCrystalGrowth,
            }}
          />
        </div>
      </section>
      {/* Applications */}
      <section id="applications" className="py-28 px-4 text-center ">
        <h2 className="text-2xl font-semibold mb-6">Applications</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {applications.map((app, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-200 flex justify-center items-center rounded-full mb-2">
                {app?.icon && <app.icon size={24} fill="#4C744A" />}
              </div>
              <span>{app.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Form */}
      <section id="contact" className="bg-green-100 py-12 px-4">
        <div className="max-w-xl mx-auto bg-[#4C744A] p-4 rounded-lg text-white">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Let’s work together to reduce waste & build cleaner materials.
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="grid w-full">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className=" px-4 py-2 border rounded bg-white text-[#4C744A]"
                />
              </div>
              <div className="grid w-full">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className=" px-4 py-2 border rounded bg-white text-[#4C744A]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="text-white">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded text-[#4C744A] bg-white"
                rows={5}
              />
            </div>
            <button className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
