<template>
  <footer class="c-footer">
    <div class="footer__first-layer">
      <div class="first-layer__overlay">
        <h1>
          SUDAH SIAP MUAT KARGO ?
        </h1>

        <button class="btn c-cta cta--white mt-5">
          Coba 7 hari gratis
        </button>
      </div>
    </div>

    <div class="footer__second-layer">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-12 text-center">
            <img src="https://zonasea.com/images/logo-white@4x.png" class="brand">
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-4 mb-3">
            <h4 class="font-weight-bold mb-4">
              Tentang Kami
            </h4>
            <p class="text-white">
              Zonasea merupakan platform marketplace untuk mempertemukan pemilik kapal dengan pemilik muatan. Dengan menggunakan Zonasea, anda bisa berbisnis dengan tenang tanpa mengkhawatirkan legalitas perusahaan baik pemilik kapal maupun pemilik muatan dikarenakan semua member kami akan melalui tahap verifikasi oleh tim Zonasea.
            </p>
          </div>
          <div class="col-md-1 mb-3" />
          <div class="col-md-3 mb-3">
            <h4 class="font-weight-bold mb-4">
              Social Media
            </h4>

            <ul>
              <li>
                <nuxt-link
                  class="d-flex align-items-center mb-2 text-white"
                  to="/"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" class="mr-2 fa-2x" />
                  zona.sea
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="d-flex align-items-center mb-2 text-white"
                  to="/"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-2 fa-2x" />
                  zonasea
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="d-flex align-items-center mb-2 text-white"
                  to="/"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-2 fa-2x" />
                  zonasea
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-3 text-lg-right text-md-left">
            <h4 class="font-weight-bold mb-4">
              Temukan Kami
            </h4>
            <p class="text-white mb-0">
              PT Global Solusi Maritim
            </p>
            <p class="text-white">
              Belleza Office Tower, 19th Floor - Unit 7, Jl. Letnan Jenderal Soepeno Jl. Permata Hijau No.34, North Grogol, Kebayoran Lama, South Jakarta City, Jakarta 12210
            </p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-12">
            <div class="copyright mt-5">
              <p class="mb-0 mt-4 text-center">
                Copyright PT Global Solusi Maritim
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script src="./footer.js"></script>
