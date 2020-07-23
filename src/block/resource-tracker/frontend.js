/**
 * FRONTEND: Resource Tracker Block
 */

import FrontendResource from './components/FrontendResource';

const {
	element: {
		render,
	},
} = wp;

const resourceClass = '.wp-block-rave-resource-tracker',
	resources = document.querySelectorAll( resourceClass );

/**
 * Retrieve and re-render resource tracker blocks.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} resource Resource DOM element.
 */
resources.forEach( ( resource ) => {
	const attributes = {
		name: resource.dataset.name,
		total: parseInt( resource.dataset.total, 10 ),
		used: parseInt( resource.dataset.used, 10 ),
		post_id: parseInt( resource.dataset.post_id, 10 ),
		block_id: resource.dataset.id,
	};

	render(
		<FrontendResource dataAttributes={ attributes } />,
		resource
	);
} );
