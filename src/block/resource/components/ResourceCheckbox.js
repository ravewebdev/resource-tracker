/**
 * Display resource uses checkbox.
 */
import { CheckboxControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

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
		disabled,
		checked,
		onUpdateResource,
	} = props;
	let {
		used,
	} = props;

	const [ isChecked, setChecked ] = useState( false );

	// Set initial checked state from props.
	useEffect( () => {
		setChecked( checked );
	} );

	return (
		<CheckboxControl
			checked={ isChecked }
			className="resource-pool-checkbox"
			onChange={ () => {
				setChecked( ! isChecked );
				used = ! isChecked ? used + 1 : used - 1;
				onUpdateResource( 'used', used );
			} }
			disabled={ disabled }
		/>
	);
};

export default ResourceCheckbox;
