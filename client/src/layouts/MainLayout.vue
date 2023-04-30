<template>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar class="bg-white text-black q-ma-none">
          <q-img src="~assets/BASELogo.jpg" width="80px" style="margin-left: 64px;"/>
          <q-toolbar-title>
            Bronx Academy for Software Engineering
          </q-toolbar-title>
        </q-toolbar>
    </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  export default {
    name: 'MainLayout'
  }
  </script>
  