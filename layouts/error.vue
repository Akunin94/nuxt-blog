<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">{{ error.message }}</h1>
      <el-button
        type="primary"
        plain
        @click="toMainPage"
      >
        Вернуться на главную
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    toMainPage() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }

  .error-title {
    color: rgb(145,6,6);
    margin-bottom: 1rem;
  }

  .el-button a {
    text-decoration: none;
  }
</style>