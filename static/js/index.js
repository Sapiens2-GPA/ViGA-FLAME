window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    // The results carousel is still an empty placeholder; initialize it only when it has items.
    if (document.querySelector('.carousel .item')) {
      var carousels = bulmaCarousel.attach('.carousel', options);

      for (var i = 0; i < carousels.length; i++) {
        carousels[i].on('before:show', state => {
          console.log(state);
        });
      }
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();

    const comparisonVideo = document.querySelector('#comparison-video');
    if (comparisonVideo) {
      const comparisonVideos = [
        '0094_e3_yaw_-90_comparison_web.mp4',
        '0094_e7_yaw_-90_comparison_web.mp4',
        '0094_e9_yaw_+45_comparison_web.mp4',
        '0156_e1_yaw_-90_comparison_web.mp4',
        '0195_e7_yaw_-90_comparison_web.mp4',
        '0195_e8_yaw_+90_comparison_web.mp4',
        '0250_e0_yaw_-90_comparison_web.mp4',
        '0250_e0_yaw_+90_comparison_web.mp4'
      ];
      const comparisonCounter = document.querySelector('#comparison-counter');
      let comparisonIndex = 0;

      function showComparison(index) {
        comparisonIndex = (index + comparisonVideos.length) % comparisonVideos.length;
        comparisonVideo.pause();
        comparisonVideo.src = './static/videos/' + comparisonVideos[comparisonIndex];
        comparisonVideo.load();
        comparisonCounter.textContent = 'Video ' + (comparisonIndex + 1) + ' of ' + comparisonVideos.length;
      }

      document.querySelector('#comparison-previous').addEventListener('click', function() {
        showComparison(comparisonIndex - 1);
      });
      document.querySelector('#comparison-next').addEventListener('click', function() {
        showComparison(comparisonIndex + 1);
      });
    }

})
