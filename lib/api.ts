import type { Profile, Category, Stats } from '@/types'

// Fallback data for when API calls fail
const FALLBACK_DATA = {
  profiles: [
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
      price: "월 101만원",
      image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592"
    },
    {
      name: "Emily Johnson",
      role: "개발자 · 5y+",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      flag: "🇺🇸",
      price: "월 102만원",
      image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592"
    }
  ],
  categories: [
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
  ],
  stats: [
    {
      title: "평균 월 120만원",
      description: "임금을 해당 국가를 기준으로 계산합니다."
    },
    {
      title: "최대 3회 인력교체",
      description: "막상 채용해보니 맞지 않아도 걱정하지 마세요."
    },
    {
      title: "평균 3일, 최대 10일",
      description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
    }
  ]
};


function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  
  if (typeof window !== 'undefined') {
    return '';
  }
  
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  return 'http://localhost:3000';
}

export async function getProfiles(): Promise<Profile[]> {
  const baseUrl = getBaseUrl();
  
  if (!baseUrl) {
    return FALLBACK_DATA.profiles;
  }

  try {
    const res = await fetch(`${baseUrl}/api/profiles`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch profiles');
    }

    const data = await res.json();
    
    // More thorough validation
    return (data || []).map((profile: Partial<Profile>) => { 
      if (!profile) {
        return FALLBACK_DATA.profiles[0];
      }
    
      // Type assertion and validation
      const safeProfile: Profile = {
        name: typeof profile?.name === 'string' ? profile.name : 'Unknown',
        role: typeof profile?.role === 'string' ? profile.role : '',
        skills: Array.isArray(profile?.skills) ? profile.skills : [],
        flag: typeof profile?.flag === 'string' ? profile.flag : '',
        price: typeof profile?.price === 'string' ? profile.price : '가격 미정',
        image: typeof profile?.image === 'string' ? profile.image : '',
      };
    
      return safeProfile;
    });
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return FALLBACK_DATA.profiles;
  }
}

export async function getCategories(): Promise<Category[]> {
  const baseUrl = getBaseUrl();
  
  if (!baseUrl) {
    return FALLBACK_DATA.categories;
  }

  try {
    const res = await fetch(`${baseUrl}/api/categories`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return FALLBACK_DATA.categories;
  }
}

export async function getStats(): Promise<Stats[]> {
  const baseUrl = getBaseUrl();
  
  if (!baseUrl) {
    return FALLBACK_DATA.stats;
  }

  try {
    const res = await fetch(`${baseUrl}/api/stats`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch stats');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching stats:', error);
    return FALLBACK_DATA.stats;
  }
}