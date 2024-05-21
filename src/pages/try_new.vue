<template>
  <div>
    <div class="q-gutter-md">
      <!-- Navigation Bar -->
      <q-header
        style="background-color: rgba(144, 238, 144, 0.217); margin: 0px"
      >
        <div class="row justify-between">
          <q-toolbar style="padding-left: 100px; padding-right: 100px">
            <q-img src="public/img/myces_logo.png" />

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
      <q-parallax ref="parallax" src="/img/bg/bg.png" :height="1000" :speed="5">
        <img
          ref="parallaxImage"
          src="img/bg/bg.png"
          style="width: 100%; height: 100%"
        />
      </q-parallax>
    </div>
  </div>
  <!-- footer -->
  <div class="bg-black text-white" />
  <p class="text-bold font20 q-px-md q-my-none q-pt-md">
    MyCES MANUFACTURING SDN. BHD.
  </p>
  <p class="text-bold font20 q-px-md q-my-none q-pt-sm">FIND US</p>
  <div class="row q-pa-md font20" />
  <!-- place -->
  <div class="col-2">
    <p>
      <strong>HQ Address</strong> <br />
      RK 27-B Jalan Villa 3 <br />
      Taman Anggerik Villa <br />
      43500 Semenyih <br />
      Selangor Darul Ehsan
    </p>
  </div>
  <div class="col-3">
    <p>
      <strong>Branch Address</strong> <br />
      Bangunan Center of Excellent<br />
      Kolej Kemahiran Tinggi Mara Ledang <br />
      Seram 4 & 5, Jalan Sg. Mati, Bukit Gambir <br />
      84410, Ledang, Johor
    </p>
  </div>
  <!-- info -->
  <div class="col-2">
    <strong> Telephone : </strong>
    <p>603-8725 5811</p>

    <strong> Email : </strong>
    <p>Info@mycesgroup.com</p>
  </div>

  <!-- connect with us -->
  <div class="col-1.5">
    <strong>Connect with us</strong>
    <div class="row q-gutter-lg justify-center q-pa-sm">
      <q-icon size="40px" name="mdi-facebook" class="icon-1" />
      <q-icon size="40px" name="mdi-instagram" class="icon-2" />
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
