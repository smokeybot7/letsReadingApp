$(document).ready(function (){
  var highlighted_text = "";
  var book_page_1 = ["./img/1_outline.jpg",
                     "./img/1_ladka.png",
                     "./img/1_house.png",
                     "./img/1_calf.png",
                     "./img/1_sun.png",
                     "./img/1_background.png"
                    ];
  var page = 0;
  var time = "";
  var timeout_1; var timeout_2; var timeout_3;
  var detectTap = false;
  var screen = "";
  $("#voice")[0].pause();
  $("#voice").attr("src"," ");

  story_1();
  story_1.splash();
  //story_1.listen_s_1();

  function getSelText()
  {
    var txt = '';
    if (window.getSelection){ txt = window.getSelection(); }
    else if (document.getSelection){ txt = document.getSelection(); }
    else if (document.selection){ txt = document.selection.createRange().text; }
    else return;
    document.aform.selectedtext.value =  txt;
  }

  $(document).on('touchstart', function() {   //detects all touch events
    detectTap = true; 
  });

  $(document).on('touchmove', function() {    //Excludes the scroll events from touch events
    detectTap = false; 
  });

  $(document).on('click touchend', function(event) {
    if (event.type == "click") detectTap = true;      //detects click events 
    if (detectTap){
      }
  });


  function story_1(){

    function splash(){
      screen = "splash";
      $("#image_1").css("visibility","visible");
      $("#image_1").css("display","block");
      $("#image_1").fadeIn();
      $("#image_1").attr("src","./img/splash_screen.png");
      timeout_1 = setTimeout(function(){ $('#image_1').fadeOut(); },3000);
      timeout_2 = setTimeout(function(){ login(); },3500);
    }

    function login(){
      screen = "login";
      $("#image_1").attr("src","./img/login.png");
      $("#image_1").fadeIn();
      $("#image_button_1").css("visibility","visible");
      $("#image_button_1").css("display","inline-block");
      $("#image_button_1").fadeIn(); 
    }

    function home(){ 
      screen = "home";
      $("#image_1").attr("src","./img/home.png");
      $("#image_1").fadeIn();
      $("#image_button_1").css("background-color","transparent");
      $("#image_button_1").text("");
      $("#image_button_1").css("top","18%");
      $("#image_button_1").css("left","6.7%");
      $("#image_button_1").css("height","19%");
      $("#image_button_1").css("width","32%");

      $("#voice")[0].pause();
      $("#voice").attr("src"," ");
    }

    function book_mode(){
      screen = "book_mode";
      $("#image_1").attr("src","./img/home_dark.png");
      $("#image_2").css("visibility","visible");
      $("#image_2").css("display","block");
      $("#image_2").attr("src","./img/mode_menu.png");
      $("#image_2").fadeIn();

      $("#image_button_1").css("position","fixed");
      $("#image_button_1").css("top","67%");
      $("#image_button_1").css("left","26.7%");
      $("#image_button_1").css("height","7%");
      $("#image_button_1").css("width","18%");

      $("#image_button_2").css("visibility","visible");
      $("#image_button_2").css("display","inline-block");
      $("#image_button_2").css("background-color","transparent");
      $("#image_button_2").css("position","fixed");
      $("#image_button_2").css("top","67%");
      $("#image_button_2").css("left","54.3%");
      $("#image_button_2").css("height","7%");
      $("#image_button_2").css("width","18%");
      $("#image_button_2").fadeIn();
    }

    function listen_s_1(){
      screen = "listen_s";
      page = 1;
      $("#image_2").css("visibility","hidden");
      $("#image_2").css("display","none");
      $(".navigation_button").css("display","inline-block");
      $(".navigation_button").css("visibility","visible");

      $("#image_1").css("width","50%");
      $("#image_1").css("transform","translate(49%, 0%)");
      $("#image_1").attr("src","./img/s_1.jpg");
      $("#image_1").fadeIn();

      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#music").attr("src","./audio/intro_loop.mp3");
      $("#music")[0].play();
      $("#music")[0].volume = 0.4;

      $("#voice").attr("src","./audio/1a.mp3");
      $("#voice")[0].play();
      $("#voice")[0].onended = function(){                   
        $("#voice").attr("src","./audio/1b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice").attr("src","./audio/1c.mp3");
          $("#voice")[0].play();
          $("#voice")[0].onended = function(){
            timeout_1 = setTimeout(function(){ page++; listen_s_2(); },2000);
          }
        }
      }
    }

    function listen_s_2(){
      $("#image_1").css("width","100%");
      $("#image_1").css("transform","translate(0%, 0%)");
      $("#image_1").attr("src","./img/s_2.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#voice").attr("src","./audio/1d.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        timeout_1 = setTimeout(function(){ page++; listen_s_3(); },2000);
      } 
    }

    function listen_s_3(){
      $("#image_1").attr("src","./img/s_3.jpg");
      $("#image_1").fadeIn();
      
      $("#image_button_1, #image_button_2, #image_button_3").css("position","absolute");
      $("#image_button_1, #image_button_2, #image_button_3").css("height","473px");
      $("#image_button_1, #image_button_2, #image_button_3").css("width","494px");
      $("#image_button_1, #image_button_2, #image_button_3").css("transform","scale(0.1,0.1)");
      $("#image_button_1, #image_button_2, #image_button_3").css("background-color","#ebedf200");
      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");

      $("#image_button_1, #image_button_2").css("visibility","visible");
      $("#image_button_1, #image_button_2").css("display","inline-block");

      $("#image_button_1").css("top","37%");
      $("#image_button_1").css("left","-7%");

      $("#image_button_2").css("top","53%");
      $("#image_button_2").css("left","46%");

      $("#music").animate( {volume : 0}, 3000);
      timeout_1 = setTimeout(function(){ $("#music")[0].pause(); $("#music").attr("src"," "); },5000);
      
      $("#voice").attr("src","./audio/2a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice").attr("src","./audio/2b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }     
    }

    function listen_s_4(){
      $("#image_1").attr("src","./img/s_4.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1").css("top","4%");
      $("#image_button_1").css("left","-5%");

      $("#image_button_2").css("top","33%");
      $("#image_button_2").css("left","47%");

      $("#voice").attr("src","./audio/3a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice").attr("src","./audio/3b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }   
    }

    function listen_s_5(){
      $("#image_1").attr("src","./img/s_5.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1").css("top","49%");
      $("#image_button_1").css("left","-10%");

      $("#image_button_2").css("top","11%");
      $("#image_button_2").css("left","35%");

      $("#voice").attr("src","./audio/4a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice").attr("src","./audio/4b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }  
    }

    function listen_s_6(){
      $("#image_1").attr("src","./img/s_6.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1").css("top","-7%");
      $("#image_button_1").css("left","4%");

      $("#image_button_2").css("top","47%");
      $("#image_button_2").css("left","2%");

      $("#image_button_3").css("visibility","visible");
      $("#image_button_3").css("display","inline-block");
      $("#image_button_3").css("top","55%");
      $("#image_button_3").css("left","40%");

      $("#voice").attr("src","./audio/5a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice").attr("src","./audio/5b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice").attr("src","./audio/5c.mp3");
          $("#voice")[0].play();
          $("#voice")[0].onended = function(){
            $("#voice")[0].pause();
            $("#voice").attr("src"," ");
          }
        }
      }  
    }

    function listen_s_7(){
      $("#image_1").attr("src","./img/s_7.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1").css("top","51%");
      $("#image_button_1").css("left","-10%");

      $("#image_button_2").css("top","41%");
      $("#image_button_2").css("left","43%");

      $("#image_button_3").css("visibility","hidden");
      $("#image_button_3").css("display","none");

      $("#voice").attr("src","./audio/6a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice").attr("src","./audio/6b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }  
    }

    function listen_s_8(){
      $("#image_1").attr("src","./img/s_8.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1, #image_button_2").css("visibility","visible");
      $("#image_button_1, #image_button_2").css("display","inline-block");

      $("#image_button_1").css("top","63%");
      $("#image_button_1").css("left","-8%");

      $("#image_button_2").css("top","58%");
      $("#image_button_2").css("left","39%");

      $("#voice").attr("src","./audio/7a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice").attr("src","./audio/7b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      } 
    }

    function listen_s_9(){
      $("#image_1").css("width","100%");
      $("#image_1").css("transform","translate(0%, 0%)");
      $("#image_1").attr("src","./img/s_9.jpg");
      $("#image_1").fadeIn();   

      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#voice")[0].pause();
      $("#voice").attr("src"," "); 
    }

    function listen_s_10(){
      $("#image_1").css("width","50%");
      $("#image_1").css("transform","translate(49%, 0%)");
      $("#image_1").attr("src","./img/s_10.jpg");
      $("#image_1").fadeIn();   

      $("#voice")[0].pause();
      $("#voice").attr("src"," "); 
    }
    
    story_1.splash = splash;
    story_1.home = home;
    story_1.book_mode = book_mode;
    story_1.listen_s_1 = listen_s_1;
    story_1.listen_s_2 = listen_s_2;
    story_1.listen_s_3 = listen_s_3;
    story_1.listen_s_4 = listen_s_4;
    story_1.listen_s_5 = listen_s_5;
    story_1.listen_s_6 = listen_s_6;
    story_1.listen_s_7 = listen_s_7;
    story_1.listen_s_8 = listen_s_8;
    story_1.listen_s_9 = listen_s_9;
    story_1.listen_s_10 = listen_s_10;
  }

  $("#image_button_1").click(function (){
    if ( screen == "login" ){ story_1.home(); }
    else if ( screen == "home" ){ story_1.book_mode(); }
    else if ( screen == "book_mode" ){ story_1.listen_s_1(); }
    
    else if ( screen == "listen_s" ){ 
      $("#voice")[0].pause(); $("#voice").attr("src"," ");
      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1").css("background-image","url(./img/sound_icon.gif)");

      if ( page == 3 ){ $("#voice").attr("src","./audio/2a.mp3"); $("#voice")[0].play(); }
      else if ( page == 4 ){ $("#voice").attr("src","./audio/3a.mp3"); $("#voice")[0].play(); }
      else if ( page == 5 ){ $("#voice").attr("src","./audio/4a.mp3"); $("#voice")[0].play(); }
      else if ( page == 6 ){ $("#voice").attr("src","./audio/5a.mp3"); $("#voice")[0].play(); }
      else if ( page == 7 ){ $("#voice").attr("src","./audio/6a.mp3"); $("#voice")[0].play(); }
      else if ( page == 8 ){ $("#voice").attr("src","./audio/7a.mp3"); $("#voice")[0].play(); }

      $("#voice")[0].onended = function(){
        $("#image_button_1").css("background-image","url(./img/sound_icon_only.png)");
        $("#voice")[0].pause(); $("#voice").attr("src"," ");
      }
    }
  });

  $("#image_button_2").click(function (){    
    if ( screen == "listen_s" ){ 
      $("#voice")[0].pause(); $("#voice").attr("src"," ");
      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_2").css("background-image","url(./img/sound_icon.gif)");

      if ( page == 3 ){ $("#voice").attr("src","./audio/2b.mp3"); $("#voice")[0].play(); }
      else if ( page == 4 ){ $("#voice").attr("src","./audio/3b.mp3"); $("#voice")[0].play(); }
      else if ( page == 5 ){ $("#voice").attr("src","./audio/4b.mp3"); $("#voice")[0].play(); }
      else if ( page == 6 ){ $("#voice").attr("src","./audio/5b.mp3"); $("#voice")[0].play(); }
      else if ( page == 7 ){ $("#voice").attr("src","./audio/6b.mp3"); $("#voice")[0].play(); }
      else if ( page == 8 ){ $("#voice").attr("src","./audio/7b.mp3"); $("#voice")[0].play(); }

      $("#voice")[0].onended = function(){
        $("#image_button_2").css("background-image","url(./img/sound_icon_only.png)");
        $("#voice")[0].pause(); $("#voice").attr("src"," ");
      }
    }
  });

  $("#image_button_3").click(function (){    
    if ( screen == "listen_s" ){ 
      $("#voice")[0].pause(); $("#voice").attr("src"," ");
      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_3").css("background-image","url(./img/sound_icon.gif)");

      if ( page == 6 ){ $("#voice").attr("src","./audio/5c.mp3"); $("#voice")[0].play(); }

      $("#voice")[0].onended = function(){
        $("#image_button_3").css("background-image","url(./img/sound_icon_only.png)");
        $("#voice")[0].pause(); $("#voice").attr("src"," ");
      }
    }
  });


  $("#home_button").click(function (){ 
    $(".navigation_button").css("display","none");
    $(".navigation_button").css("visibility","hidden");

    $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url()");
    $("#image_button_1, #image_button_2, #image_button_3").css("background-color","transparent");
    $("#image_button_1, #image_button_2, #image_button_3").css("transform","scale(1,1)");

    $("#image_button_1").css("visibility","visible");
    $("#image_button_1").css("display","inline-block");
    $("#image_button_2, #image_button_3").css("visibility","hidden");
    $("#image_button_2, #image_button_3").css("display","none");

    $("#image_1").css("width","100%");
    $("#image_1").css("transform","translate(0%, 0%)");

    $("#voice")[0].pause(); $("#voice").attr("src"," ");
    $("#music")[0].pause(); $("#music").attr("src"," ");
    story_1.home(); 
  });

  $("#next_button").click(function (){
    if ( screen == "listen_s" && page == 1 ){ page++; story_1.listen_s_2(); }
    else if ( screen == "listen_s" && page == 2 ){ page++; story_1.listen_s_3(); }
    else if ( screen == "listen_s" && page == 3 ){ page++; story_1.listen_s_4(); }
    else if ( screen == "listen_s" && page == 4 ){ page++; story_1.listen_s_5(); }
    else if ( screen == "listen_s" && page == 5 ){ page++; story_1.listen_s_6(); }
    else if ( screen == "listen_s" && page == 6 ){ page++; story_1.listen_s_7(); }
    else if ( screen == "listen_s" && page == 7 ){ page++; story_1.listen_s_8(); }
    else if ( screen == "listen_s" && page == 8 ){ page++; story_1.listen_s_9(); }
    else if ( screen == "listen_s" && page == 9 ){ page++; story_1.listen_s_10(); }
  });

  $("#previous_button").click(function (){
    if ( screen == "listen_s" && page == 2 ){ page--; story_1.listen_s_1(); }
    else if ( screen == "listen_s" && page == 3 ){ page--; story_1.listen_s_2(); }
    else if ( screen == "listen_s" && page == 4 ){ page--; story_1.listen_s_3(); }
    else if ( screen == "listen_s" && page == 5 ){ page--; story_1.listen_s_4(); }
    else if ( screen == "listen_s" && page == 6 ){ page--; story_1.listen_s_5(); }
    else if ( screen == "listen_s" && page == 7 ){ page--; story_1.listen_s_6(); }
    else if ( screen == "listen_s" && page == 8 ){ page--; story_1.listen_s_7(); }
    else if ( screen == "listen_s" && page == 9 ){ page--; story_1.listen_s_8(); }
    else if ( screen == "listen_s" && page == 10 ){ page--; story_1.listen_s_9(); }
  });

});
