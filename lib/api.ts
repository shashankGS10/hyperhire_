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
    }
  ],
  categories: [
    {
      title: "해외 마케팅",
      icon: "/icon1.png",
      link: "#"
    }
  ],
  stats: [
    {
      title: "평균 월 120만원",
      description: "임금을 해당 국가를 기준으로 계산합니다."
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
  
  if (process.env.VERCEL_URL) {
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
    
    // Add validation to ensure each profile has required fields
    return data.map((profile: Profile) => ({
      ...profile,
      price: profile?.price || '가격 미정',  // Provide fallback value if price is undefined
    }));
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