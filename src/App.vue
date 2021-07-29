<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title> Gallery </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text @click="fill">Random Data</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="item in list" :key="item.id" lg="3">
            <v-card>
              <v-img :src="item.url" :aspect-ratio="4 / 3"></v-img>

              <v-card-title>
                {{ item.name }}
              </v-card-title>

              <v-card-subtitle>
                <v-icon small>mdi-account</v-icon>
                {{ item.user.name }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchPhotoList } from "./api/photos";
import { loadRandomData } from "./api/random";
import { fetchUserList } from "./api/user";
import { Photo } from "./entity/Photo";
import { User } from "./entity/User";

export default Vue.extend({
  data() {
    return {
      list: [] as Photo[],
      users: [] as User[]
    };
  },
  async mounted() {
    this.fetch();
  },

  methods: {
    async fetch() {
      this.users = await fetchUserList();
      this.list = await fetchPhotoList();
    },

    async fill() {
      await loadRandomData();
      await this.fetch();
    }
  }
});
</script>
