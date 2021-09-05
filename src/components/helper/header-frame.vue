<template>
  <div class="w-screen flex justify-center" :class="{ 'bg-white': showModal }">
    <header class="flex justify-between w-5/6 py-5">
      <div class="logo flex flex-col">
        <svgIcon name="ic_arsen-logo-green" class="w-32 h-auto" original></svgIcon>
      </div>
      <div class="infos mr-5 block sm:hidden">
        <button v-if="showModal === false" type="button" @click="showModal = true"><svgIcon name="ic_menu" class="w-8 h-8" original></svgIcon></button>
        <button v-if="showModal === true" type="button" @click="showModal = false">
          <div class="w-6 h-1 close transform rotate-45 absolute"></div>
          <div class="w-6 h-1 close transform -rotate-45"></div>
        </button>

        <transition name="slide-down">
          <div v-show="showModal" class="modal-mask fixed top-0 left-0 bg-white w-full mt-16 z-40">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-body mb-10 flex justify-center">
                  <slot name="body">
                    <div class="infos flex flex-col w-3/5 space-y-10 ml-5 mt-5">
                      <div class="flex flex-col items-center space-y-10">
                        <label><router-link class="text-black text-lg sm:text-xl font-semibold mx-1 sm:mx-5" :class="{ 'text-arsen-green' : page === 'couvertures' }" to="/couvertures">Couvertures</router-link></label>
                        <label><router-link class="text-black text-lg sm:text-xl font-semibold mx-1 sm:mx-5" :class="{ 'text-arsen-green' : page === 'remboursements' }" to="/remboursements">Remboursements</router-link></label>
                        <label><router-link class="text-black text-lg sm:text-xl font-semibold mx-1 sm:mx-5" :class="{ 'text-arsen-green' : page === 'engagement' }" to="/engagement">Engagement</router-link></label>
                      </div>
                      <button class="btn_assurance py-4 px-6 mx-5 sm:mx-10 bg-green-800 hover:bg-green-500 text-white text-lg sm:text-xl font-semibold shadow-md rounded-full">Je veux m'assurer</button>
                    </div>
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </transition>

      </div>
      <div class="infos hidden sm:flex flex-row space-x-10">
        <div class="flex flex-row items-center space-x-10">
            <label><router-link class="text-black text-sm font-semibold" :class="{ 'text-arsen-green' : page === 'couvertures' }" to="/couvertures">Couvertures</router-link></label>
            <label><router-link class="text-black text-sm font-semibold" :class="{ 'text-arsen-green' : page === 'remboursements' }" to="/remboursements">Remboursements</router-link></label>
            <label><router-link class="text-black text-sm font-semibold" :class="{ 'text-arsen-green' : page === 'engagement' }" to="/engagement">Engagement</router-link></label>
        </div>
        <button class="btn_assurance py-2 px-4 mx-10 bg-green-800 hover:bg-green-500 text-white text-sm font-semibold shadow-md rounded-full">Je veux m'assurer</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header-frame',
  props: {
    page: { type: String, default: '' }
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      showModal: false
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
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/sass/variables.scss';

.slide-down-enter-active{
  animation: slideDownIn .5s ease-in-out;
}
.slide-down-leave-active{
    animation: slideDownOut .5s ease-in-out;
}
@keyframes slideDownIn {
  from { transform: translateY(-150%); }
  to { transform: translateY(0); }
}
@keyframes slideDownOut {
  from { transform: translateY(0); }
  to { transform: translateY(-150%); }
}

.btn_assurance, .close {
  background: $arsen-green;
}
.text-arsen-green {
  color: $arsen-green;
}
</style>
