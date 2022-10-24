<template>
	<FancyImage :imageURL="background" />

	<!-- <ImageCard /> -->

	<Transition name="main">
		<MainView v-if="!settings_opened" />
	</Transition>

	<Transition name="settings">
		<SettingsView v-if="settings_opened" />
	</Transition>
</template>

<script setup>
// import ImageCard from './components/ImageCard.vue';
import FancyImage from './components/FancyImage.vue'
import background from './assets/image/1.png';
import MainView from './Views/MainView.vue';
import SettingsView from './Views/SettingsView.vue';
import { ref } from 'vue';

const settings_opened = ref(false);
</script>

<style lang="scss" >
@import url(./test.css);
.main-enter-active,
.main-leave-active,
.settings-enter-active,
.settings-leave-active {
	position: relative;
	transition: all 0.3s ease;
}

.main-enter-from,
.main-leave-to {
	opacity: 0;
	transform: scale(0.9);
}

.settings-enter-from,
.settings-leave-to {
	opacity: 0;
	transform: scale(1.1);
}
</style>
