// assumed api response structure e.g. from standard CMS
export type Section = {
  id: string
  title: string
  content: string   
  defaultExpanded?: boolean
}

export type ServicePanel = {
  id: string
  order: number
  title: string
  subtitle?: string
  sections: Section[]
}
