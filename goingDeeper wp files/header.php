<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package GoingDeeperTheme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'goingdeepertheme' ); ?></a>







	<nav class="navbar navbar-toggleable-md navbar-light">
    <div class="container">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 <a href="#homeScroll" class="navTitle nav-brand"> GOING/DEEPER </a>


 <?php
	 wp_nav_menu( array(
		 'theme_location' => 'menu-1',
		 'container' => 'nav',
		 'container_class' => 'navbar-collapse collapse',
		 'menu_class' => 'nav navbar-nav',
		 'menu_id'    => 'primary-menu',
	 ) );
 ?>

<!--

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link"href="#homeScroll">Home</a>
      <a class="nav-item nav-link" href="#speakerScroll">Speakers</a>
      <a class="nav-item nav-link" href="#schedualScroll">Schedule</a>
      <a class="nav-item nav-link"  href="#contactScroll">Contact</a>
      <a class="navregisterbutton" href="https://www.eventbrite.com/e/goingdeeper-conference-tickets-34031577364" target="_blank">Register</a>

    </div>
  </div>


  -->
</div>

</nav>
