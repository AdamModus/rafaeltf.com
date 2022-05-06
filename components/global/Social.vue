<template>
  <a
    target="blank"
    class="mr-4 bg-gray-600 w-10 md:h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
    :href="href"
  >
    <span class="hidden">{{ label }}</span>
    <img width="24" height="24" :src="imgSrc" alt="twitter" />
  </a>
</template>

<script>
export default {
  props: {
    label: { type: String, default: () => undefined },
    href: { type: String, default: () => undefined },
    imgSrc: { type: String, default: () => undefined },
  },
};
</script>
