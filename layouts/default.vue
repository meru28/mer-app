<template>
  <div class="container-fluid">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/_base/Header'
import Footer from '~/components/_base/Footer'
export default {
  name: 'Default',
  components: {
    Header,
    Footer
  }
}
</script>
