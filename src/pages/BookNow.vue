<template>
  <div>
    <q-header class="bg-green-6">
      <div class="row justify-between">
        <q-toolbar style="padding-left: 100px; padding-right: 100px">
          <q-img src="public/img/myces_logo.png" style="width: 100px" />

          <q-space />
          <!-- Add your navigation items here -->
          <div class="row q-gutter-xl text-white font20">
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
            <div class="p_hoverColor">Info</div>
            <div class="p_hoverColor">Contact</div>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <div class="container">
      <div class="q-pa-md form-container">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Email *"
            hint="Example@gmail.com"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Please insert valid information',
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="age"
            label="Quantity *"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please insert the quantity',
              (val) => (val > 0 && val < 100) || 'Please insert valid quantity',
            ]"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
        <div class="q-pa-md">
          <q-date v-model="date" multiple :events="eventsFn" />
        </div>
      </div>
    </div>
  </div>
  <q-page-container>
    <!-- <div class="q-pa-md">
      <q-date v-model="date" minimal />
    </div> -->
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
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();

    // Refs for form data
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    // Refs for menu state
    const showServiceMenu = ref(false);
    const showSubMenu = ref(false);

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

    // Date ref
    const date = ref("2019/02/01");

    return {
      // Data
      name,
      age,
      accept,
      showServiceMenu,
      showSubMenu,
      date,

      // Methods
      onSubmit,
      onReset,
      openFacebook,
      openInstagram,
    };
  },
};
</script>

<style scoped>
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
</style>
