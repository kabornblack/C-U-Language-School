"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Button } from "../ui/button";
import { Bars3Icon, UserGroupIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { BriefcaseIcon, User2Icon } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CourseSelector from "../Selectors";
import DropdownSelector from "../Selectors";
import { usePathname } from "next/navigation";

const languages = [
  {
    name: "English",
    href: "/language/english",
  },
  {
    name: "Spanish",
    href: "/language/spanish",
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { page: "About Us", path: "/about-us" },
    { page: "How it works", path: "/how-it-works" },
  ];

  return (
    <header className="bg-slate-50 text-black shadow w-full top-0 z-50 font-rethink">
      <nav className="container min-h-16 flex items-center justify-between max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        {/*Left Menu Logo&text */}
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              src="/cuLogo.png"
              alt="CULogo"
              width={1000}
              height={1000}
              className="w-auto h-12"
            />
          </Link>
        </div>

        {/* middle Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex items-center lg:gap-x-5 justify-center">
          <DropdownSelector type="languages" />

          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`py-2 px-3 transition duration-200 ${
                pathname === item.path
                  ? "font-bold text-[#FF509B] hover:text-[#FF509B]"
                  : "text-primary hover:text-[#FF509B]"
              }`}
            >
              {item.page}
            </Link>
          ))}
        </PopoverGroup>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="relative flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 className="text-xl text-white font-bold leading-2">
                  C-U International School
                </h1>

                <div className="mt-8 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-thin hover:font-medium leading-2 text-slate-300 hover:bg-blue-800">
                              Languages
                              <ChevronDownIcon
                                className={cn(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 space-y-1">
                              {[...languages].map((item) => (
                                <DisclosureButton
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className="block rounded-lg py-2 pl-10 pr-3 text-sm font-semibold leading-7 text-slate-300 hover:bg-blue-800"
                                >
                                  {item.name}
                                </DisclosureButton>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                      <a
                        href="/about-us"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                      >
                        About Us
                      </a>
                      <a
                        href="/how-it-works"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only ">Close menu</span>
                <XMarkIcon
                  className="fixed top-4 right-4 h-6 w-6 "
                  aria-hidden="true"
                />
              </button>
            </div>
          </DialogPanel>
        </Dialog>
        {/* Right Menu */}
        <div className="hidden sm:hidden md:hidden lg:flex lg:flex-row items-center space-x-2 w-1/4 justify-end ml-20">
          <div className="h-9 w-px mr-2 bg-slate-300" />
          <div className="flex space-x-2 group   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 shrink-0 hidden lg:block animate-spin duration-10000 group-hover:text-[#FF509B] group-hover:animate-none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <select className="bg-transparent w-24 hidden lg:block hover:text-[#FF509B]  border border-spacing-2 px-1">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="et">Estonian</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <Link href="/getstarted" passHref>
            <Button className="bg-blue-950 hover:bg-blue-900 text-slate-100 hover:text-white active:bg-blue-700 px-8">
              Get started
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
