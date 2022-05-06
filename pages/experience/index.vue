<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Experience</h1>
      <posts post-type="experience" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content('experience').fetch();
    } catch (e) {
      error({ message: 'Experience not found' });
    }
    return { posts };
  },
};
</script>
