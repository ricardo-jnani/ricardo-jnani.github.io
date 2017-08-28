/////////////////////////
// INTERACTION IDEAS
/////////////////////////


// SMOOTH SCROLL TO ELEMENT THROUGH HREFS ////////////////
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 80
    }, 1000);
  }
});


// SHOW NAVIGATION ARROWS & BUTTONS ////////////////////////////////
$('#up, #down, #view').hide();

$(window).on('scroll', function (){
  var distanceScrolled = $(window).scrollTop();
  console.log('The distance scrolled in:' + distanceScrolled);

  if (distanceScrolled > 1500){
    $('#up, #down, #view').fadeIn(1000);
  } else {
    $('#up, #down, #view').fadeOut(1000);
  }
});


// ARROW UP & DOWN SCROLL FOR THE SLIDES ////////////////////////////////

var translateValues = [0, 0, 0];

$('.down').on('click', function () {
  var slideshowNumber = $(this).attr('data-slideshow');

  if (translateValues[slideshowNumber] === -75) {
    translateValues[slideshowNumber] = 0;
  } else {
    translateValues[slideshowNumber] -= 25;
  }

  $(this).closest('.carousel-wrapper').find('.full-slides').css('transform', 'translateY(' + translateValues[slideshowNumber] + '%)');
});

$('.up').on('click', function () {
  var slideshowNumber = $(this).attr('data-slideshow');

  if (translateValues[slideshowNumber] === 0) {
    translateValues[slideshowNumber] = -75;
  } else {
    translateValues[slideshowNumber] += 25;
  }

  $(this).closest('.carousel-wrapper').find('.full-slides').css('transform', 'translateY(' + translateValues[slideshowNumber] + '%)');
});


// VIEW STYLE ICON TOGGLE BETWEEN SLIDE-VIEW & INDEX-VIEW ////////////////
$('#view-icon, .sq-one').on('click', function() {
  console.log('CLICKED!');
  $('.sq-one, .sq-two').fadeToggle(500);
});



$('#view-icon, .sq-one').on('click', function(e) {
  e.preventDefault();
  console.log('TURN TO INDEX-VIEW!');

  $('.arrows, .description p').toggle(100);
  $('.full-slides, .carousel-wrapper, .intro-slide, .slide, .imgcard').toggleClass('initial');
  $('.full-slides').toggleClass('full-slides-index');
  $('.slide, .intro-slide').toggleClass('slide-index');
  $('.imgcard').toggleClass('imgcard-index');
  $('.description').toggleClass('description-index');
});


// HAMBURGER ///////////////////////////////////////////////////////////////
$('.hamburger').on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('active');
  $('#sidebar, ul').toggleClass('sidebar');   //THIS LINE MESSES UP THE ANIMATION
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 20
      }, 1000);
    }
    $('#sidebar, ul').removeClass('sidebar');
    $('.hamburger').removeClass('active');
  });
});

// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
// COMPLETED INTERACTION'S PSEUDO CODE
// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////

//When the user clicks on Slide View Icon
//Add Class slide-view-style (changing flexbox to have flex-basis=22% & space-between) to all slides
//Hide Slide View Icon
//Show Index View Icon

//When the user scrolls down past ~ 1000px (look at Sarah's solution file >> scroll by pixels)
//Show navigation Icons (Up & Down Arrows) fixed on right side of page
//If current view style is Default (Slide View)
//Show Index View Icon
//Else show Slide View Icon

//When the user clicks on Index View Icon
//Add Class index-view-style (changing flexbox to have flex-basis=22% & space-between) to all slides
//Hide Index View Icon
//Show Slide View Icon

//SMOOTH SCROLL
// google jQuery anchor smooth scroll

// INDEX VIEW ICON ////////////////////////////////////////////////////
// $('#view-index').on('click', function (e) {
//   e.preventDefault();
//   console.log('TURN TO INDEX-VIEW!');
//
//   $('#iceland, #maui').addClass('index-view');
//   $('#view-slide').fadeIn(300);
//   $('#view-index').hide(300);
// });

// SLIDE VIEW ICON
// $('view-slide').on('click', function (e){
//   e.preventDefault();
//   console.log('TURN TO SLIDE-VIEW!');
//
//   $('#iceland, #maui').removeClass('index-view');
// });

// /////////////////////////////////////////////////////////////////////////
// EXTRA INTERACTIONS
// /////////////////////////////////////////////////////////////////////////
// SCROLL TO STCIKY NAV BAR
//When the user scrolls down past ~ 500px
//header becomes smaller
//navbar stops, becomes fixed at top of page


//FILTER CONTENT
//similar to how we filtered the author paragraph in the madlibs lab
