

$(".container-animate").typed({

    strings: [ "ready !","GO ahead !","To Infinity and Beyond !"],
    stringsElement: null,
  
    // typing speed
    typeSpeed: 20,
  
    // time before typing starts
    startDelay: 0,
  
    // backspacing speed
    backSpeed: 0,
  
    // shuffle the strings
    shuffle: false,
  
    // time before backspacing
    backDelay: 500,
  
    // Fade out instead of backspace
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500, // milliseconds
  
    // loop
    loop: true,
  
    // false = infinite
    loopCount: false,
  
    // show cursor
    showCursor: false,
  
    // character for cursor
    cursorChar: "|",
  
    // attribute to type (null == text)
    attr: null,
  
    // either html or text
    contentType: 'html'
    
  });
  




  $(document).ready(function(){
	           
    $(window).scroll ( function() {
    
      var scrolletop = $(window).scrollTop();
    
      if ( scrolletop > 500) {
        $(".scrolltotop").addClass('show');
                                $("nav").addClass('header-scroll');
                                $(".logo").addClass('logo-scroll');
                                $(".iconn").addClass('iconn-scroll');
      }
      else {
        $(".scrolltotop").removeClass('show');
                                $("nav").removeClass('header-scroll');
                $(".logo").removeClass('logo-scroll');
        $(".iconn").removeClass('iconn-scroll');
  
                           
      }	
    });  
       
             $(".scrolltotop").on('click' , function(){
                  $("html,body").animate({
                      scrollTop: 0   
                  }, 1000);
             }); 
     
      $(".preloader").delay(1000).fadeOut();
  });


  document.getElementById("answer-icon1").onclick=function(){
    document.getElementById("answer1").style.display = "block";
    document.getElementById("answer2").style.display="none";
    document.getElementById("answer3").style.display="none";
    document.getElementById("answer4").style.display="none";
    document.getElementById("answer5").style.display="none";
    
  
  }
  
  document.getElementById("answer-icon2").onclick=function(){
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display="block";
    document.getElementById("answer3").style.display="none";
    document.getElementById("answer4").style.display="none";
    document.getElementById("answer5").style.display="none";
  
  
  }
  
  document.getElementById("answer-icon3").onclick=function(){
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display="none";
    document.getElementById("answer3").style.display="block";
    document.getElementById("answer4").style.display="none";
    document.getElementById("answer5").style.display="none";
  

  
  }
  
  document.getElementById("answer-icon4").onclick=function(){
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display="none";
    document.getElementById("answer3").style.display="none";
    document.getElementById("answer4").style.display="block";
    document.getElementById("answer5").style.display="none";
  
  
  }

  document.getElementById("answer-icon5").onclick=function(){
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display="none";
    document.getElementById("answer3").style.display="none";
    document.getElementById("answer4").style.display="none";
    document.getElementById("answer5").style.display="block";
  

  
  }