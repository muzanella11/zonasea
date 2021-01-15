export default {
  data () {
    return {
      isShownMobile: false,
      innerWidth: 0
    }
  },

  mounted () {
    this.initAdaptive()
  },

  methods: {
    initAdaptive () {
      this.innerWidth = window.innerWidth

      this.setIsShownMobile()

      window.onresize = () => {
        this.innerWidth = window.innerWidth

        this.setIsShownMobile()
      }
    },

    setIsShownMobile () {
      this.isShownMobile = this.innerWidth <= (1200 - 1)
    }
  }
}
