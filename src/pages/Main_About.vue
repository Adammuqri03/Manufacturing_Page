<template>
  <div>
    <q-header class="bg-transparent">
      <div class="row justify-between">
        <q-toolbar style="padding-left: 100px; padding-right: 100px">
          <q-img src="public/img/myces_logo.png" style="width: 100px" />

          <q-space />
          <!-- Add your navigation items here -->
          <div class="row q-gutter-xl text-black font20">
            <div class="p_hoverColor">Home</div>
            <div class="p_hoverColor">About</div>
            <div
              class="p_hoverColor"
              @mouseover="showServiceMenu = true"
              @mouseleave="showServiceMenu = false"
            >
              Service
              <q-menu
                style="
                  width: 280px;
                  background-color: rgba(0, 0, 0, 0.721);
                  font-size: 18px;
                "
                class="text-white"
                v-model="showServiceMenu"
              >
                <q-list
                  @mouseover="showServiceMenu = true"
                  @mouseleave="showServiceMenu = false"
                >
                  <q-item class="item_Hover">
                    <q-item-section>
                      <a href="#">Energy Audit</a>
                    </q-item-section>
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">Monitoring System (MyCES EMARS)</a>
                    </q-item-section>
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section>
                      <a href="#">Measurement and Verification (M&V)</a>
                    </q-item-section>
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#"
                        >Sustainable Energy Management System(SEMS)</a
                      >
                    </q-item-section>
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section>
                      <a hreg="#"> Awareness Training</a></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">Equipment Rental</a></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">Smart Home Automation</a></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section><a href="#">AMARS</a></q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <div
              class="p_hoverColor"
              @mouseover="showSubMenu = true"
              @mouseleave="showSubMenu = false"
            >
              Subsidiaries<q-menu
                style="
                  width: 200px;
                  background-color: rgba(0, 0, 0, 0.721);
                  font-size: 18px;
                "
                class="text-white"
                v-model="showSubMenu"
              >
                <q-list
                  @mouseover="showSubMenu = true"
                  @mouseleave="showSubMenu = false"
                >
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="https://biomed.mycesgroup.com/"
                        >MYCES Biomedical Engineering Sdn Bhd</a
                      ></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">MYCES AgroFarm Sdn Bhd</a></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#"
                        >MYCES Manufacturing Sdn Bhd</a
                      ></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">MYCES Edutect Sdn Bhd</a></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#"
                        >MYCES Aircond & Electrical Services Sdn Bhd</a
                      ></q-item-section
                    >
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <div class="p_hoverColor">Info</div>
            <div class="p_hoverColor">Contact</div>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="/img/bg/bg_lampu.jpg" style="height: 300px">
          <h1 class="text-bold text-grey-8"></h1>
        </q-parallax>
      </div>
    </div>

    <q-page-container>
      <div id="container" class="page-wrap">
        <div
          class="container content-wrapper text-green-8"
          style="font-size: 20px"
        >
          <!-- About -->
          <div class="row justify-center">
            <div id="primary" class="content-area">
              <main id="main" class="site-main" role="main">
                <article
                  id="post-124"
                  class="post-124 page type-page status-publish entry"
                >
                  <header class="entry-header">
                    <h1 class="title-post entry-title text-black text-center">
                      About Us
                    </h1>
                    <div class="entry-content">
                      <p></p>
                      <p class="text-center" style="text-align: justify">
                        The concern of energy consumption has been a rising
                        curiosity across all industry sectors not only because
                        of its direct impact on production costs but also
                        because of its significant impact on environmental
                        sustainability.
                      </p>
                      <p class="text-center" style="text-align: justify">
                        An advance in energy efficiency within your organization
                        can potentially bring significant business benefits.
                        With this in mind, MyCES Sdn Bhd has developed Energy
                        Audit Services, instead of equipment rental & Awareness
                        Training to help you find the best information for
                        improvement opportunities.
                      </p>
                      <p class="text-center">
                        <img
                          class="aligncenter wp-image-550"
                          src="/img/bg/about_bg.jpg"
                          width="461"
                          height="288"
                        />
                      </p>
                      <p class="text-center" style="text-align: justify">
                        Here, we provide smart home services which can help you
                        to control and monitor remotely by smartphone or tablet
                        in terms of lighting, heating, and electronic devices.
                        Our team also can help you to design and renovate your
                        home as you dream.
                      </p>
                      <p class="text-center" style="text-align: justify">
                        As energy consultants, MyCES Sdn Bhd also can guide in
                        terms of energy consumption especially for industry
                        sectors such as factories, hospitals, and more. Here, we
                        also can help you to minimize energy usage and reduce
                        operation expenses in the future.
                      </p>
                    </div>
                  </header>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
    <q-page-container>
      <p
        class="text-center text-green-8 text-bold font40"
        style="letter-spacing: 2px"
      >
        COLLABORATIONS
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
    </q-page-container>

    <br />
  </div>

  <!-- footer -->
  <div class="bg-white text-black">
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
            @click="openInstagram"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tab = ref("");
    const slide = ref(1);
    const autoplay = ref(true);
    const slides = [
      {
        name: 1,
        images: [
          "/img/client/KPM_Beranang.png",
          "/img/bg/Collab_UMP.png",
          "/img/client/UITM.jpg",
          "/img/client/RDM.png",
          "/img/client/G&B.png",
        ],
      },
    ];

    return {
      tab,
      slide,
      autoplay,
      slides,
      showServiceMenu: ref(false),
      showSubMenu: ref(false),
    };
  },
  methods: {
    openFacebook() {
      window.open("https://www.facebook.com/mycesgroup/", "_blank");
    },
    openInstagram() {
      window.open(
        "https://my.linkedin.com/company/myces-energy-consultant",
        "_blank"
      );
    },
  },
};
</script>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
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
