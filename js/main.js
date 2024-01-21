document.addEventListener('DOMContentLoaded',()=>{
    //fetching data from the API 
    // alert("js is working")


    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(users=>{
            const userSelect_el=document.querySelector('#users')
            // console.log(users)
            users.forEach(user=>{
                const option_el=document.createElement('option')
                // console.log(option_el)
                
                option_el.value = user.id;
                option_el.text = user.name;
                userSelect_el.appendChild(option_el);


                //adding the dynamic change on the dom

                userSelect_el.addEventListener('change',(e)=>{
                    e.preventDefault()
                    //read the user id
                    const selectedUserId = userSelect_el.value;
                    const selectedUser = users.find(user => user.id == selectedUserId);

                    document.querySelector(".fullname").textContent=selectedUser.name
                    document.querySelector(".username").textContent=selectedUser.username
                    document.querySelector(".website").textContent=selectedUser.website
                    document.querySelector(".about").textContent=selectedUser.company.catchPhrase


                    //loading the posts of the selected user


                
                     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
                     .then(res=>res.json())
                     .then(posts=>{
                       
                        const postsWrapper_el=document.querySelector(".posts-wrapper");
                        
                        console.log(postsWrapper_el)
                        posts.forEach(post=>{ console.log(posts)
                                
                            postsWrapper_el.innerHTML=''
                            postsWrapper_el.innerHTML=`
                            <div class="post-div">
                     <div class="user-profile-pic">
                        <img src="/assets/profile-pic.avif" alt="">
                        
                     </div>
                     <div class="post-details">
                        <p class="username">${user.name}</p>
                        <p class="post-content">${post.body}</p>
                        <div class="post-actions">
                            <div class="post-action">
                                <img src="/assets/chatbubble-ellipses-outline.svg" alt="">
                                <p>200</p>
                            </div>

                            <div class="post-action">
                                <img src="/assets/arrow-undo-outline.svg" alt="">
                                <p>300</p>
                            </div>

                            <div class="post-action">
                                <img src="/assets/heart-outline.svg" alt="">
                                <p>100</p>
                            </div>

                        </div>


                     </div>
                </div>
                            `

                                //add the click event on clicking on a specific post
                                const postDiv_el= document.querySelector('.post-content');
                                
                                postDiv_el.addEventListener('click',()=>{
                                    alert(post.id)
                                    
                                    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id} `)
                                    .then(res=>res.json())
                                    .then(comments=>{
                                        console.log(comments)

                                        const commentWrapper_el=document.querySelector('.comments-wrapper')
                                        comments.forEach(comment=>{
                                            commentWrapper_el.innerHTML=`
                                        <div class="post-div">
                                        <div class="user-profile-pic">
                                           <img src="/assets/profile-pic.avif" alt="">
                                           
                                        </div>
                                        <div class="post-details">
                                           <p class="username">Leonardo</p>
                                           <p class="post-content">${comment.body}</p>
                                           <div class="post-actions">
                                               <div class="post-action">
                                                   <img src="/assets/chatbubble-ellipses-outline.svg" alt="">
                                                   <p>200</p>
                                               </div>
                    
                                               <div class="post-action">
                                                   <img src="/assets/arrow-undo-outline.svg" alt="">
                                                   <p>300</p>
                                               </div>
                    
                                               <div class="post-action">
                                                   <img src="/assets/heart-outline.svg" alt="">
                                                   <p>100</p>
                                               </div>
                    
                                           </div>
                    
                    
                                        </div>
                                   </div>
                                        
                                        

                                        `

                                        })

                                        
                                    })
                                })

                              
                                                        

                                
                                

                        })


                     })




                })
            })
        })

  

})