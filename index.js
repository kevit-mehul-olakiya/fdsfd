
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
            for(let i=0;i<comments.length;i++){

                if(!postToComment[comments[i].postId]){
                    postToComment[comments[i].postId] = []
                    postToComment[comments[i].postId].push( {
                        id:comments[i].id,
                        postId:comments[i].postId,
                        name:comments[i].name,
                        body:comments[i].body
                    })

                }
                else{

                    postToComment[comments[i].postId].push( {
                        id:comments[i].id,
                        postId:comments[i].postId,
                        name:comments[i].name,
                        body:comments[i].body
                    })

                }

            }
            // console.log()
            for (let i = 0; i < posts.length; i++) {
             if(!userToPost[posts[i].userId]){

                 userToPost[posts[i].userId] = []

                 userToPost[posts[i].userId].push({
                     id:posts[i].userId,
                     userId:posts[i].userId,
                     title:posts[i].title,
                     comment:[]
                 })

             }else{
                 userToPost[posts[i].userId].push( {
                     id:posts[i].id,
                     userId:posts[i].userId,
                     title:posts[i].title,
                     comment :[]
                 })

             }

            }
            console.log(userToPost)
            for (let i = 0; i < users.length; i++) {
                if(username===users[i].username){

                        userdata.userId=users[i].id,
                        userdata.username=users[i].username,
                        userdata.name=users[i].name,
                        userdata.email=users[i].email,
                        userdata.city=users[i].address.city
                }

            }

            // console.log(userdata)
             })

        .catch((err) => {
            console.log(err);
        });
}
userName("Bret");