<template>
  <div>
    <navbar></navbar>
    <detail-content></detail-content>
    <footer-block></footer-block>
  </div>
</template>

<script>
    import Navbar from '@/components/header/Navbar'
    import DetailContent from '@/components/common/DetailContent'
    import FooterBlock from '@/components/footer/FooterBlock'

    export default {
        name: "DetailPage",
        components: {
          Navbar,
          DetailContent,
          FooterBlock
        }
    }
</script>

<style scoped>

</style>
