"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
            حرفي
          </Link>
          <nav className="hidden gap-4 text-sm text-muted-foreground sm:inline-flex">
            {user?.role === "craftsman" && (
              <>
                <Link href="/craftsman" className="hover:text-foreground">
                  صفحتي
                </Link>
                <Link
                  href="/craftsman/job-search"
                  className="hover:text-foreground"
                >
                  البحث عن عمل
                </Link>
                <Link
                  href="/craftsman/my-jobs"
                  className="hover:text-foreground"
                >
                  وظائفى
                </Link>
              </>
            )}
            {user?.role === "client" && (
              <>
                <Link href="/dashboard" className="hover:text-foreground">
                  مساحة العمل
                </Link>
                <Link href="/post-job" className="hover:text-foreground">
                  نشر وظيفة
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
            <Button
              onClick={handleLogout}
              className="bg-gradient-hover text-white"
            >
              تسجيل خروج
            </Button>
          ) : (
            <Link
              href="/login"
              className={buttonVariants({
                class: "bg-gradient-hover text-white",
              })}
            >
              تسجبل الدخول
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
