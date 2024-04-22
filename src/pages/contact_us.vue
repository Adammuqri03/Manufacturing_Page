<template>
  <div class="fullheight" style="background: rgba(241, 242, 181, 1)">
    <!-- arrow icon to back -->
    <div>
      <q-btn flat @click="goToHomePage">
        <q-icon name="mdi-arrow-left-thick" size="60px" color="hijau" />
        <p class="font20 q-pt-md">BACK</p>
      </q-btn>
    </div>
    <div class="q-pa-xl">
      <p
        class="text-center font40 russo-one-regular"
        style="letter-spacing: 2px"
      >
        CONTACT US
      </p>
      <div class="q-pa-md flex flex-center">
        <q-card class="bg-white q-pa-lg border_radius" style="width: 600px">
          <q-input rounded outlined v-model="text" label="Name" />
          <br />
          <q-input rounded outlined v-model="text" label="Email" />
          <br />
          <q-input rounded outlined v-model="text" label="Message" />
          <br />
          <div class="flex justify-end">
            <q-btn rounded color="teal" label="SUBMIT" style="width: 125px" />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push("/home_page");
    },
  },
};
</script>

<style>
.fullheight {
  height: 100vh;
}
</style>
