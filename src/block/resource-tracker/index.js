/**
 * REGISTER: Resource Tracker Block.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType( 'rave/resource-tracker', {
	title: __( 'Resource Tracker', 'resource-tracker' ),
	icon: 'yes-alt',
	category: 'widgets',
	keywords: [
		__( 'ability spell resource tracker', 'resource-tracker' ),
	],
	attributes: {
		resources: {
			type: 'array',
		},
	},
	edit,
	save,
} );
