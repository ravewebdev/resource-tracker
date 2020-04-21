/**
 * EDIT: Resource Counter Block
 */
import { PanelBody, PanelRow } from '@wordpress/components';
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
							/>
						) ) }
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
			</div>
		</>
	);
};

export default Edit;
