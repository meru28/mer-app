<template>
  <div
    ref="lazyDivImg"
    :data-background-image="lazySrc"
    :data-background-image-loading="lazySrcLoading"
    :class="lazyClass" />
</template>

<script>
import lozad from '../../plugins/lozad'

export default {
  name: 'LazyDivImage',
  props: {
    lazySrc: {
      type: String,
      default: null
    },
    lazySrcLoading: {
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
      this.$refs.lazyDivImg.removeAttribute('data-loaded')
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
