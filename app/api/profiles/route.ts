import { NextResponse } from 'next/server'
import type { Profile } from '@/types'

const profiles: Profile[] = [
  {
    name: "Abhishek Gupta",
    role: "마케팅 · 2y+",
    skills: ["마케팅", "인스타그램 관리", "트위터 관리", "블로그"],
    flag: "🇨🇴",
    price: "월 100만원",
    image: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop"
  },
  {
    name: "Sarah Kim",
    role: "디자인 · 3y+",
    skills: ["UI/UX Design", "Figma", "Photoshop", "Prototyping"],
    flag: "🇰🇷",
    price: "월 100만원",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592"
  },
  {
    name: "Emily Johnson",
    role: "개발자 · 5y+",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    flag: "🇺🇸",
    price: "월 100만원",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592"
  }
]

export async function GET() {
  return NextResponse.json(profiles)
}