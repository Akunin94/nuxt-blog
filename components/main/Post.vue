<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header
      slot="header"
      class="post-header"
    >
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time" />
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-image">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/International_Business_Center._Tashkent_city.jpg"
        alt="Tashkent"
        class="post-img"
      >
    </div>
    <footer class="post-footer">
      <el-button
        round
        @click="openPost"
      >
        Открыть пост
      </el-button>
      <span>
        <i class="el-icon-message" />
        13
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id';
      this.$router.push(`/post/${id}`)
      // this.$router.push(`/post/${this.post.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-image {
      font-size: 0;
    }
    &-img {
      width: 100%;
      height: auto;
    }
    &-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }
  }
</style>