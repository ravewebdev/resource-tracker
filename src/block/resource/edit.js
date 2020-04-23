/**
 * EDIT: Resource Child Block
 */
import { PanelBody, PanelRow, Button } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import ResourceSettings from './components/ResourceSettings';

/**
 * Handle edit functionality in the admin.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Block props.
 * @return {ReactElement} Block edit JSX.
 */
const Edit = ( props ) => {
	const {
		attributes: {
			name,
			total,
			used,
		},
		className,
		setAttributes,
	} = props;

	/**
	 * Handle updating resource attributes.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {string} attribute Attribute name.
	 * @param  {mixed}  value     New value for attribute.
	 */
	const onUpdateResource = ( attribute, value ) => {
		setAttributes( {
			[ attribute ]: value,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Resource Settings', 'resource-tracker' ) }
					initialOpen={ true }
				>
					<PanelRow className="resource-settings">
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
			</div>
		</>
	);
};

export default Edit;
