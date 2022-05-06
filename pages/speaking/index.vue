<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Speaking</h1>
      <posts post-type="speaking" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content('speaking').fetch();
    } catch (e) {
      error({ message: 'Speaking not found' });
    }
    return { posts };
  },
};
</script>
