<template>
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

  <q-page-container class="q-pa-md">
    <div class="q-gutter-xl">
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
                <q-icon name="home" class="text-white"></q-icon>
              </q-item-section>
              <q-item-section class="text-white"> Our Service </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              @click="tab = 'blog'"
              :active="tab === 'blog'"
            >
              <q-item-section avatar>
                <q-icon name="article" class="text-white"></q-icon>
              </q-item-section>
              <q-item-section class="text-white">
                Energy Usage Information
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              @click="tab = 'help'"
              :active="tab === 'help'"
            >
              <q-item-section avatar>
                <q-icon name="help" class="text-white"></q-icon>
              </q-item-section>
              <q-item-section class="text-white">
                Active System
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
                    comprehensive energy management strategy. Our audit provides
                    you with a clear understanding of energy consumption in your
                    buildings and facilities. Quantitative findings can provide
                    substantial practical guideline for:
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
              <div class="text-h6">Energy Usage Information</div>
              <div class="row q-gutter-lg">
                <q-card class="q-card2" style="width: 400px">
                  <p>
                    To conduct power distribution profile monitoring and
                    analysis for overall electrical supply and main electrical
                    equipment
                  </p>
                </q-card>
                <q-card class="q-card2" style="width: 400px">
                  <p>
                    To study on the energy usage for all equipment, systems and
                    provide baseline for each major system
                  </p>
                </q-card>
              </div>
              <br />
              <div class="row q-gutter-lg">
                <q-card class="q-card2" style="width: 400px">
                  <p>
                    To establish electricity consumption distribution (load
                    apportioning) based on equipment/system e.g., air
                    conditioning, indoor lighting, compound lighting, plug loads
                    & etc. The load distribution tabulated in kWh and percentage
                  </p>
                </q-card>
                <q-card class="q-card2" style="width: 400px">
                  <p>
                    To establish electricity consumption distribution (load
                    apportioning) by plant block. The load distribution is
                    tabulated in kWh and percentage
                  </p>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
          <q-card class="q-card1" v-if="tab === 'help'">
            <q-card-section>
              <div class="text-h6">Active System</div>
              <div class="row q-gutter-lg">
                <q-card class="q-card2" style="width: 400px">
                  <p>
                    Heating, Ventilation and Air Conditioning (HVAC) System To
                    identify the technical information compared to the current
                    status of Centralized Air Conditioning System such as
                    Chiller, Cooling Tower, Condenser Pump (CWP), Chilled Water
                    Pump (ChWP), Air Handling Unit (AHU), Fan Coil Unit (FCU)
                    and its related system. (if applicable). To identify the
                    technical information compared to the current status of
                    Water-Cooled Package Unit (WCPU), Air-Cooled Package Unit
                    (ACPU) and Split Unit (ACSU). (if applicable)
                  </p>
                </q-card>
                <q-card class="q-card2" style="width: 400px">
                  <p>
                    To identify and study operating schedule and identify its
                    control system and to conduct measurement and analysis for
                    the related system as below: Chiller - Power Measurement and
                    Flowrate: Minimum 7 days for each chiller (if applicable)
                  </p>
                </q-card>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page-container>
  <!-- <q-page-container>
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="/img/bg/bg.png">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div>
    </div>
  </q-page-container> -->
  <q-separator size="10px" color="hijau" />

  <q-page-container>
    <p
      class="text-center text-black text-bold font40 text-shadow"
      style="letter-spacing: 2px"
    >
      AUDIT GALLERY
    </p>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        style="width: 1300px; height: 800px"
      >
        <q-carousel-slide :name="1" img-src="/img/client/Aweness_2.jpg" />
        <q-carousel-slide :name="2" img-src="/img/client/Aweness_7.jpg" />
        <q-carousel-slide :name="3" img-src="/img/client/EA_3.jpg" />
        <q-carousel-slide :name="4" img-src="/img/client/EA_2.jpg" />
        <q-carousel-slide :name="5" img-src="/img/client/EA_7.jpg" />
        <q-carousel-slide :name="6" img-src="/img/client/Aweness.jpg" />
        <q-carousel-slide :name="7" img-src="/img/client/EA.jpg" />
        <q-carousel-slide :name="8" img-src="/img/client/EA_4.jpg" />
        <q-carousel-slide :name="9" img-src="/img/client/EA_11.jpg" />
      </q-carousel>
    </div>
  </q-page-container>

  <q-separator size="10px" color="hijau" />

  <q-page-container>
    <!-- why need this system -->
  </q-page-container>
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
      // Commercial clients
      const tab = ref("home");
      const slide = ref(1);
      const autoplay = ref(true);
      // const slides = [
      //   {
      //     name: 1,
      //     images: [
      //       "/img/client/umsc logo.png",
      //       "/img/client/NIH.png",
      //       "/img/client/MDSB.jpg",
      //       "/img/client/MDKS.jpg",
      //       "/img/client/MDKL.jpg",
      //       "/img/client/MDHL.jpg",
      //     ],
      //   },
      //   {
      //     name: 2,
      //     images: [
      //       "/img/client/PDT Gombak.jpg",
      //       "/img/client/MBPJ.jpg",
      //       "/img/client/Demesne.jpg",
      //       "/img/client/KPJ Kajang.jpg",
      //       "/img/client/KPJ Penang.jpg",
      //       "/img/client/KPJ Puteri.jpg",
      //     ],
      //   },
      //   {
      //     name: 3,
      //     images: [
      //       "/img/client/Pharmaniaga.jpg",
      //       "/img/client/SimeDarby.jpg",
      //       "/img/client/KTS.jpg",
      //       "/img/client/KPJ Perdana.jpg",
      //       "/img/client/Salam.jpg",
      //       "/img/client/Petronas.jpg",
      //     ],
      //   },
      //   {
      //     name: 4,
      //     images: [
      //       "/img/client/Hospital Pusrawi.jpg",
      //       "/img/client/KPJ Seremban.jpg",
      //       "/img/client/ColumbiaAsia.jpg",
      //       "/img/client/Kayaku.jpg",
      //       "/img/client/Medivest.jpg",
      //       "/img/client/Terengganu.jpg",
      //     ],
      //   },
      //   {
      //     name: 5,
      //     images: [
      //       "/img/client/Gleneagles.jpg",
      //       "/img/client/UITM.jpg",
      //       "/img/client/Radicare.jpg",
      //       "/img/client/KKM.jpg",
      //       "/img/client/Sibu Water Board.jpg",
      //       "/img/client/Jabatan Peguam Negara.jpg",
      //     ],
      //   },
      //   {
      //     name: 6,
      //     images: [
      //       "/img/bg/KPJ_AmpangPuteri.png",
      //       "/img/bg/KPJ_Perlis.png",
      //       "/img/bg/KPJ_Selangor.png",
      //     ],
      //   },
      // ];

      return {
        showServiceMenu,
        showSubMenu,
        images,
        tab,
        slide,
        autoplay,
        // slides,
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
        this.$router.push("/home_page");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    goToContactUs() {
      try {
        this.$router.push("/contact_us");
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
  },
};
</script>

<style scoped>
.q-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("/img/solar_3.jpeg");
  background-size: cover;
}

.q-item {
  font-size: 22px;
}
.q-card1 {
  background: #59aa32;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-left: 40px;
  height: 100%;
}

.q-card2 {
  /* background: #fff; */
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 16px;
  font-size: 20px;
}

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
