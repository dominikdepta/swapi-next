export default function plopConfig(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("component", {
    description: "React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "input",
        name: "path",
        message: "Component path (relative to src):",
        default: "components",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plopTemplates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/{{path}}/{{pascalCase name}}/types.ts",
        templateFile: "plopTemplates/component/types.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plopTemplates/component/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/{{path}}/{{pascalCase name}}/index.ts",
        templateFile: "plopTemplates/component/index.ts.hbs",
      },
    ],
  });
}
