/**
 * BLOCK: Resource Tracker
 *
 * Register Resource Tracker
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

/**
 * Register Resource Tracker block.
 */
registerBlockType( 'rave/resource-tracker', {
	title: __( 'Resource Tracker', 'resource-tracker' ),
	icon: 'editor-table',
	category: 'widgets',
	keywords: [
		__( 'ability spell resource tracker', 'resource-tracker' ),
	],
	attributes: {
		id: {
			type: 'string',
			default: '',
		},
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
