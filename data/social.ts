export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/amit-mndal",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amit-mndal",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:marchamit07@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+918637814826",
    icon: "phone",
  },
];
