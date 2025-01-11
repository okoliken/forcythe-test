import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Discover } from "@/components/sections/Discover";


export default function Home() {
  return (
    <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
      <div className="md:min-h-screen bg-[url('/assets/hero/header-background.svg')] bg-no-repeat bg-top">
        <div className="container mx-auto px-4 md:px-5">
          <Hero />
        </div>
        <div className="py-10">
          <div className="min-h-[60px]">
            <div>
              <div>
               <Testimonials />
              </div>
              <div>
                <Discover />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
