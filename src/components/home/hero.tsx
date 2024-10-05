import Image from "next/image";

function Hero() {
  return (
    <section className="container mt-20 flex flex-col-reverse gap-8 sm:flex-row">
      <div className="flex flex-col items-center justify-center sm:flex-1">
        <h1 className="max-w-[13ch] p-1 text-center text-4xl font-bold capitalize leading-[1.2] md:text-6xl">
          the <span className="text-gradient">future</span>
          <br /> <span className="text-gradient">begin</span> here
        </h1>
      </div>

      <div className="flex items-center justify-center sm:flex-1">
        <Image
          src="/images/home/hero.png"
          width={729}
          height={456}
          alt=""
          className="w-full max-w-[350px] object-cover sm:max-w-3xl"
        />
      </div>
    </section>
  );
}

export default Hero;
