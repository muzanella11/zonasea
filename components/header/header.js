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
          url: 'javascript:;'
        },
        {
          title: 'cara-kerja',
          label: 'Cara Kerja',
          url: 'javascript:;'
        },
        {
          title: 'tentang-kami',
          label: 'Tentang Kami',
          url: 'javascript:;'
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
    }
  }
}
