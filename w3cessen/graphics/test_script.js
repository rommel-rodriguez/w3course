function init(){
	console.log("This is a test "+Math.PI)
	var canvas = document.querySelector('#workarea')
	ctx = canvas.getContext('2d');
	//drawAnything();
	//drawSomethign()
	writeText("Es ist eine Katze")

}
function drawAnything(){
	ctx.fillStyle = 'red'
	ctx.translate(50,50);
	ctx.rotate(Math.PI/4);
	ctx.fillRect(0,0,50,50)

}
function drawSomethign(){
	ctx.fillStyle = 'blue'
	ctx.rotate(Math.PI/4);
	ctx.translate(100,100);
	ctx.fillRect(0,0,50,50)

}
function writeText(msg){
	ctx.strokeStyle = 'blue'
	ctx.textBaseline = 'top'
	ctx.font = "italic bold 16pt Calibri";
	ctx.fillText(msg+" marker",100,100)
	ctx.moveTo(100,100)
	ctx.lineTo(500,100)
	ctx.stroke()
	ctx.textBaseline = 'alphabetic'
	ctx.strokeText(msg,0,30)
	ctx.moveTo(0,30)
	ctx.lineTo(500,30)
	ctx.stroke()
}