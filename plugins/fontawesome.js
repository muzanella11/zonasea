import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faFacebookSquare)
library.add(faInstagram)
library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
