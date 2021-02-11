<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{tag}}</h5>
            <a href="#" class="card-link">View Posts</a>
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