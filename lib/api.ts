import type { Profile, Category, Stats } from '@/types'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function getProfiles(): Promise<Profile[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/profiles`, {
      next: { revalidate: 3600 }, // revalidate every hour
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch profiles')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching profiles:', error)
    throw error
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/categories`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch categories')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

export async function getStats(): Promise<Stats[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/stats`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch stats')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching stats:', error)
    throw error
  }
}