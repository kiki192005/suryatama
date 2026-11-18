export const NAV_ITEMS = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/services", labelKey: "services" },
  { href: "/fleet", labelKey: "fleet" },
  { href: "/operations", labelKey: "operations" },
  { href: "/clients", labelKey: "clients" },
  { href: "/contact", labelKey: "contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
