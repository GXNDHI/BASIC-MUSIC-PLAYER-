console.log("Welcome to SLAY");
songIndex=0;
let audioElement = new Audio('Nature.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Sample1",filePath:"Nature.mp3",coverPath:"1200x1200bf-60.jpg"},
    {songName:"Sample2",filePath:"Nature.mp3",coverPath:"1200x1200bf-60.jpg"},
    {songName:"Sample3",filePath:"Nature.mp3",coverPath:"1200x1200bf-60.jpg"},
    {songName:"Sample4",filePath:"Nature.mp3",coverPath:"1200x1200bf-60.jpg"},
    {songName:"Sample5",filePath:"Nature.mp3",coverPath:"1200x1200bf-60.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-google-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-google-play');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-google-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-google-play')
        e.target.classList.add('fa-pause-circle');
        audioElement.play();
    })
})