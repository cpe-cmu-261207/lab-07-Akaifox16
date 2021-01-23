import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '600c7291c6c192230c7d3fc6'

const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetch = async () => {
        if(postId){
            const response = await axios.get(`${baseURL}/post/${postId}`, { headers: { 'app-id': APP_ID } })
            const cmt = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
            setPost(response.data)
            setComment(cmt.data.data)
            console.log(response.data)
            console.log(cmt.data.data)
        }
    }
    useEffect(fetch,[postId])

    return (
        <>
            <h1>display post data from api here</h1>
            {post !== null ? (
                <div style={{padding:20}}>
                    <h2>Post : {post.text}</h2>
                    <p>tags : {post.tags}</p>
                    <img src = {post.image} alt = "fail to load"></img>
                    <p>{post.owner.firstname} {post.owner.lastname}</p>
                    <p>Likes : {post.likes}</p>
                    <h3>Comments</h3>
                    <ul>
                    {comment.map((comm) => {    
                       return <li>{comm.owner.firstname} {comm.owner.lastname}: {comm.message}</li>
                    })}
                    </ul>
                    
                    <Link href="/post">
                        Back
                    </Link>
                </div>
            ):null}
        </>
    )
}

export  default  Post

