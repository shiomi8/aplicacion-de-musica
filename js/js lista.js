const play_pause_btn = document.getElementById("play-pause");
const play_pause_icon = document.getElementById("play-pause-icon")
const audio = document.getElementById("audio");
const tiempo = document.getElementById("tiempo");
const volume_up_btn = document.getElementById("volume-up");
const volume_down_btn = document.getElementById("volume-down");
const invicible_btn = document.getElementById("invicible");
const cover_card_img = document.getElementById("cover-card-img");

const canciones = [
    {
        id:1,
        title:"Chicken Noodle Soup",
        audio:"audios/j-hope Chicken Noodle Soup (feat. Becky G) MV_50k.mp3 ",
        cover:"img/2.png",
        artist:"j-hope"
    },
    {
        id:2,
        title:"My Universe",
        audio:"audios/Coldplay X BTS - My Universe (Official Lyric Video)_70k.mp3 ",
        cover:"img/1f.png",
        artist:"Coldplay X BTS"
    },
    {
        id:3,
        title:"How You Like That",
        audio:"audios/BLACKPINK - How You Like That DANCE PERFORMANCE VIDEO_50k.mp3 ",
        cover:"img/7f.png",
        artist:"Blackpink"
    },
    {
        id:4,
        title:"Smile again",
        audio:"audios/blackbear - smile again Official Music Video _160k.mp3 ",
        cover:"img/1.png",
        artist:"blackbear"
    },
    {
        id:5,
        title:"Perfect Strangers",
        audio:"audios/Jonas Blue - Perfect Strangers ft. JP Cooper (Official Video)_50k.mp3 ",
        cover:"img/2f.png",
        artist:"Jonas Blue"
    },
    {
        id:6,
        title:"Make It Right",
        audio:"audios/Make It Right - BTS (Traducida al español)_70k.mp3 ",
        cover:"img/5.png",
        artist:"BTS"
    },
    {
        id:7,
        title:"Andan Diciendo",
        audio:"audios/Andan Diciendo_70k.mp3 ",
        cover:"img/3.png",
        artist:"Ventino"
    },
]

canciones.forEach((e)=>{
    invicible_btn.insertAdjacentHTML("beforeend",
    `
    <div class="list-item" id="${e.id}">
        <img class="cover" src="${e.cover}" alt="${e.title}">
        <div class="song-data">
            <div>${e.title}</div>
            <div>${e.artist}</div>
        </div>
    </div>
    `
    );
});
const play_card = (obj_audio)=>{
    const cover_card_img = document.getElementById("cover-card-img")
    cover_card_img.src=obj_audio.cover;
}
const play_audio = (id) =>{
    const res = canciones.find((e)=>e.id == id);
    if (res){
        audio.src = res.audio;
        audio.play();
        play_card(res);
        if(is_playing){
            
            cover_card_img.style.animationPlayState="paused"
            
            play_pause_icon.classList.remove('fa-pause')
            is_playing=false;      
        }
        else{
            audio.play();
            cover_card_img.style.animationPlayState="running"
            play_pause_icon.classList.add('fa-pause')
            play_pause_icon.classList.remove('fa-play')
            is_playing=true;
        }
    }
};
invicible_btn.addEventListener("click", (e)=>{
    if (e.target.matches(".list-item")){
        play_audio(e.target.id);
        let aux = canciones.find((element) => element.id==e.target.id)
        if(aux){
            play_card(aux);
        }
    }else if(e.target.matches(".cover")){
        play_audio(e.target.parentNode.id);
        let aux = canciones.find((element) => element.id==e.target.parentNode.id);
        if(aux){
            play_card(aux);
        }
    }else if(e.target.matches(".song-data")){
        play_audio(e.target.parentNode.id);
        let aux = canciones.find((element) => element.id==e.target.parentNode.id)
        if(aux){
            play_card(aux);
        }
    }else if(e.target.matches(".song-data div")){
        play_audio(e.target.parentNode.parentNode.id);
        let aux = canciones.find((element) => element.id==e.target.parentNode.parentNode.id)
        if(aux){
            play_card(aux);
        }
    }
});
let is_playing=false;
play_pause_btn.addEventListener("click",()=>{
    if(is_playing){
        audio.pause();
        cover_card_img.style.animationPlayState="paused"
        play_pause_icon.classList.add('fa-play')
        play_pause_icon.classList.remove('fa-pause')
        is_playing=false;      
    }
    else{
        audio.play();
        cover_card_img.style.animationPlayState="running"
        play_pause_icon.classList.add('fa-pause')
        play_pause_icon.classList.remove('fa-play')
        is_playing=true;
    }
}
);