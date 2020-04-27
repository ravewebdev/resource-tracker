<?php
/**
 * Render block contents via frontend.
 *
 * @package Rave\ResourceTracker
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */

namespace Rave\ResourceTracker;

/**
 * Render block on frontend.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  array $attributes Resource block attributes.
 * @return string            HTML to render for block.
 */
function render_resource_tracker( array $attributes ) : string {
	$id          = $attributes['id'];
	$name        = $attributes['name'] ?? esc_html__( '(Untitled Resource)', 'resource-tracker' );
	$description = $attributes['description'] ?? '';
	$total       = intval( $attributes['total'] ?? 1 );
	$used        = intval( $attributes['used'] ?? 0 );

	ob_start();
	?>

	<div
		class="resource wp-block-rave-resource-tracker"
		data-id="<?php echo esc_attr( $id ); ?>"
		data-name="<?php echo esc_attr( $name ); ?>"
		data-description="<?php echo esc_attr( $description ); ?>"
		data-total="<?php echo esc_attr( $total ); ?>"
		data-used="<?php echo esc_attr( $used ); ?>"
	>
		<h3 class="resource-name"><?php echo esc_html( $name ); ?></h3>
		<p class="resource-pool">

			<?php for ( $i = 1; $i <= $total; $i++ ) : ?>
				<input
					type="checkbox"
					name="resource-pool-checkbox_<?php echo esc_attr( $i ); ?>"
					class="resource-pool-checkbox"
					<?php echo esc_attr( $i <= $used ? 'checked="checked"' : '' ); ?>
				/>
			<?php endfor; ?>

		</p>

		<?php if ( ! empty( $description ) ) : ?>
			<p class="resource-description"><?php echo esc_html( $description ); ?></p>
		<?php endif; ?>
	</div>

	<?php
	return ob_get_clean();
}
