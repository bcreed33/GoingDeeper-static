//Pre-loaded the social media images ///////////////////////////////////////////
<!--//--><![CDATA[//><!--

if (document.images) {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    var img6 = new Image();
    var img7 = new Image();
    var img8 = new Image();
    var img9 = new Image();
    var img10= new Image();
    var img11= new Image();
    var img12= new Image();
    var img13= new Image();
    var img14= new Image();


    img1.src = "http://letsreedesign.com/img/untitled-01761ws.jpg";
    img2.src = "http://letsreedesign.com/img/DSC_70662ws.jpg";
    img3.src = "http://letsreedesign.com/img/DSC_69032ws.jpg";
    img4.src = "http://letsreedesign.com/img/DSC_7862-1ws.jpg";
    img5.src = "http://letsreedesign.com/img/DSC_8159ws.jpg";
    img6.src = "http://letsreedesign.com/img/DSC_7581ws.jpg";
    img7.src = "http://letsreedesign.com/img/DSC_8045-1ws.jpg";
    img8.src = "http://letsreedesign.com/img/DSC_69272ws.jpg";
    img9.src = "http://letsreedesign.com/img/IMG_4116ws.jpg";
    img10.src = "http://letsreedesign.com/img/IMG_4116ws.jpg";
    img11.src = "http://letsreedesign.com/img/mattieMws.jpg";
    img12.src = "http://letsreedesign.com/img/noahNws.jpg";
    img13.src = "http://letsreedesign.com/img/jasonHws.jpg";
    img14.src = "http://letsreedesign.com/img/joshCws.jpg";


}

//--><!]]>


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > $('.herosection').offset().top - ($(window).height()/1)){
        //console.log('Hero parts are moving now');

        $('.goingDeeperBox').css({
           'transform': 'translate(0px, '+ wScroll/1.75 +'%)',
            //'background-color' : 'rgba( 1,1,1,'+  wScroll/1000 +')',
           //'width' : wScroll/.1 +'px'
           'letter-spacing': wScroll/150 +'px'
        });
        $('.conferenceText').css({
           'transform': 'translate(0px, -'+ wScroll/1.2 +'%)'
           //'letter-spacing' :wScroll/10 +'px'
        });
        $('.stillSmallVoice').css({
           'letter-spacing': wScroll/25 +'px'


        });

    };
});

//A work around for closing the moblie (bootstrap) nav when a menu link is selected.///////
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
    $(this).collapse('hide');
}
});

$(document).ready(function(){
    $(window).scroll(function(){
        var topscroll =100;
        var hidevideoScroll = 2500;
        if($(window).scrollTop() >= topscroll){
            $('.navbar').addClass("blackBackground");
         }
        else{
            $('.navbar').removeClass("blackBackground");
        }

         if($(window).scrollTop() >= hidevideoScroll){
             $('#bgvid').addClass("displayNone");
          }
         else{
             $('#bgvid').removeClass("displayNone");
          }
    });
});





//open portfolio peices action/////////////////////////////////////////////////
//$(document).ready(function($){
    $('.speaker').find('button').on('click', function(){
        var selected_member = $(this).attr('data-type');
        $('main').addClass('slide-out');
        $('.speaker-bio.'+selected_member+'').addClass('slide-in');
        $('.speaker-bio-close').addClass('is-visible');
   $('body').addClass('overflow-hidden');
    });


    $('.speaker').find('.speakerimage').on('click', function(){
        var selected_member = $(this).attr('data-type');
        $('main').addClass('slide-out');
        $('.speaker-bio.'+selected_member+'').addClass('slide-in');
        $('.speaker-bio-close').addClass('is-visible');
   $('body').addClass('overflow-hidden');
    });

//close team-member bio/////////////////////////////////////////////////////////
    $(document).on('click', '.cd-overlay, .speaker-bio-close', function(){
        $('main').removeClass('slide-out');
        $('.speaker-bio').removeClass('slide-in');
        $('.speaker-bio-close').removeClass('is-visible');
        $('body').removeClass('overflow-hidden');
    });
//});






// Set the date we're counting down to
var countDownDate = new Date("Oct 6, 2017 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Zeros
var hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));

var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));

var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));


  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minsTicker").innerHTML = minutes;
  document.getElementById("secsTicker").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-text").innerHTML = "Thank You 2017! You were amazing!";
    document.getElementById("countdown-text").classList.add('bannerThankYou');
  }
}, 1);
