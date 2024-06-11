<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-transparent">
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
    <q-parallax
      :height="$q.screen.height + 150"
      :speed="-0.3"
      style="background: url('img/bg/bg-1.jpeg')"
    >
      <h1
        class="text-white text-h9 text-bold"
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
        />
      </template>
    </q-parallax>
    <q-page-container style="background: url('img/bg/bg-1.jpeg')">
      <div class="row">
        <div class="col">
          <div class="col row justify-between bg-1">
            <div class="absolute"></div>
          </div>
          <q-section id="SecPage">
            <div class="col q-pa-md">
              <div class="col text-green-8 flex flex-center">
                <div class="text-bold" style="width: 18vw; height: 100%">
                  <q-img src="/img/myces_logo.png"> </q-img>
                </div>
                <div class="text-center justify-center">
                  <h3 style="text-align: center" class="text-bold font40">
                    SAVE ENERGY FOR A BETTER FUTURE
                  </h3>
                  <p class="text-black text-light text-center text-h5">
                    Since the foundation of MyCES SDN BHD in 2015, the company
                    has developed very fast, and has taken over a significant
                    part in the energy saving industry. The company’s goal is to
                    build long term relationships with our customers and clients
                    and provide exceptional customer services by pursuing
                    business through innovation and advanced technology.
                  </p>
                </div>
              </div>
            </div>
          </q-section>
          <br />
          <br />
          <br />

          <!-- <div class="text-center font20"></div> -->
          <p
            class="text-center text-green-8 text-bold font40"
            style="letter-spacing: 2px"
          >
            OUR SERVICES
          </p>

          <div
            class="row q-gutter-lg q-pa-md justify-center items-center"
            style="
              font-size: 25px;
              letter-spacing: 2px;
              background: url('img/bg/bg-1.jpeg');
            "
          >
            <q-card class="col-md-4" style="border-radius: 20px">
              <q-card-section class="q-pa-none">
                <q-img
                  src="/img/Emars_system.png"
                  style="border-radius: 20px; width"
                  @click="goToEmars"
                >
                </q-img>
              </q-card-section>

              <q-card-section
                class="q-py-xs text-bold text-center text-black-8"
              >
                Energy Monitoring System
              </q-card-section>
            </q-card>
            <q-card class="col-md-4" style="border-radius: 20px">
              <q-card-section class="q-pa-none">
                <q-img
                  src="/img/bg/energyAudit.jpg"
                  fit="contain"
                  style="width: 100%; border-radius: 20px"
                  @click="goToEnergy"
                >
                </q-img>
              </q-card-section>
              <q-card-section class="q-pa-none q-ma-none">
                <p class="q-py-xs text-bold text-center text-black-8">
                  Energy Audit
                </p>
              </q-card-section>
            </q-card>
            <!-- <q-card>
                <q-img
                  src="/img/bg/awareness2.jpg"
                  style="height: 300px; width: 450px; border-radius: 20px"
                >
                  <div class="absolute-bottom">
                    <div class="text-h6-center">Awareness Training</div>
                  </div>
                </q-img>
              </q-card> -->
            <q-card class="col-md-4" style="border-radius: 20px">
              <q-card-section class="q-pa-none">
                <q-img
                  src="/img/eqp/rental_8.png"
                  style="border-radius: 20px; height: 230px"
                  @click="goToEmars"
                >
                </q-img>
              </q-card-section>

              <q-card-section
                class="q-py-xs text-bold text-center text-black-8"
              >
                Equipments Rental
              </q-card-section>
            </q-card>
            <q-card class="col-md-4" style="border-radius: 20px">
              <q-card-section class="q-pa-none">
                <q-img
                  src="/img/calender WOM.png"
                  style="border-radius: 20px"
                  @click="goToFMS"
                >
                </q-img>
              </q-card-section>

              <q-card-section
                class="q-py-xs text-bold text-center text-black-8"
              >
                Facility Managements System
              </q-card-section>
            </q-card>
            <q-card class="col-md-4" style="border-radius: 20px">
              <q-card-section class="q-pa-none">
                <q-img
                  src="/img/client/Aweness_9.jpg"
                  style="border-radius: 20px"
                  @click="goToEmars"
                >
                </q-img>
              </q-card-section>

              <q-card-section
                class="q-py-xs text-bold text-center text-black-8"
              >
                Energy Awareness
              </q-card-section>
            </q-card>

            <q-card class="col-md-4" style="border-radius: 20px">
              <q-card-section class="q-pa-none">
                <q-img
                  src="/img/icon/consult.jpg"
                  style="border-radius: 20px"
                  @click="goToEmars"
                >
                </q-img>
              </q-card-section>

              <q-card-section
                class="q-py-xs text-bold text-center text-black-8"
              >
                Energy management sytem and consultancy
              </q-card-section>
            </q-card>
            <!-- <q-card
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
                    @click="goToEmars"
                  />
                </div>
              </q-card> -->
          </div>

          <div class="text-center font20"></div>
          <br />
          <br />
          <p
            class="text-center text-green-8 text-bold font40"
            style="letter-spacing: 2px"
          >
            OUR CLIENTS
          </p>
          <div class="q-px-md" style="background: url('img/bg/bg-1.jpeg')">
            <q-carousel
              animated
              v-model="slide"
              navigation
              infinite
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
                style="overflow: hidden"
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

          <!-- <div class="text-center font20"></div>
          <p
            class="text-center text-green-8 text-bold font40"
            style="letter-spacing: 2px"
          >
            OUR INDUSTRIAL CLIENTS
          </p>
          <div class="q-px-md">
            <q-carousel
              animated
              v-model="newSlide"
              navigation
              infinite
              :newAutoplay="2000"
              arrows
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="newAutoplay = false"
              @mouseleave="newAutoplay = true"
              style="background-color: transparent"
            >
              <q-carousel-slide
                v-for="slideData in newSlides"
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
          </div> -->
          <!-- <section class="section project" aria-labelledby="project-label">
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
          </section> -->
        </div>
      </div>
    </q-page-container>

    <!-- FOOTER SECTION -->
    <q-footer elevated>
      <div class="col bg-grey-10 text-grey-1 q-pa-sm">
        <p class="text-bold font20 q-px-md q-my-none q-pt-md text-h2">
          MyCE SDN. BHD.
        </p>
        <div class="row q-pa-md font20 q-gutter-xl">
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
          <div class="col-auto">
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
            <p class="q-my-none">+603-8725 5811</p>
            <p>+60 12-775 8732</p>

            <strong> Email : </strong>
            <p>Info@mycesgroup.com</p>
          </div>

          <!-- connect with us -->
          <div class="col">
            <strong>Connect with us</strong>
            <div class="row q-gutter-lg justify-left q-pa-sm">
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
            </div>
          </div>
          <div class="row q-gutter-lg justify-center q-pa-sm full-width">
            <q-img src="/img/bg/tenaga_bg.png" fit="contain" class="col-2" />
            <q-img src="/img/bg/KKM_bg.jpg" fit="contain" class="col-2" />
            <q-img src="/img/bg/logo-myhijau.png" fit="contain" class="col-1" />
            <q-img src="/img/bg/CIDB_3.png" fit="contain" class="col-2" />
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
