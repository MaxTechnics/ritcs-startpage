<template>
    <div class="card_image_placeholder" :class="{ img_placeholder_size_smol: size === 'small', img_placeholder_size_large: size === 'large' }">{{ getAcronym(this.label) }}</div>
</template>

<script lang="ts">
export default {
	name: "CardImagePlaceholder",
	props: {
		size: {
			type: String,
			validator(value: string) {
				return ["small", "large"].includes(value);
			},
		},
		label: String,
	},
	methods: {
		getAcronym(string: string) {
			return string.match(/\b(\w)/g)!.join("");
		},
	},
};
</script>

<style lang="scss" scoped>
.card_image_placeholder,
.card_label {
	overflow: hidden;
	text-align: center;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.card_image_placeholder {
	position: absolute;
	border-radius: 8px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0 4px;
	background-color: hsl(225, 7.7%, 10.2%);
	color: #fff;
	font-weight: 500;
}

.img_placeholder_size_large {
	line-height: 34px;
	font-size: 28px;
}

.img_placeholder_size_smol {
	line-height: 26px;
	font-size: 20px;
}
</style>
