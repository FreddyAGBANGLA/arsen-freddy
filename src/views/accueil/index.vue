<template>
    <div class="w-screen bg-no-repeat relative">
        <div class="circle absolute z-0"></div>
        <div class="header relative z-20">
            <header-frame page="accueil"></header-frame>
            <div class="flex flex-col sm:flex-row items-center sm:items-start mt-5 sm:mx-32 sm:mt-10">
                <div class="flex flex-col items-center sm:items-start caroussel my-10 sm:my-32 z-30">
                    <h1 class="slogan text-3xl sm:text-5xl text-green-800 text-center sm:text-left font-bold leading-relaxed sm:leading-none w-3/5 sm:w-7/12" v-html="$t('slogan')"></h1>
                    <p class="text-arsen-gray text-black hidden sm:block w-2/3" v-html="$t('description_accueil')"></p>
                    <div class="flex flex-row mt-16 sm:my-16 space-x-5">
                        <a href="#"><img class="w-40" src="../../assets/images/webp/google_play.webp"/></a>
                        <a href="#"><img class="w-40" src="../../assets/images/webp/app_store.webp"/></a>
                    </div>
                </div>
                <img class="image1 w-11/12 sm:w-4/6 sm:absolute right-0 bottom-0 mr-40 sm:mr-24" src="../../assets/images/webp/img_accueil_1.webp">
            </div>
        </div>

        <div class="circle circle2 absolute z-10"></div>
        <div class="circle circle3 absolute z-0"></div>

        <div class="block1 mx-10 mt-10 sm:mx-32 sm:mt-32">
            <div class="flex flex-col sm:flex-row space-x-5 sm:space-x-20">
                <img class="image2 z-10" src="../../assets/images/webp/img_accueil_2.webp">
                <paragraphe class="paragraphe1 mt-10 sm:mt-32" :title="title1" :description="description1"></paragraphe>
            </div>
        </div>

        <div class="block2 mx-8 my-1 sm:my-3 sm:mx-32">
            <div class="flex flex-col sm:flex-row">
                <paragraphe class="paragraphe2 ml-5 mt-10 sm:mt-64 w-11/12 sm:w-5/12" :title="title2" :description="description2"></paragraphe>
                <div class="grid grid-cols-2 gap-4 space-y-4 sm:gap-10 mt-4 sm:mt-32 sm:ml-32 datas">
                    <div class="flex flex-col card transform hover:scale-125 hover:shadow-2xl motion-reduce:transform-none rounded-xl w-40 h-40 space-y-4">
                        <div class="icon icon-1 flex justify-center items-center inline-block align-middle w-10 h-10 rounded-full mx-2 mt-2"><svgIcon class="w-6 h-6" name="ic_caisse" original></svgIcon></div>
                        <div class="title text-black text-xl font-bold mx-2 mt-2">+300K</div>
                        <div class="text-arsen-gray text-sm font-normal mx-2 mt-2" v-html="$t('economiseParAn')"></div>
                    </div>
                    <div class="flex flex-col card transform hover:scale-125 hover:shadow-2xl motion-reduce:transform-none rounded-xl w-40 h-40 space-y-4">
                        <div class="icon icon-2 flex justify-center items-center inline-block align-middle w-10 h-10 rounded-full mx-2 mt-2"><svgIcon class="w-6 h-6" name="ic_horloge" original></svgIcon></div>
                        <div class="title text-black text-xl font-bold mx-2 mt-2">2min</div>
                        <div class="text-arsen-gray text-sm font-normal mx-2 mt-2" v-html="$t('chronoPourSouscrire')"></div>
                    </div>
                    <div class="flex flex-col card transform hover:scale-125 hover:shadow-2xl motion-reduce:transform-none rounded-xl w-40 h-40 space-y-4">
                        <div class="icon icon-3 flex justify-center items-center inline-block align-middle w-10 h-10 rounded-full mx-2 mt-2"><svgIcon class="w-6 h-6" name="ic_fusee" original></svgIcon></div>
                        <div class="title text-black text-xl font-bold mx-2 mt-2">2h</div>
                        <div class="text-arsen-gray text-sm font-normal mx-2 mt-2" v-html="$t('plusRapide')"></div>
                    </div>
                    <div class="flex flex-col card transform hover:scale-125 hover:shadow-2xl motion-reduce:transform-none rounded-xl w-40 h-40 space-y-4">
                        <div class="icon icon-4 flex justify-center items-center inline-block align-middle w-10 h-10 rounded-full mx-2 mt-2"><svgIcon class="w-6 h-6" name="ic_seringue" original></svgIcon></div>
                        <div class="title text-black text-xl font-bold mx-2 mt-2">2.5x</div>
                        <div class="text-arsen-gray text-sm font-normal mx-2 mt-2" v-html="$t('plusDeCliniques')"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block3 mx-10 my-16 sm:mx-40 sm:my-40">
            <div class="flex flex-col sm:flex-row">
                <img class="image3 sm:-mt-20 sm:-ml-20 z-10" src="../../assets/images/webp/img_arsen_card.webp">
                <!-- <div class="card_shadow"></div> -->
                <paragraphe class="paragraphe3 ml-8 mt-12 sm:ml-32 sm:mt-10" :title="title3" :description="description3"></paragraphe>
            </div>
            <div class="block_points">
                <div class='points z-0' :key="i" v-for="i in 19"></div>
            </div>
        </div>

        <div class="block4 w-full overflow-auto">
            <div class="flex flex-col">
                <div class="flex flex-col sm:flex-row">
                    <div class="ml-5 mt-8 sm:ml-20 sm:mt-24 space-y-10 my-10">
                        <p class="text-white text-lg sm:text-sm leading-relaxed" :class="{ 'fixed-width':isSmallScreenSize }" v-html="$t('description_1')"></p>
                        <h1 class="text-white text-3xl sm:text-4xl font-medium" v-html="$t('title_1')"></h1>
                        <div class="hidden sm:flex flex-row">
                            <button @click="prev" class="btn btn-white bg-white w-12 h-12 m-5 rounded-full static shadow-xl inf flex items-center justify-center"><svgIcon class="w-8 h-8 inferieur" name="ic_inf" original></svgIcon></button>
                            <button @click="next" class="btn btn-white bg-white w-12 h-12 m-5 rounded-full static shadow-xl sup flex items-center justify-center"><svgIcon class="w-8 h-8 superieur" name="ic_sup" original></svgIcon></button>
                        </div>
                    </div>
                    <carousel ref="carousel" :pagination-enabled=false :navigation-enabled="true" :per-page-custom=[[0,1],[640,2]] class="relative overflow-hidden my-10 sm:ml-10 sm:my-16">
                        <slide data-index="0" class="flex justify-center items-center">
                            <div class="bg-white rounded-xl shadow-xl w-5/6 p-6">
                                <h1 class="text-3xl sm:text-2xl text-justify sm:text-left text-black font-bold leading-relaxed" v-html="$t('titreSlide1')"></h1>
                                <p class="text-lg sm:text-sm text-justify sm:text-left text-gray-700 font-medium leading-loose" v-html="$t('descriptionSlide')"></p>
                            </div>
                        </slide>
                        <slide data-index="1" class="flex justify-center items-center">
                            <div class="bg-white rounded-xl shadow-xl w-5/6 p-6">
                                <h1 class="text-3xl sm:text-2xl text-justify sm:text-left text-black font-bold leading-relaxed" v-html="$t('titreSlide2')"></h1>
                                <p class="text-lg sm:text-sm text-justify sm:text-left text-gray-700 font-medium leading-loose" v-html="$t('descriptionSlide')"></p>
                            </div>
                        </slide>
                        <slide data-index="2" class="flex justify-center items-center">
                            <div class="bg-white rounded-xl shadow-xl w-5/6 p-6">
                                <h1 class="text-3xl sm:text-2xl text-justify sm:text-left text-black font-bold leading-relaxed" v-html="$t('titreSlide3')"></h1>
                                <p class="text-lg sm:text-sm text-justify sm:text-left text-gray-700 font-medium leading-loose" v-html="$t('descriptionSlide')"></p>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="sm:hidden flex flex-row items-center justify-center">
                    <button @click="prev" class="btn btn-white bg-white w-12 h-12 m-5 rounded-full static shadow-xl inf flex items-center justify-center"><svgIcon class="w-8 h-8 inferieur" name="ic_inf" original></svgIcon></button>
                    <button @click="next" class="btn btn-white bg-white w-12 h-12 m-5 rounded-full static shadow-xl sup flex items-center justify-center"><svgIcon class="w-8 h-8 superieur" name="ic_sup" original></svgIcon></button>
                </div>
            </div>
        </div>

        <div class="block5 ml-8 mt-10 sm:ml-32 sm:mt-16">
            <div class="flex group1 overflow-scroll">
                <img class="image4 w-1/2 hidden sm:block" src="../../assets/images/webp/img_accueil_3.webp">
                <paragraphe class="paragraphe6 w-5/6 sm:w-2/5 ml-2 sm:ml-16 mr-5" :title="title6" :description="description6"></paragraphe>
            </div>
            <div class="hidden sm:flex mt-4 sm:mt-10 group2 overflow-scroll space-x-10">
                <img class="image5 sm:w-2/5" src="../../assets/images/webp/img_accueil_4.webp">
                <img class="image6 sm:w-1/2" src="../../assets/images/webp/img_accueil_5.webp">
            </div>
            <carousel :pagination-enabled=false :navigation-enabled="true" :per-page=1 class="sm:hidden relative overflow-hidden my-10">
                <slide>
                    <img class="image4 w-5/6 sm:hidden" src="../../assets/images/webp/img_accueil_3.webp">
                </slide>
                <slide>
                    <img class="image5 w-5/6 sm:hidden" src="../../assets/images/webp/img_accueil_4.webp">
                </slide>
                <slide>
                    <img class="image6 w-5/6 sm:hidden" src="../../assets/images/webp/img_accueil_5.webp">
                </slide>
            </carousel>
        </div>

        <div class="block_points_2">
            <div class='points z-0' :key="i" v-for="i in 19"></div>
        </div>
        <div class="circle4 absolute z-10"></div>

        <div class="w-screen" :class="[ isSmallScreenSize ? 'block6-sm' : '', 'block6' ]">
            <div class="flex flex-col-reverse sm:flex-row sm:ml-32">
                <div class="arsen_phone mt-8 sm:mt-16 flex justify-center"><img class="w-2/3 sm:w-8/12" src="../../assets/images/webp/img_arsen_phone.webp" alt="Arsen phone"></div>
                <div class="phone-side mt-12 sm:mt-32 sm:ml-10 flex flex-col items-center sm:items-start">
                    <h1 class="w-64 sm:w-3/5 flex text-center sm:text-left text-2xl sm:text-3xl text-black font-bold leading-relaxed" v-html="$t('slogan')"></h1>
                    <div class="flex flex-row justify-center sm:justify-start space-x-5 mt-10">
                        <a href="#"><img class="w-40" src="../../assets/images/webp/google_play.webp"/></a>
                        <a href="#"><img class="w-40" src="../../assets/images/webp/app_store.webp"/></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="block7 ml-5 mt-5 sm:ml-16 sm:mt-10">
            <div class="flex flex-col">
                <div id="blog" class="text-4xl font-bold text-black ml-5 mt-10 sm:mt-10">Blog</div>
                <div class="flex flex-col sm:flex-row mt-16 space-y-10 sm:space-x-20 sm:space-y-0 conteneur">
                    <div class="sm:w-1/4 mx-6">
                        <img src="../../assets/images/webp/img_accueil_6.webp">
                        <paragraphe class="paragraphe7" :title="title7" :description="description7" :titleSize="22" :descSize="20"></paragraphe>
                    </div>
                    <div class="sm:w-1/4 mx-6">
                        <img src="../../assets/images/webp/img_accueil_7.webp">
                        <paragraphe class="paragraphe7" :title="title7" :description="description7" :titleSize="22" :descSize="20"></paragraphe>
                    </div>
                    <div class="sm:w-1/4 mx-6">
                        <img src="../../assets/images/webp/img_accueil_8.webp">
                        <paragraphe class="paragraphe7" :title="title7" :description="description7" :titleSize="22" :descSize="20"></paragraphe>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center my-20">
                    <button class="py-4 bg-transparent hover:bg-gray-700 text-arsen-gray font-semibold
                    hover:text-white border border-arsen-gray hover:border-transparent
                    rounded-full shadow-md content-center justify-center w-48" v-html="$t('btn_lire_tout')"></button>
                </div>
            </div>
        </div>
        <footer-frame></footer-frame>
    </div>
</template>

<script>
import HeaderFrame from '../../components/helper/header-frame.vue'
import Paragraphe from '../../components/paragraphe.vue'
import FooterFrame from '../../components/helper/footer-frame.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'index',
  data () {
    return {
      title1: 'C’est quoi Arsen ?',
      description1: "Le but de l’assurance santé ou encore des mutuelles santé est de vous guarantir une couverture qui rembourser tout ou partie des frais de santé non couverts par la Sécurité sociale. Mais avec l’assurance traditionnelle, les processus très longs de traitement en cas de maladie, Arsen Assurances est une entreprise technologique qui désire réinventer l'assurance santé en Afrique en adoptant une nouvelle approche couplant rapidité et transparence.",
      title2: 'Pourquoi Arsen ?',
      description2: "Nous pensons que l'assurance maladie doit être intelligente, simple et conviviale. C'est pourquoi nous avons construit Arsen. Notre objectif est de changer la façon dont les prestataires et les consommateurs interagissent avec les soins de santé grâce à la technologie, aux données et à la conception.",
      title3: 'Ma carte Arsen',
      description3: 'Payer vos soins de santé directement dans les cliniques et pharmacies présentes dans le réseau de partenaires de Asen grâce à votre carte d’assurance Arsen.',
      title4: 'Paiements par  tiers-payant',
      description4: 'Nos clients bénéficient d’un vaste réseau de professionnels de la santé. Ils économises sur les dépenses personnelles inutiles grâce à l’expérience unique que nous construisons chaque jour ensemble prenant en compte leurs retours d’expérience. ',
      title5: 'Remboursements en quelques heures',
      description5: 'Nos clients bénéficient d’un vaste réseau de professionnels de la santé. Ils économises sur les dépenses personnelles inutiles grâce à l’expérience unique que nous construisons chaque jour ensemble prenant en compte leurs retours d’expérience. ',
      title6: 'A vos côtés pour mieux vous protéger.',
      description6: 'Plus de garanties, moins de tracas, un service client à la hauteur de vos attentes.',
      title7: 'Femme et santé',
      description7: 'Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per aliquip maiestatis referrentur, ',
      windowWidth: window.innerWidth
    }
  },
  components: { HeaderFrame, Paragraphe, FooterFrame, Carousel, Slide },
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
    },
    next () {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage + 1)
    },
    prev () {
      this.$refs.carousel.goToPage(this.$refs.carousel.currentPage - 1)
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
.header {
    background: $light-green;
}
.slogan {
    color: $arsen-green;
}
.icon-1 {
    background: $icon-green;
}
.icon-2 {
    background: $icon-blue;
}
.icon-3 {
    background: $icon-red;
}
.icon-4 {
    background: $icon-yellow;
}
.icon img {
    width: 50%;
    height: 50%;
    margin-top: 25%;
}
// .desc {
//     font-weight: 400px;
//     font-size: 18px;
//     color: $arsen-gray;
//     margin: 10px;
// }
.circle {
    width: 550px;
    height: 550px;
    border-radius: 275px;
    border: solid;
    border-width: 70px;
    left: -206px;
    top: 584px;
    color: $green-circle;
    box-sizing: border-box;
    position: absolute;
}
.circle2 {
    left: 1354px;
    top: 1325px;
}
.circle3 {
    width: 300px;
    height: 300px;
    border-radius: 300px;
    left: 1480px;
    top: 1730px;
}
.circle4 {
    width: 400px;
    height: 400px;
    border-radius: 275px;
    border: solid;
    border-width: 70px;
    left: -246px;
    top: 4100px;
    color: $green-circle;
    box-sizing: border-box;
    position: absolute;
}
.card_shadow {
    width: 471px;
    height: 255px;
    border-radius: 20px;
    opacity: 0.25;
    position: absolute;
    left: 210px;
    top: 2550px;
    background: $green-shadow-card;
    transform: rotate(-16.03deg);
}
.points {
    border-width: 5px 0 0 0;
    border-style: dotted;
    border-color: $red-points;
    width: 17%;
    margin-bottom: 4px;
    display: block;
}
.block_points {
    display: block;
    margin-top: -258px;
    margin-left: -128px;
    opacity: 0.3;
}
.block_points_2 {
    display: block;
    margin-top: -50rem;
    margin-bottom: 30rem;
    margin-right: -110rem;
    margin-left: 110rem;
    opacity: 0.3;
}
.block4 {
    background: $arsen-green;
    margin-top: 300px;
}
.block6 {
    height: 90.5vh;
    background: $block-gray;
    margin-top: 650px;
}
.block6-sm {
    height: 74.5vh; /* 384px; */
    background: $block-gray;
    margin-top: 650px;
}
.image2, .image3 {
    width: 45%;
    height: 50%;
}
.image5 {
    width: 400px;
    height: 300px;
}
.slide {
    width: auto;
    height: auto;
    background: $white;
    box-shadow: 6px 10px 45px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 49px 15px 50px 16px;
}
.slide-sm {
    width: 575px;
    height: 579px;
    background: $white;
    box-shadow: 6px 10px 45px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin: 49px 15px 50px 16px;
}
.scaled_phone {
    width: 320px;
    height: auto;
}
.fixed-width {
    width: 65vh; /* 400px; */
}
.svg-fill {
    fill: transparent;
}
.text-arsen-gray {
    color: $arsen-gray;
}
.border-arsen-gray {
    border-color: $arsen-gray;
}
@media only screen and (max-width: 640px) {
    .image2, .image3 {
        width: 100%;
        height: 50%;
    }
}
</style>
