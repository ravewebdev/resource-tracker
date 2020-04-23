/**
 * EDIT: Resource Counter Block
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import ResourceInput from './components/ResourceInput';

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
		className,
	} = props;

	return (
		<div className={ className }>
			{ __( 'Add some trackable resources, such as abilities or spells.', 'resource-tracker' ) }
			<InnerBlocks
				allowedBlocks={ [
					'core/paragraph',
					'rave/resource',
				] }
				template={ [
					[ 'rave/resource', {} ],
				] }
			/>
		</div>
	);
};

export default Edit;
