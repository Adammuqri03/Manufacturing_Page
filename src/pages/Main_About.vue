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

    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="/img/bg/bg_lampu.jpg" :speed="0.5" :height="300">
          <h1 class="text-bold text-grey-8"></h1>
        </q-parallax>
      </div>
    </div>

    <div id="container" class="page-wrap">
      <div
        class="container content-wrapper text-green-8"
        style="font-size: 20px"
      >
        <!-- About -->
        <div class="row">
          <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">
              <article
                id="post-124"
                class="post-124 page type-page status-publish entry"
              >
                <header class="entry-header">
                  <h1 class="title-post entry-title text-black">About</h1>
                  <div class="entry-content">
                    <p></p>
                    <p style="text-align: justify">
                      The concern of energy consumption has been a rising
                      curiosity across all industry sectors not only because of
                      its direct impact on production costs but also because of
                      its significant on environment sustainability.
                    </p>
                    <p>
                      An advance in energy efficiency within your organization
                      can potentially bring significant business benefits. With
                      this mind, MyCES Sdn Bhd has developed Energy Audit
                      Services, instead of equipment rental & Awareness Training
                      to help you find the best information for improvement
                      opportunities.
                    </p>
                    <p>
                      <img
                        class="aligncenter wp-image-550"
                        src="/img/bg/about_bg.jpg"
                        width="461"
                        height="288"
                      />
                    </p>
                    <p>
                      Here, we provide smart home services which can help you to
                      control and monitor remotely by smart phone or tablet in
                      term of lighting, heating and electronic devices. Our team
                      also can help you to design and renovate your home as you
                      dream.
                    </p>
                    <p>
                      As energy consultant, MyCES Sdn Bhd also can guide in term
                      of energy consumption especially for industry sectors such
                      as factory, hospital and etc. Here, we also can help you
                      to minimize energy uses and reduce operation expenses in
                      future.
                    </p>
                  </div>
                </header>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- Service Section -->
    <section class="stats" aria-label="our stats">
      <div class="container">
        <div class="flex flex-center text-bold font20">
          <h1>SECTOR</h1>
        </div>
        <ul class="stats-card has-bg-image">
          <li>
            <p class="card-text">
              <span class="h1">16</span>

              <span class="span">Goverment Building</span>
            </p>
          </li>

          <li>
            <p class="card-text">
              <span class="h1">46</span>

              <span class="span">Healthcare</span>
            </p>
          </li>

          <li>
            <p class="card-text">
              <span class="h1">31</span>

              <span class="span">Administrative</span>
            </p>
          </li>

          <li>
            <p class="card-text">
              <span class="h1">52</span>

              <span class="span">Educational</span>
            </p>
          </li>

          <li>
            <p class="card-text">
              <span class="h1">52</span>

              <span class="span">Industrial</span>
            </p>
          </li>

          <li>
            <p class="card-text">
              <span class="h1">1</span>

              <span class="span">Oil & Gas</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>

  <!-- CTA Section -->
  <section
    class="cta"
    aria-label="call to action"
    style="background-color: white"
  >
    <div class="container">
      <h2 class="h2 section-title">MyCES SDN BHD.</h2>

      <!-- <a href="#" class="btn btn-primary">Try it For Free</a> -->
    </div>
  </section>
  <!-- Footer Section -->
  <footer class="footer" style="background-color: white">
    <div class="container grid-list">
      <div class="footer-brand">
        <a href="#" class="logo">
          <q-img
            src="/logo/myces_logo.png"
            width="60px"
            height="60px"
            alt="MyCES Home"
          />
        </a>

        <p class="footer-text text-black">
          &copy; 2015 MyCES. <br />
          All rights reserved.
        </p>

        <!-- <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <q-icon name="logo-facebook"></q-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <q-icon name="logo-twitter"></q-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <q-icon name="logo-dribbble"></q-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <q-icon name="logo-instagram"></q-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <q-icon name="logo-youtube"></q-icon>
              </a>
            </li>
          </ul> -->
      </div>

      <ul class="footer-list text-black">
        <li>
          <address class="footer-text">
            HQ Address RK 27-B Jalan Villa 3 Taman Anggerik Villa 43500 Semenyih
            Selangor Darul Ehsan
          </address>
        </li>

        <li>
          <a href="mailto:info@email.com" class="footer-link"
            >Info@mycesgroup.com</a
          >
        </li>

        <li>
          <br />
          <strong>Contact Number</strong>
          <a href="tel:001234567890" class="footer-link">603-8725 5811</a>
          <br />
          <a href="tel:001234567890" class="footer-link">012 775-8732</a>
        </li>
      </ul>

      <!-- <ul class="footer-list text-black">
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
      </ul> -->

      <div class="footer-list textwidget align-center">
        <img src="/img/bg/tenaga_bg.png" />
        <p></p>
        <img src="/img/bg/KKM_bg.jpg" />
        <p></p>
        <!-- <img
          src="/img/bg/hijau_bg.jpg"
          height="100"
          width="100"
          align="center"
        /> -->
        <p></p>
        <img src="/img/bg/cidb_bg.png" />

        <!-- <p class="footer-text">
          Enter email to receive the most recent updates.
        </p> -->

        <!-- <form action="" class="input-wrapper">
          <input
            type="email"
            name="email_address"
            placeholder="Email Address"
            required
            class="input-field"
          />

          <button type="submit" class="submit-btn">Submit</button>
        </form> -->
      </div>
    </div>
  </footer>
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
</script>
