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

    <div class="q-pa-md">
      <q-table
        style="height: 400px"
        flat
        bordered
        title="Models"
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
      />
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
import { QTable, QBtn } from "quasar";

const columns = [
  {
    name: "index",
    label: "No",
    field: "index",
  },
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const seed = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  setup() {
    const rows = [];
    for (let i = 0; i < 1000; i++) {
      rows.push(
        ...seed.map((r, index) => ({ ...r, index: index + i * seed.length }))
      );
    }

    const pagination = ref({
      rowsPerPage: 0,
    });

    const openFacebook = () => {
      window.open("https://www.facebook.com/mycesgroup/", "_blank");
    };

    const openLinkedin = () => {
      window.open(
        "https://my.linkedin.com/company/myces-energy-consultant/",
        "_blank"
      );
    };

    return {
      columns,
      rows,
      pagination,
      openFacebook,
      openLinkedin,
    };
  },
};
</script>
