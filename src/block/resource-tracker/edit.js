/**
 * EDIT: Resource Counter Block
 */
import { PanelBody, PanelRow } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import Resource from './components/Resource';
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
			id,
			name,
			description,
			total,
			used,
		},
		clientId,
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

	// Update id attr when clientId changes.
	if ( clientId !== id ) {
		onUpdateResource( 'id', clientId );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Resource Settings', 'resource-tracker' ) }
					initialOpen={ true }
				>
					<PanelRow className="resource-settings">
						<ResourceSettings
							name={ name }
							description={ description }
							total={ total }
							used={ used }
							onUpdateResource={ onUpdateResource }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<Resource
				className={ className }
				name={ name }
				description={ description }
				total={ total }
				used={ used }
				onUpdateResource={ onUpdateResource }
			/>
		</>
	);
};

export default Edit;
