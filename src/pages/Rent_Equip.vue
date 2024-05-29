<template>
  <div>
    <q-header class="bg-green-6">
      <div class="row justify-between">
        <q-toolbar style="padding-left: 100px; padding-right: 100px">
          <q-img src="public/img/myces_logo.png" style="width: 100px" />

          <q-space />
          <!-- Add your navigation items here -->
          <div class="row q-gutter-xl text-white font20">
            <div class="p_hoverColor" @click="goToHome">Home</div>
            <div class="p_hoverColor" @click="goToAbout">Corporate</div>
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
            <!-- <div class="p_hoverColor">Info</div> -->
            <div class="p_hoverColor" @click="goToUs">Contact</div>
          </div>
        </q-toolbar>
      </div>
    </q-header>
  </div>

  <q-page-container>
    <div class="text-center font20"></div>
    <p
      class="text-center text-green-8 text-bold font40"
      style="letter-spacing: 2px"
    >
      RENTAL EQUIPMENTS
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
            label="Book Now"
            @click="goToBook"
          />
        </div>
      </q-card>
    </div>
  </q-page-container>

  <!-- footer -->
  <div class="bg-white text-black">
    <p class="text-bold font20 q-px-md q-my-none q-pt-md">
      MyCES MANUFACTURING SDN. BHD.
    </p>
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
        </div>
      </div>
    </div>
  </div>

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

        <div class="col-2">
          <strong> Telephone : </strong>
          <p>+603-8725 5811</p>
          <p>+60 12-775 8732</p>

          <strong> Email : </strong>
          <p>Info@mycesgroup.com</p>
        </div>
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
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();

    // Refs for form data
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    // Refs for menu state
    const showServiceMenu = ref(false);
    const showSubMenu = ref(false);

    // Image data for the gallery
    const images = [
      {
        src: "/img/eqp/rental_1.png",
        title: "Chauvin Arnoux, PEL 103",
      },
      { src: "/img/eqp/rental_2.png", title: " Chauvin Arnoux, MN93" },
      { src: "/img/eqp/rental_3.png", title: " Testo 540" },
      { src: "/img/eqp/rental_4.png", title: "Testo 625" },
      { src: "/img/eqp/rental_5.2.png", title: " Testo 315-3" },
      { src: "/img/eqp/rental_6.png", title: "Testo 416" },
      { src: "/img/eqp/rental_7.png", title: "KTT 220/KTT 220-O" },
      { src: "/img/eqp/rental_8.png", title: "Hioki 3280-10F" },
      { src: "/img/eqp/rental_9.png", title: "KIMO LX100" },
      { src: "/img/eqp/rental_10.png", title: "FLEXIM F721TE" },
      { src: "/img/eqp/rental_11.png", title: "Fluxus G601" },
    ];

    // Methods for form submission and reset
    const onSubmit = () => {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    };

    const onReset = () => {
      name.value = null;
      age.value = null;
      accept.value = false;
    };

    // Methods for opening social media links
    const openFacebook = () => {
      window.open("https://www.facebook.com/mycesgroup/", "_blank");
    };

    const openInstagram = () => {
      window.open(
        "https://my.linkedin.com/company/myces-energy-consultant",
        "_blank"
      );
    };

    const goToBook = () => {
      try {
        router.push("/Booking");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    const goToUs = () => {
      try {
        window.location.href = "https://biomed.mycesgroup.com/contact/";
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    const goToHome = () => {
      try {
        router.push("/home_page");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    const goToAbout = () => {
      try {
        router.push("/Main_about");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    const goToRent = () => {
      try {
        this.$router.push("/Rent_Equip");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    return {
      // Data
      name,
      age,
      accept,
      showServiceMenu,
      showSubMenu,
      images,

      // Methods
      onSubmit,
      onReset,
      openFacebook,
      openInstagram,
      goToBook,
      goToUs,
      goToHome,
      goToAbout,
      goToRent,
    };
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  max-width: 400px;
  width: 100%;
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
