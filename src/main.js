import { createApp } from 'vue'
import Inicio from './Inicio/Inicio'
import './assets/styles.css'
import i18n from './i18n'


createApp(Inicio).use(i18n).mount('#hub')