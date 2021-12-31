<template>
  <img
    ref="lazyImg"
    :data-src="lazySrc"
    :class="lazyClass">
</template>

<script>
import lozad from '../../plugins/lozad.js'
export default {
  name: 'LazyImage',
  props: {
    lazySrc: {
      type: String,
      default: null
    },
    lazyClass: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      loading: true
    }
  },
  watch: {
    lazySrc () {
      this.$refs.lazyImg.removeAttribute('data-loaded')
      this.$refs.lazyImg.setAttribute('src', this.src)
      this.loading = true

      this.loadImage()
    }
  },
  mounted () {
    this.loadImage()
  },
  methods: {
    setLoadingState () {
      this.loading = false
    },
    loadImage () {
      // As soon as the <img> element triggers
      // the `load` event, the loading state is
      // set to `false`, which removes the apsect
      // ratio we've applied earlier.
      // const setLoadingState = () => {
      // this.loading = false
      // }
      this.$el.addEventListener('load', this.setLoadingState)
      // We remove the event listener as soon as
      // the component is destroyed to prevent
      // potential memory leaks.
      this.$once('hook:destroyed', () => {
        this.$el.removeEventListener('load', this.setLoadingState)
      })
      // We initialize Lozad.js on the root
      // element of our component.
      const observer = lozad(this.$el)
      observer.observe()
    }
  }
}
</script>
