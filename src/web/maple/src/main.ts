import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Linker from '@linker-design/linker';
import LinkerIcon from '@linker-design/linker/es/icon';

import App from './App.vue'
import router from './router'

import './assets/main.css';
import '@linker-design/linker/dist/linker.less';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Linker);
app.use(LinkerIcon);

app.mount('#app')
