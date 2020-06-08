<?php
/**
 * Handle custom routing.
 *
 * @package Rave\ResourceTracker
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */

namespace Rave\ResourceTracker;

/**
 * Class Routes
 *
 * @package Rave\ResourceTracker
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */
class Routes {

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
	}
}

// Init Routes instance.
if ( ! is_admin() ) {
	Routes::init();
}
