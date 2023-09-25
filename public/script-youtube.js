var player;

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
    player.playVideo();
    document.querySelector('.youtube').style.display = 'none'
    });
}

let dot = document.getElementById('dot')
let intervaLoad

// let loadingAnimation = document.getElementById('loading__animation') 

window.onload = function(){
    clearInterval(intervaLoad)
    dot.innerHTML = ''
    document.querySelector('.loading__btn').style.display = 'none'
    document.querySelector('.loading__text').style.display = 'none'
}

function loadingAnimation() {
   intervaLoad = setInterval(() => {
        if(dot.innerText == '...') {
            dot.innerText = '' 
        }
        else{
            dot.innerText += '.'
        }
    }, 600);
}

loadingAnimation()

/*    var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
    player.pauseVideo();
}); */


// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);