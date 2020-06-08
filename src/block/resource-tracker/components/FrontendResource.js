/**
 * Display resource on frontend.
 */
const { apiFetch } = wp;
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
		total: 1,
		used: 0,
	} );
	const {
		name,
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
	const onUpdateResource = async ( attribute, value ) => {
		const newAttributes = {
			...attributes,
			[ attribute ]: value,
		};

		// Save updates.
		const response = await apiFetch( {
			path: `/rave-resource/v1/pool/${ dataAttributes.post_id }`,
			method: 'POST',
			data: {
				...newAttributes,
			},
		} )
			.then( ( success ) => success )
			.catch( ( error ) => error );

		setAttributes( { ...newAttributes } );
		console.log( 'response', response );
	};

	return (
		<Resource
			className={ className }
			name={ name }
			total={ total }
			used={ used }
			onUpdateResource={ onUpdateResource }
		/>
	);
};

export default FrontendResource;
