<template>    
  <el-form
    :style="{maxWidth: '600px'}"
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h2 class="mb-1">Создать новый пост</h2>
    <el-form-item
      label="Название поста"
      prop="title"
    >
      <el-input v-model.trim="controls.title" />
    </el-form-item>
    <el-form-item
      label="Текст в формате .md или .html"
      prop="text"
    >
      <el-input
        type="textarea"
        resize="none"
        :rows="10"
        v-model="controls.text" 
      />
    </el-form-item>
    <el-button
      type="success"
      plain
      @click="previewDialog = true"
      class="mb-2"
    >
      Предпросмотр
    </el-button>
    <el-dialog
      title="Предпросмотр"
      :visible.sync="previewDialog"
    >
      <div :key="controls.text">
        <VueMarkdown>{{ controls.text }}</VueMarkdown>
      </div>
    </el-dialog>
    <el-upload
      class="mb-1"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
    </el-upload>
    <el-form-item>
      <el-button
        type="primary"
        round
        native-type="submit"
        :loading="loading"
      >
        Создать пост
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middlewrare: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
      },
      rules: {
        title: [
          {
            required: true,
            message: 'Введите название',
            trigger: 'blur',
          }
        ],
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
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true;
          
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData);
            this.$message.success('Пост создан');
            this.controls.title = '';
            this.controls.text = '';
            this.image = '';
            this.$refs.upload.clearFiles();
          } catch (e) {
            
          } finally {
            this.loading = false;
          }
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    },
    handleImageChange(file,filelist) {
      this.image = file.raw
    }
  }
}
</script>

<style lang="scss" scoped>

</style>