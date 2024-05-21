<template>
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
</template>

<script>
export default {
  data() {
    return {
      showServiceMenu: false,
      showSubMenu: false,
    };
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
