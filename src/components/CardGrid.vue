<template>
	<div class="card_grid" :class="{ card_grid_smol: size === 'small', card_grid_large: size === 'large' }">
		<slot></slot>
	</div>
</template>

<script lang="ts">
export default {
	name: "CardGrid",
	props: {
		size: {
			type: String,
			validator(value: string) {
				return ["small", "large"].includes(value);
			},
		},
	},
};
</script>

<style lang="scss" scoped>
.card_grid {
	margin: -16px 0 0 -16px;
	display: grid;
}

.card_grid_smol {
	grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}

.card_grid_large {
	grid-template-columns: repeat(auto-fill, minmax(219px, 1fr));
}
</style>
