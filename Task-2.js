
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
            let title = []
            let comment = [];
            for (let i = 0; i < users.length; i++) {

                if (username === users[i].username) {
                    let user = users[i]
                    userdata.userId = user.id
                    userdata.username = user.username
                    userdata.name = user.name
                    userdata.city = user.address.city
                    userdata.email = user.email
                    for (let j = 0; j < posts.length; j++) {
                        if (user.id === posts[j].userId) {
                            let post = posts[j];
                            let Id = posts[j].id

               userdata.post.push({
                                  id:post.id,
                                  title: post.title,
                                  comments: [{
                                      name : " ",
                                      body:" "
                                  }]

                              })



                            for (let k = 0; k < comments.length; k++) {
                                if (Id === comments[k].postId) {

                                userdata.post.push(comments=[{
                                    postId:comments[k].postId,
                                    name:comments[k].name,
                                    body:comments[k].body
                                }])

                                }
                            }
                        }
                    }
                }

            }
            // for (let i = 0; i < userdata.post.length; i++) {
            //     for (let j = 0; j < comment.length; j++) {
            //       if (userdata.post[i].id===comment[j].postId){
            //           userdata.post[i].comments.push({
            //               name:comment[j].name,
            //               body:comment[j].body
            //           })
            //       }
            //     }
            //
            // }

            console.log(userdata)
        })

        .catch((err) => {
            console.log(err);
        });
}
userName("Bret");