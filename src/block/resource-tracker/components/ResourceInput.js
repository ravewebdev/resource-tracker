/**
 * Display resource input.
 */
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ResourceInput = ( props ) => {
	const {
		resource: {
			name,
			total,
		},
		index,
		onUpdateResource,
	} = props;

	const nameClass = 'resource-name';
	const totalClass = 'resource-total';

	/**
	 * Handle calling `onUpdateResource` with new values for resource properties.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {string} property Name of property to be updated.
	 * @param  {mixed}  value    New value of property.
	 */
	const updateResource = ( property, value ) => {
		const newResource = { ...props.resource };
		newResource[ property ] = value;
		onUpdateResource( newResource, index );
	};

	return (
		<div
			className="resource-options"
			key={ index }
		>
			<label htmlFor={ `${ nameClass }-${ index }` } className={ nameClass }>
				<TextControl
					label={ __( 'Resource Name', 'resource-tracker' ) }
					value={ name }
					id={ `${ nameClass }-${ index }` }
					onChange={ ( newName ) => {
						updateResource( 'name', newName );
					} }
				/>
			</label>
			<label htmlFor={ `${ totalClass }-${ index }` } className={ totalClass }>
				<TextControl
					label={ __( 'Total Uses', 'resource-tracker' ) }
					type="number"
					value={ total }
					id={ `${ totalClass }-${ index }` }
					onChange={ ( newTotal ) => {
						updateResource( 'total', newTotal );
					} }
				/>
			</label>
		</div>
	);
};

export default ResourceInput;
