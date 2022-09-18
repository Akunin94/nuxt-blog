<template>
  <el-card class="comment">
    <div class="comment-header">
      <span class="comment-name">Person name</span>
      <i class="el-icon-time">{{ new Date().toLocaleString() }}</i>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iste?
    </div>
  </el-card>  
</template>

<script>
export default {
  name: 'AppComment',
  props: [
    'comment',
  ]
}
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;

    &-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
    }

    &-text {
      white-space: pre-line;
    }
  }
</style>