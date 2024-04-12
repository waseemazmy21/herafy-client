import Hero from "@/components/home/hero";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Cta />
    </div>
  );
}
