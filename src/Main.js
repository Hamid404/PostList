import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import MyComponent from "./state_1-increase";
import FuncComponent from './state_2.increase'
import "./style.css";

const posts =[
    {
       title : "Post 1",
       desc : "1. Focus on commitment, not motivation.",
         },
    {
        title : "Post 2",
        desc : "2. Seek knowledge, not results.",
     },
     {
        title : "Post 3",
        desc : "3. Make the journey fun.",
     },
     {
        title : "Post 4",
        desc : "4. Get rid of stagnating thoughts.",
     },
     {
        title : "Post 5",
        desc : "5. Use your imagination.",
     },
     {
        title : "Post 6",
        desc : "6. Stop being nice to yourself.",
     },
     {
        title : "Post 7",
        desc : "7. Get rid of distractions.",
     },
     {
        title : "Post 8",
        desc : "8. Don’t rely on others.",
     },
     {
        title : "Post 9",
        desc : "9. Plan.",
     },
     {
        title : "Post 10",
        desc : "10. Protect yourself from burnout.",
     },
]

const Main = ()=>{
    return <div className={"postList"}>
        <div className={"Increase"}>
        <MyComponent></MyComponent>
        <FuncComponent></FuncComponent>
        </div>
        <hr></hr>
        <NewPost></NewPost>
        <h1>
        Post List
        </h1>
        {
            posts.map(post=>{
                return <Post title={post.title} desc={post.desc}></Post>
            })
        }
    </div>
}


class MainX extends React.Component {
    render(){
        return <div>
        <h1>
        Post List
        </h1>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
    </div>
    }
}

export default Main