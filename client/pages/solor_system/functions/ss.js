planetPositions = function(year, month, day){
	var coefficients = {
		"Mercury": {
			L: [178.179078,149474.07078,0.0003011,0],
			a: [0.3870986,0,0,0],
			e: [0.20561421,0.00002046,-0.00000003,0],
			i: [7.002881,0.0018608,-0.0000183,0],
			w: [28.753753,0.3702806,0.0001208,0],
			W: [47.145944,1.1852083,0.0001739,0],
			dt: 1
		},
		"Venus": {
			L: [342.767053,58519.21191,0.0003097,0],
			a: [0.7233316,0,0,0],
			e: [0.00682069,-0.00004774,0.000000091,0],
			i: [3.393631,0.0010058,-0.000001,0],
			w: [54.384186,0.5081861,-0.0013864,0],
			W: [75.779647,0.89985,0.00041,0],
			dt: 2
		},
		"Earth": {
			L: [99.69668,36000.76892,0.0003025,0],
			a: [1,0,0,0],
			e: [0.01675104,-0.0000418,-0.000000126,0],
			M: [358.47583,35999.04975,-0.00015,-0.0000033],
			i: [0,0,0,0],
			w: [0,0,0,0],
			W: [0,0,0,0],
			dt: 4
		},
		"Mars": {
			L: [293.737334,19141.69551,0.0003107,0],
			a: [1.5236883,0,0,0],
			e: [0.0933129,0.000092064,-0.000000077,0],
			i: [1.850333,-0.000675,0.0000126,0],
			w: [285.431761,1.0697667,0.0001313,0.00000414],
			W: [48.786442,0.7709917,-0.0000014,-0.00000533],
			dt: 10
		},
		"Jupiter": {
			L: [238.049257,3036.301986,0.0003347,-0.00000165],
			a: [5.202561,0,0,0],
			e: [0.04833475,0.00016418,-0.0000004676,-0.0000000017],
			i: [1.308736,-0.0056961,0.0000039,0],
			w: [273.277558,0.5594317,0.00070405,0.00000508],
			W: [99.443414,1.01053,0.00035222,-0.00000851],
			dt: 40
		},
		"Saturn": {
			L: [266.564377,1223.509884,0.0003245,-0.0000058],
			a: [9.554747,0,0,0],
			e: [0.05589232,-0.0003455,-0.000000728,0.00000000074],
			i: [2.492519,-0.0039189,-0.00001549,0.00000004],
			w: [338.3078,1.0852207,0.00097854,0.00000992],
			W: [112.790414,0.8731951,-0.00015218,-0.00000531],
			dt: 100
		},
		"Uranus": {
			L: [244.19747,429.863546,0.000316,-0.0000006],
			a: [19.21814,0,0,0],
			e: [0.0463444,-0.00002658,0.000000077,0],
			i: [0.772464,0.0006253,0.0000395,0],
			w: [98.071581,0.985765,-0.0010745,-0.00000061],
			W: [73.477111,0.4986678,0.0013117,0],
			dt: 300,
		},
		"Neptune": {
			L: [84.457994,219.885914,0.0003205,-0.0000006],
			a: [30.10957,0,0,0],
			e: [0.00899704,0.00000633,-0.000000002,0],
			i: [1.779242,-0.0095436,-0.0000091,0],
			w: [276.045975,0.3256394,0.00014095,0.000004113],
			W: [130.681389,1.098935,0.00024987,-0.000004718],
			dt: 600
		}};
	
	var keys = Object.keys(coefficients);

	if(month == 1 || month == 2){
	    year -= 1;
	    month += 12;
	}
	
	var A = Math.floor(year / 100);
	var B = 2 - A + Math.floor(A / 4);
	
	var JD = Math.floor(365.25 * year) + Math.floor(30.6001 * (month + 1)) + day + 1720994.5 + B;
	
	var coordinates = [[],[],[],[],[],[],[],[]];
	
	for (var i = 0; i < keys.length; i++){
		var lambda = [];
		for (var j = 0; j < 1000; j++){
	
			var T = (JD - 2415020 + j * coefficients[keys[i]].dt) / 36525;
			
			var L = coefficients[keys[i]].L[0] + coefficients[keys[i]].L[1] * T + coefficients[keys[i]].L[2] * Math.pow(T, 2) + coefficients[keys[i]].L[3] * Math.pow(T, 3);
			L -= Math.floor(L / 360) * 360;
			
			var a = coefficients[keys[i]].a[0] + coefficients[keys[i]].a[1] * T + coefficients[keys[i]].a[2] * Math.pow(T, 2) + coefficients[keys[i]].a[3] * Math.pow(T, 3);
			
			var e = coefficients[keys[i]].e[0] + coefficients[keys[i]].e[1] * T + coefficients[keys[i]].e[2] * Math.pow(T, 2) + coefficients[keys[i]].e[3] * Math.pow(T, 3);
			
			var ii = coefficients[keys[i]].i[0] + coefficients[keys[i]].i[1] * T + coefficients[keys[i]].i[2] * Math.pow(T, 2) + coefficients[keys[i]].i[3] * Math.pow(T, 3);
			ii -= Math.floor(ii / 360) * 360;
			
			var w = coefficients[keys[i]].w[0] + coefficients[keys[i]].w[1] * T + coefficients[keys[i]].w[2] * Math.pow(T, 2) + coefficients[keys[i]].w[3] * Math.pow(T, 3);
			w -= Math.floor(w / 360) * 360;
			
			var W = coefficients[keys[i]].W[0] + coefficients[keys[i]].W[1] * T + coefficients[keys[i]].W[2] * Math.pow(T, 2) + coefficients[keys[i]].W[3] * Math.pow(T, 3);
			W -= Math.floor(W / 360) * 360;
			
			var pi = w + W;
			pi -= Math.floor(pi / 360) * 360;
			
			var M = L - pi;
			M -= Math.floor(M / 360) * 360;
			
			L *= Math.PI / 180;
			ii *= Math.PI / 180;
			w *= Math.PI / 180;
			W *= Math.PI / 180;
			M *= Math.PI / 180;
			
			var E = M;
			
			for (var k = 0; k < 100; k++){
				
				var F = M + e * Math.sin(E) - E;
				var dF = e * Math.cos(E) - 1;
				E -= F / dF;
				
				if (Math.abs(F) < 1e-16){
					break;
				}
				
			}
			
			E -= Math.floor(E / 2 / Math.PI) * 2 * Math.PI;
			
			var nu = 2 * Math.atan(Math.pow(((1 + e) / (1 - e)), 0.5) * Math.tan(E / 2))
			nu -= Math.floor(nu / 2 / Math.PI) * 2 * Math.PI;
			
			var r = a * (1 - e * Math.cos(E));
			
			var u = L + nu - M - W;
			u -= Math.floor(u / 2 / Math.PI) * 2 * Math.PI;
			
			var lambda_mW = Math.atan(Math.cos(ii) * Math.tan(u));
			
			lambda[j] = lambda_mW + W + (Math.floor(u / (Math.PI / 2)) - Math.floor(lambda_mW / (Math.PI / 2))) * Math.PI / 2;
			
			var beta = Math.sin(u) * Math.sin(ii);
			
			var y = r * Math.cos(beta) * Math.sin(lambda[j]);
			var x = r * Math.cos(beta) * Math.cos(lambda[j]);
			
			coordinates[i][j] = [x, y];
			
			if (j > 2){
				if (lambda[j] > lambda[0] && lambda[j - 1] < lambda[0]){
					break;
				}
			}
	
		}
	}
		
	return coordinates;
};