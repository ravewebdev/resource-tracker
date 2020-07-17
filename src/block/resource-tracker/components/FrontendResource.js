/**
 * Display resource on frontend.
 */

import Resource from './Resource';

const {
	apiFetch,
	i18n: {
		__,
	},
	components: {
		Dashicon,
	},
	element: {
		useEffect,
		useState,
	},
} = wp;

/**
 * Frontend Resource Tracker.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Component props.
 * @return {ReactElement} Component render JSX.
 */
const FrontendResource = ( props ) => {
	const {
		dataAttributes,
		className,
	} = props;

	const [ isLoading, setLoading ] = useState( false );

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
		setLoading( true );

		const newAttributes = {
			...attributes,
			[ attribute ]: value,
		};

		// Save updates.
		await apiFetch( {
			path: `/rave-resource/v1/pool/${ dataAttributes.post_id }`,
			method: 'POST',
			data: {
				...newAttributes,
			},
		} )
			.then( ( success ) => success )
			.catch( ( error ) => error );

		setAttributes( { ...newAttributes } );
		setLoading( false );
	};

	return (
		<>
			<Resource
				className={ className }
				name={ name }
				total={ total }
				used={ used }
				onUpdateResource={ onUpdateResource }
				isLoading={ isLoading }
			/>
			<button
				className="reset-button"
				onClick={ () => {
					onUpdateResource( 'used', 0 );
				} }
				disabled={ isLoading }
			>
				<Dashicon icon="update" />
				{ __( 'Reset', 'resource-tracker' ) }
			</button>
		</>
	);
};

export default FrontendResource;
