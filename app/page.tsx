import React,{Suspense} from "react";
import Image from "next/image";
import TestimonialCarousel from "@/components/global/swipper-card";
import CategoryList from "@/components/global/CategoryList";
import { getProfiles, getCategories } from "@/lib/api";


export default async function Home() {
  const [profiles, categories] = await Promise.all([
    getProfiles(),
    getCategories(),
  ]);
  return (
    <div className="min-h-screen flex flex-col">
    {/* Gradient Section */}
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex item-center text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <Image
            src="/logo_white.png"
            alt="hyperhire"
            width={100}
            height={100}
          />
          <nav className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:underline">
              채용
            </a>
            <a href="#" className="hover:underline">
              문의하기
            </a>
          </nav>
          <button className="px-4 py-2 text-[#4A77FF] bg-white rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            문의하기
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row text-start py-12">
          <div className="min-w-1/2 md:w-1/2">
            <div className="text-2xl font-bold bg-gray-100 rounded-2xl px-4 py-2 text-emerald-500 inline-block my-8">
              풀타임, 파트타임
            </div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl text-white">
              최고의 실력을 가진
              <br /> 외국인 인재를 찾고 계신가요?
            </h1>
            <p className="mt-4 text-lg text-white/90">
              법률 및 인사관리 부담없이
              <br /> 1주일 이내에 원격으로 채용해보세요.
            </p>
            <p className="mt-4 text-md text-white/90">개발자가 필요하신가요?</p>
            
            {/* Stats Cards */}
            <div className="hidden md:block w-full overflow-x-auto pb-4 md:pb-0">
              <div className="flex flex-row gap-4 md:flex-row md:gap-8 md:justify-center">
                <div className="w-full px-0">
                  <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:justify-between max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="text-white p-4 md:p-6 rounded-lg flex flex-col items-center text-center flex-1 min-w-[150px]">
                      <div className="w-full h-[3px] bg-white/60 my-4"></div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        평균 월 120만원
                      </h3>
                      <p className="text-sm md:text-lg">
                        임금을 해당 국가를 기준으로 계산합니다.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="text-white p-4 md:p-6 rounded-lg flex flex-col items-center text-center flex-1 min-w-[150px]">
                      <div className="w-full h-[3px] bg-white/60 my-4"></div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        최대 3회 인력교체
                      </h3>
                      <p className="text-sm md:text-lg">
                        막상 채용해보니 맞지 않아도 걱정하지 마세요.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="text-white p-4 md:p-6 rounded-lg flex flex-col items-center text-center flex-1 min-w-[150px]">
                      <div className="w-full h-[3px] bg-white/60 my-4"></div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        평균 3일, 최대 10일
                      </h3>
                      <p className="text-sm md:text-lg">
                        급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Highlighted Card */}
          <div className="w-full h-[35rem] sm:h-auto mt-8 sm:mt-0 sm:w-1/2">
            <TestimonialCarousel profiles={profiles}/>
          </div>
        </section>
        <section className="relative w-full py-6 md:py-12 mt-[0rem] sm:mt-[20rem] md:mt-0">
        <Suspense fallback={<div>Loading categories...</div>}>
              <CategoryList categories={categories} />
            </Suspense>
        </section>
        </div>
        </div>
        <footer className="w-full bg-white text-gray-600 py-12 px-6 md:px-8 lg:px-12">
  {/* Logo and Description Section */}
  <div className="flex flex-col space-y-8 md:space-y-12 max-w-7xl mx-auto">
    {/* Logo + Contact Info */}
    <div className="flex flex-row h-full justify-center">
    <div className="flex flex-col space-y-4">
      <Image
        src="/logo_color.png"
        alt="hyperhire"
        width={150}
        height={80}
      />
      <p className="text-sm text-gray-600 mt-2">
        우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
      </p>
      <div className="space-y-1">
        <p className="text-sm">010-0000-0000</p>
        <p className="text-sm">aaaaa@naver.com</p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-4 px-8 w-full">
      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg space-y-2">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
          {'</>'}
        </div>
        <p className="text-sm font-medium">해외 개발자 원격 채용</p>
        <button className="flex items-center text-sm text-gray-500">
          바로가기 <span className="ml-1">→</span>
        </button>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg space-y-2">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
          <span className="text-lg">👤</span>
        </div>
        <p className="text-sm font-medium">외국인 원격 채용 (비개발)</p>
        <button className="flex items-center text-sm text-gray-500">
          바로가기 <span className="ml-1">→</span>
        </button>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg space-y-2">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
          <span>KOR</span>
        </div>
        <p className="text-sm font-medium">한국어 가능 외국인 채용</p>
        <button className="flex items-center text-sm text-gray-500">
          바로가기 <span className="ml-1">→</span>
        </button>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg space-y-2">
        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
          <span className="text-lg">⚙️</span>
        </div>
        <p className="text-sm font-medium">해외 개발자 활용 서비스</p>
        <button className="flex items-center text-sm text-gray-500">
          바로가기 <span className="ml-1">→</span>
        </button>
      </div>
    </div>
    </div>
    {/* Company Info */}
    <div className="flex flex-wrap justify-between gap-6 text-sm text-gray-500">
      <div className="space-y-1">
        <p className="font-medium text-gray-700">상호명</p>
        <p>하이퍼하이어</p>
        <p>Hyperhire India Private Limited</p>
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-700">대표 CEO</p>
        <p>김주현</p>
        <p>Juhyun Kim</p>
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-700">사업자등록번호/CIN</p>
        <p>427-86-01897</p>
        <p>U74110DL2018PTC290812</p>
      </div>

      <div className="space-y-1">
        <p className="font-medium text-gray-700">주소 ADDRESS</p>
        <p>서울특별시 강남대로 479, 지하1층 238호</p>
        <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
      </div>
    </div>

    {/* Copyright */}
    <div className="pt-8 border-t border-gray-200">
      <p className="text-sm text-gray-400">© 2023 Hyperhire</p>
    </div>
  </div>
</footer>
      </div>
  );
}
