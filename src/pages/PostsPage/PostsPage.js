import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/PostsSlice";
import Post from "../../components/post/Post";

function PostsPage(props) {
    const dispatch = useDispatch()

    const {posts, preloader, error, onePostUser} = useSelector(state => state.postsReducer)

    const getPostsFunc = () => {
        dispatch(getPosts())
    }
    useEffect(() => {
        getPostsFunc()
    }, [])


    return (
        <>
            <h1>posts</h1>
            <br/>
            <p>body: {onePostUser?.body}</p>
            <p>id : {onePostUser?.id}</p>
            <p>title : {onePostUser?.title}</p>
            <br/>
            <button onClick={getPostsFunc}>get posts</button>
            <button>delete all</button>
            {
                preloader
                    ?
                    <h3>loading...</h3>
                    :
                    error
                        ?
                        <h3>{error}</h3>
                        :
                        posts.map(post => <Post key={post.id} postInfo={post}/>)
            }

        </>
    );
}

export default PostsPage;