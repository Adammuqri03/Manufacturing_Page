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

      <q-tabs align="right" class="row q-gutter-xl text-black font30 text-bold">
        <q-route-tab to="/page1" label="Home" />
        <q-route-tab to="/page2" label="About" />
        <q-route-tab to="/page3" label="Service" />
        <q-route-tab to="/page4" label="Subsidiaries" />
        <q-route-tab to="/page5" label="Info" />
        <q-route-tab to="/page6" label="Contact" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- Parallax Image -->
      <q-parallax
        ref="parallax"
        src="/public/img/bg/bg.png"
        :height="1000"
        :speed="5"
      >
        <img
          ref="parallaxImage"
          src="img/bg/bg.png"
          style="width: 100%; height: 100%"
        />
      </q-parallax>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-green-6 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="height: 200%; width: 100px">
            <img src="public/img/myces_logo.png" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
q-route-tab {
  font-size: 50px;
  /* background-color: #dadada; */
}
</style>
