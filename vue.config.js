const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "this.is.vue-electron-demo", // appId,自行设置
        productName: "vue-electron-demo", // 产品名称
        electronDownload: {
          mirror: "https://npm.taobao.org/mirrors/electron/",
        },
        directories: {
          output: "output", // 打包后的文件夹
        },
        asar: true,
        mac: {
          target: "dmg",
          icon: "build/icons/icon.icns",
        },
        win: {
          // Windows平台的配置
          target: "nsis", // 打包的目标格式为NSIS安装程序
          icon: "build/icons/icon.ico", // Windows平台的图标路径
          publisherName: "liuyuanfa", // 发布者名称
        },
        linux: {
          target: ["AppImage", "deb"],
        },
        nsis: {
          oneClick: false, // 是否一键安装
          language: "2052", // 语言设为中文
          perMachine: true, // 安装程序将给电脑所有用户安装
          allowElevation: true, // 允许提升安装程序权限
          allowToChangeInstallationDirectory: true, // 允许用户选择安装目录
          createDesktopShortcut: true, // 创建桌面快捷方式
          createStartMenuShortcut: false, // 创建开始菜单快捷方式
          shortcutName: "vue-electron-demo", // 快捷方式的名称
        },
      },
    },
  },
});
