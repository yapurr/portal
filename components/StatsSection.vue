<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'StatsSection',
  // 	},
  // })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <!-- <img
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          /> -->
          <NuxtImg
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6
            class="font-bold mb-2 text-primary-600 dark:text-primary-200"
          >
            我们如何完成使命？
          </h6>
          <h3 class="capitalize mb-6">我们进行创造</h3>
          <p>
            我们为被爱着的动物朋友们创造更美好的生活、提供更高质量的服务，并通过所获报酬为那些暂时还没被爱着的动物朋友们改善生活、寻找愿意真心爱它们的人。
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">宠物用品设计</h2>
              <p>我们设计优质的宠物用品，比如餐具、智能家电、服饰…并将艺术与科技有机融合，为人宠和谐的优质生活添砖加瓦。</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">生活服务</h2>
              <p>我们计划于若干年内在全国各地直营人宠生活护理门店，为人宠和谐家庭提供高质量且全国统一高标准的生活服务。</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">摄影服务</h2>
              <p>我们为人宠和谐家庭提供摄影服务，旨在帮助各个家庭记录下美好的生活碎片以及孩子们的成长旅程。</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">旅游服务</h2>
              <p>我们计划于一年内于多处试运行人宠结伴自然旅游团（两天一夜游）活动，帮助人宠创造更加坚固的羁绊。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
