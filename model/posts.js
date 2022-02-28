module.exports = {

    posts: [
        {
            id: "ieohfeioj",
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet"
        }
    ],

    getAll(){
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({id: generateId(), title, description})
    }

}

function generateId() {
    return Math.random().toString(36).substr(2, 9)
}