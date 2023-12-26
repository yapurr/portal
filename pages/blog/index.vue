<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: '官方博客',
    description: '阅读与学习，分享官方资讯与动物相关知识！',
    navOrder: 4,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div class="pb-12">
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl">Blog</h2>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">想与我们进一步拉近距离？</h6>
          <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            to="https://github.com/vuejs/blog"
            target="_blank"
            ><span>Yapurr 官方小红书账号</span>
          </BaseButton>
          <!-- <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            to=""
            target="_blank"
            ><span>Yapurr 官方微博账号</span>
          </BaseButton> -->
        </div>
        <slot />
      </div>
    </TheHeader>
    <BlogList />
  </div>
</template>
