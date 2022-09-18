<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <el-button
            icon="el-icon-back"
            circle
          />
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time" />
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view" />
          53
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f7/International_Business_Center._Tashkent_city.jpg"
          alt="Tashkent"
          class="post-img"
        >
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi distinctio non cupiditate maiores modi in voluptatum itaque minus cum fugiat molestias tempora magnam soluta, nemo quidem sapiente ducimus illum quisquam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi distinctio non cupiditate maiores modi in voluptatum itaque minus cum fugiat molestias tempora magnam soluta, nemo quidem sapiente ducimus illum quisquam!</p>
    </main>
    <footer>
      <AppCommentForm
        v-if="canAddComment"
        @created="createCommentHandler"
      />
      <div
        v-if="true"
        class="post-comments"
      >
        <AppComment 
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div
        v-else
        class="text-center"
      >
        Комментариев нет
      </div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment.vue';
import AppCommentForm from '@/components/main/CommentForm.vue';

export default {
  validate({params}) {
    return !!params.id;
  },
  layout: 'blog',
  components: {
    AppComment,
    AppCommentForm,
  },
  data() {
    return {
      canAddComment: true,
    }
  },
  methods: {
    createCommentHandler() {
      this.canAddComment = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;

    &-header {
      margin-bottom: 1.5rem;
    }

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    &-image {
      font-size: 0;
    }

    &-img {
      width: 100%;
      height: auto;
    }

    &-content {
      margin-bottom: 2rem;
    }
  }
</style>