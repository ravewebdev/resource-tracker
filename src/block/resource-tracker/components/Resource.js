/**
 * Display rendered resource.
 */
import { __ } from '@wordpress/i18n';

import ResourceCheckbox from './ResourceCheckbox';

/**
 * Handle render of individual resource.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Ojbect} props Component props.
 * @return {ReactElement} Component render JSX.
 */
const Resource = ( props ) => {
	const {
		className,
		name,
		total,
		used,
		onUpdateResource,
		isEditing,
	} = props;

	// Handle blank resource names.
	let displayName = 0 === name.length ? __( '(Untitled Resource)', 'resource-tracker' ) : name;

	// Create list of checkboxes to track total/used resources.
	const pool = [];

	for ( let i = 1; i <= total; i++ ) {

		// Mark unchecked checkboxes as disabled except first checkbox after last checked checkbox.
		const disabled = ( i > ( used + 1 ) ) || isEditing;

		pool.push(
			<ResourceCheckbox
				index={ i }
				disabled={ disabled }
				onUpdateResource={ onUpdateResource }
				used={ used }
			/>
		);
	}

	// Check if resource has been used up (pool empty) and add strikethrough if true.
	if ( used === total ) {
		displayName = <s>{ displayName }</s>;
	}

	return (
		<div className={ `${ className } resource ${ used === total ? 'empty' : '' }` }>
			<h3 className="resource-name">
				{ displayName }
			</h3>
			<p className="resource-pool">{ pool }</p>
		</div>
	);
};

export default Resource;
