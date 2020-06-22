// create the basic skeleton of the game

let config = {
    
    type : Phaser.CANVAS,
    height : 800,
    width : 600,
    backgroundColor : 0xffccee,
    
//    in the scene we first have to load the scene then to create it and the to update it
    
    scene : {
    
        preload : preload,//youePreloadfunction(),
        create : create,//yourcreatefunction(),
        update : update //yourupdatefunction()
        
        
    
    }
};

let game = new Phaser.Game(config); // phaser is framework of which Game is a class

function preload(){
    console.log("preload");
    this.load.image('background','./Assets/back.jpg');
    this.load.image('pin','./Assets/pin.png');
    this.load.image('wheel','./Assets/wheel.png');
}
function create(){
    console.log("create");
    let W = game.config.width;
    let H = game.config.height;
    let background = this.add.sprite(W/2,H/2,'background');
    background.setScale(0.40,0.40);
    this.wheel = this.add.sprite(W/2,H/2,'wheel');
    this.wheel.setScale(0.18);
    
     let pin = this.add.sprite(W/2,H/2-175,'pin');
    pin.setScale(0.20);
    
    // adding event listeners
    
    this.input.on('pointerdown',spinwheel,this);
    
    //adding text to the screen
    font_style={
        font : "bold 30px Roboto",
        align : "center",
        color : "red",
    }
    this.game_text = this.add.text(50,150,"Welcome to Spin & Win ",font_style);
    
}

// game loop
function update(){
    console.log("update");
    
    // different properties on the wheel
//    this.wheel.angle +=1;
//    this.wheel.scaleX += 0.001;
//    this.wheel.scaleY +=0.001;
}

function spinwheel(){
    console.log("you pressed the mouse");
//    this.game_text.setText("you clicked the mouse!");
    
    let rounds = Phaser.Math.Between(2,4);
    let angle = Phaser.Math.Between(0,11)*30;
    
    let total_angle = rounds*360 + angle;
    console.log(rounds +"---"+angle +" ---- "+ total_angle);
    
    tween = this.tweens.add({
        targets : this.wheel,
        angle : total_angle,
        ease : "cubic.easeOut",
        duration : 6000,
        callbackScope : this,
        onComplete : function(){
            this.game_text.setText("you won something");
        }
    });
}