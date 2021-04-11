import React from "react";
import "./style.css";

const Post = ({title,desc}) => {
    return <div className={"post"}>
        <h2>{title}</h2>
        <p className={"Title"}>{desc}</p>
    </div>
};

export default Post
