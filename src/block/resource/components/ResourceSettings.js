/**
 * Display resource inputs.
 */
import { TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Handle render of sidebar resource settings.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Component props.
 * @return {ReactElement} Component render JSX.
 */
const ResourceSettings = ( props ) => {
	const {
		name,
		description,
		total,
		onUpdateResource,
	} = props;

	const nameClass = 'resource-name';
	const descriptionClass = 'resource-description';
	const totalClass = 'resource-total';

	return (
		<>
			<label htmlFor={ nameClass } className={ nameClass }>
				<h3>{ __( 'Resource Name', 'resource-tracker' ) }</h3>
				<TextControl
					value={ name }
					id={ nameClass }
					onChange={ ( newName ) => {
						onUpdateResource( 'name', newName );
					} }
				/>
			</label>
			<label htmlFor={ descriptionClass } className={ descriptionClass }>
				<h3>{ __( 'Description', 'resource-tracker' ) }</h3>
				<TextareaControl
					id={ descriptionClass }
					rows={ 3 }
					value={ description }
					onChange={ ( newDescription ) => {
						onUpdateResource( 'description', newDescription );
					} }
				/>
			</label>
			<label htmlFor={ totalClass } className={ totalClass }>
				<h3>{ __( 'Total Uses', 'resource-tracker' ) }</h3>
				<TextControl
					type="number"
					value={ total }
					id={ totalClass }
					onChange={ ( newTotal ) => {
						newTotal = parseInt( newTotal, 10 );
						newTotal = 0 > newTotal ? 0 : newTotal;
						onUpdateResource( 'total', newTotal );
					} }
				/>
			</label>
		</>
	);
};

export default ResourceSettings;
