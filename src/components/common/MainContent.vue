<template>
    <div>
      <banners-block></banners-block>
      <limited-block></limited-block>
      <items-block></items-block>
      <news-block></news-block>
      <seo-block></seo-block>
    </div>
</template>

<script>
    import BannersBlock from '@/components/common/BannersBlock/BannersBlock'
    import LimitedBlock from '@/components/common/LimitedBlock/LimitedBlock'
    import ItemsBlock from '@/components/common/ItemsBlock/ItemsBlock'
    import NewsBlock from '@/components/common/NewsBlock/NewsBlock'
    import SeoBlock from '@/components/common/SeoBlock/SeoContent'

    export default {
        name: "MainContent",
        components: {
          LimitedBlock,
          BannersBlock,
          ItemsBlock,
          NewsBlock,
          SeoBlock
        }
    }
</script>

<style scoped>

</style>
