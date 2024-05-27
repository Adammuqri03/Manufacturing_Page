<template>
  <q-header
    class="q-pa-md"
    style="background: transparent; display: flex; justify-content: center"
  >
    <div>
      <q-toolbar
        class="rounded-borders bg-hijau"
        style="border-radius: 30px; width: 1200px; height: 70px"
      >
        <p class="q-pt-md q-px-md text-bold" style="font-size: 20px">
          MYCES EMARS
        </p>
        <q-space />

        <q-btn-group flat v-model="tab" class="q-px-md q-gutter-sm">
          <q-btn
            v-if="tab !== 'tab1'"
            v-ripple
            @click="goToHomePage"
            style="font-size: 18px"
          >
            Home
          </q-btn>
          <q-btn
            v-if="tab !== 'tab2'"
            v-ripple
            @click="scrollToSection('Service')"
            style="font-size: 18px"
          >
            Service
          </q-btn>
          <q-btn
            v-if="tab !== 'tab3'"
            v-ripple
            @click="scrollToSection('Info')"
            style="font-size: 18px"
          >
            Info
          </q-btn>
          <q-btn
            v-if="tab !== 'tab4'"
            v-ripple
            style="font-size: 18px"
            @click="goToContactUs"
          >
            Contact Us</q-btn
          >
        </q-btn-group>
      </q-toolbar>
    </div>
  </q-header>

  <div style="background: rgba(241, 242, 181, 1)">
    <q-page-container>
      <div>
        <div class="row q-pa-md q-gutter-xl justify-center">
          <div class="col-6">
            <q-img src="img/bg/bg02.png" />
          </div>
          <div class="col-5 q-pa-md flex justify-center item-center">
            <p
              class="text-bold text-hijau"
              style="font-size: 50px; text-shadow: 1px 1px 3px #000000"
            >
              <strong>EMARS</strong>
            </p>
            <p class="font20">
              <strong
                >EMARS (Energy Monitoring, Analysis, and Reporting
                System)</strong
              >
              by MyCES is a state-of-the-art solution designed to provide
              continuous monitoring, analysis, and reporting on the energy
              consumption of electrical systems within buildings. Our system
              offers real-time insights and comprehensive reports, empowering
              organizations to optimize their energy usage, identify potential
              savings, and make informed decisions for a more sustainable
              future. Through the innovation of the company in developing our
              very own MYCES EMARS (Energy Monitoring, Analysis, and Reporting
              System), we are confident that this will revolutionize the Energy
              Efficiency Industry not only impacting the market within Malaysia
              itself but inciting changes to the market outside of the country.
            </p>
            <br />
          </div>
        </div>
      </div>
    </q-page-container>
    <!-- VIDEO -->
    <q-page-container>
      <div class="q-pa-md">
        <q-parallax :height="800">
          <template v-slot:media>
            <video
              width="720"
              height="440"
              poster="public/img/myces_logo.png"
              autoplay
              loop
              muted
              playsinline
            >
              <!-- <source
                type="video/webm"
                src="https://cdn.quasar.dev/img/polina.webm"
              /> -->
              <source type="video/mp4" src="public/video/emars_video.mp4" />
            </video>
          </template>

          <h3 class="text-white"></h3>
        </q-parallax>
      </div>
    </q-page-container>

    <q-section id="Service">
      <q-page-container>
        <div>
          <p class="text-center font40 text-hijau">
            <strong>Our Automated System</strong>
          </p>
          <div>
            <div class="row q-pa-md q-gutter-xl">
              <div v-for="(item, idx) in items" :key="idx" class="col">
                <q-card :class="item.color">
                  <div>
                    <p
                      class="q-pa-sm q-mb-none text-center flex justify-center font20"
                    >
                      <strong>{{ item.title }}</strong>
                    </p>
                    <q-separator color="white" size="3px" />
                  </div>

                  <div class="q-pa-md font20">
                    <p v-for="(description, i) in item.description" :key="i">
                      {{ description }}
                    </p>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </q-page-container>
    </q-section>

    <!-- feature -->
    <q-page-container>
      <div class="q-pa-md">
        <div class="q-pa-md">
          <div class="text-center font20"></div>
          <p
            class="text-center text-hijau text-bold font40"
            style="letter-spacing: 2px; text-shadow: 1px 1px 3px #000000"
          >
            FEATURE
          </p>
          <div
            class="row text-bold text-center justify-center q-gutter-xl"
            style="font-size: 25px; letter-spacing: 2px"
          >
            <q-card
              v-for="(image, index) in images"
              :key="index"
              flat
              :class="[
                [
                  false
                    ? 'fullscreen bg-black'
                    : 'mycard col-xs-12 col-sm-6 col-lg-4 transparent',
                ],
                [' center-text'],
              ]"
              @click="dialog_show(image.src)"
              style="width: 400px; height: 400px"
            >
              <q-img
                :src="image.src"
                fit
                style="height: 400px; width: 400px; border-radius: 20px"
              />
              <p class="text-center q-pt-md" style="height: 50px">
                {{ image.title }}
              </p>
            </q-card>
          </div>
        </div>
      </div>
    </q-page-container>

    <!-- why need this system -->
    <q-section id="Info">
      <div class="q-pa-md q-mb-lg">
        <p
          class="font40 text-center q-pa-md text-hijau"
          style="text-shadow: 1px 1px 3px #000000"
        >
          <strong>Why need this system in you company?</strong>
        </p>
        <div class="row q-gutter-md justify-center">
          <div style="width: 800px">
            <q-card flat style="background-color: transparent">
              <div
                class="row q-pa-md justify-around"
                style="border-radius: 80px; background-color: #fe4794"
              >
                <div
                  class="q-pt-md bg-white flex justify-center items-center shadow-7"
                  style="height: 120px; width: 120px; border-radius: 50%"
                >
                  <p
                    class="text-center flex flex-center text-bold"
                    style="font-size: 50px; color: #fe4794"
                  >
                    01
                  </p>
                </div>
                <div
                  class="flex justify-center items-center q-pl-xl q-pt-md text-bold"
                >
                  <p style="font-size: 20px; text-align: center">
                    The main objective of this system is to ensure that building
                    <br />
                    owners understand the energy consumption of their building,
                    <br />
                    whether it operates efficiently or not.
                  </p>
                </div>
              </div>
            </q-card>
          </div>

          <div style="width: 800px">
            <q-card flat style="background-color: transparent">
              <div
                class="row q-pa-md justify-start"
                style="border-radius: 80px; background-color: #00deff"
              >
                <div
                  class="q-pt-md bg-white flex justify-center items-center shadow-7"
                  style="height: 120px; width: 120px; border-radius: 50%"
                >
                  <p
                    class="text-center flex flex-center text-bold"
                    style="font-size: 50px; color: #00deff"
                  >
                    02
                  </p>
                </div>
                <div
                  class="flex justify-center items-center q-pl-xl q-pt-md text-bold"
                >
                  <p style="font-size: 20px; text-align: center">
                    Building owners can identify baseline energy usage and
                    discover
                    <br />
                    no-cost energy-saving opportunities. Focusing on monitoring
                    and
                    <br />
                    efficiency can lead to up to a 5% reduction in consumption.
                  </p>
                </div>
              </div>
            </q-card>
          </div>
        </div>

        <br />

        <div class="row q-gutter-md justify-center">
          <div style="width: 800px">
            <q-card flat style="background-color: transparent">
              <div
                class="row q-pa-md justify-start"
                style="border-radius: 80px; background-color: #fed32d"
              >
                <div
                  class="q-pt-md bg-white flex justify-center items-center shadow-7"
                  style="height: 120px; width: 120px; border-radius: 50%"
                >
                  <p
                    class="text-center flex flex-center text-bold"
                    style="font-size: 50px; color: #fed32d"
                  >
                    03
                  </p>
                </div>
                <div
                  class="flex justify-center items-center q-pl-xl q-pt-md text-bold"
                >
                  <p style="font-size: 20px; text-align: center">
                    Building owners can also monitor and support maintenance
                    <br />
                    departments or facilities management to operate the building
                    <br />
                    more energy efficiently.
                  </p>
                </div>
              </div>
            </q-card>
          </div>
          <div style="width: 800px">
            <q-card flat style="background-color: transparent">
              <div
                class="row q-pa-md justify-start"
                style="border-radius: 80px; background-color: #04e1be"
              >
                <div
                  class="q-pt-md bg-white flex justify-center items-center shadow-7"
                  style="height: 120px; width: 120px; border-radius: 50%"
                >
                  <p
                    class="text-center flex flex-center text-bold"
                    style="font-size: 50px; color: #04e1be"
                  >
                    04
                  </p>
                </div>
                <div
                  class="flex justify-center items-center q-pl-xl q-pt-md text-bold"
                >
                  <p style="font-size: 20px; text-align: center">
                    Building owners can identify and verify areas for
                    improvement
                    <br />
                    (with investment) that can be made in the future by using
                    the
                    <br />
                    data collected in this monitoring system.
                  </p>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </q-section>

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

  <q-dialog v-model="fsFlag">
    <q-img
      :src="currentImage"
      spinner-color="white"
      fit="contain"
      style="width: 800px; height: 700px; max-width: none"
    />
  </q-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const images = [
      { src: "/img/echarts.png", title: "Energy Tracking" },
      { src: "/img/Interval Usage.png", title: "Load Distributor" },
      { src: "/img/emars.png", title: "Live Billing Monitoring" },
    ];
    const currentImage = ref("");
    const fsFlag = ref(false);

    return {
      images,
      fsFlag,
      currentImage,
      items: [
        {
          title: "MONITORING",
          description: [
            "Instananeous Power.",
            "24 reading and data collection.",
            "Safe Data Protection.",
          ],
          color: "bg-darkerbrightblue",
        },
        {
          title: "ANALYSIS",
          description: [
            "Automated generation of report according to EMIS.",
            "Easy access and easy to understand.",
          ],
          color: "bg-darkerbrightgreen",
        },
        {
          title: "REPORTING",
          description: [
            "Automated calculation and analysis.",
            "Reporting chart is auto generated and combine all report information.",
          ],
          color: "bg-darkerbrightyellow",
        },
        {
          title: "AWARENESS",
          description: [
            "Alert if baseline kW is exceeded.",
            "Projection of the monthly cost and power usage.",
          ],
          color: "bg-darkerbrightorange",
        },
      ],
    };
  },
  methods: {
    dialog_show(image) {
      this.fsFlag = !this.fsFlag;
      this.currentImage = image;
    },
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    goToContactUs() {
      this.$router.push("/contact_us");
    },
    goToHomePage() {
      this.$router.push("/home_page");
    },
  },
};
</script>

<style scoped>
.center-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mycard {
  width: 350px;
}
.icon-1:hover {
  color: #1877f2;
  transform: translateY(-10px);
}
.icon-2:hover {
  color: #e4405f;
  transform: translateY(-10px);
}

.bg-darkerbrightblue {
  background-color: #0dcfcf;
}
.bg-darkerbrightgreen {
  background-color: #19c719;
}
.bg-darkerbrightyellow {
  background-color: #d3d31a;
}
.bg-darkerbrightorange {
  background-color: #d48e0c;
}
</style>
