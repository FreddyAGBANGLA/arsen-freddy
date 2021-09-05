<template>
  <div class="w-screen" :class="[ isSmallScreenSize ? 'block8' : '', 'block8-sm' ]">
    <div class="flex flex-col">
      <div class="flex flex-col sm:flex-row mx-6 mt-5 sm:ml-16 sm:mr-10 sm:mt-10 space-y-5 sm:space-x-32">
        <div class="flex flex-col space-y-10">
          <div class="flex-1">
            <svgIcon class="w-32 h-auto align-middle" name="ic_arsen-logo-white" original></svgIcon>
          </div>
          <div class="mt-5 flex-1 text-white text-sm leading-7" v-html="$t('description_footer')"></div>
          <div class="my-2 flex flex-1 space-x-5 sm:space-x-auto">
            <a href="#"><img class="w-40" src="../../assets/images/webp/google_play.webp"/></a>
            <a href="#"><img class="w-40" src="../../assets/images/webp/app_store.webp"/></a>
          </div>
          <div class="email my-2 flex-1">
            <a class="text-white sm:text-sm font-light" href="contact@helloarsen.com">contact@helloarsen.com</a>
          </div>
          <div class="contact my-2 flex-1">
            <h2 class="text-white text-base font-light">+229 90 XX XX XX</h2>
          </div>
        </div>
        <div class="flex flex-col space-y-8">
          <div><h2 class="text-white text-xl font-bold mt-10">Services</h2></div>
          <div><router-link class="text-white sm:text-sm" to="/couvertures">Couvertures</router-link></div>
          <div><router-link class="text-white sm:text-sm" to="/engagement">Engagement</router-link></div>
          <div><router-link class="text-white sm:text-sm" to="/remboursements">Remboursements</router-link></div>
          <div><router-link class="text-white sm:text-sm" to="/#blog">Blog</router-link></div>
        </div>
        <div class="flex flex-col space-y-8">
          <div><h2 class="text-white text-xl font-bold mt-10">Sur Arsen</h2></div>
          <div><router-link class="text-white sm:text-sm" to="/questions">FAQ</router-link></div>
          <div><router-link class="text-white sm:text-sm" to="/dreamteam">Dream team</router-link></div>
          <div><router-link class="text-white sm:text-sm sm:leading-7" to="/usecondition">Conditions générales</router-link></div>
          <div><router-link class="text-white sm:text-sm" to="#">Confidentialité</router-link></div>
        </div>
        <div class="flex flex-row items-start">
          <svgIcon class="w-5 h-5 mb-2" name="ic_globe" original></svgIcon>
          <select class="ml-5 bg-transparent text-white text-sm" name="language">
            <option class="text-black text-sm" value="Français">Français</option>
            <option class="text-black text-sm" value="English">English</option>
            <option class="text-black text-sm" value="Yoruba">Yoruba</option>
          </select>
        </div>
      </div>
      <div class="flex flex-row ml-16 border bg-white"></div>
      <div class="flex flex-row ml-16 mt-8 mb-16 text-white font-medium text-sm">Copywrite 2021 @ Arsen Assurance S.A.S </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-frame',
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  watch: {
    windowWidth (newWidth, oldWidth) {}
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    isPhoneScreenSize () {
      return this.windowWidth <= 375
    },
    isSmallScreenSize () {
      return this.windowWidth >= 640
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/sass/variables.scss';

.block8 {
  // width: 1640px;
  height: 80rem;
  background: $arsen-green;
}
.block8-sm {
  // width: 1640px;
  height: auto;
  background: $arsen-green;
}
.svg-fill {
  fill: transparent;
}
</style>
