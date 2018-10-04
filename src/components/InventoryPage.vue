<template>
  <div>
    <navbar></navbar>
    <inventory-content></inventory-content>
    <footer-block></footer-block>
  </div>
</template>

<script>
    import Navbar from '@/components/header/Navbar'
    import InventoryContent from '@/components/common/InventoryContent'
    import FooterBlock from '@/components/footer/FooterBlock'

    export default {
      name: "InventoryPage",
      components: {
        Navbar,
        InventoryContent,
        FooterBlock
      }
    }
</script>

<style>

</style>
