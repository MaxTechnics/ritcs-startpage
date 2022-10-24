<template>
	<div>
		<AppHeader />
		<GridBaseWrapper style="margin-top: 80px">
			<!-- <GridTitle>Project Schietekatte</GridTitle> -->
			<CardGrid style="max-width: 1200px; margin: auto" :size="grid_size">
				<CardThing v-for="link in available_links" :key="link" :label="link.label" :size="grid_size" :imageUri="link.imageUri" :href="link.href" />
			</CardGrid>
		</GridBaseWrapper>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import { available_links } from "../assets/urls";
import CardGrid from "../components/CardGrid.vue";
import CardThing from "../components/CardThing.vue";
import GridBaseWrapper from "../components/GridBaseWrapper.vue";
// import GridTitle from "../components/GridTitle.vue";

const grid_size = ref("large");
</script>

<style lang="scss" scoped>
</style>
