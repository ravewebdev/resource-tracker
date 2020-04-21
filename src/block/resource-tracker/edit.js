/**
 * EDIT: Resource Counter Block
 */
import { PanelBody, PanelRow, Button } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import ResourceInput from './components/ResourceInput';

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
			resources,
		},
		className,
		setAttributes,
	} = props;

	/**
	 * Update `resources` attribute on any change to individual resource.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {Object}   resource Resource object.
	 * @param  {number}   index    Current index of resource.
	 */
	const onUpdateResource = ( resource, index ) => {
		resource.used = resource.hasOwnProperty( 'used' ) ? resource.used : 0;
		const newResources = [ ...resources ];

		if ( -1 === index ) {

			// Add new resource instead of updating if index is set to -1.
			newResources.push( { ...resource } );
		} else {

			// Update existing resource otherwise.
			newResources[ index ] = { ...resource };
		}

		setAttributes( {
			resources: newResources,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Resource Tracker Options', 'resource-tracker' ) }
					initialOpen={ true }
				>
					<PanelRow className="resource-settings">
						{ resources.map( ( resource, index ) => (
							<ResourceInput
								resource={ resource }
								key={ index }
								index={ index }
								onUpdateResource={ onUpdateResource }
							/>
						) ) }
						<Button
							isPrimary
							onClick={ () => {
								onUpdateResource( {
									name: '',
									total: 0,
								}, -1 );
							} }
						>
							{ __( 'Add Resource', 'resource-tracker' ) }
						</Button>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
			</div>
		</>
	);
};

export default Edit;
