import ModalSignin from '~/components/modal/modal-signin/template-modal-signin.vue'
import ModalSignup from '~/components/modal/modal-signup/template-modal-signup.vue'

export default {
  props: {
    isToggleable: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: ''
    }
  },

  components: {
    ModalSignin,
    ModalSignup
  },

  data () {
    return {
      innerTitle: 'Brand',
      menus: [
        {
          title: 'benefit',
          label: 'Benefit',
          url: 'benefit'
        },
        {
          title: 'cara-kerja',
          label: 'Cara Kerja',
          url: 'caraKerja'
        },
        {
          title: 'tentang-kami',
          label: 'Tentang Kami',
          url: 'about'
        }
      ]
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      if (this.title) {
        this.innerTitle = this.title
      }
    },

    scrollTo (sectionName) {
      // get offset element
      const elName = document.getElementById(sectionName)
      const pos = elName.offsetTop
      // animated top scrolling
      window.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
