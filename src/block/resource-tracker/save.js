/**
 * SAVE: Resource Counter Block
 */
import { InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		className,
	} = props;

	return (
		<div className={ className }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
