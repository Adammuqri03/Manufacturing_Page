<template>
  <div>
    <div class="q-gutter-md">
      <!-- Navigation Bar -->
      <q-header
        style="background-color: rgba(135, 135, 135, 0.217); margin: 0px"
      >
        <div class="row justify-between">
          <q-toolbar style="padding-left: 100px; padding-right: 100px">
            <q-img
              src="img/myces_logo.png"
              style="height: 100px; width: 100px"
              fit="contain"
            />

            <q-space />
            <!-- Add your navigation items here -->
            <div class="row q-gutter-xl text-black font20 text-bold">
              <p class="p_hoverColor">Home</p>
              <p class="p_hoverColor">About</p>
              <p class="p_hoverColor">Service</p>
              <p class="p_hoverColor">Subsidiaries</p>
              <p class="p_hoverColor">Info</p>
              <p class="p_hoverColor">Contact</p>
            </div>
          </q-toolbar>
        </div>
      </q-header>

      <!-- Parallax Image -->
      <q-parallax ref="parallax" src="img/bg/bg.png" :height="1000" :speed="5">
        <img
          ref="parallaxImage"
          src="img/bg/bg.png"
          style="width: 100%; height: 100%"
        />
      </q-parallax>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setParallaxHeight();
    window.addEventListener("resize", this.setParallaxHeight);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setParallaxHeight);
  },
  methods: {
    setParallaxHeight() {
      const parallax = this.$refs.parallax;
      const parallaxImage = this.$refs.parallaxImage;
      const windowHeight = window.innerHeight;
      const parallaxHeight = windowHeight < 1000 ? 1000 : windowHeight;
      parallax.setHeight(parallaxHeight);
      parallaxImage.style.height = parallaxHeight + "px";
    },
  },
};
</script>

<style>
@media (max-width: 1000px) {
  .q-parallax {
    /* Set height for smaller screens */
    height: 600px !important; /* Adjust as needed */
  }
}

.p_hoverColor {
  transition: all 0.4s linear;
}

.p_hoverColor:hover {
  color: red; /* change color when hover */
  cursor: pointer; /* change cursor when hover */
}
</style>
