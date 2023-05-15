<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar class="bg-white text-black q-ma-none">
          <q-img src="~assets/BASELogo.jpg" width="80px" style="margin-left: 64px;"/>
          <q-toolbar-title>
            <p class="q-ma-none">Bronx Academy for Software Engineering 10X264</p>
            <p class="q-ma-none text-caption">A public high school in the Bronx</p>
          </q-toolbar-title>
          <q-space />
            <q-btn color="primary" @click="about=true">About</q-btn>
        </q-toolbar>
    </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
    <q-dialog
      v-model="about"
    >
      <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">About the NYC Student Poll</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>This web application was developed in partnership between <a href="https://www.bronxsoftware.org" _target="blank">Bronx Academy for Software Engineering</a> and <a href="https://www.candogram.com" _target="blank">Candogram Inc.</a>, Job Market Education for High School Students</p>
          <p>For more information please contact:</p>
          <div class="row">
            <div class="col-6">
              <p class="q-ma-none text-bold">Jon Mannion</p>
              <p class="q-ma-none">WBL Coordinator</p>
              <p class="q-ma-none">email: jon@bronxsoftware.org</p>
              <p class="q-ma-none"><q-icon name="fab fa-linkedin" size="sm" color="blue" class="q-mr-sm"/><a href="https://www.linkedin.com/in/wblbase/">https://www.linkedin.com/in/wblbase/</a></p>       
            </div>
            <div class="col-6">
              <p class="q-ma-none text-bold">Henning Seip</p>
              <p class="q-ma-none">Founder/President</p>
              <p class="q-ma-none">email: henning.seip@candogram.com</p>
              <p class="q-ma-none"><q-icon name="fab fa-linkedin" size="sm" color="blue" class="q-mr-sm"/><a href="https://www.linkedin.com/in/henningseip/">https://www.linkedin.com/in/henningseip/</a></p>       

            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="primary" label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        about: false
      }
    },
    methods: {

    }
  }
  </script>
  