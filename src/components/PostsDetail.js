import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { detailPostsAction } from '../actions/postsActions';

export const PostsDetail = () => {
    const dispatch = useDispatch();

    const postsdetail = useSelector(state => state.posts.postsdetail);

    const { title, body } = postsdetail;

    dispatch(detailPostsAction(postsdetail));

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Posts</div>
                        <div className="card-body">
                            <h5 className="card-title">{ title }</h5>
                            <p className="card-text">{ body }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
