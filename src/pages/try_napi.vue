<template>
  <q-layout view="hhh lpR fff">
    <q-header elevated class="bg-green-6 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="height: 200%; width: 100px">
            <img
              src="public/img/myces_logo.png"
              style="height: 100%; width: 100%"
              fit="contain"
            />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-pa-md" align="right">
        <!-- DROPDOWN BUTTON -->
        <template v-for="(mainItem, index1) in linklist" :key="index1">
          <template v-if="mainItem.type == 'list'">
            <q-btn-dropdown color="green-6" :label="mainItem.name">
              <q-list>
                <q-item
                  v-for="(subitem, index2) in mainItem.subitem"
                  :key="index2"
                  v-close-popup
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>{{ subitem.name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </template>

          <!-- BUTTON ONLY -->

          <!-- home button -->
          <template v-if="mainItem.type == 'button'">
            <q-btn color="green" :label="mainItem.name" />
          </template>

          <!-- info button-->
          <template v-if="mainItem.type == 'button1'">
            <q-btn
              color="green"
              :label="mainItem.name"
              style="width: 120px"
              text-color="black"
            />
          </template>

          <!-- about button-->
          <template v-if="mainItem.type == 'button2'">
            <q-btn
              color="green"
              :label="mainItem.name"
              style="width: 130px"
              text-color="black"
            />
          </template>

          <!-- contact button-->
          <template v-if="mainItem.type == 'button3'">
            <q-btn
              color="green"
              :label="mainItem.name"
              style="width: 130px"
              text-color="black"
            />
          </template>
        </template>
      </div>
      <!-- <q-tabs align="right" class="row q-gutter-xl text-black font30 text-bold">
        <q-route-tab to="/page1" label="Home" />
        <q-route-tab to="/page2" label="About" />
        <q-route-tab to="/page3" label="Service" />
        <q-route-tab to="/page4" label="Subsidiaries" />
        <q-route-tab to="/page5" label="Info" />
        <q-route-tab to="/page6" label="Contact" />
      </q-tabs> -->
    </q-header>

    <q-page-container>
      <!-- First Parallax Image -->
      <div>
        <q-parallax
          ref="parallax"
          src="/public/img/bg/bg.png"
          :height="900"
          :speed="5"
        >
          <img
            ref="parallaxImage"
            src="/public/img/bg/bg.png"
            style="width: 100%; height: 100%"
          />
          <div
            class="absolute-full text-subtitle2 flex flex-center"
            style="font-size: 5rem; color: aliceblue; padding-bottom: 200px"
          >
            MyCES SDN BHD
          </div>
        </q-parallax>
      </div>
      <!-- Second Parallax Image -->
      <div>
        <q-parallax
          ref="parallax"
          src="/public/img/myces_logo.png"
          :height="900"
          :speed="5"
        >
          <img
            ref="parallaxImage"
            src="/public/img/myces_logo.png"
            style="width: 300px; height: 300px"
          />
        </q-parallax>
      </div>
      <router-view />
    </q-page-container>

    <!-- footer -->
    <div class="bg-green-8 text-white">
      <p class="text-bold font20 q-px-md q-my-none q-pt-md">
        MyCES MANUFACTURING SDN. BHD.
      </p>
      <p class="subtitle">Malaysia Comprehensive Energy Solution</p>
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
            <!-- <q-icon size="40px" name="mdi-facebook" class="icon-1" @click="openFacebook"/>
          <q-icon size="40px" name="mdi-instagram" class="icon-2" @click="openFacebook"/> -->
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<style>
q-route-tab {
  font-size: 50px;
  /* background-color: #dadada; */
}
</style>
<script>
export default {
  methods: {
    navigateToUrl(url) {
      // Optional: Perform additional actions before redirecting (e.g., tracking)
      window.location.href = url;
    },
    onItemClick(subitem) {
      // console.log("Clicked on an Item:", subitem.name);

      // Check if the subitem has a link property
      if (subitem.link) {
        this.navigateToUrl(subitem.link);
      } else {
        // console.log("Subitem does not have a link:", subitem.name);
      }
    },

    goTo,
  },
  data() {
    return {
      linklist: [
        {
          name: "Service",
          type: "list",
          subitem: [
            { name: "Energy Audit", link: "" },
            { name: "Monitoring System (MyCES EMARS)", link: "" },
            { name: "Measurement and Verification (M&V)", link: "" },
            { name: "Sustainable Energy Management System (SEMS)", link: "" },
            { name: "Awareness Training", link: "" },
            { name: "Equipment Rental", link: "" },
            { name: "Smart Home Automation", link: "" },
            { name: "AMARS", link: "" },
          ],
        },
        {
          name: "Subsidaries",
          type: "list",
          subitem: [
            {
              name: "MYCES Biomedical Engineering Sdn Bhd",
              link: "https://biomed.mycesgroup.com/",
            },
            { name: "MYCES AgroFarm Sdn Bhd", link: "" },
            { name: "MYCES Manufacturing Sdn Bhd", link: "" },
            { name: "MYCES Edutech Sdn Bhd", link: "" },
            { name: "MYCES Aircond & Electrical Services Sdn Bhd", link: "" },
          ],
        },
        {
          name: "Home",
          type: "button1",
        },
        {
          name: "Info",
          type: "button1",
        },
        {
          name: "About",
          type: "button2",
        },
        {
          name: "Contact",
          type: "button3",
        },
      ],
    };
  },
};
</script>
