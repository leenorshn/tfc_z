<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      flat
      dark
    >
      
    </v-app-bar>
    <v-navigation-drawer app color="primary">
      <v-avatar
       color="white"
        class="d-block text-center mx-auto mb-9"
        width="64"
        height="64"
      ></v-avatar>
      <v-list >
        <v-list-item v-for="(route,index) in routers" :key="index" router :to="route.to">
          <v-list-item-avatar>
              <v-icon color="white">{{route.icon}}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="ml-2 white--text">{{route.label}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import {mapActions } from "vuex";
export default {
  name: 'App',

  components: {
   
  },
  methods:{
    ...mapActions(["getAccidents",'getAllDocs'])
  },
  
  mounted(){
    this.getAllDocs();
    this.getAccidents();
  }
  ,

  data: () => ({
    routers:[
      {
          label:"Dashboard",
          icon:"timeline",
          to:"/"
        },
        {
          label:"Gestion docs",
          icon:"perm_media",
          to:"/about"
        },
        
    ]
  }),
};
</script>
