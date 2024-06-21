module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'atomic',
        choices: [
          { name: 'Atoms', value: 'atoms' },
          { name: 'Molecules', value: 'molecules' },
          { name: 'Organisms', value: 'organisms' },
          { name: 'Templates', value: 'templates' },
        ],
        message: 'Que tipo de componente ele é?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{atomic}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{atomic}}/{{pascalCase name}}/styles.module.scss',
        templateFile: 'templates/styles.scss.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{atomic}}/{{pascalCase name}}/storybook.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{atomic}}/{{pascalCase name}}/test.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
