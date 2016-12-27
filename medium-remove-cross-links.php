<?php
/**
 * Plugin Name:     Remove Medium Cross Links
 * Plugin URI:      https://github.com/TangRufus/remove-medium-cross-links
 * Description:     Remove cross links from medium plugin
 * Author:          Tang Rufus
 * Author URI:      https://www.typist.tech/
 * Text Domain:     remove-medium-cross-links
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         Remove_Medium_Cross_Links
 */

/**
 * Remove cross link action.
 *
 * @return void
 */
function remove_medium_cross_links() {
	remove_action( 'init', array( 'Medium_Site', 'init' ) );
}

if ( ! is_admin() ) {
	add_action( 'init', 'remove_medium_cross_links', 5 );
}
