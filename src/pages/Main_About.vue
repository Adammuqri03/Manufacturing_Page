<template>
  <div>
    <q-header style="background: #59aa32">
      <div class="row justify-between">
        <q-toolbar style="padding-left: 100px; padding-right: 100px">
          <q-img
            src="public/img/myces_logo.png"
            style="width: 100px"
            @onclick="goToHome"
          />

          <q-space />

          <div class="row q-gutter-xl text-white font20">
            <div class="p_hoverColor" @click="goToHome">Home</div>
            <div class="p_hoverColor" @click="goToAboutUs">Corporate</div>
            <div
              class="p_hoverColor"
              @mouseover="showServiceMenu = true"
              @mouseleave="showServiceMenu = false"
            >
              Services
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
                      <a @click="goToEmars">Energy Audit</a>
                    </q-item-section>
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a @click="goToFMS">Monitoring System (MyCES EMARS)</a>
                    </q-item-section>
                  </q-item>
                  <!-- <q-item class="item_Hover">
                    <q-item-section>
                      <a href="#">Measurement and Verification (M&V)</a>
                    </q-item-section>
                  </q-item> -->
                  <!-- <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#"
                        >Sustainable Energy Management System(SEMS)</a
                      >
                    </q-item-section>
                  </q-item> -->
                  <q-item class="item_Hover">
                    <q-item-section>
                      <a hreg="#"> Awareness Training</a></q-item-section
                    >
                  </q-item>
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a @click="goToRent">Equipment Rental</a></q-item-section
                    >
                  </q-item>
                  <!-- <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">Smart Home Automation</a></q-item-section
                    >
                  </q-item> -->
                  <!-- <q-item class="item_Hover">
                    <q-item-section><a href="#">AMARS</a></q-item-section>
                  </q-item> -->
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
                  <!-- <q-item class="item_Hover">
                    <q-item-section
                      ><a href="#">MYCES AgroFarm Sdn Bhd</a></q-item-section
                    >
                  </q-item> -->
                  <q-item class="item_Hover">
                    <q-item-section
                      ><a @click="goToManu"
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
            <!-- <div class="p_hoverColor">Info</div> -->
            <div class="p_hoverColor" @click="goToContactUs">Contact</div>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <!-- <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="/img/bg/bg_lampu.jpg" style="height: 300px">
          <h1 class="text-bold text-grey-8"></h1>
        </q-parallax>
      </div>
    </div> -->

    <div>
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
                      About Us (fixed)
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
    </div>
    <hr />
    <q-separator />
    <div>
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
                style="width: 300px"
              />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <div>
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          style="width: 1500px; height: 500px"
        >
          <q-carousel-slide :name="1" img-src="/img/client/Aweness_9.jpg" />
          <q-carousel-slide :name="2" img-src="/img/client/Aweness_5.jpg" />
          <q-carousel-slide :name="3" img-src="/img/client/Aweness_2.jpg" />
          <q-carousel-slide :name="4" img-src="/img/client/Aweness_6.jpg" />
          <q-carousel-slide :name="5" img-src="/img/client/EA_12.jpg" />
          <q-carousel-slide :name="6" img-src="/img/client/Aweness.jpg" />
        </q-carousel>
      </div>
    </div>

    <br />
  </div>

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
    goToAboutUs() {
      try {
        this.$router.push("/Main_About");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToContactUs() {
      try {
        window.location.href = "https://biomed.mycesgroup.com/contact/";
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToHome() {
      try {
        this.$router.push("/home_page");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToFMS() {
      try {
        this.$router.push("/fms_page");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
};
</script>
<style>
a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 900px) {
  .q-parallax {
    /* Set height for smaller screens */
    height: 600px !important; /* Adjust as needed */
  }
}

.hover-btn {
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: #258400;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.hover-btn:hover {
  background-color: transparent;
  border: 2px solid black;
}

.p_hoverColor {
  transition: all 0.4s linear;
}

.p_hoverColor:hover {
  color: red; /* change color when hover */
  cursor: default; /* change cursor when hover */
}

.item_Hover {
  transition: all 0.4s linear;
  border-bottom: 1px solid black;
}

.item_Hover:hover {
  background-color: green;
}
</style>
