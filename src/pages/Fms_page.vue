<template>
  <q-header
    class="q-pa-md"
    style="background: transparent; display: flex; justify-content: center"
  >
    <div>
      <q-toolbar
        class="rounded-borders bg-hijau"
        style="border-radius: 30px; width: 1200px; height: 70px"
      >
        <p class="q-pt-md q-px-md text-bold" style="font-size: 20px">
          MYCES FMS
        </p>
        <q-space />

        <q-btn-group flat v-model="tab" class="q-px-md q-gutter-sm">
          <!-- home btn -->
          <q-btn
            v-if="tab !== 'tab1'"
            v-ripple
            @click="goToHomePage"
            style="font-size: 18px"
          >
            Home
          </q-btn>

          <!-- Service btn -->
          <q-btn v-if="tab !== 'tab2'" v-ripple style="font-size: 18px">
            Service
          </q-btn>

          <!-- info btn -->
          <q-btn
            v-if="tab !== 'tab3'"
            v-ripple
            @click="scrollToSection('Info')"
            style="font-size: 18px"
          >
            Info
          </q-btn>

          <!-- contact us btn -->
          <q-btn
            v-if="tab !== 'tab4'"
            v-ripple
            @click="goToContactUs"
            style="font-size: 18px"
            >Contact Us</q-btn
          >
        </q-btn-group>
      </q-toolbar>
    </div>
  </q-header>

  <div style="background: #ffffff">
    <q-page-container>
      <div class="row justify-center q-gutter-lg q-pa-md">
        <div class="col-5">
          <q-img src="img/facility.webp" />
        </div>
        <div class="col-5 q-pt-lg">
          <p class="text-hijau text-center" style="font-size: 50px">
            <strong>Facility Management System</strong>
          </p>
          <p class="font20">
            Our facility management system offers a comprehensive solution for
            efficient and streamlined management of assets. With features such
            as digital forms, online reporting, asset history tracking, and
            planned preventive preventive maintenance generation, our system
            empowers businesses to optimize their maintenance processes. It
            simplifies reporting, enhances asset visibility, and facilitates
            proactive maintenance planning, resulting in improved asset
            performance and cost savings. <br />
            <br />
            Trust our system to effectively manage your assets, enhance
            productivity, and ensure the smooth functioning of your facility.
            Contact us today to learn more about how our facility management
            system can benefit your business.
          </p>
        </div>
      </div>
    </q-page-container>

    <!-- why fms? -->
    <q-section id="Info">
      <div class="q-pl-xl">
        <p class="text-hijau text-center" style="font-size: 50px">
          <strong>Why FMS ?</strong>
        </p>
        <div class="row q-gutter-md q-pa-md justify-center">
          <div v-for="(card, index) in cards" :key="index">
            <q-card class="card_height" style="border-radius: 30px">
              <div>
                <p class="text-hijau font20 text-center text-bold q-pt-sm">
                  {{ card.title }}
                </p>
                <q-separator size="3px" color="grey" />
                <div class="row q-px-md q-pa-md" style="width: 450px">
                  <div class="col">
                    <q-img :src="card.image" />
                  </div>
                  <div class="col">
                    <p class="" style="font-size: 16px">
                      {{ card.description }}
                    </p>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </q-section>

    <!-- targeted issue -->
    <q-page-container>
      <div>
        <div class="text-center text-hijau text-bold font40">
          <p>What issue did we target?</p>
        </div>
        <div>
          <div class="row q-pa-md q-gutter-xl justify-center">
            <div v-for="(issue, index) in issues" :key="index">
              <q-card flat class="bg-transparent" style="width: 250px">
                <q-img :src="issue.icon" />
                <p class="q-pa-md font20 text-center">{{ issue.title }}</p>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>

    <!-- solution -->
    <q-page-container>
      <p class="text-center font40 text-bold text-hijau">
        The Feature We Provided
      </p>
      <q-card flat class="q-pa-md bg-transparent">
        <q-tabs
          v-model="tab"
          dense
          class="text-black"
          active-color="hijau"
          indicator-color="hijau"
          align="justify"
          narrow-indicator
        >
          <q-tab
            v-for="item in tabs"
            :key="item.name"
            :name="item.name"
            :label="item.label"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="q-pa-md bg-transparent">
          <q-tab-panel v-for="item in tabs" :key="item.name" :name="item.name">
            <div class="row q-gutter-md justify-center">
              <q-card
                flat
                v-for="(card, index) in item.cards"
                :key="index"
                class="mycard1 bg-"
              >
                <div>
                  <q-img :src="card.image" />
                  <p class="q-pa-md text-center text-bold font20">
                    {{ card.title }}
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page-container>

    <!-- footer -->
    <div class="bg-white text-black">
      <p class="text-bold font20 q-px-md q-my-none q-pt-md">MyCES SDN. BHD.</p>
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
          <p>012-775 8732</p>

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
              <br />
              <br />
              <img src="/img/bg/KKM_bg.jpg" style="width: 350px" />
              <br />
              <br />
              <br />
              <img src="/img/bg/logo-myhijau.png" style="width: 200px" />
              <br />
              <img src="/img/bg/CIDB_3.png" style="width: 300px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <q-dialog v-model="fsFlag">
    <q-img
      :src="currentImage"
      spinner-color="white"
      fit="contain"
      style="width: 800px; height: 700px; max-width: none"
    />
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Digital Forms",
          image: "img/digitalform.png",
          description:
            "Efficiently track and manage assets, including maintenance history, lifespan, and costs.",
        },
        {
          title: "Data Driven Analysis",
          image: "img/datadriven.png",
          description:
            "Leverage Powerful Analytics for Informed Decision-Making, Optimizing Maintenance Strategies, and Improving Operational Efficiency.",
        },
        {
          title: "Planned Preventive Maintanace",
          image: "img/planned.png",
          description:
            "Generate automated schedules for planned preventive maintenance tasks, ensuring timely and proactive maintenance actions",
        },
      ],
      issues: [
        {
          title: "Lack Of Feature",
          icon: "img/icon/LackOfFeature.png",
        },
        {
          title: "Too Complex",
          icon: "img/icon/Complesity.png",
        },
        {
          title: "Data Ownership",
          icon: "img/icon/DataOwnership.png",
        },
        {
          title: "User Friendly Feature",
          icon: "img/icon/UserFriendly.png",
        },
      ],
      tab: "1",
      tabs: [
        {
          name: "1",
          label: "Management Asset",
          cards: [
            { title: "Manage Asset", image: "img/icon/AssetManagement.png" },
            { title: "Cost Detail", image: "img/icon/CostDetail.png" },
            {
              title: "Maintenance Information",
              image: "img/icon/MaintenanceInformation.png",
            },
            { title: "Purchase Detail", image: "img/icon/PurchaseDetail.png" },
            { title: "Disposal", image: "img/icon/Disposal.png" },
            { title: "Asset History", image: "img/icon/AssetHistory.png" },
          ],
        },
        {
          name: "2",
          label: "Work Order Management",
          cards: [
            {
              title: "Manage Work Order",
              image: "img/icon/ManageWorkOrder.png",
            },
            {
              title: "Response and Assessment",
              image: "img/icon/ResponseAndAssessment.png",
            },
            { title: "Cost Details", image: "img/icon/CostDetail.png" },
            { title: "Case Tracking", image: "img/icon/CaseTracking.png" },
            {
              title: "Downtown Calculation",
              image: "img/icon/Downtime.png",
            },
          ],
        },
        {
          name: "3",
          label: "Admin Interface",
          cards: [
            { title: "Company Setting", image: "img/icon/CompanySetting.png" },
            {
              title: "Customizable Parameters",
              image: "img/icon/Customizable.png",
            },
            { title: "News Management", image: "img/icon/NewsManagement.png" },
            { title: "User Management", image: "img/icon/UserManagement.png" },
            {
              title: "Dynamic User Type",
              image: "img/icon/DynamicUser.png",
            },
            {
              title: "User Access Management",
              image: "img/icon/UserAccess.png",
            },
          ],
        },
        {
          name: "4",
          label: "Schedule Work Order Management (PPM)",
          cards: [
            {
              title: "Online Checklist Storage",
              image: "img/icon/OnlineChecklist.png",
            },
            {
              title: "Holiday Management",
              image: "img/icon/HolidayManagement.png",
            },
            {
              title: "Interactive PPM Planning and Generation",
              image: "img/icon/PPM.png",
            },
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    goToContactUs() {
      this.$router.push("/contact_us");
    },
    goToHomePage() {
      this.$router.push("/home_page");
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
    openFacebook() {
      try {
        window.open("https://www.facebook.com/mycesgroup/", "_blank");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
};
</script>

<style scoped>
.icon-1:hover {
  color: #1877f2;
  transform: translateY(-10px);
}
.icon-2:hover {
  color: #e4405f;
  transform: translateY(-10px);
}
.card_height {
  height: 240px;
}

.mycard1 {
  width: 250px;
  padding: 6px;
}
</style>
