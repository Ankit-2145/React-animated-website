"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <nav className="font-SpaceGrotesk">
      <div className="max-w-6xl flex justify-between h-16 items-center px-5 md:px-0 mx-auto">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">Pinnacle</span>
        </a>
        <div className="hidden md:flex items-center space-x-4 flex-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <Button variant="outline" size="lg" className="rounded-full ml-2">
            Contact Us
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden ml-2"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
