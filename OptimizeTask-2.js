
let userName =  (username) => {
     Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(users => users.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json()),
        fetch("https://jsonplaceholder.typicode.com/comments").then(comments => comments.json())
    ]).then(([users,posts,comments])=>{

      let postToComment = {}
      let userToPost = {}
      let user = {}
      for(let i=0;i<comments.length;i++){
          if(!postToComment[comments[i].postId]){
              postToComment[comments[i].postId] = []
              postToComment[comments[i].postId].push( {
                  name:comments[i].name,
                  body:comments[i].body
              })
          }
          else{
              postToComment[comments[i].postId].push( {
                  name:comments[i].name,
                  body:comments[i].body
              })
          }
      }

      for (let i = 0; i <posts.length; i++) {
          if(!userToPost[posts[i].userId]){

              userToPost[posts[i].userId] = []

              userToPost[posts[i].userId].push({

                  title:posts[i].title,
                  comment:postToComment[posts[i].id]
              })
          }else{
              userToPost[posts[i].userId].push( {

                  title:posts[i].title,
                  comment:postToComment[posts[i].id]
              })
          }
      }
      for (let i = 0; i <users.length; i++) {
          if(username === users[i].username){
              user = {
                  userId:users[i].id,
                  name:users[i].name,
                  username:users[i].username,
                  email:users[i].email,
                  city:users[i].address.city,
                  post : userToPost[users[i].id]
              }
          }
      }
      console.log(user)

  })






}

userName("Bret")
