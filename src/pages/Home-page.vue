<template>
  <q-header
    class="q-pa-md"
    style="background: none; display: flex; justify-content: center"
  >
    <div>
      <q-toolbar
        class="rounded-borders bg-hijau"
        style="border-radius: 30px; width: 1000px; height: 70px"
      >
        <p class="q-pt-md q-px-md text-bold" style="font-size: 20px">
          MYCES MANUFACTURING
        </p>
        <q-space />

        <q-btn-group flat v-model="tab" class="q-px-md q-gutter-sm">
          <q-btn
            :hover="underline"
            v-if="tab !== 'tab1'"
            v-ripple
            @click="scrollToSection('Home')"
            style="font-size: 18px"
          >
            Home
          </q-btn>
          <q-btn
            v-if="tab !== 'tab2'"
            v-ripple
            label="Service"
            style="font-size: 18px"
          >
            <q-menu fit class="text-center">
              <q-list>
                <q-item>
                  <q-item-section @click="scrollToSection('EMARS')">
                    <q-btn flat>EMARS</q-btn>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section @click="scrollToSection('FMS')">
                    <q-btn flat> FMS </q-btn>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            v-ripple
            @click="scrollToSection('Info')"
            style="font-size: 18px"
          >
            Our Client
          </q-btn>
          <q-btn
            v-if="tab !== 'tab4'"
            v-ripple
            style="font-size: 18px"
            @click="goToContactUs"
            >Contact Us</q-btn
          >
        </q-btn-group>
      </q-toolbar>
    </div>
  </q-header>

  <q-page-container style="background: #ffffff">
    <q-section id="Home">
      <div style="">
        <div class="row q-pa-md" style="padding-top: 100px">
          <div class="col text-center">
            <q-img src="/img/myces_logo.png" style="width: 400px" />
          </div>
          <div
            class="col shadow-7 q-mx-xl"
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              font-size: 20px;
              background: rgba(230, 229, 229, 0.788);
              padding: 20px;
              border-radius: 50px;
              background: #59aa32;
            "
          >
            <p
              class="text-center text-bold text-outline text-white"
              style="font-size: 47px; letter-spacing: 5px"
            >
              MANUFACTURING
            </p>
            <p style="font-size: 23px" class="text-white">
              MyCES Manufacturing unveils EMARS, a patented Energy Monitoring,
              Analysis & Reporting System crafted over five years. It seamlessly
              blends local products with global energy monitoring standards,
              ensuring rapid after-sales service and ongoing customization. Our
              local engineers also offer Facilities Management System (FMS) for
              digitizing organizational reports and facilitating data-driven
              decisions.
            </p>
            <div class="text-center q-pa-lg">
              <q-item-section>
                <q-btn
                  flat
                  class="q-px-xl bg-hijau text-white"
                  label="Explore More"
                  style="border-radius: 40px"
                  size="25px"
                  @click="scrollToSection('EMARS')"
                />
              </q-item-section>
            </div>
          </div>
        </div>
      </div>
    </q-section>

    <!-- EMARS -->
    <q-section id="EMARS">
      <div class="q-pa-md" style="padding: 100px">
        <div class="q-pa-md">
          <div class="row">
            <div
              class="col text-center text-hijau"
              style="
                font-size: 100px;
                font-weight: 500;
                text-shadow: 2px 2px 5px #000000;
              "
            >
              EMARS
            </div>
            <q-space />
            <div class="col">
              <div class="col">
                <p
                  class="text-bold text-hijau"
                  style="font-size: 50px; text-shadow: 1px 1px 3px #000000"
                >
                  What is EMARS?
                </p>
              </div>
              <div class="col no-padding">
                <p style="font-size: 30px">
                  Energy Monitoring And Reporting System
                </p>
              </div>
            </div>
          </div>

          <q-separator size="3px" color="hijau" />

          <div class="q-mt-md">
            <div class="row">
              <div class="col">
                <p
                  class="text-bold text-hijau text-center font40"
                  style="letter-spacing: 2px; text-shadow: 1px 1px 3px #000000"
                >
                  PURPOSE
                </p>
              </div>
              <div class="col">
                <q-icon name="circle" class="q-pr-md" />
                <q-typography style="font-size: 25px">
                  To Monitoring Energy usage trend using IOT Technology
                </q-typography>
              </div>
            </div>
          </div>

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

          <div class="text-center q-pa-lg">
            <q-btn
              flat
              class="q-px-xl bg-hijau text-white"
              label="Explore More"
              style="border-radius: 40px"
              size="25px"
              @click="goToEMARSPage"
            />
          </div>
        </div>
      </div>
    </q-section>

    <!-- FMS -->
    <q-section id="FMS">
      <div class="q-pa-md" style="padding: 100px">
        <div>
          <div class="row">
            <div
              class="col text-center text-hijau"
              style="
                font-size: 100px;
                font-weight: 500;
                text-shadow: 2px 2px 5px #000000;
              "
            >
              FMS
            </div>
            <div class="col">
              <div class="col">
                <p
                  class="text-bold text-hijau"
                  style="font-size: 50px; text-shadow: 1px 1px 3px #000000"
                >
                  What is FMS?
                </p>
              </div>
              <div class="col no-padding">
                <p style="font-size: 30px">Facility Management System</p>
              </div>
            </div>
          </div>

          <q-separator size="3px" color="hijau" />

          <p
            class="q-ma-lg text-center text-bold text-hijau font40"
            style="letter-spacing: 2px; text-shadow: 1px 1px 3px #000000"
          >
            PURPOSE
          </p>

          <div class="row flex flex-center">
            <q-card
              v-for="card in cards"
              :key="card.title"
              class="my-card bg-transparent"
              style="max-width: 600px"
              flat
            >
              <q-card-section
                horizontal
                class="q-pa-md q-gutter-md"
                style="justify-content: center; align-items: center"
              >
                <q-card-section>
                  <q-img
                    :src="card.image"
                    class="shadow-7"
                    style="height: 300px; width: 300px; border-radius: 20px"
                  />
                </q-card-section>
                <div>
                  <strong style="font-size: 25px">{{ card.title }}</strong>
                  <q-separator size="3px" color="hijau" />
                  <p style="font-size: 20px">{{ card.description }}</p>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <p
            class="text-center text-bold font40 text-hijau q-ma-xl"
            style="letter-spacing: 2px; text-shadow: 1px 1px 3px #000000"
          >
            FEATURE
          </p>
          <div
            class="row text-bold text-center justify-center q-gutter-xl"
            style="font-size: 25px; letter-spacing: 2px"
          >
            <q-card
              v-for="(image, index) in images2"
              :key="index"
              flat
              :class="[
                [
                  false
                    ? 'fullscreen bg-black'
                    : 'mycard col-xs-12 col-sm-6 col-lg-4 transparent',
                ],
                [' center-text '],
              ]"
              @click="dialog_show(image.src)"
              style="width: 400px; height: 400px"
            >
              <q-img
                :src="image.src"
                fit
                style="border-radius: 20px; height: 400px; width: 400px"
              />
              <p class="text-center q-pt-md" style="height: 50px">
                {{ image.title }}
              </p>
            </q-card>
          </div>
          <div class="text-center q-pa-lg">
            <q-btn
              flat
              class="q-px-xl bg-hijau text-white"
              label="Explore More"
              style="border-radius: 40px"
              size="25px"
              @click="goToFMSPage"
            />
          </div>
        </div>
      </div>
    </q-section>

    <!-- our client -->
    <div class="q-pa-md q-mt-lg" id="Info">
      <p
        class="text-center text-bold text-hijau"
        style="font-size: 60px; text-shadow: 2px 2px 4px hijau"
      >
        OUR CLIENT (fixed)
      </p>
      <div class="q-px-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="2000"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          style="background-color: transparent"
        >
          <q-carousel-slide
            v-for="slideData in slides"
            :key="slideData.name"
            :name="slideData.name"
          >
            <div
              class="row fit justify-center items-center q-gutter-lg no-wrap"
            >
              <q-img
                v-for="image in slideData.images"
                :key="image"
                class="rounded-borders col-2 img-size"
                fit="contain"
                :src="image"
              />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <!-- fullscreen the img when click -->
    <q-dialog v-model="fsFlag">
      <q-img
        :src="currentImage"
        spinner-color="white"
        fit="contain"
        style="width: 800px; height: 700px; max-width: none"
      />
    </q-dialog>

    <!-- floating button -->
    <div class="floating-btn">
      <q-fab color="hijau" icon="mdi-comment-text-outline" direction="up">
        <q-fab-action
          color="teal"
          @click="onClick"
          icon="mdi-whatsapp"
          style="height: 55px; width: 55px"
        >
          <q-tooltip
            anchor="center left"
            self="center middle"
            transition-show="scale"
            transition-hide="scale"
          >
            WhatsApp
          </q-tooltip>
        </q-fab-action>
        <q-fab-action
          color="primary"
          @click="onClick"
          icon="mdi-gmail"
          style="height: 55px; width: 55px"
        >
          <q-tooltip
            anchor="center left"
            self="center middle"
            transition-show="scale"
            transition-hide="scale"
          >
            Gmail
          </q-tooltip>
        </q-fab-action>
      </q-fab>
    </div>
  </q-page-container>

  <!-- footer -->
  <div class="bg-white text-black">
    <p class="text-bold font20 q-px-md q-my-none q-pt-md">MyCES SDN. BHD.</p>
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
        <p>012-775 8732</p>

        <strong> Email : </strong>
        <p>Info@mycesgroup.com</p>
      </div>

      <!-- connect with us -->
      <div class="col-1.5">
        <strong>Connect with us</strong>
        <div class="row q-gutter-lg justify-center q-pa-sm">
          <q-icon
            size="40px"
            name="mdi-facebook"
            class="icon-1"
            @click="openFacebook"
          />
          <q-icon
            size="40px"
            name="mdi-linkedin"
            class="icon-2"
            @click="openLinkedin"
          />
          <div class="row q-gutter-lg justify-center q-pa-sm">
            <img src="/img/bg/tenaga_bg.png" />
            <br />
            <br />
            <img src="/img/bg/KKM_bg.jpg" style="width: 350px" />
            <br />
            <br />
            <br />
            <img src="/img/bg/logo-myhijau.png" style="width: 200px" />
            <br />
            <img src="/img/bg/CIDB_3.png" style="width: 300px" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
    const images2 = [
      { src: "/img/Asset Management.png", title: "Asset Management" },
      {
        src: "/img/Work Order Performance.jpg",
        title: "Work Order Management",
      },
      { src: "/img/calender WOM.png", title: "Schedule Work Order Management" },
    ];
    const currentImage = ref("");
    const fsFlag = ref(false);

    return {
      tab: ref(""),
      slide: ref(1),
      autoplay: ref(true),
      slides: [
        {
          name: 1,
          images: [
            "/img/client/umsc logo.png",
            "/img/client/NIH.png",
            "/img/client/MDSB.jpg",
            "/img/client/MDKS.jpg",
            "/img/client/MDKL.jpg",
            "/img/client/MDHL.jpg",
          ],
        },
        {
          name: 2,
          images: [
            "/img/client/PDT Gombak.jpg",
            "/img/client/MBPJ.jpg",
            "/img/client/Demesne.jpg",
            "/img/client/KPJ Kajang.jpg",
            "/img/client/KPJ Penang.jpg",
            "/img/client/KPJ Puteri.jpg",
          ],
        },
        {
          name: 3,
          images: [
            "/img/client/Pharmaniaga.jpg",
            "/img/client/SimeDarby.jpg",
            "/img/client/KTS.jpg",
            "/img/client/KPJ Perdana.jpg",
            "/img/client/Salam.jpg",
            "/img/client/Petronas.jpg",
          ],
        },
        {
          name: 4,
          images: [
            "/img/client/Hospital Pusrawi.jpg",
            "/img/client/KPJ Seremban.jpg",
            "/img/client/ColumbiaAsia.jpg",
            "/img/client/Kayaku.jpg",
            "/img/client/Medivest.jpg",
            "/img/client/Terengganu.jpg",
          ],
        },
        {
          name: 5,
          images: [
            "/img/client/Gleneagles.jpg",
            "/img/client/UITM.jpg",
            "/img/client/Radicare.jpg",
            "/img/client/KKM.jpg",
            "/img/client/Sibu Water Board.jpg",
            "/img/client/Jabatan Peguam Negara.jpg",
          ],
        },
      ],
      cards: [
        {
          title: "Digitalizes Reporting",
          image: "/img/digitalize report.png",
          description: "Streamline maintenance or breakdown reporting",
        },
        {
          title: "Cleared Overview",
          image: "/img/cleared overview.png",
          description: "Assist in periodical report generation",
        },
        {
          title: "Easier And Better Planning",
          image: "/img/better planning.png",
          description: "To track PPM and breakpoint performance indicators",
        },
        {
          title: "Achieve More",
          image: "/img/achieve more.png",
          description: "To enable data-driven and decision making",
        },
      ],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images,
      images2,
      fsFlag,
      currentImage,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    dialog_show(image) {
      this.fsFlag = !this.fsFlag;
      this.currentImage = image;
    },
    goToAboutUs() {
      // this.$router.push("/about_us");
    },
    goToContactUs() {
      this.$router.push("/contact_us");
    },
    goToEMARSPage() {
      this.$router.push("/emars_page");
    },
    goToFMSPage() {
      this.$router.push("/fms_page");
    },
    openFacebook() {
      window.open("https://www.facebook.com/mycesgroup/", "_blank");
    },
    openInstagram() {
      window.open("https://www.instagram.com/mycessmarthome/", "_blank");
    },
    openLinkedin() {
      try {
        window.open(
          "https://my.linkedin.com/company/myces-energy-consultant/",
          "_blank"
        );
      } catch (error) {
        console.error("An error occurred:", error);
      }
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

.text-outline {
  letter-spacing: 2px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
}
.img-size {
  height: 200px;
  width: 230px;
}

.floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
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
