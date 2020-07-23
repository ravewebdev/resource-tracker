/**
 * EDIT: Resource Counter Block
 */

import Resource from './components/Resource';
import ResourceSettings from './components/ResourceSettings';

const {
	i18n: {
		__,
	},
	components: {
		PanelBody,
		PanelRow,
	},
	editor: {
		InspectorControls,
	},
	element: {
		useEffect,
	},
} = wp;

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
			total,
			used,
		},
		clientId,
		className,
		setAttributes,
	} = props;

	useEffect( () => {

		// If id is not set (initial block creation), set id to clientId value.
		if ( 0 === id.length ) {
			onUpdateResource( 'id', clientId );
		}
	}, [] );

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
				<Resource
					name={ name }
					total={ total }
					used={ used }
					onUpdateResource={ onUpdateResource }
					isEditing={ true }
				/>
			</div>
		</>
	);
};

export default Edit;
