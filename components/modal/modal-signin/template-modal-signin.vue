<template>
  <b-modal id="modalSignin" hide-footer content-class="c-modal modal--dialog text-center">
    <div class="modal-body pl-5 pr-5">
      <p class="title mb-1">
        Log In
      </p><p class="subtitle text-muted">
        sebagai:
      </p>

      <div class="row">
        <div class="col-lg-6">
          <div class="card border-0 text-center w-100">
            <div class="card-body p-2">
              <button class="btn btn-light btn-block">
                <a href="https://ship.zonasea.com" class="card-link">Ship Owner</a>
              </button>
            </div>
          </div>
        </div><div class="col-lg-6">
          <div class="card border-0 text-center w-100">
            <div class="card-body p-2">
              <button class="btn btn-light btn-block">
                <a href="https://cargo.zonasea.com" class="card-link">Cargo Owner</a>
              </button>
            </div>
          </div>
        </div>
      </div><p class="subtitle mt-4 text-muted">
        Belum terdaftar sebagai member?
      </p><div class="row mt-4 mb-4">
        <div class="col-md-12">
          <button v-b-modal="'modalSignup'" class="btn btn-primary btn-block mx-0">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script src="./modal-signin.js"></script>
