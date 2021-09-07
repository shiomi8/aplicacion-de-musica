const image = document.getElementById("image");
const play_pause_btn = document.getElementById("play-pause");
const audio = document.getElementById("audio");
const tiempo =document.getElementById("tiempo");
const volume_up_btn =document.getElementById("volume-up");
const volume_down_btn =document.getElementById("volume-down");

let isplaying = false;

play_pause_btn.addEventListener('click',()=>{
    if(isplaying)
    {
        audio.pause();
        image.style.animationPlayState="paused";
        isplaying=false;
    }
    else
    {
        audio.play();
        image.style.animationPlayState="running";
        isplaying=true;
    }
});
window.addEventListener("load",()=>{
    tiempo.max = audio.duration;
    setInterval(() => {
        tiempo.value = audio.currentTime; 
    }, 1000);
})
tiempo.addEventListener("change",()=>{
    audio.currentTime=tiempo.value;
})

volume_up_btn.addEventListener('click',()=>{
    audio.volume = audio.volume + 0.1;
})
volume_down_btn.addEventListener('click',()=>{
    audio.volume = audio.volume - 0.1;
})
document.addEventListener("keyup", (event)=>{
    if(event.keyCode == 32){
        if(isplaying){
            audio.pause();
            image.style.animationPlayState = "paused"
            isplaying = false;
        }
        else
        {
            audio.play();
            image.style.animationPlayState = "running"
            isplaying = true
        }
    }
});


document.addEventListener("keydown",(event)=>{
    if(event.key=="ArrowUp"){
        audio.volume.botoom=audio.volume + 0.1
    }
    else
    if(event.key=="ArrowDown"){
        audio.volume.top=audio.volume - 0.1
    }
})