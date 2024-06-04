import Hero from "@/components/home/hero";
import Cta from "@/components/home/cta";
import Categories from "@/components/home/categories";

export default function Home() {
  return (
    <div className="mb-20 flex flex-col gap-20">
      <Hero />
      <Cta />
      <Categories />
    </div>
  );
}
