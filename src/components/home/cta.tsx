import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Cta() {
  return (
    <section className="container mb-8 flex items-center gap-8 text-center sm:text-left">
      <div className="hidden w-1/3 sm:block">
        <Image
          src="/images/home/cta.png"
          alt=""
          width={342}
          height={456}
          className="hidden w-full sm:block"
        />
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold sm:text-4xl">
          Post a Job and Hire the Best Craftsmen
        </h2>
        <p className="mb-8 text-muted-foreground">
          Finding the right talent shouldn&lq;t be a hassle. Post a job and
          select the best craftsmen.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className={buttonVariants({
              variant: "default",
              class: "bg-gradient-hover text-white",
            })}
          >
            Log In
          </Link>
          <Link
            href="/register"
            className={buttonVariants({
              variant: "default",
              class: "bg-gradient-hover text-white",
            })}
          >
            Create an Account
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
