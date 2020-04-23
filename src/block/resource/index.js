/**
 * REGISTER: Resource Child Block.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType( 'rave/resource', {
	title: __( 'Resource', 'resource-tracker' ),
	icon: 'image-filter',
	category: 'widgets',
	keywords: [
		__( 'ability spell resource', 'resource-tracker' ),
	],
	attributes: {
		name: {
			type: 'string',
			default: '',
		},
		total: {
			type: 'integer',
			default: 1,
		},
		used: {
			type: 'integer',
			default: 0,
		},
	},
	edit,
	save,
} );
