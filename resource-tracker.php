<?php
/**
 * Plugin Name: Resource Tracker
 * Description: A block plugin for tracking usage of limited resources in Table-Top Role-Playing Games.
 * Author:      R A Van Epps
 * Author URI:  https://ravanepps.com
 * Version:     1.1.3
 * License:     GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: resource-tracker
 * Domain Path: /languages
 *
 * @package Rave\ResourceTracker
 * @since   1.0.0
 */

namespace Rave\ResourceTracker;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Register the block with WordPress.
 *
 * @author WebDevStudios
 * @since  1.0.0
 */
function register_block() {

	// Define our assets.
	$editor_script   = 'build/index.js';
	$editor_style    = 'build/index.css';
	$frontend_style  = 'build/style-index.css';
	$frontend_script = 'build/frontend.js';

	// Verify we have an editor script.
	if ( ! file_exists( plugin_dir_path( __FILE__ ) . $editor_script ) ) {
		wp_die( esc_html__( 'Whoops! You need to run `npm run build` for Resource Tracker first.', 'resource-tracker' ) );
	}

	// Autoload dependencies and version.
	$asset_file = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Register editor script.
	wp_register_script(
		'resource-tracker-editor-script',
		plugins_url( $editor_script, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// Register editor style.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $editor_style ) ) {
		wp_register_style(
			'resource-tracker-editor-style',
			plugins_url( $editor_style, __FILE__ ),
			[ 'wp-edit-blocks' ],
			filemtime( plugin_dir_path( __FILE__ ) . $editor_style )
		);
	}

	// Register frontend style.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $frontend_style ) ) {
		wp_register_style(
			'resource-tracker-style',
			plugins_url( $frontend_style, __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . $frontend_style )
		);
	}

	// Register blocks with WordPress.
	register_block_type( 'rave/resource-tracker', array(
		'editor_script'   => 'resource-tracker-editor-script',
		'editor_style'    => 'resource-tracker-editor-style',
		'style'           => 'resource-tracker-style',
		'render_callback' => __NAMESPACE__ . '\render_block',
	) );

	// Register frontend script.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $frontend_script ) ) {
		wp_enqueue_script(
			'resource-tracker-frontend-script',
			plugins_url( $frontend_script, __FILE__ ),
			array_merge( $asset_file['dependencies'], [
				'wp-api-fetch',
			] ),
			$asset_file['version'],
			true
		);
	}
}
add_action( 'init', __NAMESPACE__ . '\register_block' );

// Load frontend render via PHP.
require_once plugin_dir_path( __FILE__ ) . '/includes/frontend.php';
require_once plugin_dir_path( __FILE__ ) . '/includes/Routes.php';
