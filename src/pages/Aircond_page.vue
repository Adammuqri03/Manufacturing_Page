<template>
  <q-header
    class="q-pa-md "
    style="background: white; display: flex; justify-content: center"
  >
    <div>
      <q-toolbar
        class="rounded-borders bg-hijau"
        style="border-radius: 30px; width: 1200px; height: 70px"
      >
        <p class="q-pt-md q-px-md text-bold" style="font-size: 20px">
          MYCES AIRCOND & ELECTRICAL SERVICE
        </p>
        <q-space />

        <q-btn-group flat v-model="tab" class="q-px-md q-gutter-sm">
          <q-btn
            v-if="tab !== 'tab1'"
            v-ripple
            @click="scrollToSection('Home')"
            style="font-size: 18px"
          >
            Home
          </q-btn>
          <q-btn
            v-if="tab !== 'tab2'"
            v-ripple
            label="Service"
            style="font-size: 18px"
          >
            <q-menu fit class="text-center">
              <q-list>
                <q-item>
                  <q-item-section @click="scrollToSection('EMARS')">
                    <q-btn flat>EMARS</q-btn>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section @click="scrollToSection('FMS')">
                    <q-btn flat> FMS </q-btn>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            v-if="tab !== 'tab3'"
            v-ripple
            @click="scrollToSection('Info')"
            style="font-size: 18px"
          >
            Info
          </q-btn>
          <q-btn
            v-if="tab !== 'tab4'"
            v-ripple
            label="Contact Us"
            style="font-size: 18px"
          ></q-btn>
        </q-btn-group>
      </q-toolbar>
    </div>
  </q-header>

  <q-page-container>
    <div class="text-center flex flex-center" style="margin: 130px">
      <h3 class="text-bold custom_font">
        Welcome to Empowering Electrical Excellent with MyCES
      </h3>
      <h4 class="russo-one-regular">Your Partner In Mechanical & Electrical Work</h4>
    </div>
  </q-page-container>
  <q-page-container>
    <div class="q-pa-md">
      <div class="bg-teal q-py-sm" style="border-radius: 50px">
        <h3 class="text-bold text-center">Scope Of Service</h3>
        <h5 class="text-center">
          At MyCES AirCond & Electrical Services, our commitment to excellence
          in the electrical field is unparalleled.
        </h5>
      </div>
      <div>
        <div class="row q-pa-lg justify-center">
          <div class="col-2 flex flex-center bg-teal" style="height: 200px">
            <p>img</p>
          </div>
          <div class="col-4 q-pa-md flex flex-center">
            <p class="text-center text-bold" style="font-size: 25px">
              Electrical Panel Expertise
            </p>
            <p>
              Proficient wiring services for new and existing panels in
              residential areas.
            </p>
            <p>
              Installation and maintenance of electrical panels for optimal
              performance.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
        </div>
        <div class="row q-pa-lg justify-center">
          <div class="col-4 q-pa-md flex flex-center">
            <p class="text-center text-bold font-body" style="font-size: 25px">
              Solar Energy Solution
            </p>
            <p>Skilled manpower for efficent solar installation services.</p>
            <p>
              Expertise in setting up solar energy systems for sustainable power
              solutions.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
          <div class="col-2 flex flex-center bg-teal" style="height: 200px">
            <p>img</p>
          </div>
        </div>
        <div class="row q-pa-lg justify-center">
          <div class="col-2 flex flex-center bg-teal" style="height: 200px">
            <p>img</p>
          </div>
          <div class="col-4 q-pa-md flex flex-center">
            <p class="text-center text-bold" style="font-size: 25px">
              LED Retrofitting Projects
            </p>
            <p>Engaging in LED retrofitting for enchanced system efficency.</p>
            <p>
              Modification of existing systems to meet new standards and improve
              overall performance.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
        </div>
        <div class="row q-pa-lg justify-center">
          <div class="col-4 q-pa-md flex flex-center">
            <p class="text-center text-bold" style="font-size: 25px">
              Building Automation System (BAS) Optimization
            </p>
            <p>
              Specialization in modification and optimizing Building Automation
              Systems.
            </p>
            <p>
              Enhancing efficency and performance in building automation
              solutions.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
          <div class="col-2 flex flex-center bg-teal" style="height: 200px">
            <p>img</p>
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
  <q-page-container>
    <div class="q-pa-md">
      <div class="bg-teal q-py-sm" style="border-radius: 50px">
        <h3 class="text-bold text-center">Specialized Experience</h3>
      </div>
      <div class="row justify-center q-gutter-xl q-pa-md">
        <q-card class="mycard border_radius">
          <div
            class="text-center flex flex-center bg-teal"
            style="height: 300px"
          >
            <p>img</p>
          </div>
          <div class="text-center q-pa-md">
            <p class="text-bold" style="font-size: 15px">
              Energy Data Logger Installation
            </p>
            <p>
              Experience in installing Energy Data Loggers for monitoring and
              recording energy consumption patterns.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
        </q-card>
        <q-card class="mycard border_radius">
          <div
            class="text-center flex flex-center bg-teal"
            style="height: 300px"
          >
            <p>img</p>
          </div>
          <div class="text-center q-pa-md">
            <p class="text-bold" style="font-size: 15px">
              Flow Meters for Chiller Systems
            </p>
            <p>
              Adept at installing Flow Meters for Chiller systems, vital for
              effective monitoring and management of liquid flow in cooling
              systems.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
        </q-card>
        <q-card class="mycard border_radius">
          <div
            class="text-center flex flex-center bg-teal"
            style="height: 300px"
          >
            <p>img</p>
          </div>
          <div class="text-center q-pa-md">
            <p class="text-bold" style="font-size: 15px">
              Air Compressor Systems
            </p>
            <p>
              Diverse skill set in installing Flow Meters for Air Compressor
              systems, ensuring optimal performance across various equipment
              types.
            </p>
            <div>
              <q-btn
                flat
                class="bg-teal text-white border_radius"
                style="width: 200px; letter-spacing: 2px"
              >
                Explore More
              </q-btn>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref(""),
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>

.mycard {
  width: 350px;
}
</style>
