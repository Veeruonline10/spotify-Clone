console.log("Welcome to Spotify");
//Initialize to variable
let songIndex = 0;
let audioElement = new Audio('Let me love you.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "Let me love you", filePath: "C:\Users\Veeru kumar\Desktop\websiteswork\spotify/Let me love you.mp3", coverPath: "covers/1.jpg"},
    {songName : "Dil pagal divana", filePath: "C:\Users\Veeru kumar\Desktop\websiteswork\spotify/ Dil pagal divana", coverPath: "covers/1.jpg"}
]

// audioElement.play();

//Handle Play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');   
        gif.style.opacity =0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
