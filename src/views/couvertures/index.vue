<template>
  <div>
    <div class="header shadow-md w-screen bg-white">
      <header-frame page="couvertures"></header-frame>
    </div>

    <div class="mx-5 sm:mx-24 sm:my-20">
      <div class="block text-black text-4xl sm:text-3xl font-semibold max-w-xl my-8 leading-relaxed">
        Nos couvertures santé adaptées pour <span class="text-arsen-green">vous</span> et votre <span class="text-arsen-green">famille</span>
      </div>
      <div class="block text-black text-xl sm:text-sm max-w-4xl leading-8">
        Profitez d’une couverture santé complète adaptée à vos besoins et à votre bourse. Excellent rapport qualité-prix, économisez des centaines de mille par an.
      </div>
    </div>

    <div class="circle absolute z-0"></div>
    <div class="circle circle2 absolute z-20"></div>

    <div class="hidden sm:flex flex-col mt-24">
      <div class="flex flex-row py-4 space-x-32 bg-gray-100 z-10">
        <div class="flex flex-col p-4 ml-24">

          <div class="flex flex-col">
            <div class="rounded-xl overflow-hidden">
              <input type="range" v-model="age"
              class="appearance-none overflow-hidden bg-gray-400 pointer-events cursor-pointer rounded-xl w-56 h-5"
              name="age" min="5" max="20">
            </div>
            <label class="mt-5 ml-1" for="age">5 à 20 ans</label>
          </div>

          <div class="flex">
            <select class="ml-1 mt-10 p-2 bg-transparent text-black text-sm border rounded-xl" name="country">
              <option class="text-black text-sm" value="Bénin">Bénin</option>
              <option class="text-black text-sm" value="Nigéria">Nigéria</option>
              <option class="text-black text-sm" value="Algérie">Algérie</option>
            </select>
          </div>

        </div>
        <div class="flex flex-col items-center p-4">
          <h2 class="text-gray-700 text-sm ml-1">Couverture à:</h2>
          <div class="text-4xl text-gray-700 font-bold my-3">{{ percentages[0] }}</div>
        </div>
        <div class="flex flex-col items-center p-4">
          <h2 class="text-gray-700 text-sm ml-1">Couverture à:</h2>
          <div class="text-4xl font-bold my-3 text-arsen-green">{{ percentages[1] }}</div>
          <div class="p-2 border border-arsen-green rounded-xl font-bold text-sm text-arsen-green">Plus populaire</div>
        </div>
        <div class="flex flex-col items-center p-4">
          <h2 class="text-gray-700 text-sm ml-1">Couverture à:</h2>
          <div class="text-4xl text-gray-700 font-bold my-3">{{ percentages[2] }}</div>
        </div>
      </div>

      <div class="flex flex-col text-gray-700 ml-24 mt-10">
        <table class="table-auto">
          <tr class="flex flex-row space-x-12" :key="i" v-for="i in 5">
            <td class="flex flex-col w-1/5 mr-12 my-5 text-center">
              <select class="test-xl font-bold" :name="name_frais[i-1]">
                <option :key="j" v-for="j in 3" :value="frais[i-1]">{{ frais[i-1] }}</option>
              </select>
              <div class="text-left text-xs text-blue-500" v-if="i-1 === 0">(Couverture de base)</div>
            </td>
            <td class="text-center w-1/5 my-5" :key="k" v-for="k in 3">XOF 2000</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="sm:hidden flex flex-col mt-12">
      <div class="flex flex-col z-10">
        <div class="flex flex-col p-4 mx-8 my-8 rounded-xl shadow-xl" :key="i" v-for="i in 3">
          <div class="flex flex-col items-center mb-5">
            <h2 class="text-gray-700 text-lg ml-1">Couverture à:</h2>
            <div class="text-6xl font-bold my-3" :class="[ i === 2 ? 'text-arsen-green' : '', 'text-gray-700' ]">{{ percentages[i-1] }}</div>
            <div v-if="i === 2" class="p-2 border border-arsen-green rounded-lg font-bold text-arsen-green">Plus populaire</div>
          </div>
          <div class="flex flex-row justify-between text-gray-700 my-5" :key="i" v-for="i in 5">
            <div class="text-lg font-semibold">
              {{ frais[i-1] }}
              <div class="text-left text-xs text-blue-500 font-medium" v-if="i-1 === 0">(Couverture de base)</div>
            </div>
            <div>XOF 2000</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-5 sm:mx-24 sm:my-20">
      <div class="block text-black text-2xl sm:text-3xl font-semibold max-w-2xl my-8 leading-relaxed">
        Couverture <span class="text-arsen-green">personnalisée</span>
      </div>
      <div class="block text-black text-lg sm:text-sm max-w-4xl leading-10">
        Décidez de comment vous voulez être assurer. Choisissez le taux de couvertures qui vous convient pour les différents soins et obtenez une couverture adaptée à vos besoins.
      </div>
    </div>

    <div class="flex flex-col sm:flex-row">
      <div class="flex flex-col mx-5 my-10 sm:mx-24 sm:my-10">
        <div class="text-lg sm:text-2xl text-black font-bold mb-10">Exemple de calcul de couverture </div>
        <div>
          <ul class="space-y-5">
            <li>
              <div class="flex flex-row mx-2">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400">
                  <img src="../../assets/icons/ic_valide.svg">
                </div>
                <div class="text-center text-gray-700 text-lg sm:text-md mt-1 ml-4">+ 60% Soin courants</div>
              </div>
            </li>
            <li class="flex flex-row mx-2">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400">
                <img src="../../assets/icons/ic_valide.svg">
              </div>
              <div class="text-center text-gray-700 text-lg sm:text-md mt-1 ml-4">+ 100% Frais d'optique</div>
            </li>
            <li class="flex flex-row mx-2">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400">
                <img src="../../assets/icons/ic_valide.svg">
              </div>
              <div class="text-center text-gray-700 text-lg sm:text-md mt-1 ml-4">+ 80% hospitalisation</div>
            </li>
            <li class="flex flex-row mx-2">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400">
                <img src="../../assets/icons/ic_valide.svg">
              </div>
              <div class="text-center text-gray-700 text-lg sm:text-md mt-1 ml-4">+ 100% Frais dentaires</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col sm:w-1/3 ml-5 mt-5 mb-32 sm:ml-40 sm:mt-40 text-lg sm:text-xl text-black font-medium leading-10">
        Coût de l'assurance = 2600 + 1200 + 2300 + 1700 + 800 = 8600 FCFA / Mois soit 103 200 l'année.
      </div>
    </div>

    <footer-frame></footer-frame>
  </div>
