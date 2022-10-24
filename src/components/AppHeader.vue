<template>
 <div class="nav-container">
    <nav>
      <!-- <div class="logo">Project Schietekatte</div> -->
      <div class="logo"><img :src="img" alt="ehb logo" style="height: 36px; vertical-align: middle;"></div>

      <div class="menu-items">
        <!-- <a href="#">Home</a> -->
        <!-- <a href="#">About</a> -->
        <!-- <a href="#">Services</a> -->
        <!-- <a href="#">Contact</a> -->

        <div class="social">
          <!-- <a href="#">
            <img src="images/facebook.png" alt="" />
          </a>

          <a href="#">
            <img src="images/instagram.png" alt="" />
          </a>

          <a href="#">
            <img src="images/twitter.png" alt="" />
          </a> -->
  <a>Settings</a>
		</div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import img from "@/assets/image/logo-ehb-small.svg";
</script>

<style lang="scss" scoped>
.button-12Fmur {
	/* line-height: 0; */
	width: 32px;
	height: 32px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	border-radius: 4px;
	position: relative;
	// color: var(--interactive-normal);
}

.nav-container {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	font-family: "Roboto", sans-serif;
	z-index: 1;
}

.nav-container nav {
	// background: #293241;
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4px 48px;
	box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);
	border-radius: 0 0 20px 20px;
	box-sizing: border-box;
}

.nav-container nav .logo {
	font-size: 30px;
	font-weight: 900;
	color: #f8f9fa;
}

.nav-container .menu-items {
	display: flex;
	align-items: center;
}

.nav-container .menu-items > a {
	color: #f8f9fa;
	margin: 0 24px;
	text-decoration: none;
	position: relative;
}

.nav-container .menu-items > a:hover::after {
	content: "";
	position: absolute;
	height: 4px;
	width: 100%;
	background: #f8f9fa;
	bottom: -13px;
	left: 0;
}

.nav-container .social {
	// background: #c1fdff;
	background: transparent;
	border: 2px solid #fff;
	color: #fff;
	padding: 4px 16px;
	border-radius: 20px;
}

.nav-container .social img {
	vertical-align: middle;
	transition: all 500ms;
}

.nav-container .social img:hover {
	transform: scale(1.1);
}

.nav-container .social a {
	margin: 0 16px;
	text-decoration: none;
}
</style>
