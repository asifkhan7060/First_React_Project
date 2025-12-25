
// import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//             </Container>
//     </div>
//   )
// }

// export default AllPosts










import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"
import { useSelector } from "react-redux"

function AllPosts() {
    const [posts, setPosts] = useState([])
    const user = useSelector(state => state.auth.userData)

    useEffect(() => {
        if (user) {
            appwriteService.getPosts(user.$id).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        }
    }, [user])

    if (!user) {
        return <p className="text-center mt-8">Login to view your posts</p>
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

export default AllPosts

