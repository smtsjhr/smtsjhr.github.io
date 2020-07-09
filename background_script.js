const fold = 16;
const scale = 3;
const num_ripples = 20;
const thickness = 1;

var separation = 200;
var space = 20;

var time = 0;
var rate = 300;
var initial_rate = rate;
const osc_rate = 100;
const separation_rate = 1900;
const space_rate = 100;
const color_rate = 10;

const alpha = 0.03;


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


var stop = false;

var fps, fpsInterval, startTime, now, then, elapsed;



startAnimating(30);


function draw() {
  
  let dpr = window.devicePixelRatio || 1;

  let W = canvas.style.width =  window.innerWidth;
  let H = canvas.style.height =  window.innerHeight;
  
  
  var hue = (time/color_rate + 250)%360;
  ctx.fillStyle = `hsla(${hue}, 100%, 30%, ${alpha})`;
  ctx.fillRect(0,0, W, H);
  
  separation = 200 + 100*Math.sin(time/separation_rate)**2;
  rate = initial_rate - 20*(1 + Math.sin(time/osc_rate)**2);

  ripples(ctx, 0.5*W, 0.5*H, scale*dpr, fold, separation, thickness, space, num_ripples, -time/rate);
  
  time += 1;
     
}



function ripples(ctx, x_origin, y_origin, scale, fold, separation, thickness, space, ripples, time) {
  
  ctx.save();
  ctx.translate(x_origin, y_origin);
  ctx.scale(scale,scale);
  for (let f = 0; f < fold; f++) {
    ctx.save();
    ctx.rotate(2*Math.PI*f/fold);
    for (let i = 0; i < ripples; i++) {
      ctx.save();
      ctx.lineWidth = thickness;
      if (i === ripples - 1 ) { 
            line_alpha = (time%1)**2;
      } 
      else {
            line_alpha = 1;
      }
      ctx.strokeStyle = `rgba(0,0,0, ${line_alpha})`;
      ctx.beginPath();
      ctx.arc(separation, 0, space*(1+i + time%1) , 0, 2*Math.PI);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
    ctx.restore();
  }
  ctx.restore();
}


function startAnimating(fps) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;

  var screenorientation = window.screen.orientation || window.screen.mozorientation || window.screen.msorientation;

  screenorientation.onchange = function(e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  animate();
}


function animate(newtime) {

  if (stop) {
      return;
  }

  now = newtime;
  elapsed = now - then;

  if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      draw();
  }
  
  requestAnimationFrame(animate);
  
}
