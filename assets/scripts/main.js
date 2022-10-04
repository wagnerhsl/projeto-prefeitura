const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
const btns=$all("ul#sounds > li button");
var sounds=new Object();
var audioname=new String();
var btnmute=$('#btnmute');
var playing=true;

for(let i=0;i<btns.length;i++){
    sounds[i]=new Object();
    audioname=btns[i].getAttribute('audioname');
    sounds[i].audio=new Audio(`assets/sounds/${audioname}`);
    sounds[i].audio.loop=true;
    sounds[i].playing=false;
}

for(let j=0;j<btns.length;j++){
    btns[j].addEventListener('click', ()=>{
        if(!sounds[j].playing){        
            btns[j].setAttribute('style', `
                background-color: ${color.random()};
                box-shadow: 0px 0px 2px 2px ${color.random()};
            `);
            if(playing){
                sounds[j].audio.play();
            }
            sounds[j].playing=true;
        }else{
            btns[j].removeAttribute('style');
            sounds[j].audio.pause();
            sounds[j].playing=false;
        }
    });
}

btnmute.addEventListener('click', ()=>{
    if(playing){
        btnmute.innerText="play";
        for(let k=0;k<btns.length;k++){
            if(sounds[k].playing){
                sounds[k].audio.pause();
            }
        }
        playing=false;
    }else{
        btnmute.innerText="mute";
        for(let k=0;k<btns.length;k++){
            if(sounds[k].playing){
                sounds[k].audio.play();
            }
        }
        playing=true;
    }
});

