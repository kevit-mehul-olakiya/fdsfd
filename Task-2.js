
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
                        comment: [
                            {
                                name: "",
                                body: "",
                            }
                        ]
                    }
                ]
            };

            for (let i = 0; i < users.length; i++) {

                if (username === users[i].username) {
                    let user = users[i]
                    userdata.userId = user.id
                    userdata.username = user.username
                    userdata.name = user.name
                    userdata.city = user.address.city
                    userdata.email = user.email

                    // console.log(users[i])

                    for (let j = 0; j < posts.length; j++) {
                        if (user.id === posts[j].userId) {
                            let post = posts[j];
                            let Id = posts[j].userId
                            console.log(post.title)

                            for (let k = 0; k < comments.length; k++) {
                                if (Id === comments[k].postId) {
                                    let comment = comments[k];
                                    // console.log(userdata.post)
                                    //  console.log(comment)
                                    const demo1 = [{
                                        name: comment.name,
                                        body: comment.body
                                    }]
                                    console.log(demo1)

                                }
                            }
                        }
                    }
                }

            }

            console.log(userdata)
        })
        .catch((err) => {
            console.log(err);
        });
}
userName("Bret");