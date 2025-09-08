import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../docs",
  title: "Mars Rover",
  lang: "zh-CN",
  lastUpdated: true,
  description: "探索知识的星球",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/planet.svg",
    editLink: {
      pattern:
        "https://github.com/caoyawei062/caoyawei062.github.io/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
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
      {
        text: "前端",
        items: [
          { text: "基础", link: "/markdown-examples" },
          { text: "ts", link: "/ts" },
          { text: "react", link: "/react/" },
          { text: "vue", link: "/vue/" },
        ],
      },
      {
        text: "工程化",
        items: [
          { text: "git", link: "/git-examples" },
          {
            text: "webpack",
            link: "/webpack-examples",
          },
          { text: "vite", link: "/vite-examples" },
          { text: "ci/cd", link: "/ci-cd-examples" },
          { text: "测试", link: "/test-examples" },
          { text: "监控", link: "/monitor-examples" },
        ],
      },
      {
        text: "客户端",
        items: [{ text: "客户端", link: "/client-examples" }],
      },
      {
        text: "后端",
        items: [{ text: "后端", link: "/backend-examples" }],
      },
      {
        text: "工具",
        items: [{ text: "工具", link: "/tools-examples" }],
      },
    ],

    sidebar: {
      "/vue/": [
        {
          text: "Vue",
          items: [
            { text: "vue2", link: "/vue/v2" },
            { text: "vue3", link: "/vue/v3" },
            { text: "pinia", link: "/vue/pinia" },
            { text: "vue-router", link: "/vue/vue-router" },
            { text: "nuxt3", link: "/vue/nuxt3" },
          ],
        },
      ],
      "/react/": [
        {
          text: "react",
          items: [
            { text: "基础", link: "/react/" },
            { text: "进阶", link: "/react/advanced" },
            { text: "路由", link: "/react/router" },
            { text: "状态管理", link: "/react/state" },
            { text: "脚手架", link: "/react/scaffolding" },
            { text: "服务端渲染", link: "/react/ssr" },
            { text: "React Native", link: "/react/react-native" },
            { text: "Hooks", link: "/react/hooks" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/caoyawei062" }],
  },
});
