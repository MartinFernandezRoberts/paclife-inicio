import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import Inicio from './Inicio/Inicio'
import './assets/styles.css'

const i18n = createI18n({
    // something vue-i18n options here ...
  })

createApp(Inicio).use(i18n).mount('#hub')