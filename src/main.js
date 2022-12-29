import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './vendor.min'
import './main.min'
import store from './store'

import './assets/main.min.css'

// Components
import HeadCartLink from "./components/HeadCartLink.vue";
import ProductsList from "./components/ProductsList.vue";
import CartList from "./components/CartList.vue";
import BackButton from "./components/BackButton.vue";
import CallButton from "./components/CallButton.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Loader from './components/Loader.vue';

const app = createApp(App)

app.use(store)
app.use(router)

app.component('pulse-loader', PulseLoader)
app.component('loader', Loader)
app.component('HeadCartLink', HeadCartLink)
app.component('ProductsList', ProductsList)
app.component('CartList', CartList)
app.component('BackButton', BackButton)
app.component('CallButton', CallButton)

app.mount('#app')
