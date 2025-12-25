// import React, {useEffect, useState} from 'react'
// import appwriteService from "../appwrite/config";
// import {Container, PostCard} from '../components'

// function Home() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => { 
//             if (posts) {
//                 setPosts(posts.documents) // Set the posts state with the fetched posts
//             }
//         })
//     }, [])
  
//     if (posts.length === 0) {  // If no posts are available, prompt the user to log in
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home



import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from "react-redux"

function Home() {
    const [posts, setPosts] = useState([])
    const user = useSelector(state => state.auth.userData)

    useEffect(() => {
        if (user) {
            appwriteService.getPosts(user.$id).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        } else {
            setPosts([])
        }
    }, [user])

    if (!user) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">
                        Login to read your posts
                    </h1>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
