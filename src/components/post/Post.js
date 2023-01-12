import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {oneUserPost} from "../../store/PostsSlice";

function Post({postInfo}) {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{postInfo.title}</h1>
            <button onClick={() =>{
                dispatch(oneUserPost(postInfo.id))
            }}
            >more info</button>
            <p>----------------------</p>
        </div>
    );
}

export default Post;