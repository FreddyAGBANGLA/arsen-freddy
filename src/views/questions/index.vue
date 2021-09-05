<template>
    <div>
        <div class="header shadow-md w-screen bg-white">
            <header-frame page="questions"></header-frame>
        </div>

        <div class="flex flex-col items-center mx-5 mt-5 sm:mx-0 sm:mt-20 mb-10">
            <div class="block text-black text-3xl sm:text-2xl text-center font-semibold my-8 leading-relaxed">
                Questions fréquemment posées
            </div>
        </div>
        <div class="flex flex-col mx-5 sm:mx-0 mt-5 mb-32">
            <div :key="i" v-for="i in 7" class="flex flex-col items-center">
                <div class="h-1 w-full sm:w-2/3 bg-gray-400"></div>
                <div class="flex flex-row items-center">
                    <div class="block text-black text-xl sm:text-sm sm:w-11/12 my-10 leading-10">
                        Lorem ipsum dolor sit amet, ei vix etiam ullamcorper suscipiantur. Summo facilis id sed, ea per
                    </div>
                    <button class="bg-white w-24 h-24 sm:w-auto sm:h-auto sm:ml-32"><img src="../../assets/icons/ic_fleche.svg"></button>
                </div>
            </div>
        </div>

        <footer-frame></footer-frame>

    </div>
</template>

<script>
import HeaderFrame from '../../components/helper/header-frame.vue'
import FooterFrame from '../../components/helper/footer-frame.vue'
export default {
  name: 'index',
  components: { HeaderFrame, FooterFrame }
}
</script>
