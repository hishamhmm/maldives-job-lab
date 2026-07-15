export type Job = {
  id: string
  created_at: string
  employer_id: string
  title: string
  category: string
  atoll: string
  location: string
  type: string
  salary_min: number
  salary_max: number
  salary_currency: string
  salary_note: string
  description: string
  requirements: string[]
  tags: string[]
  is_maldivian_only: boolean
  status: string
  expires_at: string
  featured: boolean
  employers?: Employer
}

export type Employer = {
  id: string
  name: string
  logo_url: string
  sector: string
  atoll: string
  website: string
  verified: boolean
  plan: string
}

export type Profile = {
  id: string
  user_id: string
  full_name: string
  nationality: string
  phone: string
  cv_url: string
  skills: string[]
  languages: string[]
  experience_years: number
  preferred_atoll: string
}

export type Application = {
  id: string
  job_id: string
  user_id: string
  cv_url: string
  cover_note: string
  status: 'applied' | 'viewed' | 'shortlisted' | 'rejected' | 'hired'
  created_at: string
}