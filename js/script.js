
$(document).ready(function(){
  $(".click").on('click', function(event) {

    if (this.hash !== "100") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

$(".container-animate").typed({

    strings: [ "ready !","GO ahead !","take a step forward !","towards your success !"],
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
     
      $(".preloader").delay(1500).fadeOut();
  });


  document.getElementById("acc").onclick=function(){
    document.getElementById("mythdisplay1").style.display = "block";
    document.getElementById("factdisplay1").style.display="block";
    document.getElementById("mythdisplay2").style.display = "none";
    document.getElementById("factdisplay2").style.display="none";
    document.getElementById("mythdisplay3").style.display="none";
    document.getElementById("factdisplay3").style.display="none";
  }
  
  document.getElementById("mark").onclick=function(){
    document.getElementById("mythdisplay2").style.display = "block";
    document.getElementById("factdisplay2").style.display="block";
    document.getElementById("mythdisplay1").style.display = "none";
    document.getElementById("factdisplay1").style.display="none";
    document.getElementById("mythdisplay3").style.display="none";
    document.getElementById("factdisplay3").style.display="none";
  }

  document.getElementById("inftech").onclick=function(){
    document.getElementById("mythdisplay3").style.display="block";
    document.getElementById("factdisplay3").style.display="block";
    document.getElementById("mythdisplay1").style.display = "none";
    document.getElementById("factdisplay1").style.display="none";
    document.getElementById("mythdisplay2").style.display = "none";
    document.getElementById("factdisplay2").style.display="none";
  }