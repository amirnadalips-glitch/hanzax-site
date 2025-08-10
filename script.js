var   canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");
  ctx.font="Source Code Pro";

var w = canvas.width = 650,
  h = canvas.height = 650,		    
  centerX = 0,
  centerY = 0;
var timer = 0,
  radius = 150,
  nbLetters = 12;

var numParts = 275,
  tabParts = [];

function catchLetter(rawValue) {
var letter = {Model: "N", Color: "#fff"};
switch (rawValue) {
  case 0:
    letter.Model = "↟ A";
    letter.Color = "#cf5";
    break;
  case 1:
    letter.Model = "↗ B";
    letter.Color = "#bf6";
    break;
  case 2:
    letter.Model = "→ C";
    letter.Color = "#af7";
    break;
  case 3:
    letter.Model = "↘ D";
    letter.Color = "#9f8";
    break;
  case 4:
    letter.Model = "↡ E";
    letter.Color = "#8f9";
    break;
  case 5:
    letter.Model = "↙ F";
    letter.Color = "#7fa";
    break;
  case 6:
    letter.Model = "← G";
    letter.Color = "#6fb";
    break;
  case 7:
    letter.Model = "↖ H";
    letter.Color = "#5fc";
    break;
  case 8:
    letter.Model = "↑ I";
    letter.Color = "#4fd";
    break;
  case 9:
    letter.Model = "↟ J";
    letter.Color = "#3fe";
    break;
  case 10:
    letter.Model = "• K";
    letter.Color = "#2ff";
    break;
}
return letter;
}

function catchSymbol(rawValue) {
var letter = {Model: "N", Color: "#fff"};
switch (rawValue) { // ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓
  case 0:
    letter.Model = "Aries";
    letter.Color = "#cf5";
    break;
  case 1:
    letter.Model = "Taurus";
    letter.Color = "#bf6";
    break;
  case 2:
    letter.Model = "Gemini";
    letter.Color = "#af7";
    break;
  case 3:
    letter.Model = "Cancer";
    letter.Color = "#9f8";
    break;
  case 4:
    letter.Model = "Leo";
    letter.Color = "#8f9";
    break;
  case 5:
    letter.Model = "Virgo";
    letter.Color = "#7fa";
    break;
  case 6:
    letter.Model = "Libra";
    letter.Color = "#6fb";
    break;
  case 7:
    letter.Model = "Scorpius";
    letter.Color = "#5fc";
    break;
  case 8:
    letter.Model = "Sagittarius";
    letter.Color = "#4fd";
    break;
  case 9:
    letter.Model = "Capricornus";
    letter.Color = "#3fe";
    break;
  case 10:
    letter.Model = "Aquarius";
    letter.Color = "#2ff";
    break;
  case 11:
    letter.Model = "Pisces";
    letter.Color = "#2ff";
    break;
  
}
return letter;
}

function particles() {
 this.x = 0; 
 this.y = 0;
 this.r = Math.random()*radius;
 this.v = Math.random();
 this.color = "rgba(155,250,250,"+Math.random()+")";
  
}

for(var i=0; i<numParts; i++)
{
 tabParts.push(new particles());
}

var grd=ctx.createRadialGradient(w/2,h/2,500,w/2,h/2,150);
opacity: 0.5
grd.addColorStop(0,"#000");
grd.addColorStop(1,"#000"); // # 246

