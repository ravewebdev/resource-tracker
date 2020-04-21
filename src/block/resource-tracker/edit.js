/**
 * EDIT: Resource Counter Block
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Handle edit functionality in the admin.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Block props.
 * @return {ReactElement} Block edit JSX.
 */
const Edit = ( props ) => {
	const {
		attributes: {
			resources,
		},
		className,
		setAttributes,
	} = props;

	return (
		<div className={ className }>
		</div>
	);
};

export default Edit;
