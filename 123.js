
let userName = (username) => {
    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(users => users.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json()),
        fetch("https://jsonplaceholder.typicode.com/comments").then(comments => comments.json())
    ])
        .then(([users, posts, comments]) => {
            let userdata = {

                userId: "",
                username: '',
                name: '',
                email: '',
                city: '',
                post: [
                    {
                        title: "",
                        arrayCmt: [
                            {
                                name: "",
                                body: "",
                            }
                        ]
                    }
                ]
            };


            let postToComment = {

            }
            let userToPost = {

            }
            let user ={

            }
            for (let i = 0; i < users.length; i++) {
                if(username===users[i].username){
                     user ={
                         userId:users[i].id,
                         username:users[i].username,
                         name:users[i].name,
                         email:users[i].email,
                         city:users[i].address.city,
                         post:[]
                     }

                }

            }

            for (let i = 0; i < posts.length; i++) {
                if(user.userId === posts[i].userId){
                 user.post.push({
                     id:posts[i].id,
                     title: posts[i].title,
                     comment:[]

                 })
                }
            }
            console.log(user.post[1].id)
            for (let i = 0; i < comments.length; i++) {
                        if (comments[i].postId === user.post[i].id){
                            user.post[i].comment.push({
                                postId:comments[i].postId,
                                name:comments[i].name,
                                body:comments[i].body
                            })
                        }
                // console.log(user.post[i].comment)
            }
            // console.log(user)
        })


        .catch((err) => {
            console.log(err);
        });
}
userName("Bret");