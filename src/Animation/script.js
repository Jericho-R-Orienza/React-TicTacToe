window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    console.log(ctx);

    class Mandrake {
        constructor() {
            this.image = document.getElementById('mandrake');
            this.spriteWidth = 256;
            this.spriteHeight = 256;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = 0;
            this.y = 0;
            this.minFrame = 0;
            this.maxFrame = 355;
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y);
            

        }
        update(){
            
        }
    }

    const mandrake = new Mandrake();
    
    function animate(){
        mandrake.draw();
    }

    animated();
});

