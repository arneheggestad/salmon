var utilities = {
	generateColorArray: function () {
	  var hex = "0123456789abcdef";
	  var r = g = b = "0";
	  var colors = [];

	  for (var i = 0; i < 6; i++) {
	    var tmp = '';
	    if (i % 2 === 0) {
	      for (var j = 0; j < 16; j++) {
	        tmp = hex.charAt(j);
	        if (i === 0) {
	          var color = '#' + 'f' + tmp + '0';
	          colors.push(color);
	        }
	        if (i === 2) {
	          var color = '#' + '0' + 'f' + tmp;
	          colors.push(color);        
	        }
	        if (i === 4) {
	          var color = '#' + tmp + '0' + 'f';
	          colors.push(color);
	        }
	      }
	    } else {
	      for (var j = 15; j >= 0; j--) {
	        tmp = hex.charAt(j);
	        if (i === 1) {
	          var color = '#' + tmp + 'f' + '0';
	          colors.push(color);
	        }
	        if (i === 3) {
	          var color = '#' + '0' + tmp + 'f';
	          colors.push(color);        
	        }
	        if (i === 5) {
	          var color = '#' + 'f' + '0' + tmp;
	          colors.push(color);
	        }
	      }
	    }    
	  }
    console.log(colors);
	}
}

module.exports = utilities;
