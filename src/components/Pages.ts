export type Page = {
  title: string;
  path: string;
};

export const Pages: Page[] = [
  { title: "Home", path: "/" },
  { title: "Simple map", path: "/simple-map" },
  { title: "Overlay", path: "/overlay" }
];
