/*
Template Name    : Infina - Creative Showcase Portfolio
Version          : 1.0.0
Author           : SVYYAT
Author URI       : https://themeforest.net/user/svyyat
Created.         : August 2020
File Description : Main JS file of the template

// ------------------------------------------ //
//              Table Of Content              //
// ------------------------------------------ //



1. Preloader;
2. Cursor;
3. Animation On Cursor;
4. Video Player;
5. Menu;
6. Contact Form;
7. FullScreen;
8. Swiper Slide Horizontal;
9. Swiper Slide Vertical;
10. Swiper Text Vertical;
11. Swiper Center Slides;
12. Swiper Coverflow Horizontal;
13. Swiper Coverflow Vertical;
14. About;
15. Portfolio;
16. View Case;
17. Contacts;
18. Google Map.



*/



$(function () {
	'use strick';


	/*========== Start Preloader ==========*/

	function removeClass(elem, className) {
		let l = elem.length;

		if (l == undefined) {
			_removeClass(elem, className);
		} else {
			let i = l - 1;

			while (i >= 0) {
				_removeClass(elem[i], className);
				i--;
			}
		}
	}

	function _removeClass(elem, newClass) {
		if (elem.classList) {
			elem.classList.remove(newClass);
		} else {
			let exp = '(^|\\b)' + newClass.split(' ').join('|') + '(\\b|$)';
			elem.className = elem.className.replace(new RegExp(exp, 'gi'), ' ');
		}
	}

	function addClass(elem, className) {
		let l = elem.length;
		if (l == undefined) {
			_addClass(elem, className);
		} else {
			let i = l - 1;
			while (i >= 0) {
				_addClass(elem[i], className);
				i--;
			}
		}
	}

	function _addClass(elem, newClass) {
		if (elem.classList) {
			elem.classList.add(newClass);
		} else {
			elem.className += ' ' + className;
		}
	}

	let loaderDashoffsetTotal = 502;
	let preloader = document.querySelector('.cursor-preloader');
	let cursor = document.querySelector('.cursor');
	let preloaderOuter = preloader.querySelector('.cursor-loader__circle--bar');
	let loaded = 0;
	let total = 10;

	function onProgress() {
		let percentLoaded = Math.round((loaded / total) * 100);
		let calc = (loaderDashoffsetTotal / 100);
		let percent = Math.round(calc * percentLoaded);
		let offset = loaderDashoffsetTotal - percent;
		preloaderOuter.style.strokeDashoffset = offset + 'px';
	}

	function init() {
		let startLength = loaderDashoffsetTotal + 'px';
		preloaderOuter.style.strokeDashoffset = startLength;
		preloaderOuter.style.opacity = 1;
		setTimeout(() => {
			let newLength = (loaderDashoffsetTotal) + 'px';
			preloaderOuter.style.strokeDashoffset = newLength;
			addClass(preloaderOuter, 'loading');
			loadPages();
		}, 50);
	}
	init();

	function loadPages() {
		load();
	}

	function load() {
		loaded++;
		onProgress();
		if (loaded == total) {
			setTimeout(() => {
				onDone();
			}, 150);
		} else {
			setTimeout(() => {
				load();
			}, 50);
		}
	}

	function onDone() {
		addClass(preloader, 'hidden');
		addClass(cursor, 'active');
		setTimeout(() => {
			loaded = 0;
			preloaderOuter.style.strokeDashoffset = loaderDashoffsetTotal + 'px';

			TweenMax.from('header, footer', 0.55, { opacity: 0, ease: Power2.easeInOut });
			TweenMax.to('header, footer', 0.55, { opacity: 1, ease: Power2.easeInOut });

			TweenMax.from('.swiper-wrapper', 0.1, { opacity: 0, ease: Power2.easeInOut });
			TweenMax.to('.swiper-wrapper', 0.1, { opacity: 1, ease: Power2.easeInOut });

			TweenMax.from('.swiper-button, .swiper-pagination', 0.55, { opacity: 0, ease: Power2.easeInOut });
			TweenMax.to('.swiper-button, .swiper-pagination', 0.55, { opacity: 1, delay: 0.5, ease: Power2.easeInOut });

			TweenMax.from('.swiper-horizontal .swiper-wrapper', 1.25, { x: '110%', ease: Power3.easeInOut });
			TweenMax.to('.swiper-horizontal .swiper-wrapper', 1.25, { x: '0%', ease: Power3.easeInOut });
			TweenMax.from('.swiper-horizontal .swiper-slide-active .slide-label span', 0.75, { x: '-110%', ease: Power3.easeInOut });
			TweenMax.to('.swiper-horizontal .swiper-slide-active .slide-label span', 0.75, { x: '0%', delay: 0.75, ease: Power3.easeInOut });

			TweenMax.from('.swiper-vertical .swiper-wrapper', 1.25, { y: '110%', ease: Power3.easeInOut });
			TweenMax.to('.swiper-vertical .swiper-wrapper', 1.25, { y: '0%', ease: Power3.easeInOut });
			TweenMax.from('.swiper-vertical .swiper-slide-active .slide-label span', 0.75, { y: '110%', ease: Power3.easeInOut });
			TweenMax.to('.swiper-vertical .swiper-slide-active .slide-label span', 0.75, { y: '0%', delay: 0.75, ease: Power3.easeInOut });

			TweenMax.from('#text-vertical .pagination-wrapper', 1.25, { y: '110%', ease: Power3.easeInOut });
			TweenMax.to('#text-vertical .pagination-wrapper', 1.25, { y: '-50%', delay: 0.1, ease: Power3.easeInOut });

			TweenMax.from('#center-slides .swiper-wrapper', 1.25, { x: '110%', ease: Power3.easeInOut });
			TweenMax.to('#center-slides .swiper-wrapper', 1.25, { x: '10%', ease: Power3.easeInOut });
			TweenMax.from('#center-slides .swiper-slide-active .slide-media', 1, { scale: 0.9, ease: Power4.easeInOut });
			TweenMax.to('#center-slides .swiper-slide-active .slide-media', 1, { scale: 1, delay: 0.75, ease: Power4.easeInOut });
			TweenMax.from('#center-slides .swiper-slide-active .slide-label span', 0.75, { y: '110%', ease: Power3.easeInOut });
			TweenMax.to('#center-slides .swiper-slide-active .slide-label span', 0.75, { y: '0%', delay: 1, ease: Power3.easeInOut });

			TweenMax.from('.swiper-horizontal.coverflow .swiper-wrapper', 1.25, { x: '110%', ease: Power3.easeInOut });
			TweenMax.to('.swiper-horizontal.coverflow .swiper-wrapper', 1.25, { x: '10%', ease: Power3.easeInOut });
			TweenMax.from('.swiper-vertical.coverflow .swiper-wrapper', 1.25, { y: '110%', ease: Power3.easeInOut });
			TweenMax.to('.swiper-vertical.coverflow .swiper-wrapper', 1.25, { y: '17.5%', ease: Power3.easeInOut });
			TweenMax.from('.coverflow .swiper-slide-active .slide-label span', 0.75, { scale: 0, ease: Power3.easeInOut });
			TweenMax.to('.coverflow .swiper-slide-active .slide-label span', 0.75, { scale: 1, delay: 1, ease: Power3.easeInOut });

		}, 0);
	}

	/*========== End Preloader ==========*/
	/*========== Start Cursor ==========*/

	var $cursor = $('.cursor');

	function moveCursor(e) {
		TweenMax.to($cursor, 0.55, { left: e.pageX, top: e.pageY, ease: Power4.easeOut });
	}

	$(window).on('mousemove', moveCursor);

	/*========== End Cursor ==========*/
	/*========== Start Animation On Cursor ==========*/

	$('a').on('mouseenter', function (event) {
		TweenMax.to('.cursor', 0.05, { scale: 1.25, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderWidth: '0px', ease: Power3.easeIn });
	});
	$('a').on('mouseleave', function (event) {
		TweenMax.to('.cursor', 0.05, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: '2px', ease: Power3.easeOut });
	});

	$('.header-nav .nav-item__link, #talk, button, .button').on('mouseenter', function (event) {
		TweenMax.to('.cursor', 0.15, { scale: 1.5, backgroundColor: 'rgba(255, 255, 255, 1)', mixBlendMode: 'difference', ease: Power3.easeIn });
	});
	$('.header-nav .nav-item__link, #talk, button, .button').on('mouseleave', function (event) {
		TweenMax.to('.cursor', 0.15, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)', mixBlendMode: 'normal', ease: Power3.easeOut });
	});

	$('.swiper-button, .form-control').on('mouseenter', function (event) {
		TweenMax.to('.cursor', 0.15, { scale: 1.5, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderWidth: '0px', ease: Power3.easeIn });
	});
	$('.swiper-button, .form-control').on('mouseleave', function (event) {
		TweenMax.to('.cursor', 0.15, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: '2px', ease: Power3.easeOut });
	});

	$('.difference').on('mouseenter', function (event) {
		TweenMax.to('.cursor', 0.02, { mixBlendMode: 'difference', ease: Power2.easeIn });
	});
	$('.difference').on('mouseleave', function (event) {
		TweenMax.to('.cursor', 0.02, { mixBlendMode: 'normal', ease: Power2.easeOut });
	});

	$('#videoContainer, #videoContainer button').on('mouseenter', function (event) {
		TweenMax.to('.cursor', 0.05, { scale: 1.25, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderWidth: '0px', ease: Power3.easeIn });
	});
	$('#videoContainer, #videoContainer button').on('mouseleave', function (event) {
		TweenMax.to('.cursor', 0.05, { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)', borderWidth: '2px', ease: Power3.easeOut });
	});

	/*========== End Animation On Cursor ==========*/
	/*========== Start Video Player ==========*/

	var viewportWidth = $(window).width();
	if (viewportWidth < 992) {
		$('.slide-media .video').remove();
	}

	$(document).ready(function () {
		if ($('video').is('#video')) {
			// Return a DOM object
			var objectVideo = $('#videoContainer video');
			var video = objectVideo.get(0);

			setVolume(0.5); // Set default volume to 50%

			objectVideo.on('mouseenter mouseleave', function (e) {
				$(this).data('isHovered', e.type === 'mouseenter');
			});

			$(document).on('keyup', function (e) {
				if (e.which == 32) {
					var fullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
					var isHovered = objectVideo.data('isHovered');
					if (fullScreen || isHovered) {
						playVideo();
					}
				}
			});

			objectVideo.on('click', function () {
				playVideo();
			});

			// Play/Pause control clicked
			$('#playButton').on('click', function () {
				playVideo();
			});

			function playVideo() {
				if (video.paused) {
					video.play();
					$('#playButton').removeClass('video-play');
					$('#playButton').addClass('video-pause');
				}
				else {
					video.pause();
					$('#playButton').addClass('video-play');
					$('#playButton').removeClass('video-pause');
				}
			}

			// Progress time

			setInterval(function () {
				// Update HTweenMaxL5 video current play time
				$('#ctime').html(formatTime(Math.round(video.currentTime)));
				// Get HTweenMaxL5 video time duration
				$('#ttime').html(formatTime(video.duration - Math.round(video.currentTime)));
			}, 250);

			function formatTime(seconds) {
				minutes = Math.floor(seconds / 60);
				minutes = (minutes >= 10) ? minutes : '0' + minutes;
				seconds = Math.floor(seconds % 60);
				seconds = (seconds >= 10) ? seconds : '0' + seconds;
				return minutes + ':' + seconds;
			}

			var scrubber = $('.progress');
			var progress = $('.progress-bar');

			objectVideo.bind('timeupdate', videoTimeUpdateHandler);
			scrubber.bind('mousedown', scrubberMouseDownHandler);

			function videoTimeUpdateHandler(e) {
				var percent = video.currentTime / video.duration;
				updateProgressWidth(percent);
			}

			function scrubberMouseDownHandler(e) {
				var $this = $(this);
				var x = e.pageX - $this.offset().left;
				var percent = x / $this.width();
				updateProgressWidth(percent);
				updateVideoTime(percent);
			}

			function updateProgressWidth(percent) {
				progress.width((percent * 100) + '%');
			}

			function updateVideoTime(percent) {
				video.currentTime = percent * video.duration;
			}

			// Mute Video
			$('#muteButton').on('click', function () {
				muteVideo();
			});

			function muteVideo() {
				if ($('video').prop('muted')) {
					$('video').prop('muted', false);
					$('#muteButton').removeClass('unmute');
					$('#muteButton').addClass('mute');
				} else {
					$('video').prop('muted', true);
					$('#muteButton').addClass('unmute');
					$('#muteButton').removeClass('mute');
				}
			}

			// Volume

			var savedVolume;

			$('#volume a').on('click', function () {
				if ($('#videoContainer video').prop('muted')) {
					$('#videoContainer video').prop('muted', false);
					setVolume(savedVolume);
				} else {
					$('#videoContainer video').prop('muted', true);
					savedVolume = video.volume;
					setVolume(0);
				}
			});

			$('.volume-slider').slider({
				orientation: 'horizontal',
				min: 0,
				max: 100,
				value: 50,
				range: 'min',
				slide: function (event, ui) {
					setVolume(ui.value / 100);
				}
			});

			function setVolume($volume) {

				video.volume = $volume;

				switch (true) {
					case ($volume >= 0.5):
						// High
						$('.toggle-sound').addClass('video-volume-high');
						$('.toggle-sound').removeClass('video-volume-mediumm');
						$('.toggle-sound').removeClass('video-volume-low');
						$('.toggle-sound').removeClass('video-volume-muted');
						break;
					case ($volume < 0.5 && $volume >= 0.25):
						// Medium
						$('.toggle-sound').addClass('video-volume-medium');
						$('.toggle-sound').removeClass('video-volume-high');
						$('.toggle-sound').removeClass('video-volume-low');
						$('.toggle-sound').removeClass('video-volume-muted');
						break;
					case ($volume < 0.25 && $volume > 0):
						// Low
						$('.toggle-sound').addClass('video-volume-low');
						$('.toggle-sound').removeClass('video-volume-high');
						$('.toggle-sound').removeClass('video-volume-medium');
						$('.toggle-sound').removeClass('video-volume-muted');
						break;
					default:
						// Off
						$('.toggle-sound').addClass('video-volume-muted');
						$('.toggle-sound').removeClass('video-volume-high');
						$('.toggle-sound').removeClass('video-volume-medium');
						$('.toggle-sound').removeClass('video-volume-low');
				}
			}

			// Fullscreen

			$('#fullscreenButton').on('click', function () {
				if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
					// exit full-screen
					$('#fullscreenButton').addClass('video-fullscreen--active');
					$('#fullscreenButton').removeClass('video-fullscreen--disable');
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if (document.msExitFullscreen) {
						document.msExitFullscreen();
					}
				} else if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {

					var v = document.getElementById('videoContainer');

					$('#fullscreenButton').removeClass('video-fullscreen--active');
					$('#fullscreenButton').addClass('video-fullscreen--disable');
					// go full-screen
					if (v.requestFullscreen) {
						v.requestFullscreen();
					} else if (v.webkitRequestFullscreen) {
						v.webkitRequestFullscreen();
					} else if (v.mozRequestFullScreen) {
						v.mozRequestFullScreen();
					} else if (v.msRequestFullscreen) {
						v.msRequestFullscreen();
					}
				} else {
					alert('Your browsers doesn\'t support fullscreen');
				}
			});

			// Picture in Picture
			let pipWindow;
			var videoElement = document.getElementById('video');
			var pipButtonX = document.getElementById('pipButtonX');
			var pipButton = document.getElementById('pipButton');


			// For Safari

			if (videoElement.webkitSupportsPresentationMode && typeof videoElement.webkitSetPresentationMode === 'function') {
				pipButton.style.display = 'none';
				// Toggle PiP when the user clicks the button.
				pipButtonX.addEventListener('click', function (event) {
					videoElement.webkitSetPresentationMode(videoElement.webkitPresentationMode === 'picture-in-picture' ? 'inline' : 'picture-in-picture');
				});
			} else {
				pipButtonX.style.display = 'none';
			}

			pipButton.addEventListener('click', function () {
				videoElement.requestPictureInPicture()
					.catch(error => {
						// Video failed to enter Picture-in-Picture mode.
					});
			});

			// For Chrome, Edge, Opera

			videoElement.addEventListener('enterpictureinpicture', function (event) {
				// Video entered Picture-in-Picture mode.
				pipWindow = event.pictureInPictureWindow;
				updateVideoSize(pipWindow.width, pipWindow.height);
				pipWindow.addEventListener('resize', onPipWindowResize);
			});

			videoElement.addEventListener('leavepictureinpicture', function () {
				// Video left Picture-in-Picture mode.
				pipWindow.removeEventListener('resize', onPipWindowResize);
			});

			function onPipWindowResize(event) {
				// Picture-in-Picture window has been resized.
				updateVideoSize(event.target.width, event.target.height);
			}

			function updateVideoSize(width, height) { }

			// Airplay

			var airPlayButton = document.getElementById('airplayButton');

			if (window.WebKitPlaybackTargetAvailabilityEvent) {
				videoElement.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
					switch (event.availability) {
						case 'available':
							airPlayButton.hidden = false;
							airPlayButton.disabled = false;
							break;
						case 'not-available':
							airPlayButton.hidden = true;
							airPlayButton.disabled = true;
							break;
					}
				});
			} else if (!window.WebKitPlaybackTargetAvailabilityEvent) {
				return;
			} else {
				alert('Your browsers doesn\'t support airplay');
			}

			airPlayButton.addEventListener('click', function (event) {
				videoElement.webkitShowPlaybackTargetPicker();
			});

		}
	});

	/*========== End Video Player ==========*/
	/*========== Start Menu ==========*/

	$('.header-menu__btn, .header-nav .nav-item__link').on('click', function () {
		$('.header-menu__btn').toggleClass('header-menu__btn--active');
		if ($('.header-menu__btn').hasClass('header-menu__btn--active')) {
			$('.header-nav').addClass('visible');
			TweenMax.set('.header-nav .background-first', { y: '-100%' });
			$('.header-nav .background-first').each(function () {
				TweenMax.to('.header-nav .background-first', 0.5, { y: '0%', delay: 0.15, ease: Power4.easeOut })
			});
			TweenMax.set('.header-nav .background-last', { y: '-100%' });
			$('.header-nav .background-last').each(function () {
				TweenMax.to('.header-nav .background-last', 0.5, { y: '0%', delay: 0.75, ease: Power4.easeOut })
			});
			new TimelineLite().set('.header-nav span', { y: 100 });
			$('.header-nav span').each(function (index, element) {
				new TimelineLite().to(element, 0.5, { y: 0, delay: 0.95, ease: Power3.easeOut }, index * 0.11)
			});
		} else {
			$('.header-nav span').each(function (index, element) {
				new TimelineLite().to(element, 0.5, { y: -100, delay: 0.25, ease: Power3.easeIn }, index * 0.11)
			});
			$('.header-nav .background-first').each(function () {
				TweenMax.to('.header-nav .background-first', 0.5, { y: '100%', delay: 2.25, ease: Power4.easeOut })
			});
			$('.header-nav .background-last').each(function () {
				TweenMax.to('.header-nav .background-last', 0.5, { y: '100%', delay: 1.5, ease: Power4.easeOut })
			});
			setTimeout(function () {
				$('.header-nav').removeClass('visible')
			}, 2555);
		}
	});

	/*========== End Menu ==========*/
	/*========== Start Contact Form ==========*/

	$(window).load(function() {
		$('#form .form-control').val('');

		$('#form .form-control').focusout(function() {
			if ($(this).val() != '') {
				$(this).addClass('focus');
			} else {
				$(this).removeClass('focus');
			}
		})
	});

	$('#form').on('submit', function () {
		$.ajax({
			type: 'POST',
			url: 'mail.php', // default 'mail.php'. Can be change to 'telegram.php' for using Telegram
			data: $(this).serialize(),
			success: function (data) {
				$(this).find('input').val('');
				alert('Thank you for your request! Soon we will contact you.');
				$('#form').trigger('reset');
			}
		});
		return false;
	});

	/*========== End Contact Form ==========*/
	/*========== Start FullScreen ==========*/

	window.launchFullScreen = function () {
		var element = $('body')[0];
		if (element.requestFullScreen) {
			element.requestFullScreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		}
	};

	window.cancelFullscreen = function () {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	};

	window.checkFullscreen = function () {
		if (document.fullscreenElement ||
			document.mozFullscreenElement ||
			document.webkitFullscreenElement) {
			return true;
		}
		return false;
	};

	$(document).on('click', '.header-fullscreen__btn', function (e) {
		e.preventDefault();
		if (checkFullscreen()) {
			cancelFullscreen();
		} else {
			launchFullScreen();
		}
		return false;
	});

	$('.header-fullscreen__btn').on('click', function () {
		$('.header-fullscreen__btn').toggleClass('header-fullscreen__btn--active');
	});

	/*========== End FullScreen ==========*/
	/*========== Start Swiper Slide Horizontal ==========*/

	$(document).ready(function () {
		if ($('.swiper-container').is('#slide-horizontal')) {
			var slideHorizontal = new Swiper('#slide-horizontal', {
				direction: 'horizontal',
				effect: 'slide',
				grabCursor: false,
				keyboard: true,
				lazy: true,
				loop: false,
				mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				parallax: true,
				preloadImages: false,
				resistance: true,
				resistanceRatio: 0.55,
				speed: 1250,
				on: {
					init: function () {
						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {
						TweenMax.to($('.swiper-slide-active').prev().find('span'), 0.35, { x: '100%', ease: Power3.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('span'), 0.5, { x: '0%', delay: 1, ease: Power3.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('span'), 0.35, { x: '-100%', ease: Power3.easeInOut });

						TweenMax.to($('.swiper-slide-active').prev().find('.slide-media'), 1, { opacity: 0, ease: Power4.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('.slide-media'), 1, { opacity: 0.65, ease: Power4.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('.slide-media'), 1, { opacity: 0, ease: Power4.easeInOut });

						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
							$(this).prop('muted', true);
						});
					},
					slideChangeTransitionEnd: function () {
						$('.swiper-slide-prev').find('video').each(function () {
							$(this).get(0).pause();
							$(this).get(0).currentTime = 0;
						});
						$('.swiper-slide-next').find('video').each(function () {
							$(this).get(0).pause();
							$(this).get(0).currentTime = 0;
						});
					}
				}
			});
		}
	});

	/*========== End Swiper Slide Horizontal ==========*/
	/*========== Start Swiper Slide Vertical ==========*/

	$(document).ready(function () {
		if ($('.swiper-container').is('#slide-vertical')) {
			var slideVertical = new Swiper('#slide-vertical', {
				direction: 'vertical',
				effect: 'slide',
				grabCursor: true,
				keyboard: true,
				loop: false,
				mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				parallax: true,
				resistance: true,
				resistanceRatio: 0.55,
				speed: 1250,
				on: {
					init: function () {
						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {
						TweenMax.to($('.swiper-slide-active').prev().find('span'), 0.5, { y: -100, ease: Power3.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('span'), 0.7, { y: 0, delay: 0.5, ease: Power3.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('span'), 0.5, { y: 100, ease: Power3.easeInOut });

						TweenMax.to($('.swiper-slide-active').prev().find('.slide-media'), 1, { opacity: 0, ease: Power4.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('.slide-media'), 1, { opacity: 0.65, ease: Power4.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('.slide-media'), 1, { opacity: 0, ease: Power4.easeInOut });

						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
							$(this).prop('muted', true);
						});
					},
					slideChangeTransitionEnd: function () {
						$('.swiper-slide-prev').find('video').each(function () {
							$(this).get(0).pause();
						});
						$('.swiper-slide-next').find('video').each(function () {
							$(this).get(0).pause();
						});
					}
				}
			});
		}
	});

	/*========== End Swiper Slide Vertical ==========*/
	/*========== Start Swiper Text Vertical ==========*/

	$(document).ready(function () {
		if ($('.swiper-container').is('#text-vertical')) {

			var title = [];
			var category = [];

			$('#text-vertical .swiper-slide').each(function () {
				category.push($(this).data('category'));
				title.push($(this).data('title'));
			});

			var textVertical = new Swiper('#text-vertical', {
				direction: 'vertical',
				effect: 'slide',
				grabCursor: true,
				keyboard: true,
				loop: false,
				mousewheel: true,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '">' + '<div class="slide-label">' + '<p class="slide-label__title">' + title[index] + '</p>' + '<p class="slide-label__category">' + category[index] + '</p>' + '</div>' + '</div>';
					},
				},
				parallax: true,
				resistance: true,
				resistanceRatio: 0.55,
				speed: 1250,
				on: {
					init: function () {
						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {
						TweenMax.to($('.swiper-slide-active').prev().find('span'), 0.35, { y: -100, ease: Power3.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('span'), 0.7, { y: 0, delay: 0.55, ease: Power3.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('span'), 0.35, { y: 100, ease: Power3.easeInOut });

						TweenMax.to($('.swiper-slide-active').prev().find('.slide-media'), 1, { opacity: 0, ease: Power4.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('.slide-media'), 1, { opacity: 0.65, ease: Power4.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('.slide-media'), 1, { opacity: 0, ease: Power4.easeInOut });

						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
							$(this).prop('muted', true);
						});
					},
					slideChangeTransitionEnd: function () {
						$('.swiper-slide-prev').find('video').each(function () {
							$(this).get(0).pause();
						});
						$('.swiper-slide-next').find('video').each(function () {
							$(this).get(0).pause();
						});
					}
				}
			});
		}
	});

	/*========== End Swiper Text Vertical ==========*/
	/*========== Start Swiper Center Slides ==========*/

	$(document).ready(function () {
		if ($('.swiper-container').is('#center-slides')) {
			var centerSlides = new Swiper('#center-slides', {
				centeredSlides: true,
				direction: 'horizontal',
				effect: 'slide',
				grabCursor: false,
				keyboard: true,
				loop: false,
				mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				parallax: true,
				resistance: true,
				resistanceRatio: 0.55,
				slidesPerView: 'auto',
				spaceBetween: 56,
				speed: 1050,
				breakpoints: {
					576: {
						spaceBetween: 12
					},
					1200: {
						spaceBetween: 32
					}
				},
				on: {
					init: function () {
						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {
						TweenMax.to($('.swiper-slide-active').prev().find('span'), 0.35, { y: -100, ease: Power3.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('span'), 0.7, { y: 0, delay: 0.55, ease: Power3.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('span'), 0.35, { y: 100, ease: Power3.easeInOut });

						TweenMax.to($('.swiper-slide-active').prev().find('.slide-media'), 1, { scale: 0.9, opacity: 0.5, ease: Power4.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('.slide-media'), 1, { scale: 1, delay: 0.36, opacity: 0.65, ease: Power4.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('.slide-media'), 1, { scale: 0.9, opacity: 0.5, ease: Power4.easeInOut });

						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
							$(this).prop('muted', true);
						});
					},
					slideChangeTransitionEnd: function () {
						$('.swiper-slide-prev').find('video').each(function () {
							$(this).get(0).pause();
						});
						$('.swiper-slide-next').find('video').each(function () {
							$(this).get(0).pause();
						});
					}
				},
			});
		}
	});

	/*========== End Swiper Center Slides ==========*/
	/*========== Start Swiper Coverflow Horizontal ==========*/

	$(document).ready(function () {
		if ($('.swiper-container').is('#coverflow-horizontal')) {
			var coverflowHorizontal = new Swiper('#coverflow-horizontal', {
				centeredSlides: true,
				coverflowEffect: {
					rotate: 32,
					stretch: 0,
					depth: 16,
					modifier: 1,
					slideShadows: true,
				},
				direction: 'horizontal',
				effect: 'coverflow',
				grabCursor: true,
				keyboard: true,
				loop: false,
				mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				resistance: true,
				resistanceRatio: 0.55,
				slidesPerView: 'auto',
				spaceBetween: 80,
				speed: 1250,
				breakpoints: {
					576: {
						coverflowEffect: {
							depth: 120,
						},
						spaceBetween: 0,
					},
					768: {
						coverflowEffect: {
							depth: 80,
						},
						spaceBetween: 0,
					},
					992: {
						coverflowEffect: {
							depth: 56,
						},
						spaceBetween: 10,
					},
					1200: {
						coverflowEffect: {
							depth: 24,
						},
						spaceBetween: 24,
					},
					1440: {
						coverflowEffect: {
							depth: 16,
						},
						spaceBetween: 12,
					}
				},
				on: {
					init: function () {
						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {
						TweenMax.to($('.swiper-slide-active').prev().find('span'), 0.25, { scale: 0, ease: Power3.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('span'), 0.5, { scale: 1, delay: 0.75, ease: Power3.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('span'), 0.25, { scale: 0, ease: Power3.easeInOut });

						TweenMax.to($('.swiper-slide-active').prev().find('.slide-media'), 1.25, { opacity: 0.5, ease: Power4.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('.slide-media'), 1.25, { delay: 0.25, opacity: 0.65, ease: Power4.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('.slide-media'), 1.25, { opacity: 0.5, ease: Power4.easeInOut });

						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
							$(this).prop('muted', true);
						});
					},
					slideChangeTransitionEnd: function () {
						$('.swiper-slide-prev').find('video').each(function () {
							$(this).get(0).pause();
						});
						$('.swiper-slide-next').find('video').each(function () {
							$(this).get(0).pause();
						});
					}
				}
			});
		}
	});

	/*========== End Swiper Coverflow Horizontal ==========*/
	/*========== Start Swiper Coverflow Vertical ==========*/

	$(document).ready(function () {
		if ($('.swiper-container').is('#coverflow-vertical')) {
			var coverflowVertical = new Swiper('#coverflow-vertical', {
				centeredSlides: true,
				coverflowEffect: {
					rotate: 32,
					stretch: 0,
					depth: 16,
					modifier: 1,
					slideShadows: true,
				},
				direction: 'vertical',
				effect: 'coverflow',
				grabCursor: true,
				keyboard: true,
				loop: false,
				mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				resistance: true,
				resistanceRatio: 0.55,
				slidesPerView: 'auto',
				spaceBetween: 64,
				speed: 1250,
				on: {
					init: function () {
						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
						});
					},
					slideChangeTransitionStart: function () {
						TweenMax.to($('.swiper-slide-active').prev().find('span'), 0.25, { scale: 0, ease: Power3.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('span'), 0.5, { scale: 1, delay: 0.75, ease: Power3.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('span'), 0.25, { scale: 0, ease: Power3.easeInOut });

						TweenMax.to($('.swiper-slide-active').prev().find('.slide-media'), 1.25, { opacity: 0.5, ease: Power4.easeInOut });
						TweenMax.to($('.swiper-slide-active').find('.slide-media'), 1.25, { delay: 0.25, opacity: 0.65, ease: Power4.easeOut });
						TweenMax.to($('.swiper-slide-active').next().find('.slide-media'), 1.25, { opacity: 0.5, ease: Power4.easeInOut });

						$('.swiper-slide-active').find('video').each(function () {
							$(this).get(0).play();
							$(this).prop('muted', true);
						});
					},
					slideChangeTransitionEnd: function () {
						$('.swiper-slide-prev').find('video').each(function () {
							$(this).get(0).pause();
						});
						$('.swiper-slide-next').find('video').each(function () {
							$(this).get(0).pause();
						});
					}
				}
			});
		}
	});

	/*========== End Swiper Coverflow Vertical ==========*/
	/*========== Start About ==========*/

	$(document).ready(function () {
		if ($('div').hasClass('owl-reviews')) {
			var owlR = $('.reviews .owl-carousel');

			owlR.owlCarousel({
				dots: false,
				loop: true,
				items: 1,
				margin: 16,
				nav: true,
				navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
				smartSpeed: 1000,
			});
		}
	});

	/*========== End About ==========*/
	/*========== Start Portfolio ==========*/

	$(document).ready(function () {
		if ($('main').hasClass('scroll-wrapper')) {
			const ScrollArea = document.querySelector('.scroll-wrapper');
			var scrollbar = window.Scrollbar;

			scrollbar.use(OverscrollPlugin);

			var ScrollbarOptions = {
				continuousScrolling: true,
				damping: 0.15,
				renderByPixels: true,
				plugins: {
					overscroll: {
						damping: 0.15,
						effect: 'bounce',
						maxOverscroll: 50
					}
				},
			};

			var ScrollbarInit = Scrollbar.init(ScrollArea, ScrollbarOptions);

			var parallaxScene = TweenMax.to('.hero .parallax', 1, { top: '18%', ease: Power0.easeNone });
			var controller = new ScrollMagic.Controller();
			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: '.hero',
				triggerHook: 0,
				duration: '100%'
			})
				.setTween(parallaxScene)
				.addTo(controller);
		}
	});

	$(document).ready(function () {
		if ($('main, div').hasClass('animation--active')) {
			var height = window.innerHeight;

			$('.container-fluid .animation').each(function () {
				var $this = $(this);
				var thisheight = $(this).height() + height;
				var parallax = $this.find('.parallax');
				var imgParallax = TweenMax.fromTo(parallax, 1, { y: '-5%' }, { y: '15%', ease: Power0.easeNone });
				var controller = new ScrollMagic.Controller();
				var parallaxScene = new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: 1,
					duration: thisheight
				})
					.setTween(imgParallax)
					.addTo(controller);
			});


			$('.hero.animation').each(function () {
				var $this = $(this);
				var opacity = $this.find('.parallax.opacity');
				var imgOpacity = TweenMax.fromTo(opacity, 5, { opacity: 0.55 }, { opacity: 0, ease: Power0.easeNone });
				var controller = new ScrollMagic.Controller();
				var opacityScene = new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: 0,
					duration: '90%'
				})
					.setTween(imgOpacity)
					.addTo(controller);
			});

			var controller = new ScrollMagic.Controller();
			var animation = document.getElementsByClassName('animation');

			for (var i = 0; i < animation.length; i++) { // create a scene for each element
				new ScrollMagic.Scene({
					triggerElement: animation[i], // y value not modified, so we can use element as trigger as well
					offset: 5, // start a little later
					triggerHook: 0.95,
					reverse: false
				})
					.setClassToggle(animation[i], 'visible') // add class toggle
					.addTo(controller);
			}
		}
	});

	$('.work .preview-video').on('mouseenter', function (event) {
		$('.work .preview-video').find('video').each(function () {
			$(this).get(0).play();
			$(this).prop('muted', true);
		});
	});

	$('.work .preview-video').on('mouseleave', function (event) {
		$('.work .preview-video').find('video').each(function () {
			$(this).get(0).pause();
			$(this).get(0).currentTime = 0;
		});
	});

	/*========== End Portfolio ==========*/
	/*========== Start View Case ==========*/

	$(document).ready(function () {
		if ($('div').hasClass('owl-slides')) {
			var owlS = $('.owl-carousel.owl-slides');

			owlS.owlCarousel({
				autoplay: false,
				dots: false,
				loop: false,
				nav: true,
				navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
				smartSpeed: 1000,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
						margin: 16,
					},
					767: {
						items: 2,
						margin: 16,
					},
					991: {
						items: 3,
					}
				}
			});
		}
	});

	$(document).ready(function () {
		if ($('a').hasClass('content-image')) {
			$('.main-content').magnificPopup({
				delegate: '.content-image',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				image: {
					verticalFit: true,
					titleSrc: function (item) {
						return '<a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank"></a>';
					}
				},
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true,
					duration: 500, // don't foget to change the duration also in CSS
					opener: function (element) {
						return element.find('img');
					}
				}
			});
		}
	});

	/*========== End View Case ==========*/

});

/*========== Start Google Map ==========*/

function initMap() {
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(50.495569, 30.506437),
		draggable: true,
		scrollwheel: false,
		disableDefaultUI: true,
		styles: [
			{
				"featureType": "all",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#838383"
					}
				]
			},
			{
				"featureType": "administrative.locality",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#c4c4c4"
					}
				]
			},
			{
				"featureType": "administrative.neighborhood",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#aaaaaa"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 21
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#6e6e6e"
					},
					{
						"lightness": "0"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#575757"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#2c2c2c"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#999999"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			}
		]
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.495569, 30.506437),
		map: map,
		title: 'I\'m here!'
	});
}

/*========== End Google Map ==========*/