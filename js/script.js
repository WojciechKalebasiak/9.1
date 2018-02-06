function getTriangleArea(a, h) {
	if(a <= 0 && h <=0) {
		return 'Nieprawidlowe dane';
	}
	return a*h/2;
}
var a = prompt("Podaj a: ");
	h = prompt("Podaj h: ");

console.log(getTriangleArea(a,h));
var traingleArea1 = getTriangleArea(10,12),
	triangleArea2 = getTriangleArea(3,4),
	triangleArea3 = getTriangleArea(5,6);