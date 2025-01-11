import Image from "next/image";
import Button from "@/components/ui/Button";
const Hero = () => {
  return (
    <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
      <div className="max-w-[56rem]">
        <div className="min-h-[180px]">
          <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
            We build <span className="text-accent">products</span> that shape a
            better future
          </h1>
        </div>
        <div className="mb-8 max-w-3xl">
          <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
            We’re the architects of digital excellence across industries. We
            redefine business with cutting-edge digital strategies that invokes
            sector-wide transformation.
          </p>
        </div>
        <div className="mb-5">
          <Button className="flex gap-2">
            Book a Call
            <img
              src="/play-dark.svg"
              className="group-hover:hidden h-3"
              alt="arrow"
            />
            <img
              src="/play-light.svg"
              className="hidden group-hover:block h-3"
              alt="arrow"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
      <div className="md:min-h-screen bg-[url('/assets/hero/header-background.svg')] bg-no-repeat bg-top">
        <div className="container mx-auto px-4 md:px-5">
          <Hero />
        </div>
      </div>
    </main>
  );
}
