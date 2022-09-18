const posts = [
  {title: 'Post', date: new Date, views: 22, comments: [1, 2], _id: 'id1'},
  {title: 'Post1', date: new Date, views: 53, comments: [3, 4], _id: 'id2'},
]

export const actions = {
  async fetchAdmin({}) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 500)
    })
  },
  async fetchAdminById({}, id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(post => post._id === id))
      }, 500)
    })
  },
  async remove({}, id) {
    
  },
  async update({}, {text, id}) {
    
  },
  async create({commit}, {title, text, image}) {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      console.log(image)
      formData.append('image', image, image.name);

      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 500)
      })
    } catch (e) {
      commit('setError', e, {root: true})
      throw e;
    }
  }
}