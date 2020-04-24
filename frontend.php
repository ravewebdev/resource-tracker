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
function render_resource( array $attributes ) : string {
	ob_start();
	$name        = $attributes['name'] ?? esc_html__( '(Untitled Resource)', 'resource-tracker' );
	$description = $attributes['description'] ?? '';
	$total       = intval( $attributes['total'] );
	$used        = intval( $attributes['used'] );
	?>

	<div class="resource">
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