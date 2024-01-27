<script setup>
const r2h = ref({ r: 255, g: 180, b: 0 })
const hex = ref('#cc00ff')
const h = ref('#cc00ff')
const rgb = ref([255, 180, 0])
/**
 * rgb转16进制
 */
function rgb2hex() {
  const { r, g, b } = r2h.value
  const rgb = (r << 16) | (g << 8) | b
  hex.value = `#${rgb.toString(16).padStart(6, '0')}`
}
// 16进制转rgb
function hex2rgb() {
  rgb.value = [(h.value >> 16) & 0xFF, (h.value >> 8) & 0xFF, h.value & 0xFF]
}
</script>

<template>
  <div flex="~ col" items-center>
    <h1>RGB颜色值转换成十六进制颜色码：</h1>
    <div flex="~ col">
      <div flex="~ gap4">
        <input v-model="r2h.r" type="number">
        <input v-model="r2h.g" type="number">
        <input v-model="r2h.b" type="number">
      </div>
      <button @click="rgb2hex">
        转换
      </button>
      <div>{{ hex }}</div>
      <div h-10 w-10 :style="{ backgroundColor: hex }" />
    </div>
    <h1>十六进制颜色码转换成RGB颜色值：</h1>
    <div>
      <input v-model="h" type="text">
      <button @click="hex2rgb">
        转换
      </button>
      <div>{{ rgb }}</div>
      <div h-10 w-10 :style="{ backgroundColor: `rgb(${rgb})` }" />
    </div>
  </div>
</template>
