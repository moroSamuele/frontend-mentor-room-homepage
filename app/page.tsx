import Image from 'next/image';
import Link from 'next/link';

import HeroMobile from '../components/HeroMobile';


const Home = () => {
  return (
    <>
      <HeroMobile />

      <div className="w-full float-left flex flex-col px-[32px] pt-[60px] pb-[72px]">
        <h1 className="text-[40px] leading-[37px] -tracking-[1.67px] text-black font-[600]">Discover innovative ways to decorate</h1>
        <p className="mt-[15px] mb-[41px] text-[16px] leading-[22px] -tracking-[0.33px] text-darkGrey font-[500]">
          We provide unmatched quality, comfort, and
          style for property owners across the country.
          Our experts combine form and function in
          bringing your vision to life. Create a room in
          your own style with our collection and make your
          property a reflection of you and what you love.
        </p>
        <Link href="/" className="text-[15px] uppercase font-[500] leading-[16px] tracking-[12.5px] text-black">
          <span className="float-left mr-[30px]">Shop now</span>
          <Image
            src="/images/icon-arrow.svg"
            alt="Shop now"
            width="40"
            height="12"
            className="float-left"
          />
        </Link>
      </div>
      <div className="relative w-full h-[238px] float-left">
        <Image
          src="/images/image-about-dark.jpg"
          alt="Image about dark"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="float-left flex flex-col px-[32px] py-[49px] pb-[41px]">
        <h2 className="uppercase text-[14px] text-black leading-[22px] tracking-[5.8px] text-justify font-[700]">About our forniture</h2>
        <p className="mt-[15px] text-[16px] leading-[22px] -tracking-[0.33px] text-darkGrey font-[500]">
          Our multifunctional collection blends design and
          function to suit your individual taste. Make each
          room unique, or pick a cohesive theme that best
          express your interests and what inspires you.
          Find the furniture pieces you need, from
          traditional to contemporary styles or anything in
          between. Product specialists are available to
          help you create your dream space. 
        </p>
      </div>
      <div className="relative w-full h-[238px] float-left">
        <Image
          src="/images/image-about-light.jpg"
          alt="Image about light"
          fill={true}
          className="object-cover"
        />
      </div>
    </>
  )
}

export default Home;