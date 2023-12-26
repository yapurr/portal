<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'articles',
    // alias: 'articles',
    title: '近期文章',
    description: 'Devour Knowledge, One Article at a Time!',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <section>
    <TheHeader>
      <div class="container mx-auto px-4">
        <h2 class="mb-2 text-4xl">最近 Yapurr 的贡献者们又发表了哪些文章呢？</h2>
        <!-- <div class="flex items-center">
          <h6>Source for this blog</h6>
          <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            to="https://developers.forem.com/api/v1"
            target="_blank"
            ><span>Click here</span>
          </BaseButton>
        </div> -->
      </div>
      <p class="font leading-tight mb-2 text-2xl">
              （wer~看来目前什么也没有呢~）
            </p>
    </TheHeader>
    <!-- <ArticleList /> -->
  </section>
</template>
<style scoped></style>
