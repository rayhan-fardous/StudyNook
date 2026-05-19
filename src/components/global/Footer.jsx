import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBookReader,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/10">
      <div className="absolute top-0 left-1/3 h-40 w-40 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 h-40 w-40 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="p-2 rounded-full bg-cyan-500/10">
                <FaBookReader className="text-cyan-500 text-2xl" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                StudyNook
              </h2>
            </div>

            <p className="mt-4 text-slate-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Discover peaceful study rooms, reserve your ideal workspace, and
              stay productive anywhere.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-cyan-500 transition-colors duration-300"
                >
                  Explore Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-500 transition-colors duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect With Us
            </h3>

            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="#"
                className="group relative p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-cyan-500 transition-all duration-300"
              >
                <FaFacebookF className="text-slate-700 dark:text-white group-hover:text-white" />
              </Link>

              <Link
                href="#"
                className="group relative p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-cyan-500 transition-all duration-300"
              >
                <FaTwitter className="text-slate-700 dark:text-white group-hover:text-white" />
              </Link>

              <Link
                href="#"
                className="group relative p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-cyan-500 transition-all duration-300"
              >
                <FaInstagram className="text-slate-700 dark:text-white group-hover:text-white" />
              </Link>

              <Link
                href="#"
                className="group relative p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-cyan-500 transition-all duration-300"
              >
                <FaLinkedinIn className="text-slate-700 dark:text-white group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-sm text-slate-500 dark:text-gray-400">
            © {new Date().getFullYear()} StudyNook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
