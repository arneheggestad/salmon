var colorArray = [ '#f00',
  '#f10',
  '#f20',
  '#f30',
  '#f40',
  '#f50',
  '#f60',
  '#f70',
  '#f80',
  '#f90',
  '#fa0',
  '#fb0',
  '#fc0',
  '#fd0',
  '#fe0',
  '#ff0',
  '#ff0',
  '#fe0',
  '#fd0',
  '#fc0',
  '#fb0',
  '#fa0',
  '#f90',
  '#f80',
  '#f70',
  '#f60',
  '#f50',
  '#f40',
  '#f30',
  '#f20',
  '#f10',
  '#f00',
  '#0f0',
  '#0f1',
  '#0f2',
  '#0f3',
  '#0f4',
  '#0f5',
  '#0f6',
  '#0f7',
  '#0f8',
  '#0f9',
  '#0fa',
  '#0fb',
  '#0fc',
  '#0fd',
  '#0fe',
  '#0ff',
  '#0ff',
  '#0fe',
  '#0fd',
  '#0fc',
  '#0fb',
  '#0fa',
  '#0f9',
  '#0f8',
  '#0f7',
  '#0f6',
  '#0f5',
  '#0f4',
  '#0f3',
  '#0f2',
  '#0f1',
  '#0f0',
  '#00f',
  '#10f',
  '#20f',
  '#30f',
  '#40f',
  '#50f',
  '#60f',
  '#70f',
  '#80f',
  '#90f',
  '#a0f',
  '#b0f',
  '#c0f',
  '#d0f',
  '#e0f',
  '#f0f',
  '#f0f',
  '#e0f',
  '#d0f',
  '#c0f',
  '#b0f',
  '#a0f',
  '#90f',
  '#80f',
  '#70f',
  '#60f',
  '#50f',
  '#40f',
  '#30f',
  '#20f',
  '#10f',
  '#00f' ];

module.exports = colorArray;

var hex = "0123456789abcdef";
var r = g = b = "0";
var colors = [];
for (var i = 0; i < 6; i++) {
  var tmp = '#';
  if (i % 2 === 0) {
    for (var j = 0; j < 16; j++) {
      tmp = hex.charAt(j);
      if (i === 0) {
        var color = '#f' + tmp + '#0';
        colors.push(color);
      }
      if (i === 2) {
        var color = '#0' + '#f' + tmp;
        colors.push(color);        
      }
      if (i === 4) {
        var color = tmp + '#0' + '#f';
        colors.push(color);
      }
    }
  } else {
    for (var j = 15; j >= 0; j--) {
      tmp = hex.charAt(j);
      if (i === 1) {
        var color = '#f' + tmp + '#0';
        colors.push(color);
      }
      if (i === 3) {
        var color = '#0' + '#f' + tmp;
        colors.push(color);        
      }
      if (i === 5) {
        var color = tmp + '#0' + '#f';
        colors.push(color);
      }
    }
  }
}
