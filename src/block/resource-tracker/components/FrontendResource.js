/**
 * Display resource on frontend.
 */
const {
	useState,
	useEffect,
} = wp.element;

import Resource from './Resource';

const FrontendResource = ( props ) => {
	const {
		dataAttributes,
		className,
	} = props;

	const [ attributes, setAttributes ] = useState( {
		name: '',
		description: '',
		total: 1,
		used: 0,
	} );
	const {
		name,
		description,
		total,
		used,
	} = attributes;

	// Set initial attribute values from props.
	useEffect( () => {
		setAttributes( {
			...dataAttributes,
		} );
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
			...attributes,
			[ attribute ]: value,
		} );
	};

	return (
		<Resource
			className={ className }
			name={ name }
			description={ description }
			total={ total }
			used={ used }
			onUpdateResource={ onUpdateResource }
		/>
	);
};

export default FrontendResource;
