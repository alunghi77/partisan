<?php
/**
 * @package Writ
 */
 // I had to comment this out as it was stopping the script from running with our setup and subsequently not running
 // the wp_footer() call and therefore not loading any of the theme JavaScript which meant the responsive NAV was not
 //working!
// if ( ! is_active_sidebar( 'sidebar-1' ) && ! is_active_sidebar( 'sidebar-2' ) && ! is_active_sidebar( 'sidebar-3' ) ) {
// 	return;
// }
 ?>

	<div id="secondary" class="widget-area footer-widget-area" role="complementary">
	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
	<div class="first footer-widgets">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div>
	<?php endif; ?>

	<?php if ( is_active_sidebar( 'sidebar-2' ) ) : ?>
	<div class="second footer-widgets">
		<?php dynamic_sidebar( 'sidebar-2' ); ?>
	</div>
	<?php endif; ?>

	<?php if ( is_active_sidebar( 'sidebar-3' ) ) : ?>
	<div class="third footer-widgets">
		<?php dynamic_sidebar( 'sidebar-3' ); ?>
	</div>
	<?php endif; ?>
</div><!-- #secondary -->

	</div><!-- #main -->


	<!-- <footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<?php do_action( 'writ_credits' ); ?>
			<a href="http://wordpress.org/" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', 'writ' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'writ' ), 'WordPress' ); ?></a>
			<span class="sep">  &#8226; </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'writ' ), 'Writ', '<a href="http://gauravtiwari.org/" rel="designer">Gaurav Tiwari</a>' ); ?>
		</div>
	</footer!--><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
