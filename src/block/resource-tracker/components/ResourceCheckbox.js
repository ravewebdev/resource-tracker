/**
 * Display resource pool checkbox.
 */

const {
	components: {
		CheckboxControl,
	},
	element: {
		useEffect,
		useState,
	},
} = wp;

/**
 * Handle render of resource pool checkbox.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Component props.
 * @return {ReactElement} Component render JSX.
 */
const ResourceCheckbox = ( props ) => {
	const {
		index,
		used,
		disabled,
		onUpdateResource,
	} = props;

	const [ isChecked, setChecked ] = useState( false );

	// Set initial checked state from props.
	useEffect( () => {
		setChecked( index <= used );
	} );

	return (
		<CheckboxControl
			checked={ isChecked }
			help={ index }
			className="resource-pool-checkbox"
			onChange={ () => {
				setChecked( ! isChecked );
				onUpdateResource( 'used', ! isChecked ? used + 1 : used - 1 );
			} }
			disabled={ disabled }
		/>
	);
};

export default ResourceCheckbox;
