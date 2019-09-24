<template>
  <div>
    count: {{ $store.state.count }}
    <button @click="addCount">加法</button>
    <button @click="decrement">减法</button>
  </div>
</template>

<script>
export default {
  methods:{
    addCount(){
      console.log(this.$store.state.count)
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  }
}
</script>