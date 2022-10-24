<template>
	<div class="heading_base">
		<h3 class="heading_content"><slot></slot></h3>
	</div>
</template>

<style lang="scss" scoped>
.heading_base {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin-bottom: 24px;
}

.heading_content {
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 500;
	color: #fff;
	line-height: 26px;
	font-size: 20px;
}
</style>
