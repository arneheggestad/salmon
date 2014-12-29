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
	          var color = '#' + 'ff' + tmp + '0' + '00';
	          colors.push(color);
	        }
	        if (i === 2) {
	          var color = '#' + '00' + 'ff' + tmp + '0';
	          colors.push(color);        
	        }
	        if (i === 4) {
	          var color = '#' + tmp + '0' + '00' + 'ff';
	          colors.push(color);
	        }
	      }
	    } else {
	      for (var j = 15; j >= 0; j--) {
	        tmp = hex.charAt(j);
	        if (i === 1) {
	          var color = '#' + tmp + '0' + 'ff' + '00';
	          colors.push(color);
	        }
	        if (i === 3) {
	          var color = '#' + '00' + tmp + '0' + 'ff';
	          colors.push(color);        
	        }
	        if (i === 5) {
	          var color = '#' + 'ff' + '00' + tmp + '0';
	          colors.push(color);
	        }
	      }
	    }    
	  }
    console.log(colors);
	}
}

module.exports = utilities;
