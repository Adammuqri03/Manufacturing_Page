<template>
  <q-header class="no-shadow" id="header">
    <div class="row justify-between">
      <q-toolbar style="padding-left: 100px; padding-right: 100px">
        <img src="img/myces_logo.png" style="width: 100px" class="animation" />

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
          class="text-white text-bold text-h7 text-left q-pa-md"
          style="text-shadow: 2px 2px 5px #000000"
        >
          ENERGY AUDIT
        </h1>
        <p
          class="text-white text-light text-center text-h5 q-pa-lg"
          style="text-shadow: 2px 2px 5px #000000; letter-spacing: 2px"
        >
          Energy services are a key part of our dedicated energy efficiency
          services and the first step towards your comprehensive energy
          management strategy. Our audit provides you with a clear understanding
          of energy consumption in your buildings and facilities. Quantitative
          findings can provide substantial practical guideline
        </p>
        <q-btn
          push
          @click="scrollToSection('objectives')"
          class="hover-btn text-white"
          >Explore More</q-btn
        >

        <template v-slot:media>
          <img
            src="/img/client/EA_4.jpg"
            style="width: 80%; object-fit: contain"
            class="dimmed"
          />
        </template>
      </q-parallax>
      <q-separator size="10px" color="hijau" />
      <!-- <q-section id="SecPage">
        <q-section id="Info">
          <div class="q-pl-xl">
            <h1
              class="text-center text-hijau text-bold text-h7 font40"
              style="letter-spacing: 2px; text-shadow: 1px 1px 3px #000000"
            >
              <strong>OUR OBJECTIVES</strong>
            </h1>
            <div class="row q-gutter-md q-pa-md justify-center">
              <div v-for="(card, index) in cards" :key="index">
                <q-card class="card_height" style="border-radius: 30px">
                  <div>
                    <p class="text-hijau font20 text-center text-bold q-pt-sm">
                      {{ card.title }}
                    </p>
                    <q-separator size="3px" color="grey" />
                    <div class="row q-px-md q-pa-md" style="width: 450px">
                      <div class="col">
                        <q-img :src="card.image" />
                      </div>
                      <div class="col">
                        <p class="" style="font-size: 16px">
                          {{ card.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </q-section>
      </q-section> -->
      <q-selection id="objectives">
        <q-parallax :height="$q.screen.height + 150" :speed="-0.3">
          <h1
            class="text-center text-white text-bold text-h7 font40 q-pa-lg"
            style="letter-spacing: 2px; text-shadow: 2px 2px 5px #000000"
          >
            OUR OBJECTIVES
          </h1>
          <q-card-section
            class="text-black text-light text-center text-h5 q-pa-lg"
            style="letter-spacing: 2px"
          >
            <div class="row q-gutter-lg">
              <q-card
                class="q-card2 glass-card text-white text-center"
                style="width: 400px"
              >
                <p>
                  <strong>Provide awareness </strong>The importance of impleme
                  nting energy audits as part of energy efficiency and
                  conservation exercise.
                </p>
              </q-card>
              <q-card
                class="q-card2 glass-card text-white"
                style="width: 400px"
              >
                <p>
                  <strong>Provide financing assistance</strong> through grant,
                  as a catalyst for the imple mentation of energy audit, in
                  order to identify the current energy consumption pattern,
                  setting the Baseline and identify the energy savings
                  potential.
                </p></q-card
              >
            </div>
            <br />
            <div class="row q-gutter-lg">
              <q-card
                class="q-card2 glass-card text-white"
                style="width: 400px"
              >
                <p>
                  <strong>Provide a platform and facilitation </strong>
                  implementation of energy saving measures based on the energy
                  audit report outcome.
                </p>
              </q-card>
              <q-card
                class="q-card2 glass-card text-white"
                style="width: 400px"
              >
                <p>
                  <strong>Saving achieved through the implementation</strong>
                  energy saving measures proposed in the energy auditor report
                </p>
              </q-card>
            </div>
          </q-card-section>
          <template v-slot:media>
            <img
              src="/img/client/EA_5.jpg"
              style="width: 80%; object-fit: contain"
              class="dimmed"
            />
          </template>
        </q-parallax>
      </q-selection>
      <div class="q-gutter-xl bg-green">
        <div class="row">
          <div class="col-3">
            <q-list style="width: 700px; height: 500px">
              <q-item
                clickable
                v-ripple
                @click="tab = 'home'"
                :active="tab === 'home'"
              >
                <q-item-section avatar>
                  <q-icon name="home" class="text-black"></q-icon>
                </q-item-section>
                <q-item-section class="text-black">
                  Our Service
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="tab = 'blog'"
                :active="tab === 'blog'"
              >
                <q-item-section avatar>
                  <q-icon name="article" class="text-black"></q-icon>
                </q-item-section>
                <q-item-section class="text-black">
                  Our Objectives
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="tab = 'help'"
                :active="tab === 'help'"
              >
                <q-item-section avatar>
                  <q-icon name="help" class="text-black"></q-icon>
                </q-item-section>
                <q-item-section class="text-black">
                  Scope of Work
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-9">
            <q-card class="q-card1" v-if="tab === 'home'">
              <q-card-section>
                <div class="text-h6">Energy Service</div>
                <br />
                <div class="row q-gutter-xl">
                  <q-card class="q-card2" style="width: 700px">
                    <p>
                      Energy services are a key part of our dedicated energy
                      efficiency services and the first step towards your
                      comprehensive energy management strategy. Our audit
                      provides you with a clear understanding of energy
                      consumption in your buildings and facilities. Quantitative
                      findings can provide substantial practical guideline for:
                    </p>
                  </q-card>
                  <!-- <q-card class="q-card2" style="width: 400px">
                  <p>
                    Our audit provides you with a clear understanding of energy
                    consumption in your buildings and facilities. Quantitative
                    findings can provide substantial practical guideline for.
                  </p>
                </q-card> -->
                </div>
                <br />
                <div class="row q-gutter-xl">
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      Continuous improvement in production efficiency and reduce
                      your operation expenses, increase your profit.
                    </p>
                  </q-card>
                  <br />
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      To determine which are the best building energy efficiency
                      measures and to increase value of your building.
                    </p>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
            <q-card class="q-card1" v-if="tab === 'blog'">
              <q-card-section>
                <div class="text-h6">Objectives</div>
                <div class="row q-gutter-lg">
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      <strong>Provide awareness </strong>The importance of
                      impleme nting energy audits as part of energy efficiency
                      and conservation exercise.
                    </p>
                  </q-card>
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      <strong>Provide financing assistance</strong> through
                      grant, as a catalyst for the imple mentation of energy
                      audit, in order to identify the current energy consumption
                      pattern, setting the Baseline and identify the energy
                      savings potential.
                    </p></q-card
                  >
                </div>
                <br />
                <div class="row q-gutter-lg">
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      <strong>Provide a platform and facilitation </strong>
                      implementation of energy saving measures based on the
                      energy audit report outcome.
                    </p>
                  </q-card>
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      <strong
                        >Saving achieved through the implementation</strong
                      >
                      energy saving measures proposed in the energy auditor
                      report
                    </p>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
            <q-card class="q-card1" v-if="tab === 'help'">
              <q-card-section>
                <div class="text-h6">Details Energy Audit</div>
                <div class="row q-gutter-lg">
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      Heating, Ventilation and Air Conditioning (HVAC) System To
                      identify the technical information compared to the current
                      status of Centralized Air Conditioning System such as
                      Chiller, Cooling Tower, Condenser Pump (CWP), Chilled
                      Water Pump (ChWP), Air Handling Unit (AHU), Fan Coil Unit
                      (FCU) and its related system. (if applicable). To identify
                      the technical information compared to the current status
                      of Water-Cooled Package Unit (WCPU), Air-Cooled Package
                      Unit (ACPU) and Split Unit (ACSU). (if applicable)
                    </p>
                  </q-card>
                  <q-card class="q-card2" style="width: 400px">
                    <p>
                      To identify and study operating schedule and identify its
                      control system and to conduct measurement and analysis for
                      the related system as below: Chiller - Power Measurement
                      and Flowrate: Minimum 7 days for each chiller (if
                      applicable)
                    </p>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

(EQ EA ASAP)
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
        // Combine card
        (cards = [
          {
            title: "Eco-Friendly Products",
            image: "img/digitalform.png",
            description:
              "We offer a diverse range of eco-friendly products designed to minimize environmental impact while maximizing agricultural efficiency. ",
          },
          {
            title: "Sustainable Practices",
            image: "img/datadriven.png",
            description:
              " We encourage and support sustainable farming practices that improve soil health and biodiversity.",
          },
          {
            title: "Community Initiatives",
            image: "img/planned.png",
            description:
              " We engage in community projects that promote sustainable agriculture and support local farmers.",
            color: "bg-darkerbrightyellow",
          },
        ]),
      ];

      return {
        showServiceMenu,
        showSubMenu,
        images,
        tab,
        slide,
        autoplay,
        slides,
        cards,
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
  created() {
    window.addEventListener("scroll", function () {
      const header = document.getElementById("header");
      const scrollPosition = window.scrollY;

      // Calculate opacity based on scroll position
      const opacity =
        scrollPosition > 50 ? Math.min(0.9, 1 - scrollPosition / 250) : 1; // Adjust 200 for speed
      console.log(1 - scrollPosition / 250);
      console.log(header);
      // Apply opacity to the header background
      header.style.setProperty(
        "background-color",
        `rgba(63, 168, 28, ${opacity})`
      );
    });
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
  background-color: #21ba45;
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
/* @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&display=swap");
.font-noto {
  font-family: "Noto Serif SC", serif;
} */
.background {
  size: cover;
}
.dimmed {
  opacity: 1; /* Adjust the opacity to make the image more transparent */
  filter: brightness(
    30%
  ); /* Adjust the brightness to make the image more dimmed */
}

#header {
  background-color: rgb(63, 168, 28, 1); /* Transparent background */
  transition: background-color 0.3s ease; /* Smooth transition */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
}

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
  border: 1px solid rgba(255, 255, 255, 1);
}
</style>
