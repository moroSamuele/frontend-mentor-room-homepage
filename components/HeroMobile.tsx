"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const HeroMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [animationOutMenuMobile, setAnimationOutMenuMobile] = useState(false);

  return (
    <div className="relative w-full h-[375px] bg-black md:hidden">
      <header className="relative w-full pt-[48px] px-[24px] float-left flex justify-center z-10">
        <div className={`${ mobileMenu ? "mobileMenu--open" : "" } mobileMenu absolute top-[48px] z-40 left-[24px]`} onClick={() => { setMobileMenu(!mobileMenu); mobileMenu && setAnimationOutMenuMobile(!animationOutMenuMobile) }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Image
          src="/images/logo.svg"
          alt="Open menu"
          width="62"
          height="14"
        />
        <div className={`mobileMenuContainer ${ mobileMenu ? "mobileMenuContainer--in" : animationOutMenuMobile ? "mobileMenuContainer--out" : "" } absolute top-0 right-0 left-0 z-30 items-center justify-end w-full h-[110px] bg-white flex space-x-[31px] pr-[22px] text-black text-[15px] leading-[16px] tracking-[-0.66px] font-[600]`}>
          <Link href="/">home</Link>
          <Link href="/">shop</Link>
          <Link href="/">about</Link>
          <Link href="/">contact</Link>
        </div>
      </header>
      <Image
        src="/images/mobile-image-hero-1.jpg"
        alt="First mobile hero"
        fill={true}
        className="object-cover"
      />
      <div className="w-[112px] h-[56px] flex absolute bottom-0 right-0 bg-black">
        <div className="flex justify-center items-center w-[56px] h-[56px]">
          <Image
            src="/images/icon-angle-left.svg"
            alt="Slide to left"
            width="13"
            height="21"
          />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px]">
          <Image
            src="/images/icon-angle-right.svg"
            alt="Slide to right"
            width="13"
            height="21"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroMobile;