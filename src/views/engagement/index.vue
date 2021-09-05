<template>
    <div>
        <div class="header shadow-md w-screen bg-white">
            <header-frame page="engagement"></header-frame>
        </div>

        <div class="flex flex-col items-center text-center mx-2 my-10">
            <div class="block text-black text-4xl sm:text-3xl font-semibold my-8 leading-relaxed">
                Notre <span class="text-arsen-green">Engagement</span>
            </div>
            <div class="block text-black text-xl sm:text-sm md:w-1/2 leading-8">
                Etre un bon assureur c’est aussi guarantir que votre argent soit bien réinvestit. Chez Arsen, l’argent de vos cotisations est réutiliser pour financer des projets sociaux choisi par les assurés eux mêmes.
            </div>
        </div>

        <div class="flex justify-center">
            <img src="../../assets/images/webp/Savings-rafiki-1.webp">
        </div>

        <div class="flex flex-row-reverse sm:flex-col mx-5 sm:mx-32 space-x-0 sm:space-x-auto">
            <div class="flex flex-col sm:flex-row justify-center">
                <div class="flex flex-col sm:flex-row justify-center rounded-xl h-full w-1 sm:h-1 sm:w-5/6 ml-10 my-10 sm:ml-0 bg-gray-400">
                    <div class="h-1 w-3 sm:h-3 sm:w-1 bg-arsen-green"></div>
                    <div class="h-64 w-1 sm:h-1 sm:w-1/2 bg-arsen-green"></div>
                    <div class="h-1 w-3 sm:h-3 sm:w-1 bg-arsen-green"></div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row space-y-40 sm:space-y-0 sm:space-x-20 sm:mx-32 my-5">
                <div class="text-2xl sm:text-sm text-gray-700 text-right sm:text-left leading-8">
                    30% de votre cotisation est dédié aux frais de gestion de Luko : service client, gestion de sinistre, innovation, etc.
                </div>
                <div class="text-2xl sm:text-sm text-gray-700 text-right sm:text-left leading-8">
                    70% de votre cotisation est placé dans le pot commun pour tous les assurés. Si vous avez un sinistre, cet argent sert à vous rembourser.
                </div>
                <div class="text-2xl sm:text-sm text-gray-700 text-right sm:text-left leading-8">
                    S'il reste de l'argent en fin d'année, il est reversé à l'association de votre choix. Il ne vient pas accroitre nos profits.
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center mx-8 sm:mx-48 my-32">
            <div class="text-black text-3xl sm:text-2xl font-bold">Le Givebak process</div>
            <div class="flex flex-col sm:flex-row space-x-10 my-5">
                <div class="flex flex-col items-center" :key="i" v-for="i in 3">
                    <div class="w-32 h-40 bg-gray-400 my-5"></div>
                    <div class="text-3xl sm:text-2xl text-black text-center font-semibold my-5">John Doe</div>
                    <div class="text-xl sm:text-sm text-black text-center sm:text-justify leading-relaxed">
                        Nous avions des difficultés pour le vote du public avec nos anciennes méthodes. Mais avec VoteToMe, tout est devenu beaucoup plus simple.
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col mx-8 sm:mx-48 my-20">
            <div class="text-black text-3xl sm:text-2xl font-bold my-10">Their experiences</div>
            <div class="flex flex-row space-x-12">
                <carousel :pagination-enabled=false :per-page-custom=[[0,1],[640,3]]>
                    <slide :key="i" v-for="i in 4">
                        <div class="flex flex-col rounded shadow-lg w-1/2 sm:w-11/12 sm:mx-10">
                            <div class="flex flex-row m-5">
                                <img class="w-16 h-16 rounded-full" src="../../assets/images/webp/img_john_doe.webp" alt="Image John Doe">
                                <div class="flex flex-col mx-2 space-y-2">
                                    <div class="font-bold text-black">{{ difficultes[i-1] }}</div>
                                    <div class="text-black">CEO INNOVAGENCE</div>
                                </div>
                            </div>
                            <div class="px-6 py-4">
                                <p class="text-gray-700 text-sm">
                                    Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per aliquip maiestatis referrentur, augue volutpat an mea. Putent dictas persequeris his in, ne prima rebum congue eam. Sit no doctus malorum saperet.
                                </p>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <footer-frame></footer-frame>
    </div>
</template>

<script>
import HeaderFrame from '../../components/helper/header-frame.vue'
import FooterFrame from '../../components/helper/footer-frame.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'index',
  components: { HeaderFrame, FooterFrame, Carousel, Slide },
  data () {
    return {
      difficultes: ['Soumission des projets', 'Votes des assurés', 'Exécution'],
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

<style lang="scss" scoped>
@import '../../assets/style/sass/variables.scss';
.text-arsen-green {
    color: $arsen-green;
}
.bg-arsen-green {
    background: $arsen-green;
}
</style>
