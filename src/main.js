import { createApp } from 'vue'

import App from './App.vue'

// Librerías externa
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

createApp(App)
.component("fa-icon", FontAwesomeIcon)
.mount('#app')
