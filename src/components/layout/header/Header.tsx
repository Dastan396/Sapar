"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import Headerlogo from "@/src/assets/header.jpg";

const Header: FC = () => {
  const [fav, setFav] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-3 xs:px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2 px-4 xs:px-6 bg-white/95 backdrop-blur-sm rounded-[35px] shadow-lg">
          <Image
            src={Headerlogo}
            alt="sapar.kg"
            width={55}
            className="w-[38px] xs:w-[45px] md:w-[55px] rounded-md cursor-pointer"
            onClick={() => router.push("/")}
          />

          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-black">
            <Link href="/tours" className="hover:text-orange-500">
              Туры
            </Link>
            <Link href="/companies" className="hover:text-orange-500">
              Компании
            </Link>
            <Link href="/carDetail" className="hover:text-orange-500">
              CarDetails
            </Link>
            <Link href="/cooporation" className="hover:text-orange-500">
              О сотрудничество
            </Link>
            <Link href="/about" className="hover:text-orange-500">
              О нас
            </Link>
            <Link href="#footer" className="hover:text-orange-500">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-3 xs:gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Куда вы хотите?"
                className="py-2 pl-4 pr-9 rounded-lg border border-orange-300 text-[14px] outline-none"
              />
    <header className="fixed top-8 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-2 bg-white backdrop-blur-sm rounded-[35px] shadow-lg">
        <Image
          src={Headerlogo}
          alt="sapar.kg"
          width={55}
          className="rounded-md cursor-pointer ml-10"
          onClick={() => router.push("/")}
        />

        <nav className="flex items-center gap-8 text-[17px] font-medium text-black">
          <a onClick={() => router.push("/tours")} className="hover:text-orange-500 transition">
            Туры
          </a>
          <a onClick={() => router.push("/cooporation")} className="hover:text-orange-500 transition">
            О сотрудничество
          </a>
          <a onClick={() => router.push("/companies")} className="hover:text-orange-500 transition">
            Компании
          </a>
          <a onClick={() => router.push("/about")} className="hover:text-orange-500 transition">
            О нас
          </a>
          <a onClick={() => router.push("/contacts")} className="hover:text-orange-500 transition">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setFav(!fav)}
            className="cursor-pointer"
          >
            {fav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="orange"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="orange"
                className="w-7 h-7"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                  5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 
                  4.5 2.09C13.09 4.01 14.76 3 
                  16.5 3 19.58 3 22 5.42 22 8.5c0 
                  3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.34-4.34" />
              </svg>
            </div>

            <motion.svg
              onClick={() => {
                setFav(!fav);
                router.push("/favorite");
              }}
              animate={{ scale: fav ? [1, 1.4, 1] : 1 }}
              transition={{ duration: 0.4 }}
              className="w-5 h-5 xs:w-6 xs:h-6 cursor-pointer stroke-orange-500"
              fill={fav ? "#ff4040" : "none"}
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>

            <select className="hidden md:block bg-white rounded-lg px-2 py-1 text-[13px]">
              <option>RU</option>
              <option>EN</option>
            </select>

            <button className="hidden lg:block px-5 py-1.5 bg-orange-500 text-white rounded-lg text-[15px] hover:bg-orange-600 transition">
              Войти
            </button>

            <button onClick={toggleTheme} className="text-black">
              {isDark ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
                className="w-7 h-7 text-gray-500"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                  5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 
                  4.5 2.09C13.09 4.01 14.76 3 
                  16.5 3 19.58 3 22 5.42 22 8.5c0 
                  3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </motion.div>

          <div
            className="flex items-center cursor-pointer text-[#ffffff]"
            onClick={toggleTheme}
          >
            <Sun
              className={`w-7 h-7 transition-all duration-300 ${
                isDark ? "hidden" : "block"
              }`}
            />
            <Moon
              className={`w-6 h-6 transition-all duration-300 ${
                isDark ? "block" : "hidden"
              }`}
            />
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-2xl shadow-lg p-4 space-y-4 text-black">
            <Link href="/tours">Туры</Link>
            <Link href="/companies">Компании</Link>
            <Link href="/cooporation">О сотрудничество</Link>
            <Link href="/about">О нас</Link>
            <Link href="#footer">Контакты</Link>

            <input
              placeholder="Куда вы хотите?"
              className="w-full py-2 px-3 rounded-lg border border-orange-300"
            />

            <select className="w-full rounded-lg border px-3 py-2">
              <option>RU</option>
              <option>EN</option>
            </select>

            <button className="w-full py-2 bg-orange-500 text-white rounded-lg">
              Войти
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
