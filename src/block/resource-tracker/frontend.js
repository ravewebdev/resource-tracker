/**
 * FRONTEND: Resource Child Block
 */
const {
	render,
} = wp.element;

import FrontendResource from './components/FrontendResource';

const resourceClass = '.wp-block-rave-resource-tracker';
const resources = document.querySelectorAll( resourceClass );

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
	};

	render(
		<FrontendResource
			dataAttributes={ attributes }
			className={ resourceClass }
		/>,
		resource
	);
} );
