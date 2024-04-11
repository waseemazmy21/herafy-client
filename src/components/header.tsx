import { Menu } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <div className="flex h-16 items-center border-b border-border bg-background sm:h-20">
      <header className="container flex justify-between gap-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-gradient self-baseline text-2xl font-bold"
          >
            حرفي
          </Link>
          <nav className=" hidden gap-4 text-sm  text-muted-foreground sm:inline-flex">
            <Link href="/job-search" className="hover:text-foreground">
              البحث عن عمل
            </Link>
            <Link href="/craftmen-search" className="hover:text-foreground">
              البحث عن حرفيين
            </Link>
          </nav>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-4 sm:inline-flex">
          <Input
            className=" hidden max-w-64 rounded-full border-2 focus-visible:ring-0 md:inline-block"
            type="search"
            placeholder="البحث..."
          />
          <Link
            href="/sign-in"
            className={buttonVariants({
              class: "bg-gradient text-white",
            })}
          >
            تسجبل الدخول
          </Link>
        </div>

        {/* mobile nav */}
        <div className="sm:hidden">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
