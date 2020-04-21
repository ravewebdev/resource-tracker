/**
 * REGISTER: Usage Tracker Block.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType( 'rave/usage-tracker', {
	title: __( 'Usage Tracker', 'usage-tracker' ),
	icon: 'edit',
	category: 'widgets',
	keywords: [
		__( 'ability spell usage tracker', 'usage-tracker' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );
