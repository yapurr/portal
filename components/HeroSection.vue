<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
    <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0"
      :style="bgStyles"
    >
      <!-- <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0 bg-design-image lg:bg-design-image-large"
    > -->
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200"
              >
                Yapurr 的使命
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                用商业保护动物
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                在这个人类社会中，每时每刻都有动物在被爱着、或被伤害着。<br>
                在 Yapurr，我们希望通过商业帮助到后者。为此，我们计划定期将企业利润收入的 30%（筹）投入到动物保护中，并向全社会公开详细内容及进度。
              </p>
              <BaseButton
                size="xl"
                label="our-mission"
                target="_blank"
                to="/our-mission"
              >
                <div class="inline-block ml-1 p-0.5 text-lg">了解更多</div>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
