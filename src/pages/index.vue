<script lang="ts">
import {invoke} from "@tauri-apps/api";

export default {
  mounted: function (): void {

    invoke('greet', {name: 'Tauri'}).then((value) => {
      console.log(value);
      window.header.innerHTML = value;
    });
    // println!("Hello World");
  }
};

</script>

<template>
  <div class="p-4 flex gap-4">
    <button class="btn">Hello daisyUI</button>
    <select class="select w-full max-w-xs" v-model="colorMode.preference">
      <option disabled selected>Theme</option>
      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
  </div>
  <div class="hero bg-base-200 py-10">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there, from NUXT.js, Tauri, Tailwind CSS, DaisyUI</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
</script>