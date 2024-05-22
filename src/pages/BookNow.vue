<template>
  <div>
    <header class="header" data-header style="background-color: green">
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

          <!--navbar/menu section-->
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
                >Service
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
                </q-menu></a
              >
            </li>

            <li>
              <a
                href="#"
                class="navbar-link"
                style="color: white"
                @mouseover="showSubMenu = true"
                @mouseleave="showSubMenu = false"
                >Subsidiaries<q-menu
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
                </q-menu></a
              >
            </li>

            <li>
              <a href="#" class="navbar-link" style="color: white">Info</a>
            </li>
          </ul>
        </nav>

        <a href="#" class="btn btn-primary">Contact us</a>

        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <q-icon name="menu-outline" aria-hidden="true"></q-icon>
        </button>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header
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
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
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
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
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
