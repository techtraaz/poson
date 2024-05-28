
var gameDiv = document.getElementById('game-div');
var shoot = document.getElementById('shoot');
var deer = document.getElementById('deer');
var arrow = document.getElementById('arrow');

shoot.addEventListener('click',()=>{
    arrow.style.top = "100px";
});


var currentpos = -90;


function changeDirection(event){
    if(event.key=="ArrowLeft"){
        currentpos += -1;
        arrow.style.rotate = `${currentpos}deg`;
    }
    if(event.key=="ArrowRight"){
        currentpos -= -1;
        arrow.style.rotate = `${currentpos}deg`;
    }
}

document.addEventListener('keydown',changeDirection);

function deerPosition(){
    let xpos = Math.round(Math.random()*640);
    let ypos = Math.round(Math.random()*240);

    deer.style.top = `${ypos}px`;
    deer.style.left = `${xpos}px`;
    

}


setInterval(deerPosition, 3000);

