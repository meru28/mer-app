<template>
  <div>
    <client-only>
      <section name="footer">
        <div id="footer" class="row justify-content-center bg-footer p-relative pb-5 pb-md-0">
          <img
            src="~/assets/image/5.png"
            alt
            class="d-none d-sm-block"
            style="position: absolute; right: 0; top:-50px;">
          <div class="col-md-10">
            <div class="row align-items-center h-100">
              <div class="col-12 col-md-6 my-5 my-md-0">
                <div class="d-flex flex-column col-12 col-md-9">
                  <span class="color-primary-bold">Sampaikan Pesan</span>
                  <div class="row mt-3">
                    <div class="col-12 col-md-6">
                      <form action>
                        <input type="text" placeholder="Nama" class="input-info">
                        <i class="fas fa-user icon-form" />
                      </form>
                    </div>
                    <div class="col-12 col-md-6 mt-3 mt-md-0">
                      <form action>
                        <input type="text" placeholder="Alamat Email" class="input-info">
                        <i class="fas fa-envelope icon-form" />
                      </form>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12 col-md-6 mt-md-0">
                      <form action>
                        <input type="text" placeholder="No Telp" class="input-info">
                        <i class="fas fa-phone icon-form" />
                      </form>
                    </div>
                    <div class="col-12 col-md-6 mt-3 mt-md-0">
                      <form action>
                        <input type="text" placeholder="Subjek Email" class="input-info">
                        <i class="fas fa-pencil-alt icon-form" />
                      </form>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col">
                      <textarea
                        id
                        name
                        cols="30"
                        rows="10"
                        class="input-info"
                        placeholder="Ketik Pesan" />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col text-right">
                      <button class="rounded-pill btn button-primary1">
                        Kirim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 order-md-first mt-4 mt-md-0">
                <div class="d-flex flex-column col-12 col-md-9">
                  <b class>Alamat</b>
                  <span class="mt-3">
                    Jl. Raya Pondok Gede No.9 Pondok Gede, Bekasi
                    <br>Kode Pos 17143
                    <br>
                  </span>
                  <span class="mt-4">Jam Kerja</span>
                  <span class>Senin s/d Kamis | 07:45 - 16:30</span>
                  <span class>Jum'at | 07:45 - 16:30</span>
                  <div class="mt-5 d-flex align-items-center">
                    <div class="icon-contact rounded-circle">
                      <i class="fas fa-phone-alt m-15px" />
                    </div>
                    <span class="ml-3">(021) 8467944 - 84971636</span>
                  </div>
                  <div class="mt-3 d-flex align-items-center">
                    <div class="icon-contact rounded-circle">
                      <i class="fas fa-print m-15px" />
                    </div>
                    <span class="ml-3">(021) 8487577</span>
                  </div>
                  <div class="mt-3 d-flex align-items-center">
                    <div class="icon-contact rounded-circle">
                      <i class="fas fa-envelope m-15px" />
                    </div>
                    <span class="ml-3">
                      <a href="mailto:info@bprtaspen.com?Subject=Tanya%20BPR%20DP%20TASPEN" target="_top">
                        info@bprtaspen.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section name="copyright">
        <div class="row bg-copyright">
          <div class="col text-center pt-2 pt-lg-3">
            <p class="text-light" style="font-weight: 400;">
              &#9400; BPR DP TASPEN {{ year }}
            </p>
          </div>
        </div>
      </section>
    </client-only>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
export default {
  name: 'Footer',
  data () {
    return {
      year: 0
    }
  },
  mounted () {
    this.year = Cookie.get('year')
  }
}
</script>
