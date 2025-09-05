import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../docs",
  title: "Mars Rover",
  lang: "zh-CN",
  description: "探索知识的星球",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/planet.svg",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    nav: [
      { text: "前端", link: "/markdown-examples" },
      { text: "客户端", link: "/client-examples" },
      { text: "后端", link: "/backend-examples" },
      { text: "工具", link: "/tools-examples" },
    ],

    sidebar: [
      {
        text: "React",
        items: [
          { text: "基础react", link: "/markdown-examples" },
          { text: "运行时 API 示例", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/caoyawei062" }],
  },
});
