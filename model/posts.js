module.exports = {

    posts = [],

    getAll(){
        return this.posts
    },

    newPost(title, description) {
        this.post.push({id: generateId(), title, description})
    }

}

function generateId() {
    return Math.random().toString(36).substr(2, 9)
}