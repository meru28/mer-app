<template>
  <fragment>
    <header v-scroll="handleScroll" class="row justify-content-center bg-white sticky-top">
      <div class="col-md-10">
        <nav class="navbar navbar-expand-lg navbar-light">
          <NuxtLink to="/" class="navbar-brand color-primary-bold">
            <img src="~/assets/image/svg/logo-bp-taspen.svg" alt="logo" class="mx-w-50px"> BPR DP TASPEN
          </NuxtLink>
          <button
            id="btn-nav"
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="setToggle">
            <div :class="{ 'animation-toggler-1': toggle === true }" class="button-toggler" />
            <div :class="{ 'animation-toggler-2': toggle === true }" class="button-toggler" />
            <div :class="{ 'animation-toggler-3': toggle === true }" class="button-toggler" />
          </button>
          <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav mr-5">
              <li class="nav-item mx-3">
                <NuxtLink to="/" class="nav-link" exact>
                  Beranda
                  <!-- <span class="sr-only">(current)</span> -->
                </NuxtLink>
              </li>
              <li class="nav-item dropdown mx-3">
                <a
                  id="navbarDropdown"
                  class="nav-link dropdown-toggle"
                  :class="{ 'color-primary-bold': $route.path === profilRoute }"
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Profile
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NuxtLink to="/garis-besar-perusahaan" class="dropdown-item">
                    Garis Besar Perusahaan
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/sejarah" class="dropdown-item">
                    Sejarah
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/visi-misi" class="dropdown-item">
                    Visi Misi
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/struktur" class="dropdown-item">
                    Struktur Perusahaan
                  </NuxtLink>
                </div>
              </li>
              <li class="nav-item dropdown mx-3">
                <a
                  id="navbarDropdowns"
                  class="nav-link dropdown-toggle"
                  :class="{ 'color-primary-bold': $route.path === produkRoute }"
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Produk Layanan
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdowns">
                  <NuxtLink to="/tabungan" class="dropdown-item">
                    Tabungan
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/deposito" class="dropdown-item">
                    Deposito
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/kredit" class="dropdown-item">
                    Kredit
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/layanan" class="dropdown-item">
                    Layanan
                  </NuxtLink>
                </div>
              </li>
              <li class="nav-item dropdown mx-3">
                <a
                  id="navbarDropdownss"
                  class="nav-link dropdown-toggle"
                  :class="{ 'color-primary-bold': $route.path === infoBankRoute }"
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Informasi Umum
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownss">
                  <NuxtLink to="/info-bank" class="dropdown-item">
                    Info Bank
                  </NuxtLink>
                  <div class="dropdown-divider" />
                  <NuxtLink to="/laporan-publikasi" class="dropdown-item">
                    Laporan Publikasi
                  </NuxtLink>
                </div>
              </li>
              <li class="nav-item mx-3">
                <NuxtLink to="/kontak" class="nav-link">
                  Kontak
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </fragment>
</template>
<script>
import Vue from 'vue'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)
export default {
  name: 'Header',
  directives: {
    scroll: {
      inserted (el, binding) {
        const f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  data () {
    return {
      toggle: false
    }
  },
  computed: {
    navBarHeight () {
      return window.document.getElementsByTagName('header')[0].offsetHeight
    },
    profilRoute () {
      let routes = ''
      switch (this.$route.path) {
        case '/garis-besar-perusahaan':
          routes = this.$route.path
          break
        case '/sejarah':
          routes = this.$route.path
          break
        case '/visi-misi':
          routes = this.$route.path
          break
        case '/struktur':
          routes = this.$route.path
          break
        default:
          routes = '/kupret'
      }
      return routes
    },
    produkRoute () {
      let routes = ''
      switch (this.$route.path) {
        case '/tabungan':
          routes = this.$route.path
          break
        case '/deposito':
          routes = this.$route.path
          break
        case '/kredit':
          routes = this.$route.path
          break
        case '/layanan':
          routes = this.$route.path
          break
        default:
          routes = '/kupret'
      }
      return routes
    },
    infoBankRoute () {
      let routes = ''
      switch (this.$route.path) {
        case '/info-bank':
          routes = this.$route.path
          break
        case '/laporan-publikasi':
          routes = this.$route.path
          break
        default:
          routes = '/kupret'
      }
      return routes
    }
  },
  watch: {
    '$route' () {
      this.toggle = !this.toggle
      document.getElementsByClassName('navbar-collapse')[0].classList.remove('show')
    }
  },
  methods: {
    handleScroll () {
      const scrollY = window.scrollY
      if (scrollY > this.navBarHeight) {
        document.getElementsByTagName('header')[0].classList.add('shadow')
      } else {
        document.getElementsByTagName('header')[0].classList.remove('shadow')
      }
    },

    setToggle () {
      this.toggle = !this.toggle
    }
  }
}
</script>
