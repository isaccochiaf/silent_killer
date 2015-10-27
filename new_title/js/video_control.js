 var video = document.getElementById("bgvid"),
     pauseButton = document.querySelector(".player button");
 var textplay = '<i class="fa fa-pause"></i>'
 var textpause = '<i class="fa fa-play"></i>'
 var textreplay = '<i class="fa fa-undo"></i>'






 video.addEventListener('ended', function () {
     // only functional if "loop" is removed 
     video.pause();

     video.classList.toggle("opac-off");
     pauseButton.innerHTML = textreplay;
     pauseButton.classList.toggle("opac");
 }, false);

 pauseButton.addEventListener("click", function () {
     video.classList.toggle("opac-off");
     pauseButton.classList.toggle("opac");


     if (video.paused) {
         video.play();
         pauseButton.innerHTML = textplay;
     } else {
         video.pause();
         pauseButton.innerHTML = textpause;
     }
 }, false);



 video.addEventListener('touchstart', function (e) {
     e.preventDefault();
     video.play();
 });
