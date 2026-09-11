
		// Abstract browser differences with requestAnimationFrame, with a fallback to setTimeout
		window.requestAnimFrame = (function(){
      		return 	window.requestAnimationFrame       || 
					window.webkitRequestAnimationFrame || 
              		window.mozRequestAnimationFrame    || 
              		window.oRequestAnimationFrame      || 
              		window.msRequestAnimationFrame     || 
              		function( callback ){
                		window.setTimeout(callback, 1000 / 60);
              		};
		})();
		

			// create the Raphael element
			canvas = Raphael("mycanvas");
			
			// Create an array for our particles
			particles = [];

			(function animloop(){
				// set this function to run periodically
      			requestAnimFrame(animloop);
      			// when the function runs, call the loop function to update our particles
      			loop();
    		})();

			
	
			//
			
			function loop() {

				// make some particles
				makeParticle(4); 
				
				// clear the canvas
				canvas.clear();
			  	
			  	// iteratate through each particle
				for (i=0; i<particles.length; i++) {
					var particle = particles[i]; 
					
					// render it
					particle.render(); 
					
					// and then update. We always render first so particle appears in the starting point.
					particle.update();
				}
			}
			
			function makeParticle(particleCount) {
				for(var i=0; i<particleCount;i++) {
					
					// create a new particle in the middle of the stage
					var particle = new Particle(); 
					
					// give it a random x and y velocity
					particle.velX = (Math.random()*20)-10;
					particle.velY = (Math.random()*20)-10;
					particle.size = parseInt(Math.random()*40);
					particle.red = parseInt(Math.random()*255);
					particle.green = parseInt(Math.random()*255);
					particle.blue = parseInt(Math.random()*255);
										
					// add it to the array
					particles.push(particle); 
				}
			}
			
			function Particle() {
				// the starting position of the particle
				this.posX = 300; 
				this.posY = 300; 
				this.size = 10;
				this.red = 0;
				this.green = 0;
				this.blue = 0;		
				
				// the velocity 
				this.velX = 0; 
				this.velY = 0; 

				// Update method for the particle object	
				this.update = function() {
					// add the velocity to the current position
					this.posX += this.velX;
					this.posY += this.velY; 
					// remove particles we can't see any more
					if (this.posX>600 || this.posX<0 || this.posY>600 || this.posY<0)
					particles.remove(this);
				}
	
				// Draw method for the particle object
				this.render = function() {
					thecircle = canvas.circle(this.posX, this.posY, this.size);
					thecircle.attr({fill:"rgba("+this.red+","+this.green+","+this.blue+",0.6)"});
				}
			}

			// remove the empty space from our array
			Array.prototype.remove = function() {
				var what, a = arguments, L = a.length, ax;
				while (L && this.length) {
					what = a[--L];
					while ((ax = this.indexOf(what)) !== -1) {
						this.splice(ax, 1);
					}
				}
				return this;
			};	
