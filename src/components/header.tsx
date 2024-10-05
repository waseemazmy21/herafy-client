"use client";

import { useUser } from "@/app/contexts/user-context";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { DropDownMenu } from "./drop-down-menu";

function Header() {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <div className="flex h-16 items-center border-b border-border bg-background sm:h-20">
      <header className="container flex justify-between gap-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-gradient self-baseline text-2xl font-bold"
          >
            Herafy
          </Link>
          <nav className="hidden gap-4 text-sm text-muted-foreground sm:inline-flex">
            {user?.role === "craftsman" && (
              <>
                <Link href="/craftsman" className="hover:text-foreground">
                  Home
                </Link>
                <Link
                  href="/craftsman/my-proposals"
                  className="hover:text-foreground"
                >
                  Prposals
                </Link>
              </>
            )}
            {user?.role === "client" && (
              <>
                <Link href="/client" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/client/post-job" className="hover:text-foreground">
                  Post a job
                </Link>
              </>
            )}
          </nav>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-4 sm:inline-flex">
          {/* <Input
            className=" hidden max-w-64 rounded-full border-2 focus-visible:ring-0 md:inline-block"
            type="search"
            placeholder="البحث..."
          /> */}
          {user ? (
            // <Button
            //   onClick={handleLogout}
            //   className="bg-gradient-hover text-white"
            // >
            //   تسجيل خروج
            // </Button>
            <DropDownMenu handleLogout={handleLogout} />
          ) : (
            <Link
              href="/login"
              className={buttonVariants({
                class: "bg-gradient-hover text-white",
              })}
            >
              Log In
            </Link>
          )}
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
