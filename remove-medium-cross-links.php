<?php
/**
 * Plugin Name:     Remove Medium Cross Links
 * Plugin URI:      https://wordpress.org/plugins/remove-medium-cross-links/
 * Description:     Remove Medium cross links footer from WordPress posts.
 * Author:          Tang Rufus
 * Author URI:      https://www.typist.tech/
 * Text Domain:     remove-medium-cross-links
 * Domain Path:     /languages
 * Version:         1.0.2
 *
 * @package         Remove_Medium_Cross_Links
 */
function remove_medium_cross_links() {
	remove_action( 'init', array( 'Medium_Site', 'init' ) );
}

if ( ! is_admin() ) {
	add_action( 'init', 'remove_medium_cross_links', 5 );
}
