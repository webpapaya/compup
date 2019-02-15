const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');

const BASE_PATH = join(__dirname, '..', 'src', 'container');

const isDirectory = source => lstatSync(join(BASE_PATH, source)).isDirectory();
const containers = readdirSync(BASE_PATH)
    .filter(isDirectory)

console.log(`
/**
 * THIS FILE IS AUTOMATICALLY REGENERATED
 * If you want to add another webcomponent run: yarn export:webcomponents
 */

${containers.map((name, index) => `import Component${index} from './container/${name}';`).join('\n')}

export default {
${containers.map((name, index) => `  '${name}': () => ({ default: Component${index} })`).join(',\n')}
};
`)
