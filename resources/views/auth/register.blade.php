<!doctype html>
<html lang="en">
	
<!-- codeface tech -->
<head>
		<!-- meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Infina - Creative Portfolio Template">
		<meta name="author" content="SVYYAT">
        <meta name="csrf-token" content="{{ csrf_token() }}">

		<!-- favicon -->
		<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
		<link rel="icon" type="image/x-icon" href="img/favicon.ico">
		<!-- css plugins -->
        <link rel="stylesheet" type="text/css" href="{{ url('/css/plugins.css') }}">
		<!-- font-awesome -->
		<link rel="stylesheet" href="../../../../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
		<!-- custom styles -->
		<link rel="stylesheet" type="text/css" href="{{ url('/css/style.css') }}">
		<!-- page title -->
		<title>Yoga</title>
	</head>
	<body>
		<!-- start rotation -->
		<div class="rotation">
			<!-- start description -->
			<div class="description rotation-description">
				<span class="rotation-description__icon"><i class="fas fa-mobile-alt"></i></span>
				<span class="rotation-description__text">Please Rotate your device to portrait mode!</span>
			</div>
			<!-- end description -->
		</div>
		<!-- start rotation -->
		<!-- start cursor -->
		<div class="cursor">
			<!-- start cursor-loader -->
			<div class="cursor-loader cursor-preloader">
				<svg class="cursor-loader__circle" width="52" height="52">
					<circle class="cursor-loader__circle--progress" cx="-24" cy="24" r="23" transform="rotate(-90)"/>
					<circle class="cursor-loader__circle--bar" cx="-24" cy="24" r="23" transform="rotate(-90)"/>
				</svg>
			</div>
			<!-- end cursor-loader -->
		</div>
		<!-- end cursor -->
		<!-- start header -->
		<header class="header">
			<!-- start header-container -->
			<div class="header-container">
				<!-- start header-logo -->
				<div class="header-logo">
					<a class="header-logo__link" href="index.html" aria-label="Go to home">Infina</a>
				</div>
				<!-- end header-logo -->
				<!-- start header-menu -->
				<div class="header-menu">
					<a class="header-menu__btn" href="#" aria-label="Open menu">
						<span></span>
						<span></span>
					</a>
				</div>
				<!-- end header-menu -->
				<!-- start header-nav -->
				<div class="header-nav">
					<!-- start background-first -->
					<div class="background-first"></div>
					<!-- end background-first -->
					<!-- start background-last -->
					<div class="background-last"></div>
					<!-- end background-last -->
					<!-- start menu -->
					<nav class="nav">
						<ul class="nav-list">
							<li class="nav-item">
								<a class="nav-item__link" href="index.html" aria-label="Go to home"><span>Home</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-item__link" href="works.html" aria-label="Go to portfolio"><span>Webinar</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-item__link" href="about.html" aria-label="Go to about"><span>Yoga class</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-item__link" href="contact.html" aria-label="Go to contacts"><span>Contacts</span></a>
							</li>
						</ul>
					</nav>
					<!-- end nav -->
				</div>
				<!-- end header-menu -->
				<!-- start header-fullscreen -->
				<div class="header-fullscreen">
				<a class="header-logo__link" href="register.html" aria-label="Go to home">Register</a>|
				<a class="header-logo__link" href="login.html" aria-label="Go to home">Login</a>
				</div>
				<!-- end header-fullscreen -->
			</div>
			<!-- end header-container -->
		</header>
		<!-- end header -->
		<!-- start scroll-wrapper -->
		<main class="scroll-wrapper animation--active">
			<!-- start main-content -->
			<div class="main-content">
				<!-- start container -->
				<div class="container">
					<!-- start row -->
					<div class="row row-padding animation">
						<!-- start col-lg-12 -->
						<div class="col-lg-12 text-center ghost">
							<h1 class="title text-stroke">Register</h1>
							<p class="subtitle mx-auto">Let's great together.</p>
						</div>
						<!-- end col-lg-12 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end container -->
				<!-- start container -->
				<div class="container">
					<!-- start row -->
					<div class="row padding-bottom animation">
						<!-- start col-lg-12 -->
						<div class="col-lg-12 ghost">
							<!-- start form -->
							<form id="form" method="POST" action="{{ route('register') }}">
                        @csrf
								<!-- start form-row -->
								<div class="form-row">
									<!-- start form-group -->
									<div class="form-group col-auto">
										<input id="name" class="form-control" type="text" name="name" autocomplete="off" required="">
										<label for="name">Name</label>
									</div>
									<!-- end form-group -->

									<div class="form-group col-auto">
										<select name="gender" id="gender" class="sel" >
											<option value="none" selected disabled > 
          Gender 
      </option> 
  <option value="male"style="color: #000;">Male</option>
  <option value="female"style="color: #000;">Female</option>
  
