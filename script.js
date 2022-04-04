// $(function() {

//     var $video = $('.video');
//     var $window = $(window);

//     $window.scroll(function() {

//         var $topOfVideo = $video.offset().top;
//         var $bottomOfVideo = $video.offset().top + $video.outerHeight();

//         var $topOfScreen = $window.scrollTop();
//         var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

//         if (($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)) {
//             $video[0].play();
//         } else {
//             $video[0].pause();
//         }

//     });

// });

// var $video = $('.video');
// var $window = $(window);

// $window.scroll(function() {

//     var $topOfVideo = $video.offset().top;
//     var $bottomOfVideo = $video.offset().top + $video.outerHeight();

//     var $topOfScreen = $window.scrollTop();
//     var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

//     if (($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)) {
//         $video[0].play();
//     } else {
//         $video[0].pause();
//     }

// });


window.addEventListener('lpc:load', function () {
  let video = document.querySelector('.lc-video-block__video-object');
  let playButton = document.getElementById("play-pause");
  let muteButton = document.getElementById("mute")
  let prelodVideo = document.getElementById("video").querySelector('.lc-body-image__title');
  
  video.addEventListener('play',hidtitle,false);
  function hidtitle(e) {
          prelodVideo.classList.add("noprelod");
  };
      
  video.addEventListener('ended',visiblebutton,false);
  function visiblebutton(e) {
          playButton.classList.add("pause");
  };

  // РќР°СЃС‚СЂРѕР№РєР° play/pause РєРЅРѕРїРєРё
  playButton.addEventListener("click", function() {
      if (video.paused == true) {
          // Р—Р°РїСѓСЃРє РІРёРґРµРѕ
          video.play();
  
          // Р—Р°РјРµРЅР° РєРЅРѕРїРєРё РЅР° 'Pause'
          playButton.classList.remove("pause");
          prelodVideo.classList.remove("pause");
      } 
      else {
          // РџР°СѓР·Р° РІРёРґРµРѕ
          video.pause();
  
          // Р—Р°РјРµРЅР° РєРЅРѕРїРєРё РЅР° 'Play'
          playButton.classList.add("pause");
          prelodVideo.classList.add("pause");
      }
  });

  // РќР°СЃС‚СЂРѕР№РєР° Р·РІСѓРєР°
  muteButton.addEventListener("click", function() {
      if (video.muted == false) {
          // Р’С‹РєР»СЋС‡РµРЅ Р·РІСѓРє
          video.muted = true;

          // Р—Р°РјРµРЅР° РєРЅРѕРїРєРё Р·РІСѓРєР°
          muteButton.classList.remove("nomute");
      } else {
          // Р’РєР»СЋС‡РµРЅРёРµ Р·РІСѓРєР°
          video.muted = false;

          // Р—Р°РјРµРЅР° РєРЅРѕРїРєРё Р·РІСѓРєР°
          muteButton.classList.add("nomute");
      }
  });
  
});