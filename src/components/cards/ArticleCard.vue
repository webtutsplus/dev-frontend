<template>
  <div class="card">
    <div class="card-header">
      <span v-for="tag in tags" :key="tag">
        {{tag+' '}}
      </span>

    </div>
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{description}}</p>
      <a v-bind:href="'/articles/'+id" class="btn btn-primary">View Article</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: [
    'title',
    'description',
    'tags',
    'id'
  ]
}
</script>

<style>

</style>