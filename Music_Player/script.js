// let song = document.getElementById("song");
// let ctrlIcon = document.getElementById("ctrl-icon");
// let progress = document.getElementById("progress");

// // onloadmetadata = Occurs when the duration and dimensions of the media have been determined.
// song.onloadedmetadata = () => {
//   progress.max = song.duration;
//   progress.value = song.currentTime;
// };

// const playPause = () => {
//   if (ctrlIcon.classList.contains("fa-pause")) {
//     song.pause();
//     ctrlIcon.classList.remove("fa-pause");
//     ctrlIcon.classList.add("fa-play");
//   } else {
//     song.play();
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.remove("fa-play");
//   }
// };

// if (song.play()) {
//   setInterval(() => {
//     progress.value = song.currentTime;
//   }, 500);
// }

// progress.onchange = () => {
//   song.play();
//   song.currentTime = progress.value;
//   ctrlIcon.classList.add("fa-pause");
//   ctrlIcon.classList.remove("fa-play");
// };

const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrl-icon");
const progress = document.getElementById("progress");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

const playPause = () => {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.replace("fa-pause", "fa-play");
  }
};

setInterval(() => {
  progress.value = song.currentTime;
}, 500);

progress.onchange = () => {
  song.currentTime = progress.value;
};
