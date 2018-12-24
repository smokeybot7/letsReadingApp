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
  var detectTap = false; var music_on = false; var recording_on = false;
  var screen = ""; var recorded_voice = ""; var voice_trigger = "";
  var text_1 = ""; var text_2 = "";
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

      timeout_1 = setTimeout(function(){ 
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#image_button_1").css("top","44%");//44
        $("#image_button_1").css("left","44.7%");//45.7
        $("#image_button_1").fadeIn();  
      },100);
    }

    function home(){ 
      screen = "home";
      $(".container-fluid").css("background","#000");

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

      timeout_1 = setTimeout(function(){ 
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
      },100);
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

      if( music_on == false ){
        $("#music").attr("src","./audio/introTrack.mp3");
        music_on = true;
        $("#music")[0].play();
        $("#music")[0].volume = 0.4;
      }

      $("#voice").attr("src","./audio/1a.mp3");
      $("#voice")[0].play();
      $("#voice")[0].onended = function(){                   
        $("#voice").attr("src","./audio/1b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#voice").attr("src","./audio/1c.mp3");
          $("#voice")[0].play();
          $("#voice")[0].onended = function(){
            $("#voice")[0].pause(); 
            $("#voice").attr("src"," ");
            //timeout_1 = setTimeout(function(){ page++; listen_s_2(); },2000);
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

      if( music_on == false ){
        $("#music").attr("src","./audio/introTrack.mp3");
        music_on = true;
        $("#music")[0].play();
        $("#music")[0].volume = 0.4;
      }

      $("#voice").attr("src","./audio/1d.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#voice")[0].pause(); 
        $("#voice").attr("src"," ");
        //timeout_1 = setTimeout(function(){ page++; listen_s_3(); },2000);
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

      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#image_button_1").css("top","29%");//37
      $("#image_button_1").css("left","-12%");//-7

      $("#image_button_2").css("top","46%");//53
      $("#image_button_2").css("left","41%");//46

      if( music_on == true ){
        $("#music").animate( {volume : 0}, 1000);
        music_on = false;
        //timeout_1 = setTimeout(function(){ $("#music")[0].pause(); $("#music").attr("src"," "); },5000);
      }
      
      $("#voice").attr("src","./audio/2a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#voice").attr("src","./audio/2b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#image_button_2").css("visibility","visible");
          $("#image_button_2").css("display","inline-block");
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }     
    }

    function listen_s_4(){
      $("#image_1").attr("src","./img/s_4.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#image_button_1").css("top","-3%");//4
      $("#image_button_1").css("left","-11%");//-5

      $("#image_button_2").css("top","25%");//33
      $("#image_button_2").css("left","41%");//47

      $("#voice").attr("src","./audio/3a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#voice").attr("src","./audio/3b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#image_button_2").css("visibility","visible");
          $("#image_button_2").css("display","inline-block");
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }   
    }

    function listen_s_5(){
      $("#image_1").attr("src","./img/s_5.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#image_button_1").css("top","42%");//49
      $("#image_button_1").css("left","-16%");//-10

      $("#image_button_2").css("top","4%");//11
      $("#image_button_2").css("left","29%");//35

      $("#image_button_3").css("visibility","hidden");
      $("#image_button_3").css("display","none");

      $("#voice").attr("src","./audio/4a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#voice").attr("src","./audio/4b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#image_button_2").css("visibility","visible");
          $("#image_button_2").css("display","inline-block");
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }  
    }

    function listen_s_6(){
      $("#image_1").attr("src","./img/s_6.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#image_button_1").css("top","-14%");//-7
      $("#image_button_1").css("left","-3%");//4

      $("#image_button_2").css("top","41%");//47
      $("#image_button_2").css("left","-5%");//2

      $("#image_button_3").css("top","47%");//55
      $("#image_button_3").css("left","34%");//40

      $("#voice").attr("src","./audio/5a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#voice").attr("src","./audio/5b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#image_button_2").css("visibility","visible");
          $("#image_button_2").css("display","inline-block");
          $("#voice").attr("src","./audio/5c.mp3");
          $("#voice")[0].play();
          $("#voice")[0].onended = function(){
            $("#image_button_3").css("visibility","visible");
            $("#image_button_3").css("display","inline-block");
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
      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#image_button_1").css("top","44%");//51
      $("#image_button_1").css("left","-17%");//-10

      $("#image_button_2").css("top","34%");//41
      $("#image_button_2").css("left","37%");//43

      $("#image_button_3").css("visibility","hidden");
      $("#image_button_3").css("display","none");

      $("#voice").attr("src","./audio/6a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#voice").attr("src","./audio/6b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#image_button_2").css("visibility","visible");
          $("#image_button_2").css("display","inline-block");
          $("#voice")[0].pause();
          $("#voice").attr("src"," ");
        }
      }  
    }

    function listen_s_8(){
      $("#image_1").attr("src","./img/s_8.jpg");
      $("#image_1").fadeIn();  

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1, #image_button_2, #image_button_3").css("visibility","hidden");
      $("#image_button_1, #image_button_2, #image_button_3").css("display","none");

      $("#image_button_1").css("top","56%");//63
      $("#image_button_1").css("left","-14%");//-8

      $("#image_button_2").css("top","51%");//58
      $("#image_button_2").css("left","33%");//39

      if( music_on == true ){
        $("#music").animate( {volume : 0}, 1000);
        music_on = false;
        //timeout_1 = setTimeout(function(){ $("#music")[0].pause(); $("#music").attr("src"," "); },5000);
      }

      $("#voice").attr("src","./audio/7a.mp3");
      $("#voice")[0].play(); 
      $("#voice")[0].onended = function(){
        $("#image_button_1").css("visibility","visible");
        $("#image_button_1").css("display","inline-block");
        $("#voice").attr("src","./audio/7b.mp3");
        $("#voice")[0].play();
        $("#voice")[0].onended = function(){
          $("#image_button_2").css("visibility","visible");
          $("#image_button_2").css("display","inline-block");
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

      if( music_on == false ){
        $("#music").attr("src","./audio/outroTrack.mp3");
        music_on = true;
        $("#music")[0].play();
        $("#music")[0].volume = 0.4;
      }
    }

    function listen_s_10(){
      $("#image_1").css("width","50%");
      $("#image_1").css("transform","translate(49%, 0%)");
      $("#image_1").attr("src","./img/s_10.jpg");
      $("#image_1").fadeIn();   
    }


    function record_s_1(){
      screen = "record_s";
      page = 1;
      $(".container-fluid").css("background","#fff");
      $("#image_2").css("visibility","hidden");
      $("#image_2").css("display","none");

      $(".navigation_button").css("display","block");
      $(".navigation_button").css("visibility","visible");

      $("#image_1").css("width","100%");
      $("#image_1").css("transform","translate(0%, 0%)");
      $("#image_1").attr("src","./img/r_2.1.png");
      $("#image_1").fadeIn();  

      text_1 = "There was a boy named ladka who lived in aina.";
      voice_trigger = "there *tag";
      $("#text_box").text("There was a boy named Ladka who lived in Aina."); 
      //$("#text_box").html("There was a boy named <button id='new_button' style='color: blue'>Ladka</button> who lived in Aina.");

      $("#content_box, #voice_box, #text_box, #answer_box").css("visibility","visible");
      $("#content_box, #voice_box, #text_box, #answer_box").css("display","block");

      $("#image_button_1, #image_button_2, #image_button_3").css("position","absolute");
      $("#image_button_1").css("display","block");
      $("#image_button_1").css("top","85.5%");//78
      $("#image_button_1").css("left","3%");//8
      $("#image_button_1").css("height","91px");
      $("#image_button_1").css("width","95px");
      $("#image_button_1").css("transform","scale(0.5,0.5)");
      /*$("#image_button_1").css("border-radius","60px");
      $("#image_button_1").css("box-shadow","0px 15px 20px rgba(46, 229, 157, 0.4);")
      $("#image_button_1").css("background-color","#f3f3f37a");*/
      $("#image_button_1").css("background-color","transparent");
      $("#image_button_1").css("background-image","url(./img/recording_button_off.png)");
    }

    function record_s_2(){
      $("#image_1").attr("src","./img/r_2.2.png");
      $("#image_1").fadeIn();  

      text_1 = "He had a calf.";
      voice_trigger = "he *tag";
      $("#text_box").text("He had a calf."); 
    }

    function record_s_3(){
      $("#image_1").attr("src","./img/r_2.3.png");
      $("#image_1").fadeIn();  

      text_1 = "Every morning, they went to the meadow at the edge of the forest.";
      voice_trigger = "every *tag";
      $("#text_box").text("Every Morning, they went to the meadow at the edge of the forest."); 
    }

    function record_s_4(){
      $("#image_1").attr("src","./img/r_2.4.png");
      $("#image_1").fadeIn();  

      text_1 = "The calf would graze all day long; the boy would play.";
      voice_trigger = "the *tag";
      $("#text_box").text("The calf would graze all day long; the boy would play."); 
    }

    function record_s_5(){
      $("#image_1").attr("src","./img/r_2.5.png");
      $("#image_1").fadeIn();  

      text_1 = "And they would return together in the evening.";
      voice_trigger = "and *tag";
      $("#text_box").text("And they would return together in the evening."); 
    }

    function record_s_6(){
      $("#image_1").attr("src","./img/r_3.1.png");
      $("#image_1").fadeIn();  

      text_1 = "One morning, the calf was grazing and the boy was roaming as usual.";
      voice_trigger = "one *tag";
      $("#text_box").text("One morning, the calf was grazing and the boy was roaming as usual."); 
    }

    function record_s_7(){
      $("#image_1").attr("src","./img/r_3.2.png");
      $("#image_1").fadeIn();  

      text_1 = "But the calf ate very little grass that day.";
      voice_trigger = "but *tag";
      $("#text_box").text("But the calf ate very little grass that day."); 
    }

    function record_s_8(){
      $("#image_1").attr("src","./img/r_3.3.png");
      $("#image_1").fadeIn();  

      text_1 = "Then, she sat down on her belly and fell asleep, slowly chewing cud.";
      voice_trigger = "then *tag";
      $("#text_box").text("Then, she sat down on her belly and fell asleep, slowly chewing cud."); 
    }

    function record_s_9(){
      $("#image_1").attr("src","./img/r_3.4.png");
      $("#image_1").fadeIn();  

      text_1 = "Ladka ate fruits and plums from the trees.";
      voice_trigger = "ladka *tag";
      $("#text_box").text("Ladka ate fruits and plums from the trees."); 
    }

    function record_s_10(){
      $("#image_1").attr("src","./img/r_3.5.png");
      $("#image_1").fadeIn();  

      text_1 = "He played on the branches, plucking twigs and flowers.";
      voice_trigger = "he *tag";
      $("#text_box").text("He played on the branches, plucking twigs and flowers."); 
    }

    function record_s_11(){
      $("#image_1").attr("src","./img/r_4.1.png");
      $("#image_1").fadeIn();  

      text_1 = "When evening came and the sun was setting, the calf woke up and was hungry again.";
      voice_trigger = "when *tag";
      $("#text_box").text("When evening came and the sun was setting, the calf woke up and was hungry again."); 
    }

    function record_s_12(){
      $("#image_1").attr("src","./img/r_4.2.png");
      $("#image_1").fadeIn();  

      text_1 = "She began to graze and walk about.";
      voice_trigger = "she *tag";
      $("#text_box").text("She began to graze and walk about."); 
    }

    function record_s_13(){
      $("#image_1").attr("src","./img/r_4.3.png");
      $("#image_1").fadeIn();  

      text_1 = "Ladka was tired and ready to go home.";
      voice_trigger = "ladka *tag";
      $("#text_box").text("Ladka was tired and ready to go home."); 
    }

    function record_s_14(){
      $("#image_1").attr("src","./img/r_4.4.png");
      $("#image_1").fadeIn();  

      text_1 = "He sat waiting for her, and played with little rocks.";
      voice_trigger = "he *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_15(){
      $("#image_1").attr("src","./img/r_4.5.png");
      $("#image_1").fadeIn();  

      text_1 = "After some time, he called out to the calf, 'let’s go home. it’s getting dark. we will be late.'";
      voice_trigger = "after *tag";
      $("#text_box").text("After some time, he called out to the calf, 'Let’s go home. It’s getting dark. We will be late.'"); 
    }

    function record_s_16(){
      $("#image_1").attr("src","./img/r_5.1.png");
      $("#image_1").fadeIn();  

      text_1 = "The calf was still hungry, and kept grazing.";
      voice_trigger = "the *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_17(){
      $("#image_1").attr("src","./img/r_5.2.png");
      $("#image_1").fadeIn();  

      text_1 = "Ladka shouted again, now both tired and afraid.";
      voice_trigger = "ladka *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_18(){
      $("#image_1").attr("src","./img/r_5.3.png");
      $("#image_1").fadeIn();  

      text_1 = "'We should go home now. come, we will be late. it will soon be night.'";
      voice_trigger = "we *tag";
      $("#text_box").text("'We should go home now. Come, we will be late. It will soon be night.'"); 
    }

    function record_s_19(){
      $("#image_1").attr("src","./img/r_5.4.png");
      $("#image_1").fadeIn();  

      text_1 = "Calf ignored him and continued grazing.";
      voice_trigger = "calf *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_20(){
      $("#image_1").attr("src","./img/r_6.1.png");
      $("#image_1").fadeIn();  

      text_1 = "Ladka was confused and began to weep.";
      voice_trigger = "ladka *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_21(){
      $("#image_1").attr("src","./img/r_6.2.png");
      $("#image_1").fadeIn();  

      text_1 = "He feared the darkness in the forest. it was going to be night soon.";
      voice_trigger = "he *tag";
      $("#text_box").text("He feared the darkness in the forest. It was going to be night soon."); 
    }

    function record_s_22(){
      $("#image_1").attr("src","./img/r_6.3.png");
      $("#image_1").fadeIn();  

      text_1 = "There were honeybees returning home after a hard day’s work.";
      voice_trigger = "there *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_23(){
      $("#image_1").attr("src","./img/r_6.4.png");
      $("#image_1").fadeIn();  

      text_1 = "The calf was in their way. they bumped into her, and one of the bees stung her in the ear.";
      voice_trigger = "the *tag";
      $("#text_box").text("The calf was in their way. They bumped into her, and one of the bees stung her in the ear."); 
    }

    function record_s_24(){
      $("#image_1").attr("src","./img/r_7.1.png");
      $("#image_1").fadeIn();  

      text_1 = "The calf began to bleat and moan and jump about in pain.";
      voice_trigger = "the *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_25(){
      $("#image_1").attr("src","./img/r_7.2.png");
      $("#image_1").fadeIn();  

      text_1 = "Then she started running towards home.";
      voice_trigger = "then *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_26(){
      $("#image_1").attr("src","./img/r_7.3.png");
      $("#image_1").fadeIn();  

      text_1 = "Ladka stood up happily and ran after the calf, yelling";
      voice_trigger = "ladka *tag";
      $("#text_box").text(text_1); 
    }

    function record_s_27(){
      $("#image_1").attr("src","./img/r_7.4.png");
      $("#image_1").fadeIn();  

      text_1 = "'Hey, wait for me! wait for me! we are going home!'";
      voice_trigger = "hey *tag";
      $("#text_box").text("'Hey, wait for me! Wait for me! We are going home!'"); 
    }
    
    story_1.splash = splash;
    story_1.home = home;
    story_1.book_mode = book_mode;
    story_1.listen_s_1 = listen_s_1; story_1.listen_s_2 = listen_s_2; story_1.listen_s_3 = listen_s_3;
    story_1.listen_s_4 = listen_s_4; story_1.listen_s_5 = listen_s_5; story_1.listen_s_6 = listen_s_6;
    story_1.listen_s_7 = listen_s_7; story_1.listen_s_8 = listen_s_8; story_1.listen_s_9 = listen_s_9;
    story_1.listen_s_10 = listen_s_10;
    story_1.record_s_1 = record_s_1; story_1.record_s_2 = record_s_2; story_1.record_s_3 = record_s_3;
    story_1.record_s_4 = record_s_4; story_1.record_s_5 = record_s_5; story_1.record_s_6 = record_s_6;
    story_1.record_s_7 = record_s_7; story_1.record_s_8 = record_s_8; story_1.record_s_9 = record_s_9;
    story_1.record_s_10 = record_s_10; story_1.record_s_11 = record_s_11; story_1.record_s_12 = record_s_12;
    story_1.record_s_13 = record_s_13; story_1.record_s_14 = record_s_14; story_1.record_s_15 = record_s_15;
    story_1.record_s_16 = record_s_16; story_1.record_s_17 = record_s_17; story_1.record_s_18 = record_s_18;
    story_1.record_s_19 = record_s_19; story_1.record_s_20 = record_s_20; story_1.record_s_21 = record_s_21;
    story_1.record_s_22 = record_s_22; story_1.record_s_23 = record_s_23; story_1.record_s_24 = record_s_24;
    story_1.record_s_25 = record_s_25; story_1.record_s_26 = record_s_26; story_1.record_s_27 = record_s_27;
  }

  function annyang_record(){
    if( recording_on == false ){
        recording_on = true;
        $("#image_button_1").css("background-image","url(./img/recording_button_on.png)");
        $("#answer_box").text(" "); 
        $("#voice")[0].pause(); 
        $("#voice").attr("src"," ");
        annyang.start({ autoRestart: false, continuous: true });
    }
    else{
        recording_on = false;
        $("#image_button_1").css("background-image","url(./img/recording_button_off.png)");
        $("#answer_box").text(" "); 
        $("#answer_box").css("visibility","hidden");
        $("#answer_box").css("display","none");
        annyang.abort();
    }

    if (annyang){
      var commands = {
        //'show me *tag': function(tag) { alert(tag); },
        //'there *tag': function(tag){
        '*tag' : function(tag){
          var out_put = ""; recorded_voice = ""; var correct = true;

          //$("#answer_box").innerHTML = out_put;
          var text_1_1 = text_1.split(".").join(" ");//.,;''!
          text_1_1 = text_1.split(",").join(" ");
          text_1_1 = text_1.split(";").join(" ");
          text_1_1 = text_1.split("'").join(" ");
          text_1_1 = text_1.split("!").join(" ");
          text_1_1 = text_1_1.split(" ");

          recorded_voice = tag;
          var caps = recorded_voice;
          caps = caps.charAt(0).toUpperCase() + caps.slice(1);
          recorded_voice = caps;
          var text_2 = recorded_voice.split(" ");

          for (var i = 0; i < text_2.length; i++){
            if( text_2[i] == text_1_1[i] ){ 
              out_put += text_2[i];
            }
            else{ 
              out_put += "<span style='color:red;font-weight:bold;'>" + text_2[i] + "</span>"; 
              correct = false;
            }
            if( i != text_2.length-1 ){ out_put += " "; }
          }

          out_put += ".";
          $("#answer_box").html(out_put); 
          //recorded_voice = "There " + tag + ".";
          //$("#answer_box").text(out_put);
          //$("#answer_box").text(recorded_voice); 
          $("#answer_box").css("visibility","visible");
          $("#answer_box").css("display","block");

          /*if( correct == true){
            $("#image_button_3").css("visibility","hidden");
            $("#image_button_3").css("display","none");
          }
          else{
            $("#image_button_3").css("background-image","url(./img/sound_icon_only.png)");
            $("#image_button_3").css("visibility","visible");
            $("#image_button_3").css("display","inline-block");
            $("#image_button_3").css("top","-3%");//4
            $("#image_button_3").css("left","-11%");//-5
          }*/

          
         }/*,
        'he *tag': function(tag){ 
          recorded_voice = recorded_voice + ".He " + tag;
          $("#answer_box").text(recorded_voice); 
          $("#answer_box").css("visibility","visible");
          $("#answer_box").css("display","inline-block");
        }*/
      };
      annyang.addCommands(commands);
    }
    else{
        recording_on = false;
        $("#answer_box").text(" "); 
        $("#answer_box").css("visibility","hidden");
        $("#answer_box").css("display","none");
        /*$("#image_button_3").css("background-image","url(./img/sound_icon_only.png)");
        $("#image_button_3").css("visibility","hidden");
        $("#image_button_3").css("display","none");*/
        annyang.abort();
    }
  }

  $("#image_button_1").click(function (){
    if ( screen == "login" ){ story_1.home(); }
    else if ( screen == "home" ){ story_1.book_mode(); }
    else if ( screen == "book_mode" ){ story_1.listen_s_1(); }
    
    else if ( screen == "listen_s" ){ 
      $("#voice")[0].pause(); $("#voice").attr("src"," ");
      $("#image_button_1, #image_button_2").css("visibility","visible");
      $("#image_button_1, #image_button_2").css("display","inline-block");

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_1").css("background-image","url(./img/sound_icon.gif)");

      if ( page == 3 ){ $("#voice").attr("src","./audio/2a.mp3"); $("#voice")[0].play(); }
      else if ( page == 4 ){ $("#voice").attr("src","./audio/3a.mp3"); $("#voice")[0].play(); }
      else if ( page == 5 ){ $("#voice").attr("src","./audio/4a.mp3"); $("#voice")[0].play(); }
      else if ( page == 6 ){ 
        $("#image_button_3").css("visibility","visible");
        $("#image_button_3").css("display","inline-block");
        $("#voice").attr("src","./audio/5a.mp3"); 
        $("#voice")[0].play(); 
      }
      else if ( page == 7 ){ $("#voice").attr("src","./audio/6a.mp3"); $("#voice")[0].play(); }
      else if ( page == 8 ){ $("#voice").attr("src","./audio/7a.mp3"); $("#voice")[0].play(); }

      $("#voice")[0].onended = function(){
        $("#image_button_1").css("background-image","url(./img/sound_icon_only.png)");
        $("#voice")[0].pause(); $("#voice").attr("src"," ");
      }
    }
    else if ( screen == "record_s" ){ 
      annyang_record();
    }
  });

  $("#image_button_2").click(function (){    
    if ( screen == "listen_s" ){ 
      $("#voice")[0].pause(); $("#voice").attr("src"," ");
      $("#image_button_1, #image_button_2").css("visibility","visible");
      $("#image_button_1, #image_button_2").css("display","inline-block");

      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_2").css("background-image","url(./img/sound_icon.gif)");

      if ( page == 3 ){ $("#voice").attr("src","./audio/2b.mp3"); $("#voice")[0].play(); }
      else if ( page == 4 ){ $("#voice").attr("src","./audio/3b.mp3"); $("#voice")[0].play(); }
      else if ( page == 5 ){ $("#voice").attr("src","./audio/4b.mp3"); $("#voice")[0].play(); }
      else if ( page == 6 ){ 
        $("#image_button_3").css("visibility","visible");
        $("#image_button_3").css("display","inline-block");
        $("#voice").attr("src","./audio/5b.mp3"); 
        $("#voice")[0].play(); 
      }
      else if ( page == 7 ){ $("#voice").attr("src","./audio/6b.mp3"); $("#voice")[0].play(); }
      else if ( page == 8 ){ $("#voice").attr("src","./audio/7b.mp3"); $("#voice")[0].play(); }

      $("#voice")[0].onended = function(){
        $("#image_button_2").css("background-image","url(./img/sound_icon_only.png)");
        $("#voice")[0].pause(); $("#voice").attr("src"," ");
      }
    }
    else if ( screen == "book_mode" ){ story_1.record_s_1(); }
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
    /*else if ( screen == "record_s"){
      $("#voice")[0].pause(); $("#voice").attr("src"," ");
      $("#image_button_1, #image_button_2, #image_button_3").css("background-image","url(./img/sound_icon_only.png)");
      $("#image_button_3").css("background-image","url(./img/sound_icon.gif)");

      if ( page == 6 ){ $("#voice").attr("src","./audio/5c.mp3"); $("#voice")[0].play(); }

      $("#voice")[0].onended = function(){
        $("#image_button_3").css("background-image","url(./img/sound_icon_only.png)");
        $("#voice")[0].pause(); $("#voice").attr("src"," ");
      }
    }*/
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

    $("#content_box, #voice_box, #text_box, #answer_box").css("visibility","hidden");
    $("#content_box, #voice_box, #text_box, #answer_box").css("display","none");

    music_on = false;
    $("#voice")[0].pause(); $("#voice").attr("src"," ");
    $("#music")[0].pause(); $("#music").attr("src"," ");
    recording_on = false;
    $("#answer_box").text(" "); 
    $("#answer_box").css("visibility","hidden");
    $("#answer_box").css("display","none");
    annyang.abort();

    story_1.home(); 
  });

  $("#text_box").click(function (){
    if ( screen == "record_s" ){
      recording_on = false;
      $("#image_button_1").css("background-image","url(./img/recording_button_off.png)");
      $("#answer_box").text(" "); 
      $("#answer_box").css("visibility","hidden");
      $("#answer_box").css("display","none");
      annyang.abort();
      $("#voice")[0].pause(); $("#voice").attr("src"," ");

      if( page == 1 ){ $("#voice").attr("src","./audio/2.1.mp3"); }
      else if ( page == 2 ){ $("#voice").attr("src","./audio/2.2.mp3"); }
      else if ( page == 3 ){ $("#voice").attr("src","./audio/2.3.mp3"); }
      else if ( page == 4 ){ $("#voice").attr("src","./audio/2.4.mp3"); }
      else if ( page == 5 ){ $("#voice").attr("src","./audio/2.5.mp3"); }
      else if ( page == 6 ){ $("#voice").attr("src","./audio/3.1.mp3"); }
      else if ( page == 7 ){ $("#voice").attr("src","./audio/3.2.mp3"); }
      else if ( page == 8 ){ $("#voice").attr("src","./audio/3.3.mp3"); }
      else if ( page == 9 ){ $("#voice").attr("src","./audio/3.4.mp3"); }
      else if ( page == 10 ){ $("#voice").attr("src","./audio/3.5.mp3"); }
      else if ( page == 11 ){ $("#voice").attr("src","./audio/4.1.mp3"); }
      else if ( page == 12 ){ $("#voice").attr("src","./audio/4.2.mp3"); }
      else if ( page == 13 ){ $("#voice").attr("src","./audio/4.3.mp3"); }
      else if ( page == 14 ){ $("#voice").attr("src","./audio/4.4.mp3"); }
      else if ( page == 15 ){ $("#voice").attr("src","./audio/4.5.mp3"); }
      else if ( page == 16 ){ $("#voice").attr("src","./audio/5.1.mp3"); }
      else if ( page == 17 ){ $("#voice").attr("src","./audio/5.2.mp3"); }
      else if ( page == 18 ){ $("#voice").attr("src","./audio/5.3.mp3"); }
      else if ( page == 19 ){ $("#voice").attr("src","./audio/5.4.mp3"); }
      else if ( page == 20 ){ $("#voice").attr("src","./audio/6.1.mp3"); }
      else if ( page == 21 ){ $("#voice").attr("src","./audio/6.2.mp3"); }
      else if ( page == 22 ){ $("#voice").attr("src","./audio/6.3.mp3"); }
      else if ( page == 23 ){ $("#voice").attr("src","./audio/6.4.mp3"); }
      else if ( page == 24 ){ $("#voice").attr("src","./audio/7.1.mp3"); }
      else if ( page == 25 ){ $("#voice").attr("src","./audio/7.2.mp3"); }
      else if ( page == 26 ){ $("#voice").attr("src","./audio/7.3.mp3"); }
      else if ( page == 27 ){ $("#voice").attr("src","./audio/7.4.mp3"); }
      
      $("#voice")[0].play();
      $("#voice")[0].onended = function(){ 
        $("#voice")[0].pause(); 
        $("#voice").attr("src"," ");
      }
    }
  });

  /*$("#new_button").click(function (){
    if ( screen == "record_s" ){
      recording_on = false;
      $("#image_button_1").css("background-image","url(./img/recording_button_off.png)");
      $("#answer_box").text(" "); 
      $("#answer_box").css("visibility","hidden");
      $("#answer_box").css("display","none");
      annyang.abort();
      $("#voice")[0].pause(); $("#voice").attr("src"," ");

      if( $("#new_button").text() == "Ladka" ){ $("#voice").attr("src","./audio/ladka.mp3"); }
      else if ( page == 2 ){ $("#voice").attr("src","./audio/2.2.mp3"); }
      else if ( page == 3 ){ $("#voice").attr("src","./audio/2.3.mp3"); }
      else if ( page == 4 ){ $("#voice").attr("src","./audio/2.4.mp3"); }
      else if ( page == 5 ){ $("#voice").attr("src","./audio/2.5.mp3"); }
      else if ( page == 6 ){ $("#voice").attr("src","./audio/3.1.mp3"); }
      else if ( page == 7 ){ $("#voice").attr("src","./audio/3.2.mp3"); }
      else if ( page == 8 ){ $("#voice").attr("src","./audio/3.3.mp3"); }
      else if ( page == 9 ){ $("#voice").attr("src","./audio/3.4.mp3"); }
      else if ( page == 10 ){ $("#voice").attr("src","./audio/3.5.mp3"); }
      else if ( page == 11 ){ $("#voice").attr("src","./audio/4.1.mp3"); }
      else if ( page == 12 ){ $("#voice").attr("src","./audio/4.2.mp3"); }
      else if ( page == 13 ){ $("#voice").attr("src","./audio/4.3.mp3"); }
      else if ( page == 14 ){ $("#voice").attr("src","./audio/4.4.mp3"); }
      else if ( page == 15 ){ $("#voice").attr("src","./audio/4.5.mp3"); }
      
      $("#voice")[0].play();
      $("#voice")[0].onended = function(){ 
        $("#voice")[0].pause(); 
        $("#voice").attr("src"," ");
      }
    }
  });*/


  $("#next_button").click(function (){
    if ( screen == "listen_s" ){
      if( page == 1 ){ page++; story_1.listen_s_2(); }
      else if ( page == 2 ){ page++; story_1.listen_s_3(); }
      else if ( page == 3 ){ page++; story_1.listen_s_4(); }
      else if ( page == 4 ){ page++; story_1.listen_s_5(); }
      else if ( page == 5 ){ page++; story_1.listen_s_6(); }
      else if ( page == 6 ){ page++; story_1.listen_s_7(); }
      else if ( page == 7 ){ page++; story_1.listen_s_8(); }
      else if ( page == 8 ){ page++; story_1.listen_s_9(); }
      else if ( page == 9 ){ page++; story_1.listen_s_10(); }
    }
    else if ( screen == "record_s" ){
      recording_on = false;
      $("#image_button_1").css("background-image","url(./img/recording_button_off.png)");
      $("#answer_box").text(" "); 
      $("#answer_box").css("visibility","hidden");
      $("#answer_box").css("display","none");
      annyang.abort();
      $("#voice")[0].pause(); $("#voice").attr("src"," ");

      if( page == 1 ){ page++; story_1.record_s_2(); }
      else if ( page == 2 ){ page++; story_1.record_s_3(); }
      else if ( page == 3 ){ page++; story_1.record_s_4(); }
      else if ( page == 4 ){ page++; story_1.record_s_5(); }
      else if ( page == 5 ){ page++; story_1.record_s_6(); }
      else if ( page == 6 ){ page++; story_1.record_s_7(); }
      else if ( page == 7 ){ page++; story_1.record_s_8(); }
      else if ( page == 8 ){ page++; story_1.record_s_9(); }
      else if ( page == 9 ){ page++; story_1.record_s_10(); }
      else if ( page == 10 ){ page++; story_1.record_s_11(); }
      else if ( page == 11 ){ page++; story_1.record_s_12(); }
      else if ( page == 12 ){ page++; story_1.record_s_13(); }
      else if ( page == 13 ){ page++; story_1.record_s_14(); }
      else if ( page == 14 ){ page++; story_1.record_s_15(); }
      else if ( page == 15 ){ page++; story_1.record_s_16(); }
      else if ( page == 16 ){ page++; story_1.record_s_17(); }
      else if ( page == 17 ){ page++; story_1.record_s_18(); }
      else if ( page == 18 ){ page++; story_1.record_s_19(); }
      else if ( page == 19 ){ page++; story_1.record_s_20(); }
      else if ( page == 20 ){ page++; story_1.record_s_21(); }
      else if ( page == 21 ){ page++; story_1.record_s_22(); }
      else if ( page == 22 ){ page++; story_1.record_s_23(); }
      else if ( page == 23 ){ page++; story_1.record_s_24(); }
      else if ( page == 24 ){ page++; story_1.record_s_25(); }
      else if ( page == 25 ){ page++; story_1.record_s_26(); }
      else if ( page == 26 ){ page++; story_1.record_s_27(); }
    }
  });

  $("#previous_button").click(function (){
    if ( screen == "listen_s" ){
      if (page == 2 ){ page--; story_1.listen_s_1(); }
      else if ( page == 3 ){ page--; story_1.listen_s_2(); }
      else if ( page == 4 ){ page--; story_1.listen_s_3(); }
      else if ( page == 5 ){ page--; story_1.listen_s_4(); }
      else if ( page == 6 ){ page--; story_1.listen_s_5(); }
      else if ( page == 7 ){ page--; story_1.listen_s_6(); }
      else if ( page == 8 ){ page--; story_1.listen_s_7(); }
      else if ( page == 9 ){ page--; story_1.listen_s_8(); }
      else if ( page == 10 ){ page--; story_1.listen_s_9(); }
    }
    else if ( screen == "record_s" ){
      recording_on = false;
      $("#image_button_1").css("background-image","url(./img/recording_button_off.png)");
      $("#answer_box").text(" "); 
      $("#answer_box").css("visibility","hidden");
      $("#answer_box").css("display","none");
      annyang.abort();
      $("#voice")[0].pause(); $("#voice").attr("src"," ");

      if ( page == 2 ){ page--; story_1.record_s_1(); }
      else if ( page == 3 ){ page--; story_1.record_s_2(); }
      else if ( page == 4 ){ page--; story_1.record_s_3(); }
      else if ( page == 5 ){ page--; story_1.record_s_4(); }
      else if ( page == 6 ){ page--; story_1.record_s_5(); }
      else if ( page == 7 ){ page--; story_1.record_s_6(); }
      else if ( page == 8 ){ page--; story_1.record_s_7(); }
      else if ( page == 9 ){ page--; story_1.record_s_8(); }
      else if ( page == 10 ){ page--; story_1.record_s_9(); }
      else if ( page == 11 ){ page--; story_1.record_s_10(); }
      else if ( page == 12 ){ page--; story_1.record_s_11(); }
      else if ( page == 13 ){ page--; story_1.record_s_12(); }
      else if ( page == 14 ){ page--; story_1.record_s_13(); }
      else if ( page == 15 ){ page--; story_1.record_s_14(); }
      else if ( page == 16 ){ page--; story_1.record_s_15(); }
      else if ( page == 17 ){ page--; story_1.record_s_16(); }
      else if ( page == 18 ){ page--; story_1.record_s_17(); }
      else if ( page == 19 ){ page--; story_1.record_s_18(); }
      else if ( page == 20 ){ page--; story_1.record_s_19(); }
      else if ( page == 21 ){ page--; story_1.record_s_20(); }
      else if ( page == 22 ){ page--; story_1.record_s_21(); }
      else if ( page == 23 ){ page--; story_1.record_s_22(); }
      else if ( page == 24 ){ page--; story_1.record_s_23(); }
      else if ( page == 25 ){ page--; story_1.record_s_24(); }
      else if ( page == 26 ){ page--; story_1.record_s_25(); }
      else if ( page == 27 ){ page--; story_1.record_s_26(); }
    }
  });

});
