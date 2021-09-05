<template>
<div>
    <div class="header shadow-md w-screen bg-white">
        <header-frame page="remboursements"></header-frame>
    </div>

    <div class="flex flex-col items-center text-center my-20">
        <div class="block text-black text-4xl sm:text-3xl font-semibold my-8 leading-relaxed">
            Remboursements
        </div>
        <div class="block text-black text-xl sm:text-sm md:w-1/2 leading-8">
            Chez Arsen, pour vos soins vous pouvez vous rendre chez un de nos partenaire pour bénéfier du paiement par tiers-payant. Ou avancer les frais et vous faire rembourcer plus tard. Rembourcement simple et en moins de 2h
        </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:space-x-10 mx-5 sm:mx-5 my-5">
        <div class="flex flex-col items-center">
            <img class="w-64 my-5" src="../../assets/images/webp/rafiki1.webp">
            <div class="sm:hidden text-xl text-black text-center font-bold leading-relaxed my-3">
                Faites un demande
            </div>
            <div class="text-xl sm:text-sm text-black text-center leading-relaxed sm:w-3/4">
                Fournissez les informations nécessaires au service d’assistance via le chat arsen pour demander un rembourcement.
            </div>
        </div>
        <div class="flex flex-col items-center">
            <img class="w-64 my-5" src="../../assets/images/webp/rafiki2.webp">
            <div class="sm:hidden text-xl text-black text-center font-bold leading-relaxed my-3">
                Reçu du paiement
            </div>
            <div class="text-xl sm:text-sm text-black text-center leading-relaxed sm:w-3/4">
                Envoyez une photo de la facture payée pour validation pour le service d’assistance.
            </div>
        </div>
        <div class="flex flex-col items-center">
            <img class="w-64 my-5" src="../../assets/images/webp/rafiki3.webp">
            <div class="sm:hidden text-xl text-black text-center font-bold leading-relaxed my-3">
                Vous êtes remboursé
            </div>
            <div class="text-xl sm:text-sm text-black text-center leading-relaxed sm:w-3/4">
                Votre demande est acceptée, choisissez votre moyen de paiement favori pour recevoir votre argent.
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center my-24 sm:my-32">
        <img class="hidden sm:flex w-5/6" src="../../assets/images/webp/img_remboursements.webp">
        <img class="sm:hidden" src="../../assets/images/webp/img_remboursements_2.webp">
        <div class="text-xl sm:text-lg text-black text-center leading-relaxed sm:w-1/2 mt-20">
            N’attendez plus, assurez vous et votre famille dès aujourd’hui sur Arsen, c’est simple et transparent.
        </div>
        <div class="my-10 flex flex-row sm:flex-1 space-x-8">
            <a href="#"><img class="w-40" src="../../assets/images/webp/google_play.webp"/></a>
            <a href="#"><img class="w-40" src="../../assets/images/webp/app_store.webp"/></a>
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
