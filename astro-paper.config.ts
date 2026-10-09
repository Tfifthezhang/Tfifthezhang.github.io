import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://Tfifthezhang.github.io/",
    title: "TF Zhang'Log",
    description: "Hi, this is Tfifthe",
    author: "Tfifthe(张根巨)",
    profile: "https://Tfifthezhang.github.io/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: false,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/Tfifthezhang" },
    {
      name: "知乎",
      url: "https://www.zhihu.com/people/Tfifthe",
      linkTitle: "Tfifthe 的知乎主页",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
