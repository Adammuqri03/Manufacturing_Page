<template>
  <div>
    <!-- Header Section -->
    <header class="header" data-header style="background-color: green">
      <div class="container">
        <a href="#" class="logo">
          <img
            src="/img/myces_logo.png"
            width="74"
            height="24"
            alt="Adex home"
            class="logo-light"
          />

          <img
            src="/img/myces_logo.png"
            width="74"
            height="24"
            alt="Adex home"
            class="logo-dark"
          />
        </a>

        <nav class="navbar" data-navbar>
          <div class="navbar-top">
            <a href="#" class="logo">
              <img src="" width="74" height="24" alt="Adex home" />
            </a>

            <button
              class="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
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
                        ><a href="#"
                          >MYCES Biomedical Engineering Sdn Bhd</a
                        ></q-item-section
                      >
                    </q-item>
                    <q-item class="item_Hover">
                      <q-item-section
                        ><a href="#">MYCES AgroFarm Sdn Bhd</a></q-item-section
                      >
                    </q-item>
                    <q-item  class="item_Hover">
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
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>

    <main>
      <article>
        -

        <!-- Introduction Section -->
        <section
          class="section hero has-bg-image"
          aria-label="home"
          style="background-image: url('')"
        >
          <div class="container">
            <div class="hero-content">
              <h1 class="h1 hero-title">Myces Sdn Bhd</h1>

              <p class="hero-text">
                MyCES Manufacturing unveils EMARS, a patented Energy Monitoring,
                Analysis & Reporting System crafted over five years. It
                seamlessly blends local products with global energy monitoring
                standards, ensuring rapid after-sales service and ongoing
                customization. Our local engineers also offer Facilities
                Management System (FMS) for digitizing organizational reports
                and facilitating data-driven decisions.
              </p>

              <div class="btn-wrapper">
                <a href="#" class="btn btn-primary">Contact us</a>
              </div>
            </div>

            <div class="hero-slider" data-slider>
              <div class="slider-inner">
                <ul class="slider-container" data-slider-container>
                  <li class="slider-item">
                    <img
                      src="/img/myces_logo.png"
                      width="575"
                      height="550"
                      alt=""
                      class="img-cover"
                    />
                  </li>
                </ul>
              </div>

              <button
                class="slider-btn prev"
                aria-label="slide to previous"
                data-slider-prev
              >
                <ion-icon name="arrow-back"></ion-icon>
              </button>

              <button
                class="slider-btn next"
                aria-label="slide to next"
                data-slider-next
              >
                <ion-icon name="arrow-forward"></ion-icon>
              </button>
            </div>
          </div>
        </section>

        <!-- Service Section -->
        <section class="stats" aria-label="our stats">
          <div class="container">
            <ul
              class="stats-card has-bg-image"
              style="background-image: url('./assets/images/stats-bg.jpg')"
            >
              <li>
                <p class="card-text">
                  <span class="h1">8</span>

                  <spna class="span">Service</spna>
                </p>
              </li>

              <li>
                <p class="card-text">
                  <span class="h1">107</span>

                  <spna class="span">Collaborations</spna>
                </p>
              </li>

              <li>
                <p class="card-text">
                  <span class="h1">220</span>

                  <spna class="span">Active Clients</spna>
                </p>
              </li>

              <li>
                <p class="card-text">
                  <span class="h1">52</span>

                  <spna class="span">Awards</spna>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <!-- Project Section -->
        <section class="section project" aria-labelledby="project-label">
          <div class="container">
            <p class="section-subtitle" id="project-label">Service</p>

            <h2 class="h2 section-title">
              Check out some of our Service that might help you.
            </h2>

            <ul class="grid-list">
              <li>
                <div class="project-card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 560; --height: 350"
                  >
                    <img
                      src="/public/logo/FMS_2.png"
                      width="560"
                      height="350"
                      loading="lazy"
                      alt="Ligula tristique quis risus"
                      class="img-cover"
                    />
                  </figure>

                  <div class="card-content">
                    <h3 class="h3">
                      <a href="#" class="card-title"
                        >Facility Management System</a
                      >
                    </h3>

                    <p class="card-text">
                      FMS helps identify underutilized spaces, enabling better
                      space planning and resource allocation. FMS enhances
                      safety measures by facilitating compliance with
                      regulations and providing better visibility into
                      safety-related tasks.
                    </p>

                    <ul class="card-meta-list">
                      <li class="card-meta-list">
                        <a href="#" class="btn btn-primary">Contact us</a>
                      </li>

                      <li class="card-meta-item">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <time class="meta-text" datetime="2022-04-14"
                          >learn more</time
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div class="project-card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 560; --height: 350"
                  >
                    <img
                      src="/public/logo/Emars_1.png"
                      width="560"
                      height="350"
                      loading="lazy"
                      alt="Nullam id dolor elit id nibh"
                      class="img-cover"
                    />
                  </figure>

                  <div class="card-content">
                    <h3 class="h3">
                      <a href="#" class="card-title"
                        >Energy Monitoring And Reporting System</a
                      >
                    </h3>

                    <p class="card-text">
                      Since the foundation of MyCES SDN BHD in 2015, the company
                      has developed very fast, and has taken over a significant
                      part in the energy saving industry. The company’s goal is
                      to build long term relationships with our customers and
                      clients and provide exceptional customer services by
                      pursuing business through innovation and advanced.
                    </p>

                    <ul class="card-meta-list">
                      <li class="card-meta-list">
                        <a href="#" class="btn btn-primary">Contact us</a>
                      </li>

                      <li class="card-meta-item">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <time class="meta-text" datetime="2022-04-14"
                          >learn more</time
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div class="project-card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 560; --height: 350"
                  >
                    <img
                      src="/public/logo/AgroFarm_2.png"
                      width="560"
                      height="350"
                      loading="lazy"
                      alt="Ultricies fusce porta elit"
                      class="img-cover"
                    />
                  </figure>

                  <div class="card-content">
                    <h3 class="h3">
                      <a href="#" class="card-title">AgroFarm</a>
                    </h3>

                    <p class="card-text">
                      AgroFarm empowers farmers by simplifying transactions and
                      providing real-time market insights for fruits and
                      vegetables. Take control of your farm, make informed
                      decisions, and increase your profits with AgroFarm's
                      user-friendly system.
                    </p>

                    <ul class="card-meta-list">
                      <li class="card-meta-list">
                        <a href="#" class="btn btn-primary">Contact us</a>
                      </li>

                      <li class="card-meta-item">
                        <ion-icon
                          name="calendar-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <time class="meta-text" datetime="2022-04-14"
                          >learn more</time
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <!-- Project Section 2 -->
        <!-- our client -->
        <section class="section project" aria-labelledby="project-label">
          <div class="container">
            <p class="section-subtitle" id="project-label">Our Client</p>

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
        </section>
        <!-- CTA Section -->
        <section
          class="cta"
          aria-label="call to action"
          style="background-color: green"
        >
          <div class="container">
            <h2 class="h2 section-title">MyCES SDN BHD.</h2>

            <!-- <a href="#" class="btn btn-primary">Try it For Free</a> -->
          </div>
        </section>
      </article>
    </main>

    <!-- Footer Section -->
    <footer class="footer" style="background-color: green">
      <div class="container grid-list">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img src="" width="74" height="24" alt="Adex home" />
          </a>

          <p class="footer-text">
            &copy; 2015 MyCES. <br />
            All rights reserved.
          </p>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-dribbble"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <ul class="footer-list">
          <li>
            <p class="h4 footer-list-title">Contact Us</p>
          </li>

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
            <a href="tel:001234567890" class="footer-link">603-8725 5811</a>
          </li>
        </ul>

        <ul class="footer-list">
          <li>
            <p class="h4 footer-list-title">Learn More</p>
          </li>

          <li>
            <a href="#" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">Our Story</a>
          </li>

          <li>
            <a href="#" class="footer-link">Projects</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms of Use</a>
          </li>

          <li>
            <a href="#" class="footer-link">Privacy Policy</a>
          </li>
        </ul>

        <div class="footer-list">
          <p class="h4 footer-list-title">Reach out to us</p>

          <p class="footer-text">
            Enter email to receive the most recent updates.
          </p>

          <form action="" class="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              required
              class="input-field"
            />

            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
