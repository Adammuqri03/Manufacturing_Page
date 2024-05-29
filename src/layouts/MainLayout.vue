<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header class="bg-transparent">
      <div class="row justify-between">
        <q-toolbar style="padding-left: 100px; padding-right: 100px">
          <q-img src="public/img/myces_logo.png" style="width: 100px" />

          <q-space />
          ### Add your navigation items here
          <div class="row q-gutter-xl text-white font20">
            <div class="p_hoverColor" @click="goToHome">Home</div>
            <div class="p_hoverColor" @click="goToAboutUs">Corporate</div>
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
                      ><a @click="goToRent">Equipment Rental</a></q-item-section
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
            ###<div class="p_hoverColor">Info</div>
            <div class="p_hoverColor" @click="goToContactUs">Contact</div>
          </div>
        </q-toolbar>
      </div>
    </q-header> -->
    <router-view />
  </q-layout>
</template>

<script></script>
