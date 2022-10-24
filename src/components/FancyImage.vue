<template>
	<div class="bg" :class="{ 'loaded' : shouldShow }">
		<div v-if="darken" class="darken"></div>
	</div>
</template>

<script>
export default {
	name: 'FancyImage',
	props: {
		imageURL: {
			type: String,
			required: true
		},
		darken: {
			type: Boolean,
			default: false
		},
		makeVisible: {
			type: Boolean,
			default: true
		}
	},
	data: () => ({
		loaded: false
	}),
	methods: {
		initialize() {
			const source = this.imageURL;
			const that = this;
			new Promise(function(res, rej) {
				null == source && rej(new Error('No image src passed'));
				const img = new Image();
				img.src = source;
				img.onload = function() {
					return res(img);
				};
				img.onerror = function(e) {
					return rej(e);
				};
			}).then(function() {
				that.loaded = true;
			});
		}
	},
	watch: {
		imageURL: {
			handler() {
				this.loaded = false;
				this.initialize();
			},
			immediate: true
		}
	},
	computed: {
		imageSource() { return `url(${this.imageURL})` },
		shouldShow() {
			return this.loaded && this.makeVisible;
		}
	},
	mounted() {
		console.log('FancyImage mounted');
		this.initialize();

	}
};
</script>

<style scoped>
div {
	margin: 0;
	height: 100vh;
	max-height: 100vh;
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
}

.bg {
	background: v-bind(imageSource);
	/* Center and scale the image */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;

	opacity: 0;
	-webkit-transition: opacity 0.2s linear 0.2s;
	transition: opacity 0.2s linear 0.2s;
}

.loaded {
	opacity: 1;
}

.darken {
	background-color: rgba(0, 0, 0, 0.2);
}
</style>
