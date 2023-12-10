const root = true;
const plugins = ['@typescript-eslint', 'import', 'prettier'];
const extend = [
  'airbnb-typescript/base',
  'prettier',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/typescript',
];
const project = 'tsconfig.eslint.json';
const tsconfigRootDir = __dirname;
const parser = '@typescript-eslint/parser';

export {
  root,
  plugins,
  extend,
  project,
  tsconfigRootDir,
  parser
}