<?php
/**
 * Handle custom routing.
 *
 * @package Rave\ResourceTracker
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */

namespace Rave\ResourceTracker;

use \WP_REST_SERVER;
use \WP_REST_Request;
use \WP_REST_Response;
use \WP_Error;

/**
 * Class Routes
 *
 * @package Rave\ResourceTracker
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */
class Routes {

	/**
	 * Array of custom routes.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 * @var    array
	 */
	private $routes = [];

	/**
	 * Route namespace.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 * @var    string
	 */
	private $namespace = 'rave-resource';

	/**
	 * Init / return singleton.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @return Routes Routes instance.
	 */
	public static function init() : Routes {
		static $instance = null;

		if ( null === $instance ) {
			$instance = new Routes();
		}

		return $instance;
	}

	/**
	 * Initialize object.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 */
	private function __construct() {
		$this->routes = [
			'pool' => [
				'uses_id' => true,
				'version' => 1,
				'args'    => [
					'methods'  => WP_REST_SERVER::EDITABLE,
					'callback' => [ $this, 'update_resource_usage' ],
					'args'     => [],
				],
			],
		];
		$this->register_hooks();
	}

	/**
	 * Register hooks.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 */
	private function register_hooks() {
		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	/**
	 * Register routes.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 */
	public function register_routes() {
		array_map( [ $this, 'register_route' ], array_keys( $this->routes ) );
	}

	/**
	 * Update resourse usage.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  WP_REST_Request $request WP_REST_Request object.
	 * @return WP_Error|WP_REST_Response WP_REST_Response if data retrieval successful, WP_Error otherwise.
	 */
	public function update_resource_usage( WP_REST_Request $request ) {
		return new WP_REST_Response( 'success', 200 );
	}

	/**
	 * Register individual route.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param string $route Route base.
	 */
	private function register_route( string $route ) {
		$route_pieces = $this->get_route_pieces( $route, false );
		$args         = $this->routes[ $route ]['args'] ?? [];

		register_rest_route( $route_pieces['namespace'], $route_pieces['route'], $args );
	}

	/**
	 * Get route pieces: versioned namespace and full route.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  string $route Route base.
	 * @param  bool   $plain Whether returned route should be plain, i.e., skip route arg handling.
	 * @return void|array    Route pieces if route exists.
	 */
	private function get_route_pieces( string $route, bool $plain = true ) {
		if ( ! array_key_exists( $route, $this->routes ) ) {
			return;
		}

		$options   = $this->routes[ $route ];
		$version   = $options['version'] ?? 1;
		$namespace = "{$this->namespace}/v{$version}";
		$route    .= ! $plain && $options['uses_id'] ? '/(?P<id>[\d]+)' : '';

		return [
			'namespace' => $namespace,
			'route'     => "/{$route}",
		];
	}
}

// Init Routes instance.
if ( ! is_admin() ) {
	Routes::init();
}
