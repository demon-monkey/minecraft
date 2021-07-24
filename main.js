canvas=new fabric.Canvas("myCanvas");
var blockWidth=30;
var blockheight=30;

var player_object="";
var block_object="";

var player_x=10;
var player_y=10;

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);

    });
}
function block_update(new_img){
    fabric.Image.fromURL(new_img,function(img){
        block_object=img;
        block_object.scaleToWidth(blockWidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);

    });
}

window.addEventListener("keydown",My_keydown)

function My_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if (e.shiftKey==true&&keypressed=='80'){
    console.log("shift & p pressed");
    blockWidth=blockWidth+10;
    blockheight=blockheight+10;
    document.getElementById("Current_width").innerHTML=blockWidth;
    document.getElementById("Current_Height").innerHTML=blockheight;
}
if (e.shiftKey==true&&keypressed=='77'){
    console.log("shift & m pressed");
    blockWidth=blockWidth-10;
    blockheight=blockheight-10;
    document.getElementById("Current_width").innerHTML=blockWidth;
    document.getElementById("Current_Height").innerHTML=blockheight;
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='67'){
    block_update("cloud.jpg");
    console.log("clouds");
}
if(keypressed=='68'){
    block_update("dark_green.png");
    console.log("dark green");
}
if(keypressed=='71'){
    block_update("ground.png");
    console.log("ground");
}
if(keypressed=='76'){
    block_update("light_green.png");
    console.log("light green");
}
if(keypressed=='82'){
    block_update("roof.jpg");
    console.log("netherrack roof");
}
if(keypressed=='84'){
    block_update("trunk.jpg");
    console.log("trunk");
}
if(keypressed=='85'){
    block_update("unique.png");
    console.log("unique");
}
if(keypressed=='89'){
    block_update("yellow_wall.png");
    console.log("yellow wall");
}
if(keypressed=='87'){
    block_update("wall.jpg");
    console.log("wall");
}
}

function up(){
if(player_y>=0){
    player_y=player_y-blockheight;
    console.log(player_y);
    canvas.remove(player_object);
    player_update();
}
}

function down(){
    if(player_y<=600){
        player_y=player_y+blockheight;
        console.log(player_y);
canvas.remove(player_object);
player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-blockWidth;
        console.log(player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=900){
        player_x=player_x+blockWidth;
        console.log(player_x);
        canvas.remove(player_object);
        player_update();
    }
}