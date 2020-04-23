/**
 * EDIT: Resource Child Block
 */
import { PanelBody, PanelRow, Button } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import ResourceSettings from './components/ResourceSettings';
import ResourceCheckbox from './components/ResourceCheckbox';

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

	// Handle blank resource names.
	const displayName = 0 === name.length ? __( '(Untitled Resource)', 'resource-tracker' ) : name;

	// Create list of checkboxes to track total/used resources.
	const pool = [];

	for ( let i = 1; i <= total; i++ ) {

		// Mark unchecked checkboxes as disabled except first checkbox after last checked checkbox.
		const disabled = i > ( used + 1 );

		pool.push(
			<ResourceCheckbox
				checked={ i <= used }
				disabled={ disabled }
				onUpdateResource={ onUpdateResource }
				used={ used }
			/>
		);
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
							total={ total }
							used={ used }
							onUpdateResource={ onUpdateResource }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				<p className="resource">
					<span className="resource-name">{ displayName }</span>
					<span className="resource-pool">{ pool }</span>
				</p>
			</div>
		</>
	);
};

export default Edit;
