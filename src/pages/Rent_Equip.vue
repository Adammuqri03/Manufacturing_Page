<template>
  <div>
    <header class="header" data-header style="overlay: 1000">
      <div class="container">
        <a href="#" class="logo">
          <img
            src="/img/myces_logo.png"
            width="74"
            height="24"
            alt="home"
            class="logo-light"
          />
          <img
            src="/logo/myces_logo.png"
            width="74"
            height="24"
            alt="home"
            class="logo-dark"
          />
        </a>

        <nav class="navbar" data-navbar>
          <div class="navbar-top">
            <a href="#" class="logo">
              <img
                src="/logo/myces_logo.png"
                width="74"
                height="24"
                alt="Home"
              />
            </a>

            <button
              class="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <q-icon name="close-outline" aria-hidden="true"></q-icon>
            </button>
          </div>

          <ul class="navbar-list">
            <li>
              <a href="#" class="navbar-link" style="color: white">Home</a>
            </li>

            <li>
              <a href="#" class="navbar-link" style="color: white">About</a>
            </li>

            <li>
              <a
                href="#"
                class="navbar-link"
                style="color: white"
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
                      <q-item-section>
                        <a href="#">Monitoring System (MyCES EMARS)</a>
                      </q-item-section>
                    </q-item>
                    <q-item class="item_Hover">
                      <q-item-section>
                        <a href="#">Measurement and Verification (M&V)</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="navbar-link"
                style="color: white"
                @mouseover="showSubMenu = true"
                @mouseleave="showSubMenu = false"
              >
                Subsidiaries
                <q-menu
                  style="
                    width: 200px;
                    background-color: rgba(0, 0, 0, 0.721);
                    font-size: 18px;
                  "
                  class="text-black"
                  v-model="showSubMenu"
                >
                  <q-list
                    @mouseover="showSubMenu = true"
                    @mouseleave="showSubMenu = false"
                  >
                    <q-item class="item_Hover">
                      <q-item-section>
                        <a href="https://biomed.mycesgroup.com/">
                          MYCES Biomedical Engineering Sdn Bhd
                        </a>
                      </q-item-section>
                    </q-item>
                    <q-item class="item_Hover">
                      <q-item-section>
                        <a href="#">MYCES AgroFarm Sdn Bhd</a>
                      </q-item-section>
                    </q-item>
                    <q-item class="item_Hover">
                      <q-item-section>
                        <a href="#">MYCES Manufacturing Sdn Bhd</a>
                      </q-item-section>
                    </q-item>
                    <q-item class="item_Hover">
                      <q-item-section>
                        <a href="#">MYCES Edutect Sdn Bhd</a>
                      </q-item-section>
                    </q-item>
                    <q-item class="item_Hover">
                      <q-item-section>
                        <a href="#"
                          >MYCES Aircond & Electrical Services Sdn Bhd</a
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link" style="color: black">Info</a>
            </li>
          </ul>
        </nav>

        <a href="#" class="btn btn-primary">Contact us</a>

        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <q-icon name="menu-outline" aria-hidden="true"></q-icon>
        </button>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  </div>

  <q-page-container>
    <div class="row">
      <div class="col">
        <div class="text-center font20"></div>
        <p
          class="text-center text-green-8 text-bold font40"
          style="letter-spacing: 2px"
        >
          Equipments Rental
        </p>
      </div>
    </div>
  </q-page-container>

  <!-- FOOTER SECTION -->
  <!-- <q-footer>
    <div class="col bg-white text-black">
      <p class="text-bold font20 q-px-md q-my-none q-pt-md">
        MyCES MANUFACTURING SDN. BHD.
      </p>
      <p class="text-bold font20 q-px-md q-my-none q-pt-sm">FIND US</p>
      <div class="row q-pa-md font20">
        place
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

        info
        <div class="col-2">
          <strong> Telephone : </strong>
          <p>+603-8725 5811</p>
          <p>+60 12-775 8732</p>

          <strong> Email : </strong>
          <p>Info@mycesgroup.com</p>
        </div>

        connect with us
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
              <img src="/img/bg/cidb_bg.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-footer> -->
</template>

<script>
"use strict";

export default {
  data() {
    return {
      showServiceMenu: false,
      showSubMenu: false,
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
