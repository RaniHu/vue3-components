// import { NodePlopAPI } from "plop";

// plop 配置文件必须导出一个函数，这个函数接收一个 plop 对象，这个对象用于创建相关任务。
module.exports = (plop) => {
  plop.setGenerator("new", {
    description: "创建组件", // 描述
    // 命令式交互配置
    prompts: [
      {
        type: "list",
        name: "path",
        message: "请选择组件创建目录",
        choices: [
          { value: "src/views", name: "src/views" },
          { value: "src/components", name: " src/components " },
          { value: "custom", name: "都不是？自定义目录" },
          { value: "vue3", name: "vue3 (vue3 + Typescript + Sass)" },
        ],
      },
      {
        type: "list",
        name: "template",
        message: "请选择组件模板",
        choices: [
          { value: "vue2", name: "vue2 (vue2 + Javascript + Sass)" },
          { value: "vue3", name: "vue3 (vue3 + Typescript + Sass)" },
          {
            value: "vue3_setup",
            name: "vue3_setup (vue3 + setup语法糖 + Typescript + Sass)",
          },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "请输入组件名称",
        validate: (v) => {
          if (!v || v.trim === "") {
            return "组件名称不能为空！";
          } else {
            return true;
          }
        },
      },
    ],
    // 完成命令行交互后需要执行的一系列动作
    actions: [
      {
        type: "add", // 表示添加新文件
        path: "src/views/{{name}}/index.ts", // 指定文件的输出路径
        templateFile: "./plop-templates/component/index.hbs", // 指定模板文件
      },
      {
        type: "add",
        path: "src/views/{{name}}/index.scss",
        templateFile: "./plop-templates/component/css.hbs",
      },
      {
        type: "add",
        path: "src/views/{{name}}/props.ts",
        templateFile: "./plop-templates/component/props.hbs",
      },
      {
        type: "add",
        path: "src/views/{{name}}/{{name}}.vue",
        templateFile: "./plop-templates/component/vue.hbs",
      },
    ],
  });
};
