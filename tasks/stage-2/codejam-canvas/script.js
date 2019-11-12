const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
var qwe1,qwe2;
let requestURL1 = 'https://github.com/Dmitrukk/tasks/blob/master/tasks/stage-2/codejam-canvas/data/4x4.json';
let requestURL2 = 'https://github.com/Dmitrukk/tasks/blob/master/tasks/stage-2/codejam-canvas/data/32x32.json';
var request1 = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
request1.open('GET', requestURL1, true);
request2.open('GET', requestURL2, true);
request1.responseType = 'json';
request2.responseType = 'json';
request1.onload = function() {
    qwe1 = request1.response;
}
request2.onload = function() {
    qwe2 = request2.response;
}
request1.send();
request2.send();
function draw4x4(){
    for(let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            ctx.fillStyle = '#'+qwe1[i][j];
            ctx.fillRect(i*128,j*128,128,128);
        }
    }
}
function draw32x32(){
    for(let i = 0; i < 32; i++){
        for (let j = 0; j < 32; j++){
            ctx.fillStyle = 'rgba('+qwe2[i][j]+')';
            ctx.fillRect(i*16,j*16,16,16);
        }
    }
}
function draw256x256(){
    let img = new Image();
    img.src = "data/image.png";
    img.onload = function(){
        ctx.drawImage(img,0,0,512,512);
    }    
}
function activate(e){
    document.querySelectorAll('section.menu')[0].children[0].style.background = "#ffff";
    document.querySelectorAll('section.main--switcher')[0].children[1].style.background = "#ffff";
    document.querySelectorAll('section.main--switcher')[0].children[2].style.background = "#ffff";
    e.target.style.background = "#999999";
    if (e.target  === document.querySelectorAll('menu')[0].children[1]) draw32x32();
    if (e.target === document.querySelectorAll('section.main--switcher')[0].children[0]) draw4x4();
    if (e.target === document.querySelectorAll('section.main--switcher')[0].children[2]) draw256x256();
}
var q = document.querySelector('section.menu');
q.addEventListener('click', activate);