</template>

<script>
import HeaderFrame from '../../components/helper/header-frame.vue'
import FooterFrame from '../../components/helper/footer-frame.vue'
// import ProgressBar from '../../components/progress-bar.vue'
export default {
  name: 'index',
  data () {
    return {
      age: 10,
      percentages: ['60%', '80%', '100%'],
      name_frais: [],
      frais: [
        'SOINS COURANTS',
        'HOSPITALISATION',
        'FRAIS D\'OPTIQUE',
        'FRAIS DENTAIRE',
        'AUTRES SOINS']
    }
  },
  components: { HeaderFrame, FooterFrame }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/sass/variables.scss';

// input[type=range]::-webkit-slider-thumb {
//     pointer-events: all;
//     width: 20px;
//     height: 20px;
//     border-radius: 0px;
//     box-shadow: -400px 0px 2px 400px $arsen-green;
//     background-color: $arsen-green;
//     -webkit-appearance: none;
// }

input[type=range]::-webkit-slider-thumb {
  transform: translateZ(0);
  box-shadow: -400px 0px 2px 400px $arsen-green;
  border: 4px solid $green-2;
  height: 50px;
  width: 10px;
  border-radius: 50px;
  background: $arsen-green;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
  position: relative;
  z-index: 1;
}

.circle {
    width: 400px;
    height: 400px;
    border-radius: 300px;
    border: solid;
    border-width: 50px;
    left: -260px;
    top: 273px;
    color: $green-circle;
    box-sizing: border-box;
    position: absolute;
}
.circle2 {
    width: 300px;
    height: 300px;
    left: -196px;
    top: 460px;
}
.text-arsen-green {
  color: $arsen-green;
}
.border-arsen-green {
  border-color: $arsen-green;
}
</style>
