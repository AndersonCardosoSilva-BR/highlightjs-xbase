function xbase(hljs) {
  return {
    name: 'xBase',
    aliases: ['clipper', 'harbour', 'xharbour'],
    keywords: {
      keyword:
        'function return if else endif do while enddo for next exit loop case otherwise endcase switch endswitch ' +
        'local private public static parameters procedure',
      literal: '.T. .F. NIL',
      built_in: 'alert chr len str val substr left right upper lower'
    },
    contains: [
      hljs.COMMENT(/\/\/.*/, '$'),
      hljs.COMMENT(/\/\*/, /\*\//),
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };
}
export default xbase;
