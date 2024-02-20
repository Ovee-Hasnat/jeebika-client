import React from "react";
import {
  HamburgerMenuIcon,
  MobileIcon,
  CaretDownIcon,
} from "@radix-ui/react-icons";
import { FaUser, FaUserTie, FaPhone } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export default function NavbarPrimary() {
  return (
    <div className="container py-3 flex items-center justify-between">
      <div>Company Logo</div>
      <div className="hidden md:flex items-center gap-4 text-sm">
        <Link href={"/"}>Create your Resume now</Link>

        {/* Drop Down on Navbar */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            Career Resource
            <CaretDownIcon className="inline" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Sign In</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div className="flex items-center gap-4">
                <FaUser size={24} />
                <div className="w-48">
                  <h5 className="text-base xl:text-lg">Job Seekers</h5>
                  <p className="text-sm font-light">
                    Sign in or create your accout to manage your profile
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Button asChild>
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Link href={"/"}>Create Account</Link>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <div className="flex items-center gap-4">
                <FaUserTie size={24} />
                <div className="w-48">
                  <h5 className="text-base xl:text-lg">Employers</h5>
                  <p className="text-sm font-light">
                    Sign in or create account to find the best candidates in the
                    fastest way
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Button asChild>
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Link href={"/"}>Create Account</Link>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href={"/"} className="flex items-center gap-1.5">
          <FaPhone size={24} />
          <p className="inline">Contact Us</p>
        </Link>
      </div>
      <div className="md:hidden">
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}