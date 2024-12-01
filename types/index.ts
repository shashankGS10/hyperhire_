export interface Profile {
    name: string
    role: string
    skills: string[]
    flag: string
    price: string
    image: string
  }
  
  export interface Category {
    title: string
    icon: string
    link: string
  }
  
  export interface Stats {
    title: string
    description: string
  }
  
  export interface FooterService {
    icon: string | React.ReactNode
    title: string
  }
  
  export interface CompanyInfo {
    label: string
    values: string[]
  }