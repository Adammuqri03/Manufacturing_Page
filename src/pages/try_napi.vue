<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-transparent">
      <div class="row justify-between">
        <q-toolbar style="padding-left: 100px; padding-right: 100px">
          <q-img src="public/img/myces_logo.png" style="width: 100px" />

          <q-space />
          <!-- Add your navigation items here -->
          <div class="row q-gutter-xl text-black font20 text-bold">
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
                      ><a href="#">Sustainable Energy Management System(SEMS)</a>
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
                      ><a href="#">MYCES Manufacturing Sdn Bhd</a></q-item-section
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
    <div>
      <q-parallax :height="850" :speed="0.4">
        <template v-slot:media>
          <img src="/img/bg/bg.png" style="width: 100%" />
        </template>

        <h1
          class="text-white text-h9 text-bold"
          style="text-shadow: 2px 2px 5px #000000"
        >
          MyCES SDN BHD
        </h1>
        <div class="hover-btn">Explore More</div>
      </q-parallax>
    </div>
    <q-page-container>
      <div class="row">
        <div class="col">
          <div class="col row justify-between bg-1">
            <div class="absolute"></div>
          </div>
          <div class="col q-pa-md">
            <div class="col text-green-8 flex flex-center">
              <div class="text-bold" style="width: 18vw; height: 100%">
                <q-img src="/img/myces_logo.png"> </q-img>
              </div>
              <div class="text-bold text-center justify-center">
                <h3 style="text-align: center" class="text-bold font40">
                  SAVE ENERGY FOR A BETTER FUTURE
                </h3>
                <p class="text-h6 text-center">
                  Since the foundation of MyCES SDN BHD in 2015, the company has
                  developed very fast, and has taken over a significant part in
                  the energy saving industry. The company’s goal is to build
                  long term relationships with our customers and clients and
                  provide exceptional customer services by pursuing business
                  through innovation and advanced technology.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="text-center font20"></div>
          <p
            class="text-center text-green-8 text-bold font40"
            style="letter-spacing: 2px"
          >
            OUR SERVICES
          </p>
          <div
            class="row flex flex-center"
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
                style="height: 200px; width: 350px; border-radius: 20px"
              />
              <p class="text-center q-pt-md" style="height: 50px">
                {{ image.title }}
              </p>
              <div class="q-pa-md flex flex-center">
                <q-btn
                  color="green"
                  text-color="white"
                  label="More Info"
                  @click="openMonitoring"
                />
              </div>
            </q-card>
          </div>
          <div class="text-center font20"></div>
          <p
            class="text-center text-green-8 text-bold font40"
            style="letter-spacing: 2px"
          >
            OUR CLIENTS
          </p>
          <section class="section project" aria-labelledby="project-label">
            <div class="container">
              <p class="section-subtitle" id="project-label"></p>

              <div class="row q-gutter-md">
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/umsc logo.png"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/NIH.png"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/MDSB.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/MDKS.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/MDKL.jpg"
                  />
                </div>
                <q-separator />
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/MDHL.jpg"
                  />
                </div>
              </div>
              <div class="row q-gutter-md">
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/PDT Gombak.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/MBPJ.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Demesne.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KPJ Kajang.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KPJ Penang.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KPJ Puteri.jpg"
                  />
                </div>
              </div>
              <div class="row q-gutter-md">
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Pharmaniaga.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/SimeDarby.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KTS.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KPJ Perdana.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Salam.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Petronas.jpg"
                  />
                </div>
              </div>
              <div class="row q-gutter-md">
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="img/client/Hospital Pusrawi.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KPJ Seremban.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/ColumbiaAsia.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Kayaku.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Medivest.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Terengganu.jpg"
                  />
                </div>
              </div>
              <div class="row q-gutter-md">
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Gleneagles.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/UITM.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Radicare.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/KKM.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Sibu Water Board.jpg"
                  />
                </div>
                <div class="col" style="height: 200px; width: 230px">
                  <q-img
                    style="mix-blend-mode: multiply"
                    src="/img/client/Jabatan Peguam Negara.jpg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </q-page-container>

    <!-- FOOTER SECTION -->
    <q-footer>
      <div class="col bg-white text-black">
        <p class="text-bold font20 q-px-md q-my-none q-pt-md">MyCE SDN. BHD.</p>
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
            <p>+603-8725 5811</p>
            <p>+60 12-775 8732</p>

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
                <p></p>
                <img src="/img/bg/KKM_bg.jpg" />
                <br />
                <br />
                <br />
                <img src="/img/bg/logo-myhijau.png" />
                <br />
                <img src="/img/bg/CIDB_3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
    <!-- <q-footer class="footer bg-white text-black">
      <div class="container grid-list">
        <q-toolbar>
          <q-toolbar-title>
            <div class="footer-brand">
              <a href="#" class="logo">
                <q-img
                  src="/logo/myces_logo.png"
                  width="60px"
                  height="60px"
                  alt="MyCES Home"
                />
              </a>

              <p class="footer-text text-black">
                &copy; 2015 MyCES. <br />
                All rights reserved.
              </p>
            </div>
            <ul class="footer-list text-black">
              <li>
                <address class="footer-text">
                  HQ Address RK 27-B Jalan Villa 3 Taman Anggerik Villa 43500
                  Semenyih Selangor Darul Ehsan
                </address>
              </li>

              <li>
                <a href="mailto:info@email.com" class="footer-link"
                  >Info@mycesgroup.com</a
                >
              </li>

              <li>
                <br />
                <strong>Contact Number</strong>
                <a href="tel:001234567890" class="footer-link">603-8725 5811</a>
                <br />
                <a href="tel:001234567890" class="footer-link">012 775-8732</a>
              </li>
            </ul>
            <div class="footer-list textwidget align-center">
              <img src="/img/bg/tenaga_bg.png" />
              <p></p>
              <img src="/img/bg/KKM_bg.jpg" />
              <br />
              <br />
              <img src="/img/bg/cidb_bg.png" />
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showServiceMenu = ref(false);
    const showSubMenu = ref(false);

    const images = [
      { src: "/img/Interval Usage.png", title: "Monitoring System " },
      { src: "/img/bg/energyAudit.jpg", title: "Energy Audit" },
      { src: "/img/bg/awareness2.jpg", title: "Awareness Training" },
      { src: "/img/bg/rental.jpg", title: "Rental Equipment" },
    ];
    // const images2 = [
    //   { src: "/img/Asset Management.png", title: "Asset Management" },
    //   {
    //     src: "/img/Work Order Performance.jpg",
    //     title: "Work Order Management",
    //   },
    //   { src: "/img/calender WOM.png", title: "Schedule Work Order Management" },
    // ];

    return {
      showServiceMenu,
      showSubMenu,
      images,
      // images2,

      // Add any methods or computed properties you need here
    };
  },

  methods: {
    openFacebook() {
      window.open("https://www.facebook.com/mycesgroup/", "_blank");
    },
    openLinkedin() {
      window.open(
        "https://my.linkedin.com/company/myces-energy-consultant/",
        "_blank"
      );
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

