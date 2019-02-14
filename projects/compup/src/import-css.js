import 'construct-style-sheets-polyfill';

const sheet = new CSSStyleSheet();
const loadedStylesheets = {};
const importCSS = ({ node, path }) => {
	loadedStylesheets[path] = loadedStylesheets[path] || sheet.replace(`@import url("${path}")`);
	node.adoptedStyleSheets = [sheet]; // eslint-disable-line no-param-reassign
	return loadedStylesheets[path];
};

export default importCSS;
