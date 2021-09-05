<template>
<div>
    <div class="header shadow-md w-screen bg-white">
        <header-frame page="dreamteam"></header-frame>
    </div>

    <div class="flex flex-col items-center text-center my-20">
        <div class="block text-black text-4xl sm:text-3xl font-semibold sm:my-8 leading-relaxed">
            Dream Team
        </div>
        <div class="flex flex-col sm:grid grid-cols-3 gap-4">
            <div :key="i" v-for="i in 6" class="flex flex-col items-center">
                <img class="w-4/5 my-5" :src='"../../assets/images/webp/img_dreamteam"+i+".webp"'>
                <div class="text-3xl sm:text-2xl text-black text-center font-bold my-5">John Doe</div>
                <div class="text-xl sm:text-sm text-black text-center leading-relaxed w-2/3">
                    CEO INNOVAGENCE
                </div>
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
