<template>
    <div>
      <navbar></navbar>
      <main-content></main-content>
      <footer-block></footer-block>
    </div>
</template>

<script>
    import Navbar from '@/components/header/Navbar'
    import MainContent from '@/components/common/MainContent'
    import FooterBlock from '@/components/footer/FooterBlock'

    export default {
        name: "MainPage",
        components: {
          Navbar,
          MainContent,
          FooterBlock
        }
    }
</script>

<style scoped>

</style>
