/**
 * FRONTEND: Resource Child Block
 */
const {
	render,
} = wp.element;

import FrontendResource from './components/FrontendResource';

const blockClass = '.wp-block-rave-resource-tracker';
const resourceClass = '.wp-block-rave-resource';
const blocks = document.querySelectorAll( blockClass );

blocks.forEach( ( block, blockIndex ) => {
	const resources = block.querySelectorAll( resourceClass );

	resources.forEach( ( resource, resourceIndex ) => {
		const attributes = {
			name: resource.dataset.name,
			description: resource.dataset.description,
			total: parseInt( resource.dataset.total, 10 ),
			used: parseInt( resource.dataset.used, 10 ),
		};

		render(
			<FrontendResource
				dataAttributes={ attributes }
				className={ resourceClass }
			/>,
			resource
		);
	} );
} );
