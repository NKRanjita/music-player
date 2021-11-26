const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");

const progress_div = document.getElementById("progress_div")

const songs = [
{
  name: "DKKA",
  title: "Dil Ko Karar Aaya",
  artist: "Yasser D., Neha K.",
},

{
  name: "YDTB",
  title:"Yeh Dil Tum Bin",
  artist: "Lata Mangeshkar, Md Rafi",
},
{
  name: "BJHC",
  title: "Bhut Jatate Hain",
  artist: "Mohd Aziz,Alka Yagnik",
},
{
  name: "DKKA",
  title: "Dil Ko Karar Aaya",
  artist: "Yasser Desai, Neha Kakkar",
},

{

  name: "ATSH",
  title: "Agr Tum Sath Ho",
  artist: "Alka Yagnik,Arijit Singh",
},
{
  name: "THH",
  title: "Tu Hi Haqeeqat",
  artist: "Alka Yagnik,Arijit Singh",
},
{
  name: "Jan Ban Gaye",
  title: "Jan Ban Gaye",
  artist: "Vidyut ,Shivaleeka,Mith",
},

{
  name: "Bahara",
  title: "Bahara",
  artist: "Sona,Shreya,Vishal",
},
{
  name: "Tu Mileya",
  title: "Tu Mileya",
  artist: "Darshan Raval",
},
{
  name: "waalian",
  title: "Waalian",
  artist: "Harnoor",
},
{
  name: "KT",
  title: "Kabhi tumhe",
  artist: "Mohsin",
},
{
  name: "RL",
  title: "Raataan Lambiyan",
  artist: "Tanishk Bagchi",
},
{
  name: "ljg",
  title: "Lag Ja Gale",
  artist: "Lata Mangeshkar",
},


];


let isPlaying = false;
// play function
  
const playMusic= () => {
    isPlaying = true;
    music.play();
play.classList.replace('bx-play', 'bx-pause');
img.classList.add("anime");
};


 //pause function

const pauseMusic = () => {
    isPlaying = false
    music.pause();
play.classList.replace('bx-pause', 'bx-play');
img.classList.remove("anime");
};


play.addEventListener('click', () => {
isPlaying ? pauseMusic() : playMusic();
});


//Change the music 
const loadSong=(songs) => {
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src = "music/" + songs.name + ".mp3";
img.src ="images/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () => {
 songIndex =(songIndex + 1) % songs.length;
loadSong(songs[songIndex]);
playMusic();
};

const prevSong = () => {
songIndex =(songIndex - 1 + songs.length) % songs.length;
loadSong(songs[songIndex]);
playMusic();
};



music.addEventListener('timeupdate', (event) => {

const { currentTime, duration } = event.srcElement;

let progress_time = (currentTime / duration) * 100;
progress.style.width = `${progress_time}%`;



let min_duration = Math.floor(duration / 60);
let sec_duration =Math.floor(duration % 60);

let tot_duration = `${min_duration} : ${sec_duration}`;
if(duration){
total_duration.textContent = `${tot_duration}`;
}




let min_currentTime = Math.floor(currentTime / 60);
let sec_currentTime = Math.floor(currentTime % 60);


if(sec_currentTime < 10) {
   sec_currentTime = `0${sec_currentTime}`;
}

let tot_currentTime = `${min_currentTime} : ${sec_currentTime}`;
current_time.textContent = `${tot_currentTime}`;
});
 
 

 progress_div.addEventListener("click", (event) => {
     console.log(event);
     const { duration } = music;
      
     let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
     
     music.currentTime = move_progress;
 });

 
 music.addEventListener("ended", nextSong);

 next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

