import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '600c7291c6c192230c7d3fc6'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const fetch = async () => {
        const response = await axios.get(`${baseURL}/post`, { headers: { 'app-id': APP_ID } })
        setPosts(response.data.data)
        console.log(response.data.data)
    }

    /* */

    useEffect(fetch,[])
    return (
        <>
            <h1>All Posts</h1>
            <ul>
            {posts.map(post => {
                console.log(post)
                return <Link  key={post.id} href={`/post/${post.id}`}>
                <li>
                    <p>post : {post.text}</p>
                    <img src = {post.image} alt = "fail to load"></img>
                    <p>Likes : {post.likes}</p>
                    <button style={{margin:10}}>Go to this post</button>
                </li>
            </Link>
            })}
            </ul>
        </>
    )
}

export default  Posts
