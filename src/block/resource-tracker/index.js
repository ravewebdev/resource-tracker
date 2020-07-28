/**
 * BLOCK: Resource Tracker
 *
 * Register Resource Tracker
 */

import edit from './edit';
import save from './save';

import './style.scss';

const {
	i18n: {
		__,
	},
	blocks: {
		registerBlockType,
	},
} = wp;

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
