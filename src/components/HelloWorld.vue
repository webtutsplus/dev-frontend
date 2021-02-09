<template>
  <div class="crayons-article__main">
    <!-- <p> {{msg}} </p> -->
    <div v-html="msg" class="crayons-article__body text-styles spec__body" data-article-id="1" id="article-body"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
