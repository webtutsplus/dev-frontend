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
      <a href="#" class="btn btn-primary disabled">View Article</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: [
    'title',
    'description',
    'tags'
  ]
}
</script>

<style>

</style>