"use strict";

export default {
  data() {
    return {
      showServiceMenu: false,
      showSubMenu: false,
    };
  },
};

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
  const sldierContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  };

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}

/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  };

  accordionBtn.addEventListener("click", expandAccordion);
};

for (let i = 0, len = accordions.length; i < len; i++) {
  initAccordion(accordions[i]);
}
</script>

<style>
/*-----------------------------------*\
  #main.css
\*-----------------------------------*/

/**
 * copyright 2022 codewithsadee
 */

/*-----------------------------------*\
  #CUSTOM PROPERTY
\*-----------------------------------*/

:root {
  /**
   * colors
   */

  --violet-blue-crayola: hsla(234, 50%, 64%, 1);
  --dark-cornflower-blue_a7: hsla(214, 88%, 27%, 0.07);
  --white: hsla(0, 0%, 100%, 1);
  --white_a3: hsla(0, 0%, 100%, 0.03);
  --white_a8: hsla(0, 0%, 100%, 0.08);
  --white_a12: hsla(0, 0%, 100%, 0.12);
  --white_a70: hsla(0, 0%, 100%, 0.7);
  --cultured: hsla(220, 20%, 97%, 1);
  --lavender-web: hsla(233, 52%, 94%, 1);
  --cadet-blue-crayola: hsla(220, 12%, 70%, 1);
  --cadet-blue-crayola_a20: hsla(222, 23%, 71%, 0.2);
  --charcoal: hsla(218, 22%, 26%, 1);
  --raisin-black: hsla(216, 14%, 14%, 1);
  --light-gray: hsla(0, 0%, 79%, 1);
  --blue-crayola: hsla(219, 72%, 56%, 1);
  --black-coral: hsla(220, 12%, 43%, 1);

  /**
   * typography
   */

  --ff-manrope: "Manrope", sans-serif;

  --fs-1: calc(2.7rem + 1.38vw);
  --fs-2: calc(2.6rem + 0.66vw);
  --fs-3: 2.2rem;
  --fs-4: 1.9rem;
  --fs-5: 1.8rem;
  --fs-6: 1.7rem;
  --fs-7: 1.5rem;
  --fs-8: 1.4rem;

  --fw-700: 700;

  /**
   * spacing
   */

  --section-padding: 90px;

  /**
   * box shadow
   */

  --shadow-1: 0 0 20px hsla(216, 14%, 14%, 0.05);
  --shadow-2: 0 0 0 0.05rem hsla(214, 88%, 27%, 0.08),
    0 0 1.25rem hsla(216, 14%, 14%, 0.06);
  --shadow-3: 0 0 1.25rem hsla(216, 14%, 14%, 0.04);

  /**
   * border radius
   */

  --radius-circle: 50%;
  --radius-pill: 100px;
  --radius-10: 10px;
  --radius-8: 8px;
  --radius-6: 6px;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --transition-3: 0.3s ease-in-out;
}

