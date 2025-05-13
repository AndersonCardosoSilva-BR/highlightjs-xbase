import hljs from 'highlight.js/lib/core';
import xbase from './xbase.js';

hljs.registerLanguage('xbase', xbase);

const code = `
FUNCTION Hello()
   LOCAL x := "Olá"
   ? x
RETURN NIL
`;

const result = hljs.highlight(code, { language: 'xbase' }).value;

console.log(result);
