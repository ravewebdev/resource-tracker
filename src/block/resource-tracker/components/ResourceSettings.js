/**
 * Display resource inputs.
 */

const {
	i18n: {
		__,
	},
	components: {
		TextControl,
	},
} = wp;

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
		total,
		onUpdateResource,
	} = props;

	const nameClass = 'resource-name';
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
