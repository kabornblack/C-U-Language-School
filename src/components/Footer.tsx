import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const twitter = <SocialIcon className="bg-white" url="https://twitter.com" />;
  const currentYear = new Date().getFullYear();
  return (
    <div className="bottom-0 w-full bg-white px-3 md:px-20 py-10 mb-3 h-auto">
      {/* <div className="flex justify-start items-center px-3 md:px-20 space-x-3 mb:-10"> */}
      <div className="flex justify-start items-center px-3 lg:px-20 space-x-3 mb:-10 flex-shrink-0">
        <Link href="/">
          <Image
            src="/cuLogo.png"
            alt="CULogo"
            width={1000}
            height={1000}
            className="w-52 h-12"
          />
        </Link>
      </div>
      {/* <p className="font-bold text-sm uppercase leading-tight text-blue-900">
          international <br /> language school
        </p> */}
      {/* </div> */}
      <div className="flex items-start justify-between px-5 lg:px-20 py-10 space-x-5">
        <div className="max-w-lg">
          <p className="text-xs">
            Connect with a diverse community of learners and native speakers
            from around the world through interactive forums, language exchange
            programs, and virtual events.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pr-4">
          <div className="hover:space-y-2">
            <h4 className="text-blue-900 font-semibold">Company</h4>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Corporate
            </p>
            <p className="font-light text-sm hover:underline cursor-pointer">
              About Us
            </p>
          </div>
          <div className="hover:space-y-0.5">
            <h4 className="text-blue-900 font-semibold">Language</h4>
            <p className="font-light text-sm hover:underline cursor-pointer">
              English
            </p>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Business English
            </p>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Spanish
            </p>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Corporate Spanish
            </p>
          </div>
          <div className="hover:space-y-2">
            <h4 className="text-blue-900 font-semibold">How it works</h4>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Our platform
            </p>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Resources
            </p>
          </div>
          <div className="hover:space-y-2">
            <h4 className="text-blue-900 font-semibold">Support</h4>
            <p className="font-light text-sm hover:underline cursor-pointer">
              FAQ
            </p>
            <p className="font-light text-sm hover:underline cursor-pointer">
              Contact us
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 md:px-20 py-10">
        <p className="text-xs">
          Copyright {currentYear} CU International Language School
        </p>
        <div className="flex items-center justify-center gap-5 md:gap-10">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 bg-transparent p-1 hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.924 4.924 0 00-8.388 4.482A13.978 13.978 0 011.671 3.149a4.924 4.924 0 001.523 6.573A4.902 4.902 0 01.96 9.691v.062a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.085 4.924 4.924 0 004.6 3.417A9.867 9.867 0 010 21.542a13.94 13.94 0 007.548 2.213c9.058 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 bg-transparent p-1 hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zm-14.08 20.45H3.77V9.08h4.38v11.37zm-2.19-12.92h-.03c-1.47 0-2.42-.99-2.42-2.22 0-1.26 1-2.23 2.48-2.23 1.48 0 2.42.97 2.44 2.23 0 1.23-.96 2.22-2.47 2.22zM20.45 20.45h-4.36V14.7c0-1.44-.03-3.29-2-3.29-2 0-2.3 1.53-2.3 3.18v6.18H7.42V9.08h4.19v1.55h.06c.58-1.1 2-2.26 4.1-2.26 4.38 0 5.18 2.88 5.18 6.63v5.45z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 bg-transparent p-1 hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24H12.81v-9.294H9.692v-3.622h3.119V8.413c0-3.097 1.893-4.788 4.659-4.788 1.325 0 2.463.1 2.795.144v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.402 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 bg-transparent p-1 hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.426.403a4.92 4.92 0 011.79 1.166 4.918 4.918 0 011.165 1.788c.164.456.35 1.256.403 2.427.058 1.265.07 1.645.07 4.85s-.012 3.585-.07 4.85c-.054 1.17-.24 1.97-.403 2.426a4.918 4.918 0 01-1.165 1.788 4.916 4.916 0 01-1.79 1.166c-.456.163-1.256.35-2.426.403-1.265.058-1.645.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.054-1.97-.24-2.426-.403a4.918 4.918 0 01-1.788-1.166 4.92 4.92 0 01-1.166-1.788c-.163-.456-.35-1.256-.403-2.426-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.054-1.17.24-1.97.403-2.426a4.92 4.92 0 011.166-1.788 4.916 4.916 0 011.788-1.166c.456-.163 1.256-.35 2.426-.403 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.756 0 8.33.014 7.053.072 5.775.13 4.706.323 3.86.617a7.155 7.155 0 00-2.596 1.695 7.155 7.155 0 00-1.695 2.596C-.323 6.706-.13 7.775-.072 9.053.014 10.33 0 10.756 0 12c0 1.244.014 1.67.072 2.947.058 1.278.251 2.347.545 3.193a7.155 7.155 0 001.695 2.596 7.154 7.154 0 002.596 1.695c.846.294 1.915.487 3.193.545C8.33 23.986 8.756 24 12 24s3.67-.014 4.947-.072c1.278-.058 2.347-.251 3.193-.545a7.154 7.154 0 002.596-1.695 7.154 7.154 0 001.695-2.596c.294-.846.487-1.915.545-3.193.058-1.277.072-1.703.072-2.947 0-1.244-.014-1.67-.072-2.947-.058-1.278-.251-2.347-.545-3.193a7.155 7.155 0 00-1.695-2.596 7.155 7.155 0 00-2.596-1.695c-.846-.294-1.915-.487-3.193-.545C15.67.014 15.244 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.997 3.999 3.999 0 010 7.997zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
