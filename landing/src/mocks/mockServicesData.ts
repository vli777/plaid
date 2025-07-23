import { ServicePanel } from "@/types/services"

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio porttitor, egestas nunc et, fermentum sapien.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
  "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
]

function randomContent(): string {
  const count = Math.floor(Math.random() * 3) + 1
  let html = ""
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * paragraphs.length)
    html += `<p>${paragraphs[idx]}</p>`
  }
  return html
}

export const services: ServicePanel[] = [
  {
    id: "front-end",
    order: 1,
    title: "Front End",
    subtitle: "(Front End services)",
    sections: [
      {
        id: "creative-development",
        title: "Creative development",
        content: randomContent(),
        defaultExpanded: false
      },
      {
        id: "animation",
        title: "Animation",
        content: randomContent(),
        defaultExpanded: false
      },
      {
        id: "landing-pages",
        title: "Landing pages",
        content: randomContent(),
        defaultExpanded: true
      },
      {
        id: "performance-optimization",
        title: "Performance optimization",
        content: randomContent(),
        defaultExpanded: false
      },
      {
        id: "performance-optimization2",
        title: "Performance optimization",
        content: randomContent(),
        defaultExpanded: false
      },
        {
        id: "animation2",
        title: "Animation",
        content: randomContent(),
        defaultExpanded: false
      },
    ]
  },
  {
    id: "back-end",
    order: 2,
    title: "Back End",
    subtitle: "(Back End services)",
    sections: [
      {
        id: "back-end-structures",
        title: "Back end structures",
        content: randomContent(),
        defaultExpanded: false
      },
      {
        id: "content-management-systems",
        title: "Content management systems",
        content: randomContent(),
        defaultExpanded: false
      },
      {
        id: "user-authentication",
        title: "User authentication",
        content: randomContent(),
        defaultExpanded: false
      },
      {
        id: "remote-updating",
        title: "Remote updating",
        content: randomContent(),
        defaultExpanded: true
      },
      {
        id: "cloud-storage",
        title: "Cloud storage",
        content: randomContent(),
        defaultExpanded: false
      }
    ]
  }
]