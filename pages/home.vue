<template>
  <fragment>
    <!--  Begin Carousel -->
    <section name="carousel">
      <Loading
        :active.sync="isLoading"
        color="#0f4c75"
        :can-cancel="true"
        :is-full-page="fullPage" />
      <div id="carousel" class="row justify-content-center mt-5">
        <div class="col-md-10">
          <div class="row justify-content-end">
            <div class="col-12 col-xl-10 order-xl-last p-0">
              <div
                id="carouselExampleIndicators"
                class="carousel slide carousel-fade"
                data-ride="carousel">
                <ol class="carousel-indicators">
                  <li v-for="(item, idx) in imageCarousel" :key="idx" data-target="#carouselExampleIndicators" :data-slide-to="idx" :class="{ active: idx === 0}" />
                  <!-- <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" /> -->
                </ol>
                <div class="carousel-inner">
                  <div v-for="(img, idx) in imageCarousel" :key="img._id" class="carousel-item" :class="{ active: idx === 0}">
                    <!-- <vcl @load="setFalse" :width="100" :height="150">
                      <rect width="100%" height="150px" />
                    </vcl> -->
                    <!-- <client-only> -->
                    <LazyImage
                      :src="loading_gif"
                      :lazy-src="img.imagePath"
                      lazy-class="d-block img-carousel" />
                    <!-- </client-only> -->
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev">
                  <span class="carousel-control-prev-icon d-block d-sm-none" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next">
                  <span class="carousel-control-next-icon d-block d-sm-none" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
                <div class="el-button-carousel d-none d-sm-block">
                  <button
                    class="btn button-carousel"
                    href="#carouselExampleIndicators"
                    data-slide="prev">
                    <i class="fas fa-chevron-left" />
                  </button>
                  <button
                    class="btn button-carousel"
                    href="#carouselExampleIndicators"
                    data-slide="next">
                    <i class="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 pt-md-5 mt-4">
              <div class="d-flex flex-column">
                <img
                  src="~/assets/image/dot-yellow.png"
                  alt
                  style="position: absolute;top: -17px; left: -51px;">
                <h2 class="p-relative">
                  <b>{{ home.titleTaspen }}</b>
                </h2>
                <!-- <h2 class>
                  <b>BPR DP TASPEN</b>
                </h2> -->
                <h6 class="mt-5">
                  Periode {{ home.periode }}
                </h6>
                <div class="row shadow periode-layout mx-1 mx-md-0 mt-3 bg-white p-4">
                  <div class="col-6 my-3 text-black">
                    <b>Jangka Waktu</b>
                  </div>
                  <div class="col-6 my-3 text-right text-black">
                    {{ home.jangkaWaktu }}
                  </div>
                  <div class="col-12 border-bottom text-black" />
                  <div class="col-6 mt-3 text-black">
                    <b>Suku Bunga</b>
                  </div>
                  <div class="col-6 mt-3 text-right text-black">
                    {{ home.sukuBunga }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  End Carousel-->
    <!--  Begin Partner Deals-->
    <section name="partner-deals">
      <div id="partner-deals" class="row justify-content-center">
        <img
          src="~/assets/image/5.png"
          alt
          class="d-none d-sm-block"
          style="position: absolute; left: 0;">
        <div class="col-md-10">
          <div class="row my-md-5 my-3">
            <div class="col pt-5">
              <div class="row justify-content-center">
                <div class="col-3 col-md-2">
                  <img src="~/assets/image/svg/logo-lps.svg" class="mx-w-100 img-partner">
                </div>
                <div class="col-3 col-md-2">
                  <img
                    src="~/assets/image/svg/logo-ayo.svg"
                    class="mx-w-100 img-partner">
                </div>
                <div class="col-3 col-md-2">
                  <img
                    src="~/assets/image/LOGO-MITRA-LAYANAN-TASPEN.jpg"
                    class="mx-w-100 img-partner">
                </div>
                <div class="col-3 col-md-2">
                  <img src="~/assets/image/svg/logo-ojk.svg" class="mx-w-100 img-partner">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  End Partner Deals-->
    <!--   Begin Apps-->
    <section name="app">
      <div id="app" class="row bg-app justify-content-center pb-5 ">
        <img
          src="~/assets/image/3.png"
          alt=""
          style="position: absolute; right: 62px;"
          class="d-none d-sm-block">
        <div class="col-md-10 py-5">
          <div class="row">
            <div class="col-md-5 col-12">
              <img src="~/assets/image/img-phone.png" alt="image" class="mx-w-100 ml-20px">
            </div>
            <div class="col mt-md-4">
              <div class="d-flex flex-column">
                <h2 class="" style="font-weight: bold">
                  Otentikasi Wajah
                </h2>
                <h2 class="" style="font-weight: bold">
                  Menggunakan Smartphone
                </h2>
                <h6 class=" pt-4">
                  - Selalu lakukan otentikasi wajah, pensiun jd nyaman
                </h6>
                <h6 class=" pt-2">
                  - Jika ada pertanyaan langsung hubungi kami di <b> <a href="tel:+">021 8467944</a> </b>
                </h6>
                <h6 class=" pt-2">
                  - Aplikasi Otentikasi dapat diunduh di Playstore dan Appstore
                </h6>
                <div class="row mt-md-5 justify-content-center justify-content-md-start ">
                  <div class="col-5 mt-5 px-0">
                    <a href="https://play.google.com/store/apps/details?id=com.hisign.feacapan&hl=in">
                      <img
                        src="~/assets/image/svg/google-play-badge.svg"
                        class="mx-w-100 img-partner"
                        style="filter: grayscale(0%); opacity: 1;">
                    </a>
                  </div>
                  <div class="col-5 mt-5">
                    <a href="https://apps.apple.com/id/app/taspen-otentikasi/id1473375913?l=id">
                      <img
                        src="~/assets/image/svg/app-store-badge.svg"
                        class="mx-w-100 img-partner"
                        style="filter: grayscale(0%); opacity: 1;">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    End Apps-->
    <!-- Employee Galery -->
    <section name="galery">
      <div id="galery" class="row justify-content-center mt-60px">
        <div class="col col-md-10">
          <div class="row justify-content-center">
            <div
              v-for="(emp, idx) in imageEmployee"
              :key="idx"
              class="col-12 col-md-4 m-3 m-md-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine">
              <div class="d-flex flex-column">
                <LazyImage
                  :src="loading_gif"
                  :lazy-src="emp.imagePath"
                  lazy-class="img-galery" />
                <h5 class=" mt-3">
                  {{ emp.label }}
                </h5>
              </div>
            </div>
            <!-- <div class="col-12 col-md-4 m-3 m-md-0" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <div class="d-flex flex-column">
                <img src="~/assets/img/index/galery/10.png" alt="" class="img-galery">
                <h5 class=" mt-3">
                  Memberikan layanan yang terbaik kepada para nasabah
                </h5>
              </div>
            </div> -->
            <!-- <div
              class="col-12 col-md-4 m-3 m-md-0"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine">
              <div class="d-flex flex-column">
                <img src="~/assets/img/index/galery/20.png" alt="" class="img-galery">
                <h5 class=" mt-3">
                  Memberikan layanan yang terbaik kepada para nasabah
                </h5>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Employee Galery -->

    <!-- Info Nasabah -->
    <section name="info">
      <div id="info" class="row align-items-center justify-content-center bg-app pb-5 pb-md-0">
        <div class="col col-md-10 mt-5 mt-md-0 ">
          <h1 class=" text-center">
            <b>BPR DP TASPEN Memiliki</b>
          </h1>
          <div class="row justify-content-center mt-5">
            <div class="col-auto m-2" data-aos="flip-down" data-aos-easing="ease-in-sine">
              <div class="shadow layout-info el-layout-info bg-white">
                <div class="d-flex flex-column pt-4 ">
                  <img
                    src="~/assets/image/4.png"
                    alt=""
                    style="position: absolute; right: 20px; top: 6px;">
                  <div class="icon-info row ml-0 mt-5 ml-4 justify-content-center align-content-center">
                    <i class="far fa-user " />
                  </div>
                  <span class=" mt-3 mb-1 px-4">
                    <b> Nasabah </b>
                  </span>
                  <span class="px-4">
                    {{ dataNasabah.nasabah | localeString }} / {{ year }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-auto m-2" data-aos="flip-right" data-aos-easing="ease-in-sine">
              <div class="shadow layout-info el-layout-info bg-white">
                <div class="d-flex flex-column pt-4 ">
                  <img
                    src="~/assets/image/4.png"
                    alt=""
                    style="position: absolute; right: 20px; top: 6px;">
                  <div class="icon-info row ml-0 mt-5 ml-4 justify-content-center align-content-center">
                    <i class="fas fa-money-bill-wave" />
                  </div>
                  <span class=" mt-3 mb-1 px-4"> <b>
                    Deposit </b>
                  </span>
                  <span class="px-4">
                    {{ dataNasabah.deposit | localeString }} / {{ year }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-auto  m-2" data-aos="flip-up" data-aos-easing="ease-in-sine">
              <div class="shadow el-layout-info bg-white">
                <div class="d-flex flex-column pt-4 ">
                  <img
                    src="~/assets/image/4.png"
                    alt=""
                    style="position: absolute; right: 20px; top: 6px;">
                  <div class="icon-info row ml-0 mt-5 ml-4 justify-content-center align-content-center">
                    <i class="fas fa-wallet" />
                  </div>
                  <span class=" mt-3 mb-1 px-4">
                    <b> Kredit </b>
                  </span>
                  <span class="px-4">
                    {{ dataNasabah.kredit | localeString }} / {{ year }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Info Nasabah -->

    <!-- Sejarah -->
    <section name="sejarah">
      <div id="sejarah" class="row justify-content-center">
        <div class="col-md-8 align-self-center  p-relative my-5 my-md-0">
          <img src="~/assets/image/dot-yellow.png" alt="" class="d-none d-sm-block" style="position: absolute; position: absolute; top: -63px; left: -29px;">
          <p class=" p-relative text-justify">
            {{ home.bprDescription }}
          </p>
        </div>
      </div>
    </section>
    <!-- End Sejarah -->

    <!-- Gallery Kantor -->
    <section name="slide-galery">
      <div id="slide-galery" class="el-slide-galery-parent">
        <client-only>
          <VueSlickCarousel v-bind="slickOptions">
            <div v-for="(img, index) in imageCabang" :key="index" class="px-0 px-xl-3 px-sm-2">
              <div class="el-slide-galery" :style="'background-image: url(' + img.imagePath + ')'">
                <div class="bg-white el-info pl-2">
                  <span class="">{{ img.label }}</span>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </section>
    <!-- End Gallery Kantor -->
  </fragment>
</template>
<script>
import { ref, reactive, useMeta, useFetch } from '@nuxtjs/composition-api'
import axios from '@nuxtjs/axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'
import 'aos/dist/aos.css'

export default {
  name: 'Beranda',
  components: {
    VueSlickCarousel,
    Loading
  },
  filters: {
    localeString (value) {
      if (!value) {
        return ''
      }
      value = value.toLocaleString('id-ID')
      return value
    }
  },
  setup () {
    const home = reactive({})
    const { fetch, fetchState } = useFetch(async () => {
      home.value = await axios.get('http://localhost:8999/home')
    })

    // Manually trigger a refetch
    fetch()
    console.log(fetchState)
    const year = ref(null)
    const getYear = () => {
      year.value = new Date().getFullYear()
      document.cookie = `year=${year.value}`
    }
    getYear()
    const fullPage = ref(true)
    const slickOptions = reactive({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }

        }
      ]
    })
    const loadingGif = ref('~/assets/image/svg/spinner.svg')
    useMeta({
      title: 'BPR DP Taspen - Tabungan BPR DP Taspen',
      meta: [
        {
          name: 'title',
          content: 'BPR DP Taspen - Tabungan BPR DP Taspen'
        },
        {
          name: 'description',
          content:
            'BPR DP TASPEN selalu berusaha mengupayakan perannya sebagai solusi pemberi strategis untuk turut meraih asa yang digantungkan oleh karyawan. Dana pensiun hadir sebagai pemberi harapan, melalui kemampuan dan potensi sumber daya dalam upaya mensejahterakan karyawan. BPR DP TASPEN berharap dapat selalu menjadi penyedia dana pensiun yang sehat, terpercaya dan dapat memenuhi kewajibannya.'
        },
        {
          name: 'keywords',
          content:
            'bpr pusat, bpr taspen pusat, bpr taspen, taspen, bpr dp taspen, bank pensiun, tabungan pensiun'
        },
        {
          name: 'robots',
          content: '/robots.txt'
        }
      // {
      //   property: 'og:url',
      //   content: properties.ALFACART.BASE
      // },
      // {
      //   property: 'og:image',
      //   content:
      //     'https://cs1.alfacart.com/media/alfacart-background-white.png'
      // },
      // {
      //   properties: 'og:image:width',
      //   content: '200'
      // },
      // {
      //   properties: 'og:image:height',
      //   content: '200'
      // }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'bprtaspen.com' + '/'
        }
      ]
    })

    return {
      year,
      fullPage,
      slickOptions,
      loadingGif
    }
  },
  head: {}
}
</script>
