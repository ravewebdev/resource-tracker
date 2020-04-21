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
	} = props;

	const nameClass = 'resource-name';
	const totalClass = 'resource-total';

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
				/>
			</label>
			<label htmlFor={ `${ totalClass }-${ index }` } className={ totalClass }>
				<TextControl
					label={ __( 'Total Uses', 'resource-tracker' ) }
					type="number"
					value={ total }
					id={ `${ totalClass }-${ index }` }
				/>
			</label>
		</div>
	);
};

export default ResourceInput;
