'use client';

import Image from 'next/image';
import helper from '@utils/helper';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import TypingText from '../components/TypingTextProps';

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (path: string) => {
    window.open(_.get(helper, path, ''), '_blank');
  };

  const scrollTopassionsPassion = (id: string) => {
    if (id === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <div className="relative">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="hover:animate-[bounce_1.1s_ease-in-out_infinite] z-10 fixed bottom-10 right-10 p-3 bg-[#608AF5] text-white rounded-[10%] shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white"
        >
          ↑
        </button>
      )}
      {/* Backgroud */}
      <div className="absolute top-[80px] left-[345px]">
        <Image src="/assets/image/bg1.svg" width={200} height={190} alt="" />
      </div>
      <div className="absolute top-[444px] left-[545px]">
        <Image src="/assets/image/bg1.svg" width={150} height={140} alt="" />
      </div>
      <div className="absolute top-[630px] left-[280px] z-0">
        <Image src="/assets/image/bg1.svg" width={300} height={290} alt="" />
      </div>
      <div className="absolute top-[1000px] left-[980px] z-0">
        <Image src="/assets/image/bg2.svg" width={300} height={290} alt="" />
      </div>
      <div className="absolute top-[1270px] left-[220px] z-0">
        <Image src="/assets/image/bg2.svg" width={300} height={290} alt="" />
      </div>
      <div className="absolute top-[1570px] left-[1240px] z-0">
        <Image src="/assets/image/bg2.svg" width={300} height={290} alt="" />
      </div>
      <div className="bg-white w-full h-full mx-auto">
        {/* Header */}
        <div className="pt-14 sticky top-0 z-40 bg-white">
          <div className="px-80 flex items-center">
            <div
              onClick={() => {
                scrollTopassionsPassion('#');
              }}
              className="cursor-pointer flex items-center gap-2.5 relative flex-1 grow"
            >
              <p className="relative  mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-normal text-transparent text-[25px] text-center tracking-[5.12px] leading-[normal]">
                <span className="font-bold text-[#002264] tracking-[1.28px]">
                  XUAN
                </span>
                <span className="[font-family:'Poppins-Regular',Helvetica] text-[#14279b] tracking-[1.28px]">
                  THANH
                </span>
              </p>
            </div>
            {/* <div className="block lg:hidden">
              <img src="/assets/image/baque.svg" />
            </div> */}
            {/* <div className="hidden lg:block"></div> */}
            <div className="inline-flex items-center gap-[45px] relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-[45px] relative flex-[0_0_auto]">
                <div
                  onClick={() => {
                    scrollTopassionsPassion('#');
                  }}
                  className="cursor-pointer relative mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#212121] text-[25px] text-center tracking-[1.38px] leading-[normal]"
                >
                  About
                </div>
                <div
                  onClick={() => {
                    scrollTopassionsPassion('#passions');
                  }}
                  className="cursor-pointer relative mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#212121] text-[25px] text-center tracking-[1.38px] leading-[normal]"
                >
                  Passions
                </div>
                <div
                  onClick={() => {
                    scrollTopassionsPassion('#portfolio');
                  }}
                  className="cursor-pointer relative  mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#212121] text-[25px] text-center tracking-[1.38px] leading-[normal]"
                >
                  Portfolio
                </div>
              </div>
              <div
                onClick={() => {
                  scrollTopassionsPassion('#contact');
                }}
                className="cursor-pointer inline-flex items-start gap-2.5 px-[18px] py-2.5 relative flex-[0_0_auto] bg-[#5f89f5] rounded-[10px]"
              >
                <div className="relative  mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[25px] text-center tracking-[1.38px] leading-[normal]">
                  Contact Me
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="pt-16 flex px-80 h-[560px]" id="profile">
          <div className="w-6/12">
            <TypingText
              text="Hi !"
              className="text-[#002265] font-poppins text-[35px] font-normal leading-normal tracking-[0.175px] "
            />
            <br />
            <TypingText
              text="I’m Thanh Le Xuan,<br /> Front-End Developer"
              className="text-[#002265] font-poppins text-[50px] font-semibold leading-normal tracking-[0.25px] pb-8"
            />
            <br />
            <TypingText
              text=" I am from Ho Chi Minh City, Vietnam <br /> Always learning new technologies"
              className="text-[#082032] font-poppins text-[23px] font-normal leading-normal tracking-[0.345px]"
            />
          </div>
          <div className="w-6/12 relative animate-fade-in-right">
            <div className="absolute right-0">
              <Image
                src={'/assets/image/person.svg'}
                alt={''}
                width={501}
                height={467}
              />
            </div>
          </div>
        </div>
        {/*Additional passions */}
        <div className=" px-80" id="passions">
          <div className="font-poppins w-full text-center text-[35px] leading-[normal] tracking-[0.96px] pb-[60px]">
            <span className="text-center text-indigo-800">{'Additional '}</span>
            <span className="text-center font-semibold text-blue-950">
              passions
            </span>
          </div>
          <div className="flex justify-between">
            <div className="z-10 w-[347px] h-[280px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)]">
              <div className="px-[61px] py-5">
                <Image
                  src={'/assets/image/fe.svg'}
                  alt={''}
                  width={225}
                  height={159}
                />
              </div>
              <div className="text-center">
                <span className="text-black font-poppins text-[25px] font-normal leading-normal tracking-[1.375px]">
                  <span className="text-black text-center font-poppins text-[25px] font-semibold leading-normal tracking-[1.375px]">
                    Front-End
                  </span>{' '}
                  Developer
                </span>
                <br />
                <span className="text-black text-center font-poppins text-[18px] font-normal leading-normal tracking-[0.99px]">
                  ReactJS, NextJS
                </span>
              </div>
            </div>
            <div className="z-10 w-[347px] h-[280px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)]">
              <div className="px-[61px] py-5">
                <Image
                  src={'/assets/image/be.svg'}
                  alt={''}
                  width={225}
                  height={159}
                />
              </div>
              <div className="text-center">
                <span className="text-black font-poppins text-[25px] font-normal leading-normal tracking-[1.375px]">
                  <span className="text-black text-center font-poppins text-[25px] font-semibold leading-normal tracking-[1.375px]">
                    Back-End
                  </span>{' '}
                  Developer
                </span>
                <br />
                <span className="text-black text-center font-poppins text-[18px] font-normal leading-normal tracking-[0.99px]">
                  C#
                </span>
              </div>
            </div>
            <div className="z-10 w-[347px] h-[280px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)]">
              <div className="px-[61px] py-5">
                <Image
                  src={'/assets/image/uiux.svg'}
                  alt={''}
                  width={225}
                  height={159}
                />
              </div>
              <div className="text-center">
                <span className="text-black font-poppins text-[25px] font-normal leading-normal tracking-[1.375px]">
                  <span className="text-black text-center font-poppins text-[25px] font-semibold leading-normal tracking-[1.375px]">
                    Database
                  </span>{' '}
                  Designer
                </span>
                <br />
                <span className="text-black text-center font-poppins text-[18px] font-normal leading-normal tracking-[0.99px]">
                  SQL Server
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <div className="pt-[225px] px-80" id="portfolio">
          <div className="font-poppins w-full text-center text-[35px] leading-[normal] tracking-[0.96px] pb-[60px]">
            <span className="text-center text-indigo-800">{'My '}</span>
            <span className="text-center font-semibold text-blue-950">
              Portfolio
            </span>
          </div>
          <div className="flex justify-between">
            <div className="w-[347px] h-[266px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)] relative">
              <div className="opacity-70 absolute left-[17px] top-[19px]">
                <Image
                  src="/assets/image/circlepastel.svg"
                  alt=""
                  width={195}
                  height={195}
                />
              </div>
              <div className="absolute left-[18px] top-[26px] flex flex-col">
                <span className="text-[#4581F6] font-montserrat text-[25px] font-semibold leading-normal">
                  Lorem...
                </span>
              </div>
              <div className="absolute right-3 bottom-4">
                <Image
                  src="/assets/image/thumbportfolio.svg"
                  alt=""
                  width={289}
                  height={164}
                />
              </div>
            </div>
            <div className="w-[347px] h-[266px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)] relative">
              <div className="opacity-70 absolute left-[17px] top-[19px]">
                <Image
                  src="/assets/image/circlepastel.svg"
                  alt=""
                  width={195}
                  height={195}
                />
              </div>
              <div className="absolute left-[18px] top-[26px] flex flex-col">
                <span className="text-[#4581F6] font-montserrat text-[25px] font-semibold leading-normal">
                  Lorem...
                </span>
              </div>
              <div className="absolute right-3 bottom-4">
                <Image
                  src="/assets/image/thumbportfolio.svg"
                  alt=""
                  width={289}
                  height={164}
                />
              </div>
            </div>
            <div className="w-[347px] h-[266px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)] relative">
              <div className="opacity-70 absolute left-[17px] top-[19px]">
                <Image
                  src="/assets/image/circlepastel.svg"
                  alt=""
                  width={195}
                  height={195}
                />
              </div>
              <div className="absolute left-[18px] top-[26px] flex flex-col">
                <span className="text-[#4581F6] font-montserrat text-[25px] font-semibold leading-normal">
                  Lorem...
                </span>
              </div>
              <div className="absolute right-3 bottom-4">
                <Image
                  src="/assets/image/thumbportfolio.svg"
                  alt=""
                  width={289}
                  height={164}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Contact Me */}

        <div className="pt-[225px] px-80" id="contact">
          <div className="font-poppins w-full text-center text-[35px] leading-[normal] tracking-[0.96px] pb-[60px]">
            <span className="text-center text-indigo-800">{'Contact '}</span>
            <span className="text-center font-semibold text-blue-950">Me</span>
          </div>

          <div className="flex justify-between">
            <div
              className="w-[240px] h-[236px] flex-shrink-0 textAlignCenter cursor-pointer"
              onClick={() => {
                handleClick('github');
              }}
            >
              <div className="relative">
                <Image
                  src="/assets/image/vector.svg"
                  alt=""
                  width={166}
                  height={160}
                />
                <div className="absolute top-[20%] left-[29%]">
                  <Image
                    src="/assets/image/github.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <span className="text-[#3F3D56] text-center font-poppins text-[35px] font-medium leading-normal tracking-[1.925px]">
                  Github
                </span>
              </div>
            </div>
            <div
              className="w-[240px] h-[236px] flex-shrink-0 textAlignCenter cursor-pointer"
              onClick={() => {
                handleClick('instagram');
              }}
            >
              <div className="relative">
                <Image
                  src="/assets/image/vector.svg"
                  alt=""
                  width={166}
                  height={160}
                />
                <div className="absolute top-[20%] left-[29%]">
                  <Image
                    src="/assets/image/ins.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <span className="text-[#3F3D56] text-center font-poppins text-[35px] font-medium leading-normal tracking-[1.925px]">
                  Instagram
                </span>
              </div>
            </div>
            <div
              className="w-[240px] h-[236px] flex-shrink-0 textAlignCenter cursor-pointer"
              onClick={() => {
                handleClick('email');
              }}
            >
              <div className="relative">
                <Image
                  src="/assets/image/vector.svg"
                  alt=""
                  width={166}
                  height={160}
                />
                <div className="absolute top-[20%] left-[29%]">
                  <Image
                    src="/assets/image/email.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <span className="text-[#3F3D56] text-center font-poppins text-[35px] font-medium leading-normal tracking-[1.925px]">
                  Email
                </span>
              </div>
            </div>
            <div
              className="w-[240px] h-[236px] flex-shrink-0 textAlignCenter cursor-pointer"
              onClick={() => {
                handleClick('phone');
              }}
            >
              <div className="relative">
                <Image
                  src="/assets/image/vector.svg"
                  alt=""
                  width={166}
                  height={160}
                />
                <div className="absolute top-[20%] left-[29%]">
                  <Image
                    src="/assets/image/phone.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <span className="text-[#3F3D56] text-center font-poppins text-[35px] font-medium leading-normal tracking-[1.925px]">
                  Phone
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col bg-white">
        <div className="relative">
          <img src="/assets/image/footer.svg" />
        </div>
        <p className="text-white text-center font-poppins text-[35px] font-normal leading-normal tracking-[1.925px] absolute bottom-4 left-[30%]">
          Copyright © 2024 Design By Rauliqbal
        </p>
      </div>
    </div>
  );
}
