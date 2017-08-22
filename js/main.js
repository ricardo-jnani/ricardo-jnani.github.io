/////////////////////////
// INTERACTION IDEAS
/////////////////////////


// SCROLL TO STCIKY NAV BAR
  //When the user scrolls down past ~ 500px
    //header becomes smaller
    //navbar stops, becomes fixed at top of page

// SHOW NAVIGATION ICONS / BUTTONS
$(window).on('scroll', function (){
  var distanceScrolled = $(window).scrollTop();
  console.log('The distance scrolled in:' + distanceScrolled);

  if (distanceScrolled > 1500){
    $('#up, #down, #view-index').fadeIn(1000);
  } else {
    $('#up, #down, #view-index').fadeOut(1000);
  }
});
  //When the user scrolls down past ~ 1000px (look at Sarah's solution file >> scroll by pixels)
    //Show navigation Icons (Up & Down Arrows) fixed on right side of page
    //If current view style is Default (Slide View)
      //Show Index View Icon
      //Else show Slide View Icon

// ARROW NEXT & PREVIOUS SCROLL FOR THE SLIDES
  //When the user clicks Down Arrow
    //If currentImageNumber is < numberImages
      //Increase currentImageNumber by 1
    //Else make currentImageNumber = 0
  //When the user clicks Up Arrow
    //If currentImageNumber is > numberImages
      //Decrease currentImageNumber by 1
    //Else make currentImageNumber = numberImages

// INDEX VIEW ICON
$('#view-index').on('click', function (e) {
  e.preventDefault();
  console.log('TURN TO INDEX-VIEW!');

  $('#iceland, #maui').addClass('index-view');
  $('#view-slide').fadeIn(300);
  $('#view-index').hide(300);
});
  //When the user clicks on Index View Icon
    //Add Class index-view-style (changing flexbox to have flex-basis=22% & space-between) to all slides
    //Hide Index View Icon
    //Show Slide View Icon

// SLIDE VIEW ICON
$('view-slide').on('click', function (e){
  e.preventDefault();
  console.log('TURN TO SLIDE-VIEW!');

  $('#iceland, #maui').removeClass('index-view');
  $('')
});
  //When the user clicks on Slide View Icon
    //Add Class slide-view-style (changing flexbox to have flex-basis=22% & space-between) to all slides
    //Hide Slide View Icon
    //Show Index View Icon

//SMOOTH SCROLL
  // google jQuery anchor smooth scroll

//FILTER CONTENT
  //similar to how we filtered the author paragraph in the madlibs lab
