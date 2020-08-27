      <script>
         $('.owl-one').owlCarousel({
            loop:true,
                    margin:10,
                    nav:true,
                    autoplay:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    },
                  //   https://github.com/OwlCarousel2/OwlCarousel2/issues/1354
                  // https://cloud.githubusercontent.com/assets/16153113/14896557/56b28d32-0d4c-11e6-9112-6d58edf16671.PNG
                    navText : ["<img src='./img/left-arrow.svg' class='hero-arrow-left' alt='left-arrow'>",
                    "<img src='./img/chevron.svg' class='hero-arrow-right' alt='rigth-arrow'>"],
                    dotsClass : 'owl-dots-one',
                    dotClass: 'owl-dot-one'
                    
         }); 
               
      </script>
      <script>
         // change name and use as many carousel on page like this
         $('.owl-two').owlCarousel({
            loop:true,
                    margin:10,
                    nav:true,
                    autoplay:true,
                  //   Dots can be false
                  // responsive design keep item 1 if not needed to edit
                    responsive:{
                    
                        1000:{
                            items:1
                        }
                    },
                  //   custom navigation
         
                    navText : ["<img src='./img/prtnrs-left-arrow.png' class='prtnrs-arrow-left' alt='left-arrow'>",
                    "<img src='./img/prtnrs-right-arrow.png' class='prtnrs-arrow-right' alt='rigth-arrow'>"],
                  //   custom dots
                    dotsClass : 'owl-dots-two',
                    dotClass: 'owl-dot-two'
         
         }); 
               
      </script>
      <script>
         $('.owl-three').owlCarousel({
            loop:true,
                    margin:10,
                    nav:true,
                    autoplay:true,
                    singleItem:true,
                    items:1,
                   
                  //   custom navigation
                  //   use arrows or images with navText for arrow navigation.
                  navText : ["<img src='./img/prtnrs-left-arrow.png' class='client-arrow-left' alt='left-arrow'>",
                    "<img src='./img/prtnrs-right-arrow.png' class='client-arrow-right' alt='rigth-arrow'>"],
                  //   custom dots]
                  // use dotsClass for complete row customization 
                  // use dotClass for single dot customization
                    dotsClass : 'owl-dots-three',
                    dotClass: 'owl-dot-three'
         
         }); 
               
      </script>