/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a,
img,
span,
input,
button,
ion-icon {
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  height: auto;
}

input,
button {
  background: none;
  border: none;
  font: inherit;
}

input {
  width: 100%;
}

button {
  cursor: pointer;
}

ion-icon {
  pointer-events: none;
}

address {
  font-style: normal;
}

html {
  font-family: var(--ff-manrope);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  color: var(--black-coral);
  font-size: 1.6rem;
  line-height: 1.7;
}

body.nav-active {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: hsl(0, 0%, 98%);
}

::-webkit-scrollbar-thumb {
  background-color: hsl(0, 0%, 80%);
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsl(0, 0%, 70%);
}

/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.container {
  padding-inline: 16px;
}

.social-list {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-link {
  font-size: 2rem;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus-visible) {
  transform: translateY(-3px);
}

.section {
  padding-block: var(--section-padding);
}

.has-bg-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.h1,
.h2,
.h3,
.h4,
.h5 {
  color: var(--charcoal);
  font-weight: var(--fw-700);
  line-height: 1.3;
}

.h1 {
  font-size: var(--fs-1);
}

.h2 {
  font-size: var(--fs-2);
}

.h3 {
  font-size: var(--fs-3);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-6);
}

.btn {
  color: var(--white);
  font-size: var(--fs-6);
  font-weight: var(--fw-700);
  border: 2px solid var(--white);
  max-width: max-content;
  padding: 12px 28px;
  border-radius: var(--radius-pill);
  transition: var(--transition-1);
  will-change: transform;
}

.btn:is(:hover, :focus-visible) {
  transform: translateY(-4px);
}

.btn-primary,
.btn-outline:is(:hover, :focus-visible) {
  background-color: green;
  border-radius: 40px;
  color: var(black);
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--light-gray);
  overflow: hidden;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-subtitle {
  font-size: 40px;
  text-transform: uppercase;
  color: green;
  font-weight: var(--fw-700);
  margin-block-end: 16px;
}

.grid-list {
  display: grid;
  gap: 25px;
}

.w-100 {
  width: 100%;
}

/*-----------------------------------*\
  #HEADER
\*-----------------------------------*/

