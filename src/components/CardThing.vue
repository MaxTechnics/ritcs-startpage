<template>
	<div class="card_wrapper">
		<a class="card_link" :href="href">
			<div class="card_thingy">
				<div class="card_image" :style="card_image_style_tag">
					<CardImagePlaceholder v-if="!imageUri" :size="size" :label="label" />
				</div>
				<div class="card_label white-2p-ZZc weightMedium-3qcLrj">{{ label }}</div>
			</div>
		</a>
	</div>
</template>

<script>
import CardImagePlaceholder from "./CardImagePlaceholder.vue";

export default {
	name: "CardThing",
	props: {
		href: String,
		imageUri: String,
		label: String,
		size: {
			type: String,
			validator(value) {
				return ["small", "large"].includes(value);
			},
		}
	},
	components: {
		CardImagePlaceholder,
	},
	computed: {
		card_image_style_tag() { return this.imageUri ? `background-image: url('${this.imageUri}')` : ""; }
	}
};
</script>

<style lang="scss" scoped>
.card_wrapper {
	-webkit-box-flex: 0;
	-ms-flex: 0 0 auto;
	flex: 0 0 auto;

	// Modified for mobile
	// padding: 16px 0 0 16px;
	padding: 8px;
}
.card_link {
	// background-color: hsl(223, 6.9%, 19.8%); mods
	border-radius: 8px;
	cursor: pointer;
	display: block;
	position: relative;
	-webkit-transition: background-color 0.125s, -webkit-box-shadow 0.125s,
		-webkit-transform 0.125s;
	transition: background-color 0.125s, -webkit-box-shadow 0.125s,
		-webkit-transform 0.125s;
	transition: background-color 0.125s, box-shadow 0.125s, transform 0.125s;
	transition: background-color 0.125s, box-shadow 0.125s, transform 0.125s,
		-webkit-box-shadow 0.125s, -webkit-transform 0.125s;

	// mods
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	border: 1px rgba(255, 255, 255, 0.3) solid;
}

.card_link:hover {
	// background-color: hsl(220, 6.8%, 17.3%); mods
	background-image: none;
	-webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	text-decoration: none;
	-webkit-transform: translateY(-8px);
	transform: translateY(-8px);
}

a {
	color: hsl(197, calc(var(--saturation-factor, 1) * 100%), 47.8%);
	cursor: pointer;
	-webkit-transition: color 0.1s;
	transition: color 0.1s;
	text-decoration: none;
}

.card_thingy,
.card_image {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

.card_thingy {
	padding: 10px;
}

.card_image {
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	background-size: cover;
	border-radius: 8px;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	margin-bottom: 7px;
	position: relative;
	width: 100%;
	height: auto;

	// mods
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
}

.card_image:after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

.card_label {
	// color: hsl(210, 2.9%, 86.7%);
	-webkit-transition: color 0.125s;
	transition: color 0.125s;
	font-weight: 500;
	color: #fff;
}
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
	background-color: hsl(225, calc(var(--saturation-factor, 1) * 7.7%), 10.2%);
}
</style>
