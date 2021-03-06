<?php
/**
 * Render block contents on frontend.
 *
 * @package Rave\ResourceTracker
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */

namespace Rave\ResourceTracker;

/**
 * Render resource tracker block on frontend.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  array $attributes Resource block attributes.
 * @return string            HTML to render for block.
 */
function render_block( array $attributes ) : string {
	$id    = $attributes['id'];
	$name  = $attributes['name'] ?? esc_html__( '(Untitled Resource)', 'resource-tracker' );
	$total = intval( $attributes['total'] ?? 1 );
	$used  = intval( $attributes['used'] ?? 0 );

	ob_start();
	?>

	<div
		class="wp-block-rave-resource-tracker"
		data-id="<?php echo esc_attr( $id ); ?>"
		data-name="<?php echo esc_attr( $name ); ?>"
		data-total="<?php echo esc_attr( $total ); ?>"
		data-used="<?php echo esc_attr( $used ); ?>"
		data-post_id="<?php echo esc_attr( get_the_ID() ); ?>"
	>
		<h3 class="resource-name"><?php echo esc_html( $name ); ?></h3>
		<div class="resource-pool">

			<?php for ( $i = 1; $i <= $total; $i++ ) : ?>
				<input
					type="checkbox"
					name="resource-pool-checkbox_<?php echo esc_attr( $i ); ?>"
					class="resource-pool-checkbox"
					<?php echo esc_attr( $i <= $used ? 'checked="checked"' : '' ); ?>
				/>
			<?php endfor; ?>

		</div>
	</div>

	<?php
	return ob_get_clean();
}
