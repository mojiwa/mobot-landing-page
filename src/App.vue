<script lang="ts">

import { defineComponent } from '@vue/runtime-core';
import LandingVue from './components/Landing.vue';

export default defineComponent({
  Name: 'Application',
  components: {
    LandingVue
  }
});

</script>

<template>
  <div>
    <LandingVue />
  </div>
</template>