<template>
  <div class="hello">
    <h1>简单实现一个vuex</h1>
    <h3>normal：{{ number }}</h3>
    <h3>double：{{ doubleNumber }}</h3>
    <div class="opt">
      <button class="btn" @click="() => { this.$store.commit('add', 1) }">add</button>
      <button class="btn" @click="() => { this.$store.commit('sub', 1) }">sub</button>
      <button class="btn" @click="() => { this.$store.dispatch('addFive', 5) }">addFive</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    number(){
      return this.$store.state.number;
    },
    doubleNumber(){
      return this.$store.getters.doubleNumber;
    }
  },
}
</script>

<style scoped>
  .opt {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 60px;
    height: 30px;
    background: #07D08C;
    border: 0;
    border-radius: 4px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
  }
  .btn:last-child {
    margin-right: 0;
  }
</style>