.header .btn {
  display: none;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 20px;
  box-shadow: var(--shadow-1);
  z-index: 4;
}

.header.active {
  background-color: var(--white);
  position: fixed;
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header.active .logo-light,
.header .logo-dark {
  display: none;
}

.header .logo-light,
.header.active .logo-dark {
  display: block;
}

.nav-open-btn {
  font-size: 3.5rem;
  color: var(--white);
}

.header.active .nav-open-btn {
  color: var(--charcoal);
}

.navbar {
  position: fixed;
  top: 0;
  left: -300px;
  background-color: var(--raisin-black);
  color: var(black);
  max-width: 300px;
  width: 100%;
  height: 100vh;
  padding: 30px;
  padding-block-end: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 2;
  visibility: hidden;
  transition: var(--transition-3);
}

.navbar.active {
  visibility: visible;
  transform: translateX(300px);
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-close-btn {
  background-color: var(--white_a8);
  color: var(--white);
  font-size: 2rem;
  padding: 6px;
  border-radius: var(--radius-circle);
  transition: var(--transition-1);
}

.nav-close-btn ion-icon {
  --ionicon-stroke-width: 50px;
}

.nav-close-btn:is(:hover, :focus-visible) {
  background-color: var(--white_a12);
}

.navbar-list {
  margin-block-end: auto;
  color: black; /* Added to make the font color black */
}

.navbar-link {
  font-weight: var(--fw-700);
  padding-block: 6px;
}

.contact-link {
  transition: var(--transition-1);
}

.contact-link:is(:hover, :focus-visible) {
  color: var(--violet-blue-crayola);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--raisin-black);
  pointer-events: none;
  opacity: 0;
  transition: var(--transition-1);
}

.overlay.active {
  pointer-events: all;
  opacity: 0.8;
}

/*-----------------------------------*\
  #HERO
\*-----------------------------------*/

.hero {
  padding-block-start: calc(var(--section-padding) + 70px);
  text-align: center;
}

.hero .container {
  display: grid;
  gap: 70px;
}

.hero-title {
  color: var(black);
}

.hero-text {
  font-size: var(--fs-5);
  color: var(black);
  margin-block: 24px 36px;
}

.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.hero-slider,
.hero-card {
  position: relative;
}

.hero-card .play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  color: var(--charcoal);
  font-size: 2rem;
  padding: 25px;
  border-radius: var(--radius-circle);
  transition: var(--transition-1);
  animation: pulse 2s ease infinite;
}

.hero-card .play-btn:is(:hover, :focus-visible) {
  color: var(--violet-blue-crayola);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--white_a70);
  }
  75% {
    box-shadow: 0 0 0 20px transparent;
  }
}

.hero .slider-inner {
  border-radius: var(--radius-10);
  overflow: hidden;
}

.hero .slider-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  transition: var(--transition-2);
}

.hero .slider-item {
  min-width: 100%;
  width: 100%;
  border-radius: var(--radius-10);
  overflow: hidden;
}

.hero .slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--white_a70);
  color: var(--charcoal);
  font-size: 2rem;
  padding: 12px;
  border-radius: var(--radius-circle);
  transition: var(--transition-1);
}

.hero .slider-btn:is(:hover, :focus-visible) {
  background-color: var(--white);
}

.hero .slider-btn.prev {
  left: 20px;
}

.hero .slider-btn.next {
  right: 20px;
}

/*-----------------------------------*\
  #SERVICE
\*-----------------------------------*/

.service {
  text-align: center;
}

.service .section-title {
  margin-block-end: 50px;
}

.service-card {
  padding: 40px;
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-6);
}

.service-card .card-icon {
  width: 60px;
  height: 60px;
  background-color: var(--violet-blue-crayola);
  display: grid;
  place-items: center;
  color: var(--white);
  font-size: 2.5rem;
  border-radius: var(--radius-circle);
  margin-inline: auto;
}

.service-card .card-icon ion-icon {
  --ionicon-stroke-width: 50px;
}

.service-card .card-title {
  margin-block: 16px 10px;
}

.service-card .btn-text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-block-start: 10px;
  color: var(--violet-blue-crayola);
  font-weight: var(--fw-700);
  transition: var(--transition-1);
}

.service-card .btn-text:is(:hover, :focus-visible) {
  opacity: 0.9;
}

/*-----------------------------------*\
  #ABOUT
\*-----------------------------------*/

.about .container {
  display: grid;
  gap: 50px;
}

.about .section-title {
  margin-block-end: 35px;
}