function draw(){  
ctx.save();		  
ctx.fillStyle = grd;
ctx.fillRect(0,0,w,h); 


  for (var i = 1; i < 8; i++) 
{		for (var j = 1; j < 8; j++)
{
  ctx.beginPath();
  ctx.arc(i*80, j*80, 28, 0, 2 * Math.PI, false);
  ctx.strokeStyle = catchLetter(Math.abs(Math.round((Math.cos(timer+j*i)*10)))).Color;
  // ctx.setLineDash([5,2]);
  ctx.lineWidth = 0.055;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "rgba(255,55,255,0.2)";
  ctx.moveTo(i*80-25+Math.abs(Math.sin(timer+i)*40)/2,j*80+32);
  ctx.lineTo(i*80-25+Math.abs(Math.sin(timer+i)*40)/4,j*80+32);
  ctx.lineWidth = 1/2;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(i*80, j*80, 2, 0, 2 * Math.PI, false);
  ctx.fillStyle = catchLetter(Math.abs(Math.round((Math.cos(timer+j*i)*10)))).Color;
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(i*80+Math.cos(timer+j*i)*5,j*80+Math.sin(timer+i*j)*5);
  ctx.lineTo(i*80+Math.cos(timer+j*i)*15,j*80+Math.sin(timer+i*j)*15);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(i*80+Math.cos(timer+j*i)*20, j*80+Math.sin(timer+i*j)*20, 1, 0, 2 * Math.PI, false);
  ctx.fillStyle = catchLetter(Math.abs(Math.round((Math.cos(timer+j*i)*10)))).Color;
  ctx.fill();
  ctx.closePath();

  ctx.font = "7px Arial";
  ctx.fillStyle = catchLetter(Math.abs(Math.round((Math.cos(timer+j*i)*10)))).Color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;          
  ctx.fillText(catchLetter(Math.abs(Math.round((Math.cos(timer+j*i)*10)))).Model,i*80+30,j*80+30); 
}
}

ctx.beginPath();
ctx.fillStyle = grd;
ctx.fillRect(210,210,230,230); 
ctx.closePath();

for (var i = 0; i < nbLetters; i++) {    
  ctx.beginPath();   
  ctx.closePath();
  ctx.font = "9px Arial";
  ctx.fillStyle = catchSymbol(i).Color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";   
  ctx.fillText(catchSymbol(i).Model,
               w/2+Math.cos(i*(Math.PI*2)/nbLetters+timer)*(radius-45),
               h/2+Math.sin(i*(Math.PI*2)/nbLetters+timer)*(radius-45)
              );
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = catchSymbol(i).Color;
  
  ctx.moveTo(w/2+Math.cos(i*(Math.PI*2)/nbLetters+timer)*(radius),
             w/2+Math.sin(i*(Math.PI*2)/nbLetters+timer)*(radius));
  ctx.lineTo(w/2+Math.cos(i*(Math.PI*2)/nbLetters+timer)*(radius+200),
             h/2+Math.sin(i*(Math.PI*2)/nbLetters+timer)*(radius+200));
  ctx.lineWidth = 0.025;
  ctx.stroke();
  ctx.closePath();
}

for (var i = 0; i < 2; i++) {    
  ctx.beginPath();
   ctx.fillStyle = "rgba(155,150,250,0.2)";
  // ctx.scale(1+Math.cos(timer)/30, 1+Math.sin(timer)/30);
  ctx.arc(w/2, h/2, 120-i*30, 0, 2* Math.PI, false);
  ctx.strokeStyle =  catchLetter(Math.abs(Math.round((Math.cos(timer+j*i)*10)))).Color;
  ctx.lineWidth = 0.055;
 ctx.stroke();
  ctx.closePath();
}

// Particles
for(var i=0; i<numParts; i++)
{     
    ctx.beginPath();
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = tabParts[i].color;
    ctx.arc(
     w/2+Math.cos(i+timer+tabParts[i].v)*(tabParts[i].r*(1.9)),
     h/2+Math.sin(i+timer)*(tabParts[i].r+tabParts[i].v),
     tabParts[i].v,0, 2*Math.PI, true);
    ctx.fill();	
    ctx.closePath();
    ctx.beginPath();
    ctx.globalCompositeOperation = "saturation";
    ctx.fillStyle = "rgba(155,150,250,0.2)";
    ctx.arc(
     w/2+Math.cos(i+timer+tabParts[i].v)*(tabParts[i].r*(1.9)),
     h/2+Math.sin(i+timer)*(tabParts[i].r+tabParts[i].v),
     tabParts[i].v*15,0, 2*Math.PI, true);
    ctx.fill();	
    ctx.closePath();
}  

timer += 1/100;
ctx.restore();  
}

window.requestAnimFrame = (function(){
return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  function( callback ){
  window.setTimeout(callback, 1000 / 60);
};
})();

(function loop(){
draw();
requestAnimFrame(loop);
})();