<script setup lang="ts">

  const props = defineProps({
    result: {
      type: Object,
      required: true,
    },
    loading: {
      // type: "lazy" || "eager" || undefined,
      required: false,
      default: 'lazy',
    },
    tag: {
      type: Boolean,
      required: false,
      default: false,
    },
    image: {
      type: Boolean,
      default: false,
    }
  });
</script>

<template>
  <a class="flex flex-col gap-2 group p-2 transition-colors duration-200 ease-in-out" :href="props.result.collection === 'news' ? `/${result.collection}/${result.slug}` : `/${result.collection}#${result.slug}`">
    <img
      v-if="image"
      :src="result.data.image"
      :alt="result.data.title"
      class="w-full aspect-video object-cover rounded-lg"
    />
    <div class="flex">
      <div class="w-full">
        <div>
          <h1 class="text-lg">
            <span>
              {{ result.data.title }}
            </span>
          </h1>
          <p>
            {{ result.data.summary }}
          </p>
        </div>
        <div v-if="tag" class="flex flex-wrap mt-2 gap-1 overflow-x-scroll">
          <div class="flex flex-nowrap justify-start items-center p-1 px-2 rounded bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
            <span class="block capitalize text-xs">{{ result.collection }}</span>
          </div>
        </div>
      </div>
      <div class="flex-none flex justify-center items-center pl-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-current group-hover:dark:stroke-current">
          <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-200 ease-in-out" />
          <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-200 ease-in-out" />
        </svg>
      </div>
    </div>
  </a>
</template>
