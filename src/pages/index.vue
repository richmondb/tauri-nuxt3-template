<script lang="ts">
import {invoke} from "@tauri-apps/api";
import { ref } from 'vue'

export default {
  mounted: async function (): Promise<void> {

    await invoke('greet', {name: 'Tauri'}).then((value) => {
      console.log(value);
      const headerElement = document.getElementById("header");
      if (headerElement) {
        headerElement.innerHTML = value as string; // Type assertion to string
      } else {
        console.error("Header element not found.");
      }
    }).catch((e) => {
      console.error(e);
    })
    // println!("Hello World");
  }
};

</script>

<template>
  <h1 id="header" class="text-2xl text-center font-bold"></h1>
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
        <p class="py-6">Test</p>
        <div class="w-full flex flex-col items-center gap-3">
          <h1  class="text-2xl text-center font-bold">Click Button to Increment Count</h1>
          <button v-on:click="click" class="btn btn-primary max-w-fit">{{ count }}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const count = ref(0)

function click(): void {
  count.value++
}

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