<template>
  <div>
    <nav class="hidden lg:block fixed z-10 top-0 inset-x-0" aria-label="Desktop Menu">
      <ul class="flex flex-wrap p-3">
        <li v-for="(item, index) in items" :key="index" class="flex-1" :class="index === 0 ? '' : 'ml-3'">
          <nuxt-link class="btn block" :to="item.href">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <div v-if="!mobileNavVisible" class="lg:hidden fixed top-0 left-0 m-3 z-10">
      <component :is="'icon-dots'" title="Toggle menu" @click.stop="menuClicked" />
    </div>

    <div class="mobile-nav-backdrop" :class="mobileNavVisible ? 'show-mobile-nav' : ''" @click.stop="menuClicked">
      <nav class="mobile-nav-content lg:hidden p-3" aria-label="Mobile Menu">
        <div>
          <component :is="'icon-cross'" title="Toggle menu" @click.stop="menuClicked" />
        </div>

        <ul class="">
          <li v-for="(item, index) in items" :key="index" class="mt-3">
            <nuxt-link class="btn block z-10" :to="item.href">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import IconCross from '~/components/icons/cross.svg?inline';
import IconDots from '~/components/icons/dots.svg?inline';

export default {
  name: 'Header',

  components: {
    IconCross,
    IconDots,
  },

  data: () => ({
    mobileNavVisible: false,
    items: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
      {
        title: 'Experience',
        href: '/experience',
      },
      {
        title: 'Speaking',
        href: '/speaking',
      },
      {
        title: 'About',
        href: '/about',
      },
    ],
  }),

  methods: {
    menuClicked() {
      this.mobileNavVisible = !this.mobileNavVisible;
    },
  },
};
</script>

<style lang="postcss" scoped>
.icon {
  width: 44px;
  height: 44px;
  background-color: var(--bg);
  border-color: var(--border-color);
  @apply relative m-0 p-2 top-0 cursor-pointer rounded border transition-all duration-200 ease-in-out;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--border-color-secondary);
    @apply text-white;
  }
}

.mobile-nav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  transform: translateX(-101%);
  transition: transform 0.3s;
  will-change: transform;
  z-index: 1;

  &.show-mobile-nav {
    transition: transform 0.3s, background-color 0.3s linear 0.2s;
    transform: translateX(0);
    background-color: rgba(127, 127, 127, 0.3);
  }
}

.mobile-nav-content {
  background-color: black;
  height: 100%;
  width: 60%;
}
</style>
