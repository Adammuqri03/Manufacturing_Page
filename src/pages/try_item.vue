<template>
  <div class="bg-perang">
    <q-header class="q-pa-md" style="background: transparent">
      <div>
        <q-toolbar class="rounded-borders bg-hijau" style="border-radius: 30px">
          <p class="q-pt-md q-px-md text-bold" style="font-size: 20px">
            MyCES MANUFACTURING
          </p>
          <q-space />

          <q-btn-group flat v-model="tab" class="q-px-md q-gutter-sm">
            <!-- home btn -->
            <q-btn
              v-if="tab !== 'tab1'"
              v-ripple
              @click="goToHomePage"
              style="font-size: 18px"
            >
              Home
            </q-btn>

            <!-- Service btn -->
            <q-btn v-if="tab !== 'tab2'" v-ripple style="font-size: 18px">
              Service
            </q-btn>

            <!-- info btn -->
            <q-btn
              v-if="tab !== 'tab3'"
              v-ripple
              @click="scrollToSection('Info')"
              style="font-size: 18px"
            >
              Info
            </q-btn>

            <!-- contact us btn -->
            <q-btn
              v-if="tab !== 'tab4'"
              v-ripple
              @click="goToContactUs"
              style="font-size: 18px"
              >Contact Us</q-btn
            >
          </q-btn-group>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <q-img src="img/svg/try.svg">

      </q-img>
    </q-page-container>
    <!-- footer -->
    <div class="bg-black text-white">
      <p class="text-bold font20 q-px-md q-my-none q-pt-md">
        MyCES MANUFACTURING SDN. BHD.
      </p>
      <p class="text-bold font20 q-px-md q-my-none q-pt-sm">FIND US</p>
      <div class="row q-pa-md font20">
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
            Seram 4 & 5, Jalan Sg. Mati, BUkit Gambir <br />
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
.imgfit {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
  mix-blend-mode: color-burn;
}

.imgfit:hover {
  mix-blend-mode: normal;
}

.icon-1:hover {
  color: #1877f2;
  transform: translateY(-10px);
}

.icon-2:hover {
  color: #e4405f;
  transform: translateY(-10px);
}
</style>
/