.accordion-card .card-title {
  padding-block-end: 20px;
}

.accordion-btn {
  display: flex;
  align-items: center;
  gap: 10px;
}

.accordion-btn ion-icon {
  font-size: 1.5rem;
  color: var(--blue-crayola);
  transition: var(--transition-1);
}

.accordion-card.expanded .accordion-btn ion-icon {
  transform: rotate(0.5turn);
}

.accordion-btn .span {
  transition: var(--transition-1);
}

.accordion-btn:is(:hover, :focus-visible) .span,
.accordion-card.expanded .accordion-btn .span {
  color: var(--violet-blue-crayola);
}

.accordion-content {
  padding-inline-start: 24px;
  max-height: 0;
  overflow: hidden;
}

.accordion-card.expanded .accordion-content {
  max-height: max-content;
  padding-block-end: 20px;
}

/*-----------------------------------*\
  #FEATURES
\*-----------------------------------*/

.feature .container {
  display: grid;
  gap: 50px;
}

.feature .section-text {
  margin-block: 25px 30px;
}

.feature-list {
  display: grid;
  gap: 15px;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-card .card-icon {
  background-color: var(--lavender-web);
  font-size: 1.4rem;
  padding: 4px;
  border-radius: var(--radius-circle);
}

.feature-card .card-icon ion-icon {
  --ionicon-stroke-width: 40px;
}

/*-----------------------------------*\
  #STATS
\*-----------------------------------*/

.stats {
  background-image: linear-gradient(
    to bottom,
    var(--white) 50%,
    var(--cultured) 50%
  );
}

.stats-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 36px 24px;
  padding: 45px 30px;
  border-radius: var(--radius-8);
}

.stats-card .card-text > * {
  color: var(black);
}

/*-----------------------------------*\
  #PROJECT
\*-----------------------------------*/

.project {
  background-color: var(--cultured);
}

.project :is(.section-subtitle, .section-title) {
  text-align: center;
}

.project .section-title {
  margin-block-end: 50px;
}

.project-card {
  background-color: var(--white);
  border-radius: var(--radius-8);
  overflow: hidden;
  box-shadow: var(--shadow-2);
  height: 100%;
}

.project-card .card-content {
  padding: 30px;
}

.project-card .card-title {
  transition: var(--transition-1);
}

.project-card .card-title:is(:hover, :focus-visible) {
  color: var(--violet-blue-crayola);
}

.project-card .card-text {
  margin-block: 16px 20px;
}

.project-card .card-meta-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-card .card-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--cadet-blue-crayola);
  font-size: var(--fs-8);
}

/*-----------------------------------*\
  #CTA
\*-----------------------------------*/

.cta {
  background-color: var(--charcoal);
}

.cta .container {
  padding-block: 100px 60px;
  border-block-end: 1px solid var(--cadet-blue-crayola_a20);
}

.cta .section-title {
  color: var(--white);
  margin-block-end: 30px;
}

.cta .btn {
  background-color: var(--violet-blue-crayola);
  color: var(--white);
  border: none;
}

/*-----------------------------------*\
  #FOOTER
\*-----------------------------------*/

.footer {
  background-color: var(--charcoal);
  padding-block: 60px 100px;
  color: var(--light-gray);
}

.footer-brand .footer-text {
  margin-block: 20px;
}

.footer .social-list {
  color: var(--white);
}

.footer-list-title {
  color: var(--white);
  margin-block-end: 16px;
}

.footer-link {
  padding-block: 4px;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus-visible) {
  color: var(--violet-blue-crayola);
}

.input-wrapper {
  position: relative;
  margin-block-start: 25px;
}

.input-field {
  background-color: var(--white_a3);
  color: var(--light-gray);
  font-size: var(--fs-7);
  padding: 12px 16px;
  border: 1px solid var(--dark-cornflower-blue_a7);
  border-radius: var(--radius-6);
  box-shadow: var(--shadow-3);
  outline: none;
}

.input-field::placeholder {
  color: inherit;
}

