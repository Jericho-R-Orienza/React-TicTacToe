window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Mandrake {
        constructor(canvasWidth, canvasHeight) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.image = document.getElementById('mandrake');
            this.spriteWidth = 256;
            this.spriteHeight = 256;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.scale = 1.7;
            this.x = this.canvasWidth/2 - this.width * this.scale/2;
            this.y = this.canvasHeight/2 - this.height * this.scale/2;
            this.minFrame = 0;
            this.maxFrame = 355;
            this.frame = 0;
            this.frameX = 10;
            this.frameY = 9;
        }
        draw(context){
            //args 1 & 2 are dealing with parsing through the sprite sheet by row-col
            context.drawImage(this.image,
                 this.frameX * this.spriteWidth, 
                 this.frameY * this.spriteHeight,
                 this.spriteWidth, 
                 this.spriteHeight, 
                 this.x, this.y, 
                 this.width * this.scale, this.height * this.scale);
        
        }
        update(){
            // if(this.frameX < 17) this.frameX++
            // else this.frameX = 0;
            this.frame = this.frame < this.maxFrame ? this.frame +1 : this.minFrame;
            this.frameX = this.frame % 18; //divide by the number of frames you have in a single row
            this.frameY = Math.floor(this.frame / 18);
        }

        setAnimation(newMinFrame, newMaxFrame){
            this.minFrame = newMinFrame;
            this.maxFrame = newMaxFrame;
            this.frame = this.minFrame;
        }
    }

    const mandrake = new Mandrake(canvas.width, canvas.height);
    
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        mandrake.draw(ctx);
        mandrake.update();
        requestAnimationFrame(animate);
    }

    animate();
});

