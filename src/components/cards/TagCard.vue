<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">#{{tag}}</h5>
            <router-link v-bind:to="'/tags/'+tag" class="card-link">View Articles</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagCard',
    props: [
        'tag'
    ]
}
</script>

<style>

</style>
