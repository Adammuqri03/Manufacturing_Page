<template>
  <q-header class="bg-transparent no-shadow">
    <div class="row justify-between">
      <q-toolbar style="padding-left: 100px; padding-right: 100px">
        <img src="img/myces_logo.png" style="width: 100px" />

        <q-space />

        <div class="row q-gutter-xl text-white font20">
          <!-- <div class="p_hoverColor" @click="goToHome">Home</div> -->
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
                    <a @click="goToEnergy">Energy Audit</a>
                  </q-item-section>
                </q-item>
                <q-item class="item_Hover">
                  <q-item-section
                    ><a @click="goToEmars">Monitoring System (MyCES EMARS)</a>
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
                <!-- <q-item class="item_Hover">
                    <q-item-section>
                      <a hreg="#"> Awareness Training</a></q-item-section
                    >
                  </q-item> -->
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
                <!-- <q-item class="item_Hover">
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
                  </q-item> -->
              </q-list>
            </q-menu>
          </div>
          <!-- <div class="p_hoverColor">Info</div> -->
          <div class="p_hoverColor" @click="goToContactUs">Contact</div>
        </div>
      </q-toolbar>
    </div>
  </q-header>
  <q-page-container>
    <q-page>
      <q-parallax :height="$q.screen.height + 150" :speed="-0.3">
        <h1
          class="text-white text-h9 text-bold text-left"
          style="text-shadow: 2px 2px 5px #000000"
        >
          MyCES SDN BHD
        </h1>
        <q-btn push @click="scrollToSection('SecPage')" class="hover-btn"
          >Explore More</q-btn
        >
        <template v-slot:media>
          <img
            src="public/img/bg/bg-canva-3.png"
            style="width: 80%; object-fit: contain"
            class="dimmed"
          />
        </template>
      </q-parallax>
    </q-page>
  </q-page-container>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    try {
      // Existing state from the first code block
      const showServiceMenu = ref(false);
      const showSubMenu = ref(false);
      const images = [
        {
          src: "/img/Interval Usage.png",
          title: "Monitoring System",
        },
        { src: "/img/bg/energyAudit.jpg", title: "Energy Audit" },
        { src: "/img/bg/awareness2.jpg", title: "Awareness Training" },
        { src: "/img/bg/rental.jpg", title: "Rental Equipment" },
      ];

      // Additional state from the second code block
      //Commercial clients
      const tab = ref("");
      const slide = ref(1);
      const autoplay = ref(true);
      const slides = [
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
            "/img/client/UITM.jpg",
            "/img/client/Radicare.jpg",
            "/img/client/KKM.jpg",
            "/img/client/Sibu Water Board.jpg",
            "/img/client/Jabatan Peguam Negara.jpg",
          ],
        },
        {
          name: 6,
          images: [
            "/img/bg/KPJ_AmpangPuteri.png",
            "/img/bg/KPJ_Perlis.png",
            "/img/client/purecircle-1.png",
            "/img/client/Pharmaniaga.jpg",
            "/img/client/Gleneagles.jpg",
          ],
        },
        {
          name: 7,
          images: [
            "/img/bg/KPJ_AmpangPuteri.png",
            "/img/bg/KPJ_Perlis.png",
            "/img/client/purecircle-1.png",
            "/img/client/Pharmaniaga.jpg",
            "/img/client/Gleneagles.jpg",
          ],
        },
      ];

      return {
        showServiceMenu,
        showSubMenu,
        images,
        tab,
        slide,
        autoplay,
        slides,
      };
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },

  methods: {
    openFacebook() {
      try {
        window.open("https://www.facebook.com/mycesgroup/", "_blank");
      } catch (error) {
        console.error("An error occurred:", error);
      }
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
    scrollToSection(sectionId) {
      try {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToAboutUs() {
      try {
        this.$router.push("/Main_About");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToRent() {
      try {
        this.$router.push("/Rent_Equip");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToHome() {
      try {
        this.$router.push("/try_napi");
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

    goToEmars() {
      try {
        this.$router.push("/emars_page");
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
    dialog_show(image) {
      try {
        this.fsFlag = !this.fsFlag;
        this.currentImage = image;
      } catch (error) {
        console.error("An error occurred:", error);
        throw error;
      }
    },
    goToRental() {
      try {
        this.$router.push("/Rent_Equip");
      } catch (error) {
        console.log("An error", error);
      }
    },
    goToManu() {
      try {
        this.$router.push("/Manufacturing");
      } catch (error) {
        console.log("An error", error);
      }
    },
    goToEnergy() {
      try {
        this.$router.push("/Energy_Audit");
      } catch (error) {
        console.log("An error", error);
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
.drop-shadow {
  -webkit-box-shadow: 24px 25px 58px 22px;
  -moz-box-shadow: 24px 25px 58px 22px;
  box-shadow: 24px 25px 58px 22px;
}

/* Example of importing a Google Font */
/* @import url("https://fonts.googleapis.com/css2?family=Cactus+Classical+Serif&display=swap");
body {
  font-family: "Cactus Classical Serif", serif;
} */
.text-h5 {
  font-family: "Cactus Classical Serif", serif;
}
.background {
  size: cover;
}
</style>
