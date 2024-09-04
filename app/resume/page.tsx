'use client';

import Image from 'next/image';
import helper from '@utils/helper';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import TypingText from '../components/TypingTextProps';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const listSkills = [
    {
      title: 'Front-End',
      subTitle: 'Developer',
      skills: 'ReactJS, NextJS',
      thumb: '/assets/image/fe.svg',
    },
    {
      title: 'Back-End',
      subTitle: 'Developer',
      skills: 'C#',
      thumb: '/assets/image/be.svg',
    },
    {
      title: 'Database',
      subTitle: 'Designer',
      skills: 'SQL Server',
      thumb: '/assets/image/uiux.svg',
    },
  ];

  const listPort = [
    {
      title: 'Lorem...',
      thumbBg: '/assets/image/circlepastel.svg',
      thumb: '/assets/image/thumbportfolio.svg',
    },
    {
      title: 'Lorem...',
      thumbBg: '/assets/image/circlepastel.svg',
      thumb: '/assets/image/thumbportfolio.svg',
    },
    {
      title: 'Lorem...',
      thumbBg: '/assets/image/circlepastel.svg',
      thumb: '/assets/image/thumbportfolio.svg',
    },
  ];

  const listContact = [
    {
      title: 'Github',
      thumb: '/assets/image/github.svg',
    },
    {
      title: 'Gitlab',
      thumb: '/assets/image/gitlab.svg',
    },
    {
      title: 'Instagram',
      thumb: '/assets/image/ins.svg',
    },
    {
      title: 'Email',
      thumb: '/assets/image/email.svg',
    },
    {
      title: 'Phone',
      thumb: '/assets/image/phone.svg',
    },
    {
      title: 'Linkedin',
      thumb: '/assets/image/linkedin.svg',
    },
  ];

  return (
    <div className="relative">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="hover:animate-[bounce_1.1s_ease-in-out_infinite] z-50 fixed bottom-10 right-10 p-3 bg-[#608AF5] text-white rounded-[10%] shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white"
        >
          ↑
        </button>
      )}
      {/* Background */}
      <div className="hidden md:block">
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
      </div>
      <div className="bg-white w-full h-full mx-auto">
        {/* Header */}
        <div className="pt-4 md:pt-10 lg:pt-14 sticky top-0 z-40 bg-white">
          <div className="px-4 md:px-10 lg:px-20 xl:px-80 flex items-center justify-between">
            <div
              onClick={() => {
                scrollTopassionsPassion('#');
              }}
              className="cursor-pointer flex items-center gap-2.5 relative"
            >
              <p className="relative mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-normal text-transparent text-[18px] md:text-[22px] lg:text-[25px] text-center tracking-[3px] md:tracking-[4px] lg:tracking-[5.12px] leading-[normal]">
                <span className="font-bold text-[#002264] tracking-[1px] md:tracking-[1.1px] lg:tracking-[1.28px]">
                  XUAN
                </span>
                <span className="[font-family:'Poppins-Regular',Helvetica] text-[#14279b] tracking-[1px] md:tracking-[1.1px] lg:tracking-[1.28px]">
                  THANH
                </span>
              </p>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Image
                  src="/assets/image/baque.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </button>
            </div>
            <div
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-[45px] absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent pb-5`}
            >
              <nav className="flex flex-col lg:flex-row items-start gap-[20px] lg:gap-[45px] p-4 lg:p-0">
                {[
                  { id: '#', text: 'About' },
                  { id: '#passions', text: 'Passions' },
                  { id: '#timeline', text: 'Time Line' },
                  ...(isMobileMenuOpen
                    ? [{ id: '#contact', text: 'Contact Me' }]
                    : []),
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => scrollTopassionsPassion(item.id)}
                    className="cursor-pointer relative mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#212121] text-[18px] md:text-[22px] lg:text-[25px] text-center tracking-[1px] md:tracking-[1.2px] lg:tracking-[1.38px] leading-[normal]"
                  >
                    {item.text}
                  </div>
                ))}
              </nav>
              {!isMobileMenuOpen && (
                <div
                  onClick={() => scrollTopassionsPassion('#contact')}
                  className="cursor-pointer inline-flex items-start gap-2.5 px-[18px] py-2.5 relative flex-[0_0_auto] bg-[#5f89f5] rounded-[10px]"
                >
                  <div className="relative mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[25px] text-center tracking-[1.38px] leading-[normal]">
                    Contact Me
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile */}
        <div
          className="pt-8 md:pt-12 lg:pt-16 flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 xl:px-80 h-auto lg:h-[560px]"
          id="profile"
        >
          <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
            <TypingText
              text="Hi !"
              className="text-[#002265] font-poppins text-[25px] md:text-[30px] lg:text-[35px] font-normal leading-normal tracking-[0.125px] md:tracking-[0.15px] lg:tracking-[0.175px]"
            />
            <br />
            <TypingText
              text="I'm Thanh Le Xuan,<br /> Front-End Developer"
              className="text-[#002265] font-poppins text-[30px] md:text-[40px] lg:text-[50px] font-semibold leading-normal tracking-[0.15px] md:tracking-[0.2px] lg:tracking-[0.25px] pb-4 md:pb-6 lg:pb-8"
            />
            <br />
            <TypingText
              text=" I am from Ho Chi Minh City, Vietnam <br /> Always learning new technologies"
              className="text-[#082032] font-poppins text-[18px] md:text-[20px] lg:text-[23px] font-normal leading-normal tracking-[0.27px] md:tracking-[0.3px] lg:tracking-[0.345px]"
            />
          </div>
          <div className="w-full lg:w-6/12 relative animate-fade-in-right">
            <div className="lg:absolute lg:right-0">
              <Image
                src={'/assets/image/person.svg'}
                alt={''}
                width={501}
                height={467}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/*Additional passions */}
        <div
          className="px-4 md:px-10 lg:px-20 xl:px-80 pt-[80px] md:pt-[120px] lg:pt-[170px]"
          id="passions"
        >
          <div className="font-poppins w-full text-center text-[25px] md:text-[30px] lg:text-[35px] leading-[normal] tracking-[0.7px] md:tracking-[0.8px] lg:tracking-[0.96px] pb-[30px] md:pb-[45px] lg:pb-[60px]">
            <span className="text-center text-indigo-800">{'Additional '}</span>
            <span className="text-center font-semibold text-blue-950">
              passions
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {listSkills.length > 0
              ? listSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="z-10 w-full md:w-[30%] h-auto md:h-[240px] lg:h-[300px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)]"
                  >
                    <div className="px-[30px] md:px-[45px] lg:px-[61px] py-5">
                      <Image
                        src={skill.thumb}
                        alt={`${skill.title} ${skill.subTitle}`}
                        width={225}
                        height={159}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="text-center pb-4 md:pb-0">
                      <span className="text-black font-poppins text-[18px] md:text-[22px] lg:text-[25px] font-normal leading-normal tracking-[1px] md:tracking-[1.2px] lg:tracking-[1.375px]">
                        <span className="text-black text-center font-poppins text-[18px] md:text-[22px] lg:text-[25px] font-semibold leading-normal tracking-[1px] md:tracking-[1.2px] lg:tracking-[1.375px]">
                          {skill.title}
                        </span>{' '}
                        {skill.subTitle}
                      </span>
                      <br />
                      <span className="text-black text-center font-poppins text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-normal tracking-[0.88px] md:tracking-[0.94px] lg:tracking-[0.99px]">
                        {skill.skills}
                      </span>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        {/* Portfolio */}
        <div
          className="pt-[100px] md:pt-[160px] lg:pt-[225px] px-4 md:px-10 lg:px-20 xl:px-80 hidden"
          id="portfolio"
        >
          <div className="font-poppins w-full text-center text-[25px] md:text-[30px] lg:text-[35px] leading-[normal] tracking-[0.7px] md:tracking-[0.8px] lg:tracking-[0.96px] pb-[30px] md:pb-[45px] lg:pb-[60px]">
            <span className="text-center text-indigo-800">{'My '}</span>
            <span className="text-center font-semibold text-blue-950">
              Portfolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {listPort.length > 0
              ? listPort.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[30%] h-[266px] flex-shrink-0 rounded-[13px] bg-white shadow-[0px_5px_26px_5px_rgba(0,_0,_0,_0.17)] relative"
                  >
                    <div className="opacity-70 absolute left-[17px] top-[19px]">
                      <Image
                        src={item.thumbBg}
                        alt={item.title}
                        width={195}
                        height={195}
                      />
                    </div>
                    <div className="absolute left-[18px] top-[26px] flex flex-col">
                      <span className="text-[#4581F6] font-montserrat text-[20px] md:text-[25px] font-semibold leading-normal">
                        {item.title}
                      </span>
                    </div>
                    <div className="absolute right-3 bottom-4">
                      <Image src={item.thumb} alt="" width={289} height={164} />
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        {/* Time Line */}
        <div
          className="pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[160px] xl:pt-[225px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-80"
          id="timeline"
        >
          <div className="font-poppins w-full text-center text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px] leading-[normal] tracking-[0.5px] sm:tracking-[0.6px] md:tracking-[0.7px] lg:tracking-[0.8px] xl:tracking-[0.96px] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[45px] xl:pb-[60px]">
            <span className="text-center text-indigo-800">{'Time '}</span>
            <span className="text-center font-semibold text-blue-950">
              Line
            </span>
          </div>
          <div>
            <div className="w-full">
              <div className="max-w-4xl mx-auto">
                <section className="timeline">
                  <h5 className="text-center text-base sm:text-lg font-normal text-gray-800 mb-4 sm:mb-6">
                    Basic education
                  </h5>

                  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 before:absolute before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-blue-200">
                    <div className="sm:col-start-1 relative pr-4 sm:pr-8 md:pr-0 md:pl-8">
                      <div className="bg-white p-4 sm:p-6 rounded shadow-md">
                        <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-950">
                          HUTECH University.
                        </h3>
                        <div className="absolute right-0 sm:right-auto sm:left-full w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-blue-200 -mr-1.5 sm:mr-0 sm:-ml-2 mt-2"></div>
                        <span className="inline-block bg-[#608AF5] text-white text-xs px-2 py-1 rounded mb-2">
                          2019 - 2023
                        </span>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Information Technology
                        </p>
                      </div>
                    </div>
                  </div>

                  <h5 className="text-center text-base sm:text-lg font-normal text-gray-800 my-4 sm:my-6">
                    Work experience
                  </h5>

                  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 before:absolute before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-blue-200">
                    <div className="sm:col-start-2 relative pl-4 sm:pl-8 md:pl-0 md:pr-8">
                      <div className="bg-white p-4 sm:p-6 rounded shadow-md">
                        <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-950">
                          HD BANK
                        </h3>
                        <div className="absolute left-0 sm:left-auto sm:right-full w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-blue-200 -ml-1.5 sm:ml-0 sm:-mr-2 mt-2"></div>
                        <span className="inline-block bg-[#608AF5] text-white text-xs px-2 py-1 rounded mb-2">
                          2023 - Now
                        </span>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Front-End Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Me */}

        <div
          className="pt-[100px] md:pt-[160px] lg:pt-[225px] px-4 md:px-10 lg:px-80"
          id="contact"
        >
          <div className="font-poppins w-full text-center text-[25px] md:text-[30px] lg:text-[35px] leading-[normal] tracking-[0.7px] md:tracking-[0.8px] lg:tracking-[0.96px] pb-[30px] md:pb-[45px] lg:pb-[60px]">
            <span className="text-center text-indigo-800">{'Contact '}</span>
            <span className="text-center font-semibold text-blue-950">Me</span>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '" style="background-color: #608AF5;"></span>'
                );
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {listContact.length > 0
              ? listContact.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="w-full h-[200px] md:h-[220px] lg:h-[236px] flex-shrink-0 textAlignCenter cursor-pointer"
                      onClick={() => {
                        handleClick(`${item.title}`);
                      }}
                    >
                      <div className="relative">
                        <Image
                          src="/assets/image/vector.svg"
                          alt=""
                          width={120}
                          height={120}
                          className="md:w-[140px] md:h-[135px] lg:w-[166px] lg:h-[160px] mx-auto"
                        />
                        <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2">
                          <Image
                            src={item.thumb}
                            alt=""
                            width={80}
                            height={80}
                            className="md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="text-[#3F3D56] text-center font-poppins text-[24px] md:text-[30px] lg:text-[35px] font-medium leading-normal tracking-[1.32px] md:tracking-[1.65px] lg:tracking-[1.925px]">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col bg-white">
        <div className="relative">
          <img src="/assets/image/footer.svg" className="w-full" />
        </div>
        <p className="text-white text-center font-poppins text-[12px] md:text-[20px] lg:text-[35px] font-normal leading-normal tracking-[0.88px] md:tracking-[1.1px] lg:tracking-[1.925px] absolute lg:bottom-2 bottom-0 left-0 right-0">
          Copyright © 2024 Design By Rauliqbal
        </p>
      </div>
    </div>
  );
}
