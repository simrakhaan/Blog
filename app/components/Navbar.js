
// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { TiThMenuOutline } from "react-icons/ti";
import { ModeToggle } from './theme-btn';


const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-lg font-bold">SimraBlog</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:underline hover:font-bold">Home</Link>
          <Link href="/about" className="hover:underline hover:font-bold">About</Link>
          <Link href="/blog" className="hover:underline hover:font-bold">Blog</Link>
          <Link href="/contact" className="hover:underline hover:font-bold">Contact</Link>
          <ModeToggle/>
        </div>


        {/* Mobile Navigation */}
        <div className="md:hidden">
        <span className="mx-2">
            <ModeToggle/>
            </span>
          <Sheet>
            <SheetTrigger >
            <TiThMenuOutline />
            </SheetTrigger>
            
            <SheetContent side="right">
              <SheetHeader>
                <div className="text-lg font-bold mb-4">SimraBlog</div>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="hover:underline hover:font-bold">Home</Link>
                <Link href="/about" className="hover:underline hover:font-bold">About</Link>
                <Link href="/blog" className="hover:underline hover:font-bold">Blog</Link>
                <Link href="/contact" className="hover:underline hover:font-bold">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>

         
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
