<template>
  <div class="l-homepage">
    <!-- Begin Hero -->
    <section class="homepage__section section--hero">
      <div class="hero__wrapper">
        <div v-parallax="0.2" class="container">
          <div class="row">
            <div class="col-md-6 d-flex flex-column justify-content-center text-white hero__left">
              <h3>
                Zonasea - Platform Perkapalan Terpercaya di Indonesia
              </h3>

              <p>
                Menghubungkan langsung pemilik kapal tug boat, tongkang, tanker, bulk carrier dengan pemilik muatan sawit, batu bara, nikel, solar dan lainnya.
              </p>

              <button class="btn c-cta cta--white mt-5">
                Coba 7 hari gratis
              </button>
            </div>

            <div class="col-md-6 text-center d-none d-lg-flex align-items-center justify-content-center">
              <img src="https://zonasea.com/images/dashboard_pic.png" alt="hero-image" class="hero-image">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Begin Benefit -->
    <section id="benefit" class="homepage__section section--benefit">
      <div class="container">
        <h3 class="section__title">
          Benefit Zonasea
        </h3>

        <div class="row">
          <div class="col-md-4 mb-5 text-center">
            <img src="https://zonasea.com/icons/icon-noperantara.png" alt="icon tanpa perantara" class="section__image image--sm">
            <h3 class="section__title title--content">
              Tanpa Perantara
            </h3>
            <p class="section__desc">
              Kami bekerja sama langsung dengan sejumlah pabrik terbesar di Indonesia
            </p>
          </div>

          <div class="col-md-4 mb-5 text-center">
            <img src="https://zonasea.com/icons/icon_planing2.png" alt="icon tanpa perantara" class="section__image image--sm">
            <h3 class="section__title title--content">
              Planning Secara Otomatis
            </h3>
            <p class="section__desc">
              Algoritma kami dapat menghitung rute terbaik untuk kapal anda secara otomatis dalam hitungan DETIK.
            </p>
          </div>

          <div class="col-md-4 mb-5 text-center">
            <img src="https://zonasea.com/icons/icon-akurat2.png" alt="icon tanpa perantara" class="section__image image--sm">
            <h3 class="section__title title--content">
              Akurat dan Presisi
            </h3>
            <p class="section__desc">
              Memberikan informasi muatan terbaru seesuai dengan jenis & kapasitas kapal
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Benefit -->

    <!-- Begin Cara Kerja -->
    <section id="caraKerja" class="homepage__section section--cara-kerja">
      <div class="container">
        <div class="d-flex justify-content-center pt-5">
          <iframe frameborder="0" src="https://www.youtube.com/embed/kVCdAs5ergE" class="video-wrapper" />
        </div>

        <h3 class="section__title">
          Bagaimana Zonasea Bekerja
        </h3>
      </div>

      <div class="cara-kerja__content">
        <div class="row d-none d-lg-flex">
          <div class="col-lg-6 pr-0">
            <ul class="content__list">
              <li
                v-for="(itemHiw, indexHiw) in entries.howItWorks"
                :key="indexHiw"
              >
                <button
                  class="list__cta d-flex"
                  :class="[itemHiw.value === activeHiw ? 'active' : '']"
                  @click="setActiveHiw(itemHiw.value)"
                >
                  <span class="number mr-4">
                    {{ itemHiw.value }}
                  </span>
                  <p class="text">
                    {{ itemHiw.label }}
                  </p>
                </button>
              </li>
            </ul>
          </div>

          <div class="col-lg-6">
            <div class="row content__desc">
              <div class="col-lg-12">
                <img
                  :src="activeHiwImage"
                  class="desc__image"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row d-flex d-lg-none">
          <div class="col-12">
            <div id="accordionHiw" class="content__accordions">
              <div
                v-for="(itemAccordionHiw, indexAccordionHiw) in entries.howItWorks"
                :key="indexAccordionHiw"
                class="card"
              >
                <div :id="`headingHiw${itemAccordionHiw.value}`" class="card-header" @click="setActiveHiw(itemAccordionHiw.value)">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                    >
                      {{ itemAccordionHiw.label }}
                    </button>
                  </h5>
                </div>

                <div :id="`hiwStep${itemAccordionHiw.value}`" class="collapse" :class="[itemAccordionHiw.value === activeHiw ? 'show' : '']" :aria-labelledby="`headingHiw${itemAccordionHiw.value}`" data-parent="#accordionHiw">
                  <div class="card-body">
                    <div class="row content__desc">
                      <div class="col-12">
                        <img
                          :src="activeHiwImage"
                          class="desc__image"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Cara Kerja -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      entries: {
        howItWorks: [
          {
            value: '01',
            label: 'Upload dokumentasi spesifikasi kapal anda segera',
            images: 'https://zonasea.com/images/1.png'
          },
          {
            value: '02',
            label: 'Masukan lokasi dan waktu pembukaan posisi kapal anda',
            images: 'https://zonasea.com/images/2.png'
          },
          {
            value: '03',
            label: 'Pilih rute ekspedisi',
            images: 'https://zonasea.com/images/3.png'
          },
          {
            value: '04',
            label: 'Lakukan perjalanan dengan jadwal yang ada',
            images: 'https://zonasea.com/images/4.png'
          }
        ]
      },
      activeHiw: '01'
    }
  },

  computed: {
    activeHiwImage () {
      return this.entries.howItWorks.find(item => item.value === this.activeHiw).images || ''
    }
  },

  methods: {
    setActiveHiw (value) {
      this.activeHiw = value
    }
  }
}
</script>
