(function($){


    'use strict';

    var myAudio_01 = new Audio('audio/0_jiayiLi_chocolateStirrer.mp3');
    var myAudio_02 = new Audio('audio/0_chloeReichel_naumanAndGreenVideos.mp3');
    var myAudio_03 = new Audio('audio/0_rachelThompson_koreanBoy.mp3');
    var myAudio_04 = new Audio('audio/0_showlyNicholson_incensario.mp3');
    var myAudio_05 = new Audio('audio/0_snowRui_portraitOfLittleElk.mp3');
    var myAudio_06 = new Audio('audio/0_saraPrice_bihaPaten.mp3');

    myAudio_01.volume = 1.0;
    myAudio_02.volume = 1.0;
    myAudio_03.volume = 1.0;
    myAudio_04.volume = 1.0;
    myAudio_05.volume = 0.4;
    myAudio_06.volume = 0.4;

    var mySlider_1;
    var mySlider_2;
    var mySlider_3;
    var mySlider_4;
    var mySlider_5;
    var mySlider_6;
    var mySlider_grid;

    var myOpacity = 0.2;
    var defaultOpacity = 1.0;





    $(document).ready(function(){ 



document.body.style.transform = 'scale(0.53)';
document.body.style.margin = '2px 0 0 -310px';



        //$('.bxslider').bxSlider({
        mySlider_1 = $('#slider_1').bxSlider({
          mode: 'fade',
          auto: false,
          autoHoverPlay: false,  // true
          //auto: true,
          //autoHover: true,
          speed: 800,
          pause: 21600,           // 21600
          captions: false,  
          pager: false,    
          controls: false        // true,
          //pagerCustom: '#bx-pager'
          /*
          buildPager: function(slideIndex){
              switch(slideIndex){
                case 0:
                  return '<img src="img/thumbs/01.png">';
                case 1:
                  return '<img src="img/thumbs/02.png">';
                case 2:
                  return '<img src="img/thumbs/03.png">';
                case 3:
                  return '<img src="img/thumbs/04.png">';
              }
            }
            */
        });
        mySlider_2 = $('#slider_2').bxSlider({
          mode: 'fade',
          auto: false,
          autoHoverPlay: false,  // true
          speed: 800,
          pause: 38000,           // 38000
          captions: false,
          pager: false,
          controls: false
        });
        mySlider_3 = $('#slider_3').bxSlider({
          mode: 'fade',
          auto: false,
          autoHoverPlay: false,  // true
          speed: 800,
          pause: 1800,
          captions: false,
          pager: false,
          controls: false
        });
        mySlider_4 = $('#slider_4').bxSlider({
          mode: 'fade',
          auto: false,
          autoHoverPlay: false,  // true
          speed: 800,
          pause: 5350,           // 5350
          captions: false,
          pager: false,
          controls: false
        });
        mySlider_5 = $('#slider_5').bxSlider({
          mode: 'fade',
          auto: false,
          autoHoverPlay: false,  // true
          speed: 800,
          pause: 48000,          // 48000
          captions: false,
          pager: false,
          controls: false
        });
        mySlider_6 = $('#slider_6').bxSlider({
          mode: 'fade',
          auto: false,
          autoHoverPlay: false,  // true
          speed: 800,
          pause: 1800,
          captions: false,
          pager: false,
          controls: false
        });
        mySlider_grid = $('#slider_grid').bxSlider({
          mode: 'fade',
          auto: true,
          autoHoverPlay: false,  // true
          speed: 600,
          pause: 2400,
          captions: false,
          pager: false,
          controls: false
        });

        $('#grid_2').hide();
        $('#grid_3').show();
    });


    $('body').keypress(function (e) { 

        // "T"--Chloe Reichel, Mather House ’15, Social Studies [Nauman + Green videos]
        if (e.keyCode == 116) { 
            stopAllSound();
            resetPanels();
            playSound(myAudio_02); 

            mySlider_2.startAuto();             

            $('#shade_2').css({
                  opacity: '1.0'
            });
            $('#shade_1').fadeTo('slow', myOpacity); 
            $('#shade_3').fadeTo('slow', myOpacity); 
            $('#shade_4').fadeTo('slow', myOpacity); 
            $('#shade_5').fadeTo('slow', myOpacity); 
            $('#shade_6').fadeTo('slow', myOpacity); 

            //ga('send', 'event', 'Panel 1 - Play', 'keypress = T', 'Chloe Reichel [Videos]');











            /*
            $('#shade_1').css({
                  opacity: myOpacity
            });
            $('#shade_2').css({
                  opacity: '1.0'
            });
            $('#shade_3').css({
                  opacity: myOpacity
            });
            $('#shade_4').css({
                  opacity: myOpacity
            });
            $('#shade_5').css({
                  opacity: myOpacity
            });
            $('#shade_6').css({
                  opacity: myOpacity
            });    
            */  
        }
        
        // "Y"--Jiayi Li, Kirkland House ’15, Economics [Chocolate stirrer]
        if (e.keyCode == 121) { 
            stopAllSound();
            resetPanels();
            playSound(myAudio_01); 

            mySlider_1.startAuto();
            
            $('#shade_1').css({
                  opacity: '1.0'
            });
            $('#shade_2').fadeTo('slow', myOpacity); 
            $('#shade_3').fadeTo('slow', myOpacity); 
            $('#shade_4').fadeTo('slow', myOpacity); 
            $('#shade_5').fadeTo('slow', myOpacity); 
            $('#shade_6').fadeTo('slow', myOpacity); 

            //ga('send', 'event', 'Panel 2 - Play', 'keypress = Y', 'Jiayi Li [Chocolate stirrer]');

            /*
            $('#shade_1').css({
                  opacity: '1.0'
            });
            $('#shade_2').css({
                  opacity: myOpacity
            });
            $('#shade_3').css({
                  opacity: myOpacity
            });
            $('#shade_4').css({
                  opacity: myOpacity
            });
            $('#shade_5').css({
                  opacity: myOpacity
            });
            $('#shade_6').css({
                  opacity: myOpacity
            });   
            */  
        }

        // "U"--Rachel Thompson, Winthrop House ’16, Social Anthropology and Comparative Literature [Korean boy in bookstore photo]
        if (e.keyCode == 117) { 
            stopAllSound();
            resetPanels();
            playSound(myAudio_03); 

            $('#shade_3').css({
                  opacity: '1.0'
            });
            $('#shade_1').fadeTo('slow', myOpacity); 
            $('#shade_2').fadeTo('slow', myOpacity); 
            $('#shade_4').fadeTo('slow', myOpacity); 
            $('#shade_5').fadeTo('slow', myOpacity); 
            $('#shade_6').fadeTo('slow', myOpacity); 

            //ga('send', 'event', 'Panel 3 - Play', 'keypress = U', 'Rachel Thompson [Korean boy in bookstore]');

            /*
            $('#shade_1').css({
                  opacity: myOpacity
            });
            $('#shade_2').css({
                  opacity: myOpacity
            });
            $('#shade_3').css({
                  opacity: '1.0'
            });
            $('#shade_4').css({
                  opacity: myOpacity
            });
            $('#shade_5').css({
                  opacity: myOpacity
            });
            $('#shade_6').css({
                  opacity: myOpacity
            });  
            */   
        }

        // "B"--Showly Nicholson, Pforzheimer House ‘16, East Asian Languages and Civilizations [Incensario – skull]
        if (e.keyCode == 98) { 
            stopAllSound();
            resetPanels();
            playSound(myAudio_04); 

            mySlider_4.startAuto();

            $('#shade_4').css({
                  opacity: '1.0'
            });
            $('#shade_1').fadeTo('slow', myOpacity); 
            $('#shade_2').fadeTo('slow', myOpacity); 
            $('#shade_3').fadeTo('slow', myOpacity); 
            $('#shade_5').fadeTo('slow', myOpacity); 
            $('#shade_6').fadeTo('slow', myOpacity); 

            //ga('send', 'event', 'Panel 4 - Play', 'keypress = B', 'Showly Nicholson [Incensario]');

            /*
            $('#shade_1').css({
                  opacity: myOpacity
            });
            $('#shade_2').css({
                  opacity: myOpacity
            });
            $('#shade_3').css({
                  opacity: myOpacity
            });
            $('#shade_4').css({
                  opacity: '1.0'
            });
            $('#shade_5').css({
                  opacity: myOpacity
            });
            $('#shade_6').css({
                  opacity: myOpacity
            });  
            */   
        }

        // "N"--Snow Rui, Winthrop House ’15, Archaeology [Portrait of Little Elk]
        if (e.keyCode == 110) { 
            stopAllSound();
            resetPanels();
            playSound(myAudio_05); 

            mySlider_5.startAuto();

            $('#shade_5').css({
                  opacity: '1.0'
            });
            $('#shade_1').fadeTo('slow', myOpacity); 
            $('#shade_2').fadeTo('slow', myOpacity); 
            $('#shade_3').fadeTo('slow', myOpacity); 
            $('#shade_4').fadeTo('slow', myOpacity); 
            $('#shade_6').fadeTo('slow', myOpacity); 

            //ga('send', 'event', 'Panel 5 - Play', 'keypress = N', 'Snow Rui [Portrait of Little Elk]');

            /*
            $('#shade_1').css({
                  opacity: myOpacity
            });
            $('#shade_2').css({
                  opacity: myOpacity
            });
            $('#shade_3').css({
                  opacity: myOpacity
            });
            $('#shade_4').css({
                  opacity: myOpacity
            });
            $('#shade_5').css({
                  opacity: '1.0'
            });
            $('#shade_6').css({
                  opacity: myOpacity
            });  
            */   
        }
        
        // "M"--Sara Price, Adams House ’16, History and Science [Biha Paten]
        if (e.keyCode == 109) { 
            stopAllSound();
            resetPanels();
            playSound(myAudio_06);

            $('#shade_6').css({
                  opacity: '1.0'
            });
            $('#shade_1').fadeTo('slow', myOpacity); 
            $('#shade_2').fadeTo('slow', myOpacity); 
            $('#shade_3').fadeTo('slow', myOpacity); 
            $('#shade_4').fadeTo('slow', myOpacity); 
            $('#shade_5').fadeTo('slow', myOpacity);  

            //ga('send', 'event', 'Panel 6 - Play', 'keypress = M', 'Sara Price [Biha Paten]');

            /*
            $('#shade_1').css({
                  opacity: myOpacity
            });
            $('#shade_2').css({
                  opacity: myOpacity
            });
            $('#shade_3').css({
                  opacity: myOpacity
            });
            $('#shade_4').css({
                  opacity: myOpacity
            });
            $('#shade_5').css({
                  opacity: myOpacity
            });
            $('#shade_6').css({
                  opacity: '1.0'
            });   
            */  
        }

        // "G, H, J"--stop all, back to default
        if (e.keyCode == 103 || e.keyCode == 104 || e.keyCode == 106) { 
            stopAllSound();
            backToDefault();
            //ga('send', 'event', 'Stop audio', 'keypress = G/H/J', 'Stop audio');
        }
    });


    myAudio_01.addEventListener('ended', function(){
        stopAllSound();
        backToDefault();
        console.log('ended_01');
    });
    myAudio_02.addEventListener('ended', function(){
        stopAllSound();
        backToDefault();
        console.log('ended_02');
    });
    myAudio_03.addEventListener('ended', function(){
        stopAllSound();
        backToDefault();
        console.log('ended_03');
    });
    myAudio_04.addEventListener('ended', function(){
        stopAllSound();
        backToDefault();
        console.log('ended_04');
    });
    myAudio_05.addEventListener('ended', function(){
        stopAllSound();
        backToDefault();
        console.log('ended_05');
    });
    myAudio_06.addEventListener('ended', function(){
        stopAllSound();
        backToDefault();
        console.log('ended_06');
    });


    var playSound = function(soundObj) {
        //soundObj.currentTime = 0;
        $('#grid_2').show();
        $('#grid_3').hide();
        mySlider_grid.stopAuto();
        mySlider_grid.goToSlide(0);

        soundObj.play();
        console.log(' Play ' + $(soundObj)  + ' : currentTime= ' + soundObj.currentTime + ', duration= ' + soundObj.duration);
    };

    var stopAllSound = function(){
        myAudio_01.pause();
        myAudio_01.currentTime = 3.1;
        myAudio_02.pause();
        myAudio_02.currentTime = 0.8;
        myAudio_03.pause();
        myAudio_03.currentTime = 2.3;
        myAudio_04.pause();
        myAudio_04.currentTime = 2.3;
        myAudio_05.pause();
        myAudio_05.currentTime = 2.9;
        myAudio_06.pause();
        myAudio_06.currentTime = 3.2;
    };

    var resetPanels = function(){
        mySlider_1.stopAuto();
        mySlider_2.stopAuto();
        mySlider_3.stopAuto();
        mySlider_4.stopAuto();
        mySlider_5.stopAuto();
        mySlider_6.stopAuto();

        mySlider_1.goToSlide(0);
        mySlider_2.goToSlide(0);
        mySlider_3.goToSlide(0);
        mySlider_4.goToSlide(0);
        mySlider_5.goToSlide(0);
        mySlider_6.goToSlide(0);

        $('#shade_1').css({
              opacity: '1.0'
        });
        $('#shade_2').css({
              opacity: '1.0'
        });
        $('#shade_3').css({
              opacity: '1.0'
        });
        $('#shade_4').css({
              opacity: '1.0'
        });
        $('#shade_5').css({
              opacity: '1.0'
        });
        $('#shade_6').css({
              opacity: '1.0'
        });  
    };

    var backToDefault = function(){
        mySlider_1.stopAuto();
        mySlider_2.stopAuto();
        mySlider_3.stopAuto();
        mySlider_4.stopAuto();
        mySlider_5.stopAuto();
        mySlider_6.stopAuto();

        mySlider_1.goToSlide(0);
        mySlider_2.goToSlide(0);
        mySlider_3.goToSlide(0);
        mySlider_4.goToSlide(0);
        mySlider_5.goToSlide(0);
        mySlider_6.goToSlide(0);

        $('#shade_1').fadeTo('slow', '1.0');
        $('#shade_2').fadeTo('slow', '1.0');
        $('#shade_3').fadeTo('slow', '1.0');
        $('#shade_4').fadeTo('slow', '1.0');
        $('#shade_5').fadeTo('slow', '1.0');
        $('#shade_6').fadeTo('slow', '1.0');

        $('#grid_2').hide();
        $('#grid_3').show();
        mySlider_grid.goToSlide(0);
        mySlider_grid.startAuto();
    };




/*
var updateTime = function(){
    var thisPlayer = $(this);
    var widthOfProgressBar = Math.floor( (100 / this.duration) * this.currentTime);
    $('#songIdForPorgessBar').css({
        'width':widthOfProgressBar+'%'
    });
}
*/




})(jQuery); 