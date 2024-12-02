import { NextResponse } from 'next/server'
import type { Category } from '@/types'

const categories: Category[] = [
  {
    title: "해외 마케팅",
    icon: "/icon1.png",
    link: "#"
  },
  {
    title: "퍼블리셔",
    icon: "/icon2.png",
    link: "#"
  },
  {
    title: "카드원(제조사)",
    icon: "/icon3.png",
    link: "#"
  },
  {
    title: "해외 세일즈",
    icon: "/icon4.png",
    link: "#"
  },
  {
    title: "해외 CS",
    icon: "/icon6.png",
    link: "#"
  }
]

export async function GET() {
  try {
    return NextResponse.json(categories);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}