</select>
										
									</div>	
									<!-- start form-group -->
									<div class="form-group col-auto">
										<input  class="form-control" type="email" name="email" autocomplete="off" required="">
										<label for="email">Your e-mail</label>
									</div>
									<!-- end form-group -->
									<!-- start form-group -->
	<div class="form-group col-auto">
	<input class="form-control" type="email" name="email" autocomplete="off" required="">
										<label for="email">Mobile</label>
	</div>		
		<div class="form-group col-auto">
	<input  class="form-control" type="Password" name="password" autocomplete="off" required="">
										<label for="email">Password</label>
	</div>
		<div class="form-group col-auto">
	<input  class="form-control" type="Password" name="email" autocomplete="off" required="">
										<label for="email">Repeat Password</label>
	</div>	
<div class="form-group col-auto">
	<input  class="form-control" type="email" name="email" autocomplete="off" required="">
										<label for="email">Country & City</label>
	</div>	
<div class="form-group col-auto">
										<select name="cars" id="level" class="sel" >
											<option value="none" selected disabled > 
          Your yoga practice level 
      </option> 
  <option value="volvo" style="color: #000;">Beginner</option>
  <option value="saab" style="color: #000;">Intermediate</option>
  <option value="saab" style="color: #000;">Advanced</option>
</select>
										
									</div>	    
<div class="form-group col-lg-12">
										<textarea id="message" class="form-control" name="text" rows="1" required=""></textarea>
										<label for="message">Contact Address</label>
									</div>

									<!-- end form-group -->

									<!-- start form-group -->
									<div class="form-send">
										<button class="button" type="submit">NEXT STEP </button>
									</div>
									<!-- end form-group -->
								</div>
								<!-- end form-row -->
							</form>
							<!-- end form -->
						</div>
						<!-- end col-lg-12 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end container -->
				<!-- start container-fluid -->
				
				<!-- end container-fluid -->
				<!-- start container -->
				<div class="container">
					<!-- start row -->
					<div class="row animation">
						<!-- start col-lg-12 -->
						<div class="col-lg-12 d-flex flex-wrap ghost">
							<!-- start col-xl-4 -->
							<div class="col-xl-4 col-lg-12 d-flex flex-column align-items-center text-center px-0">
								<div class="label">E-mail</div>
								<a class="value" href="mailto:info@redox.com">info@redox.com</a>
							</div>
							<!-- end col-xl-4 -->
							<!-- start col-xl-4 -->
							<div class="col-xl-4 col-lg-12 d-flex flex-column align-items-center text-center px-0">
								<div class="label">Address</div>
								<div class="value">04211, st. Yordansʹka 9, Kyiv</div>
							</div>
							<!-- end col-xl-4 -->
							<!-- start col-xl-4 -->
							<div class="col-xl-4 col-lg-12 d-flex flex-column align-items-center text-center px-0">
								<div class="label">Phone</div>
								<a class="value" href="tel:123456789012">+12 (345) 678-90-12</a>
							</div>
							<!-- end col-xl-4 -->
						</div>
						<!-- end col-lg-12 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end container -->
			</div>
			<!-- end main-content -->
			<!-- start footer -->
			<footer class="footer position-relative">
				<!-- start footer-container -->
				<div class="footer-container">
					<!-- start footer-copyright -->
					<div class="footer-copyright">
						<p>&copy; Copyright 2020. All rights reserved</p>
					</div>
					<!-- end footer-copyright -->
					<!-- start footer-social-->
					<div class="footer-social">
						<ul class="social">
							<li class="social-item">
								<a class="social-item__link" href="https://facebook.com/" aria-label="Facebook" rel="noopener" target="_blank"><i class="fab fa-facebook-f"></i></a>
							</li>
							<li class="social-item">
								<a class="social-item__link" href="https://www.instagram.com/" aria-label="Instagram" rel="noopener" target="_blank"><i class="fab fa-instagram"></i></a>
							</li>
							<li class="social-item">
								<a class="social-item__link" href="https://twitter.com/" aria-label="Twitter" rel="noopener" target="_blank"><i class="fab fa-twitter"></i></a>
							</li>
							<li class="social-item">
								<a class="social-item__link" href="https://www.behance.net/" aria-label="Behance" rel="noopener" target="_blank"><i class="fab fa-behance"></i></a>
							</li>
							<li class="social-item">
								<a class="social-item__link" href="https://dribbble.com/" aria-label="Dribbble" rel="noopener" target="_blank"><i class="fab fa-dribbble"></i></a>
							</li>
						</ul>
					</div>
					<!-- end footer-social-->
				</div>
				<!-- end footer-container -->
			</footer>
			<!-- end footer -->
		</main>
		<!-- end scroll-wrapper -->
		<!-- jquery first -->
        
		<script src="{{ url('js/jquery-3.5.1.min.js') }}" ></script>
		<!-- javascript plugins -->
		<script src="{{ url('js/plugins.js') }}"></script>
		<!-- custom scripts -->
		<script src="{{ url('js/script.js') }}"></script>
		<!-- google map -->
	</body>

<!-- codeface tech -->
</html>