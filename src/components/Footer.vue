<script setup>
const { OpenSignIn, OpenSignUp } = useModalStore();
const listAry = reactive([
  { name: 'Sign in', method: OpenSignIn },
  { name: 'Sign up', method: OpenSignUp },
]);
const data = reactive({
  copyright: 'All Rights Reserved.',
  company: '僅用於個人學習使用，非商業用途',
  year: '@' + new Date().getFullYear(),
});
</script>
<template>
  <footer class="Footer">
    <div class="container py-3 lg:flex lg:justify-between lg:py-6">
      <div class="md:flex md:items-center">
        <h5 class="text-lg font-400 text-black" title="TICKET BAZAAR">
          <a href="/">TICKET BAZAAR</a>
        </h5>
        <div class="copyright justify-center md:ml-4 md:flex">
          <p>{{ data.year }}. {{ data.copyright }}</p>
          <p>{{ data.company }}</p>
        </div>
      </div>
      <div
        class="hidden flex-grow basis-full items-center lg:flex lg:flex-grow-0 lg:basis-auto"
      >
        <ul class="navbar-nav mt-4 flex list-none flex-col lg:mt-0 lg:flex-row">
          <li
            class="lg:mr-8"
            v-for="item in listAry"
            :key="item.name"
            @click="item.method"
          >
            <a
              href="javascript:;"
              class="block p-[0.5rem] text-center text-muted"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.navbar-nav > li:last-child {
  @include pad(992) {
    margin-right: 0;
  }
}
</style>
