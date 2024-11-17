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
            this.scale = 2;
            this.x = this.canvasWidth/2 - this.width * this.scale/2;
            this.y = this.canvasHeight/2 - this.height * this.scale/2;
            this.minFrame = 0;
            this.maxFrame = 355;
        }
        draw(context){
            //args 1 & 2 are dealing with parsing through the sprite sheet by row-col
            context.drawImage(this.image,
                 6 * this.spriteWidth, 
                 8 * this.spriteHeight,
                 this.spriteWidth, 
                 this.spriteHeight, 
                 this.x, this.y, 
                 this.width * this.scale, this.height * this.scale);
            

        }
        update(){
            
        }
    }

    const mandrake = new Mandrake(canvas.width, canvas.height);
    
    function animate(){
        mandrake.draw(ctx);
    }

    animate();
});

