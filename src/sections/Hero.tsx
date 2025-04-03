import Button from "@/components/Button";
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
      <section className="py-24 overflow-x-clip">
        <div className="container relative ">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image src={designExample1Image} alt="design example 1 image"/>
            </div>

            <div className="absolute -right-64 -top-16 hidden lg:block">
              <Image src={designExample2Image} alt="design example 2 image"/>
            </div>

            <div className="absolute left-56 top-96 hidden lg:block">
               <Pointer name="Andrea"/>
            </div>

            <div className="absolute right-80 -top-4 hidden lg:block">
               <Pointer name="Bryan" color="red"/>
            </div>

            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                ✨$7.5M seed round raised
                </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                Impactful design, created effortlessly
            </h1>
            <p className="max-w-2xl mx-auto text-center text-xl text-white/50 mt-8">
                Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface
                that keeps you in your creative flow.
            </p>

         
            <form className="flex w-full md:max-w-lg mx-auto border border-white/15 rounded-full p-2 mt-8">
                <input 
                    type="email" 
                    placeholder="Enter your email..." 
                    className="flex-1 bg-transparent w-full md:flex-1 px-4 py-2 text-white outline-none placeholder-white/50"
                />
                <Button 
                    variant="primary" 
                    type="submit" 
                    className="whitespace-nowrap px-6 py-2 "
                >
                    Signup
                </Button>
            </form>
        </div>
      </section>
    );
}
