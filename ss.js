var Mars = {
	L: [293.737334,19141.69551,0.0003107,0],
	a: [1.5236883,0,0,0],
	e: [0.0933129,0.000092064,-0.000000077,0],
	i: [1.850333,-0.000675,0.0000126,0],
	w: [285.431761,1.0697667,0.0001313,0.00000414],
	W: [48.786442,0.7709917,-0.0000014,0.00000533]
}

var Earth = {
	L: [99.69668,36000.76892,0.0003025,0],
	e: [0.01675104,-0.0000418,-0.000000126,0],
	M: [358.47583,35999.04975,-0.00015,-0.0000033]
}


var y = 1976;
var m = 7;
var d = 20.5;

if(m == 1 || m == 2){
    y -= 1;
    m += 12;
}

var a = Math.floor(y / 100);
var b = 2 - a + Math.floor(a / 4);

var JD = Math.floor(365.25 * y) + Math.floor(30.6001 * (m + 1)) + d + 1720994.5 + b;


var data = [];
var lambda = [];

for (var j = 0; j < 1000; j++){


var T = (JD - 2415020) / 36525

var L = Mars.L[0] + Mars.L[1] * T + Mars.L[2] * Math.pow(T, 2) + Mars.L[3] * Math.pow(T, 3);
L -= Math.floor(L / 360) * 360;

var a = Mars.a[0] + Mars.a[1] * T + Mars.a[2] * Math.pow(T, 2) + Mars.a[3] * Math.pow(T, 3);

var e = Mars.e[0] + Mars.e[1] * T + Mars.e[2] * Math.pow(T, 2) + Mars.e[3] * Math.pow(T, 3);

var i = Mars.i[0] + Mars.i[1] * T + Mars.i[2] * Math.pow(T, 2) + Mars.i[3] * Math.pow(T, 3);
i -= Math.floor(i / 360) * 360;

var w = Mars.w[0] + Mars.w[1] * T + Mars.w[2] * Math.pow(T, 2) + Mars.w[3] * Math.pow(T, 3);
w -= Math.floor(w / 360) * 360;

var W = Mars.W[0] + Mars.W[1] * T + Mars.W[2] * Math.pow(T, 2) + Mars.W[3] * Math.pow(T, 3);
W -= Math.floor(W / 360) * 360;

var pi = w + W;
pi -= Math.floor(pi / 360) * 360;

var M = L - pi;
M -= Math.floor(M / 360) * 360;

L *= Math.PI / 180;
i *= Math.PI / 180
w *= Math.PI / 180;
W *= Math.PI / 180;
M *= Math.PI / 180;

var E = M;

for (var index = 0; index < 100; index++){
	
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

var lambda_mW = Math.atan(Math.cos(i) * Math.tan(u));

lambda[j] = lambda_mW + W + (Math.floor(u / (Math.PI / 2)) - Math.floor(lambda_mW / (Math.PI / 2))) * Math.PI / 2;

var beta = Math.sin(u) * Math.sin(i);

var x = r * Math.cos(beta) * Math.sin(lambda[j]);
var y = r * Math.cos(beta) * Math.cos(lambda[j]);


data.push([x, y]);

if (j > 2){
	if (lambda[j] > lambda[0] && lambda[j - 1] < lambda[0]){
		break;
	}
}

JD += 10;
}


var data2 = [];
var u = [];

for (var j = 0; j < 1000; j++){

T = 0.765503080 + j / 3652.5;

var L = Earth.L[0] + Earth.L[1] * T + Earth.L[2] * Math.pow(T, 2) + Earth.L[3] * Math.pow(T, 3);
L -= Math.floor(L / 360) * 360;

var e = Earth.e[0] + Earth.e[1] * T + Earth.e[2] * Math.pow(T, 2) + Earth.e[3] * Math.pow(T, 3);
e -= Math.floor(e / 360) * 360;

var M = Earth.M[0] + Earth.M[1] * T + Earth.M[2] * Math.pow(T, 2) + Earth.M[3] * Math.pow(T, 3);
M -= Math.floor(M / 360) * 360;


L *= Math.PI / 180;
M *= Math.PI / 180;


E = M;

for (var index = 0; index < 100; index++){
	
	F = M + e * Math.sin(E) - E;
	dF = e * Math.cos(E) - 1;
	E -= F / dF;
	
	if (Math.abs(F) < 1e-16){
		break;
	}
	
}


nu = 2 * Math.atan(Math.pow(((1 + e) / (1 - e)), 0.5) * Math.tan(E / 2));
nu -= Math.floor(nu / 2 / Math.PI) * 2 * Math.PI;

u[j] = L + nu - M;


x = Math.sin(u[j]);
y = Math.cos(u[j]);

data2.push([x, y]);

if (j > 2){
	if (u[j] > u[0] && u[j - 1] < u[0]){
		break;
	}
}

}

console.log(data2)