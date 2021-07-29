import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "reflect-metadata";
import "./registerServiceWorker";
import router from "./router";
import { createConnection } from "typeorm";

import { Photo } from "./entity/Photo";
import { User } from "./entity/User";

Vue.config.productionTip = false;

(async function () {
  await createConnection({
    type: "sqljs",
    synchronize: true,
    autoSave: true,
    location: "gallery",
    // useLocalForage: true,
    logging: true,
    entities: [Photo, User],
    migrations: [],
    subscribers: []
  });

  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
})();
