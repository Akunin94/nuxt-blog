<template>
  <div class="page-wrap">
    <el-breadcrumb
      separator="/"
      class="mb-1"
    >
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item
        label="Текст в формате .md или .html"
        prop="text"
      >
        <el-input
          type="textarea"
          resize="none"
          :rows="10"
          v-model.trim="controls.text" 
        />
      </el-form-item>
      <div class="mb-1">
        <small class="mr-1">
          <i class="el-icon-time" />
          <span>{{ new Date(post.date).toLocaleString() }}</span>
        </small>
        <small>
          <i class="el-icon-view" />
          <span>{{ post.views }}</span>
        </small>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middlewrare: ['admin-auth'],
  head() {
    return {
      title: this.post.title
    }
  },
  validate({params}) {
    return !!params.id
  },
  data() {
    return {
      loading: false,
      controls: {
        text: '',
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Введите текст',
            trigger: 'blur',
          }
        ]
      }
    }
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          
          const formData = {
            text: this.controls.text,
            id: this.post._id,
          }

          try {
            await this.$store.dispatch('post/update', formData);
            this.$message.success('Пост обновлен');
            this.loading = false;
          } catch (e) {
            this.loading = false;
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-wrap {
    max-width: 600px;
  }
</style>