.submit-btn {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 0 var(--radius-6) var(--radius-6) 0;
  background-color: var(--violet-blue-crayola);
  color: var(--white);
  padding-inline: 24px;
  font-weight: var(--fw-700);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

/**
 * responsive for large than 575px screen
 */

@media (min-width: 575px) {
  /**
   * REUSED STYLE
   */

  .container {
    max-width: 540px;
    width: 100%;
    margin-inline: auto;
  }

  /**
   * PROJECTS
   */

  .project-card .card-content {
    padding: 40px;
  }
}

/**
 * responsive for large than 768px screen
 */

@media (min-width: 768px) {
  /**
   * CUSTOM PROPERTY
   */

  :root {
    /**
     * spacing
     */

    --section-padding: 120px;
  }

  /**
   * REUSED STYLE
   */

  .container {
    max-width: 720px;
  }

  .grid-list {
    grid-template-columns: 1fr 1fr;
  }

  /**
   * HEADER
   */

  .header .btn {
    display: block;
    margin-inline-start: auto;
    padding: 8px 20px;
  }

  .header.active .btn {
    background-color: var(--violet-blue-crayola);
    border-color: var(--violet-blue-crayola);
    color: var(--white);
  }

  /**
   * HERO
   */

  .hero-content {
    max-width: 85%;
    margin-inline: auto;
  }

  .hero-text {
    --fs-5: 2rem;
  }

  /**
   * SERVICE
   */

  .service .section-title {
    max-width: 30ch;
    margin-inline: auto;
  }

  /**
   * ABOUT
   */

  .about .container {
    grid-template-columns: 1fr 0.7fr;
    align-items: center;
  }

  /**
   * FEATURE
   */

  .feature .container {
    grid-template-columns: 0.7fr 1fr;
    align-items: center;
  }

  .feature-banner {
    order: 1;
  }
}

/**
 * responsive for large than 992px screen
 */

@media (min-width: 992px) {
  /**
   * REUSED STYLE
   */

  .container {
    max-width: 960px;
  }

  /**
   * HEADER
   */

  .nav-open-btn,
  .navbar > *:not(.navbar-list),
  .overlay {
    display: none;
  }

  .navbar,
  .navbar.active {
    all: unset;
    display: block;
    margin-inline: auto 24px;
    font: black;
  }

  .navbar-list {
    display: flex;
    gap: 30px;
  }

  .navbar-link {
    color: (black);
    transition: var(--transition-1);
  }

  .navbar-link:is(:hover, :focus-visible) {
    opacity: 0.7;
  }

  .header.active .navbar-link {
    color: var(--charcoal);
  }

  .header.active .navbar-link:is(:hover, :focus-visible) {
    opacity: 1;
    color: var(--violet-blue-crayola);
  }

  .header .btn {
    margin-inline-start: 0;
  }

  /**
   * HERO
   */

  .hero {
    padding-block-start: calc(var(--section-padding) + 50px);
    text-align: left;
  }

  .hero .container {
    grid-template-columns: 1fr 0.8fr;
    align-items: center;
  }

  .hero-content {
    max-width: unset;
    margin-inline: 0;
  }

  .btn-wrapper {
    justify-content: flex-start;
  }

  /**
   * STATS
   */

  .stats-card {
    grid-template-columns: repeat(4, 1fr);
  }

  /**
   * PROJECT
   */

  .project .section-title {
    max-width: 32ch;
    margin-inline: auto;
  }

  /**
   * CTA
   */

  .cta .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cta .btn {
    min-width: max-content;
  }

  .cta .section-title {
    max-width: 30ch;
    margin-block-end: 0;
  }

  /**
   * FOOTER
   */

  .footer .grid-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

/**
 * responsive for large than 1200px screen
 */

@media (min-width: 1200px) {
  /**
   * REUSED STYLE
   */

  .container {
    max-width: 1140px;
  }

  /**
   * HERO
   */

  .hero-text {
    padding-inline-end: 100px;
  }

  /**
   * SERVICE
   */

  .service .grid-list {
    grid-template-columns: repeat(4, 1fr);
  }

  /**
   * STATS
   */

  .stats .container {
    max-width: 70%;
  }

  .stats-card {
    padding: 60px;
  }

  /**
   * PROJECT
   */

  .project .grid-list {
    grid-template-columns: repeat(3, 1fr);
  }

  /**
   * FOOTER
   */

  address.footer-text {
    padding-inline-end: 100px;
    margin-block-end: 16px;
  }
}

/**
 * responsive for large than 1400px screen
 */

@media (min-width: 1400px) {
  /**
   * REUSED STYLE
   */

  .container {
    max-width: 1320px;
  }

  /**
   * FEATURE
   */

  .feature-list {
    grid-template-columns: 1fr 1fr;
  }
}

.item_Hover {
  transition: all 0.4s linear;
  border-bottom: 1px solid black;
}

.item_Hover:hover {
  background-color: green;
}

</style>
