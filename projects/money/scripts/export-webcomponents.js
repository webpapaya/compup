const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');

const BASE_PATH = join(__dirname, '..', 'src', 'container');

const isDirectory = source => lstatSync(join(BASE_PATH, source)).isDirectory();
const containers = readdirSync(BASE_PATH)
    .filter(isDirectory)
    .map((name) => `  '${name}': () => import('./container/${name}')`)
    .join(',\n')

console.log(`
/**
 * THIS FILE IS AUTOMATICALLY REGENERATED
 * If you want to add another webcomponent run: yarn export:webcomponents
 */

export default {
${containers}
}
`)





