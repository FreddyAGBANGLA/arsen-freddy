<template>
    <div class="paragraphe">
        <!-- <h1 :style='"font-size:"+this.titleSize+"px; width="+this.paraWidth+"px"'>{{ title }}</h1>
        <p :style='"font-size:"+this.descSize+"px; width="+this.paraWidth+"px"'>{{ description }}</p> -->
        <h1 class="text-3xl text-justify sm:text-left text-black font-bold leading-relaxed">{{ title }}</h1>
        <p class="text-lg sm:text-sm text-justify sm:text-left text-gray-700 font-medium leading-loose">{{ description }}</p>
    </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    titleSize: { type: Number, default: 36 },
    descSize: { type: Number, default: 24 },
    paraWidth: { type: Number, default: 575 },
    tSize: { type: String, default: 'text-none' }
  }
}
</script>

<style>
/* .paragraphe h1 {
    position: static;
    font-family: 'Poppins';
    font-weight: 600;
    line-height: 54px;
    color: #000000;
}

.paragraphe p {
    position: static;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 185%;
    color: #606060;
} */
</style>
