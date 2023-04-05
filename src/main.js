import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import QrReader from 'vue3-qr-reader';

const app = createApp(App);
app.use(QrReader);
app.mount('#app')