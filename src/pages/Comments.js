import React from 'react';
// import {Link} from 'react-router-dom';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';
import NavBar from '../components/NavBar';
import babyYoda from '../images/baby-yoda.png'
import {useSelector} from 'react-redux';

const Comments = () => {

    const user = useSelector((state) => state.userReducer.currentUser)


    return (
        <>
        <NavBar />
        <div className="container">
                <img src={babyYoda} alt="baby yoda" className="mx-auto d-block img-thumbnail/"></img>
                <h4 className="text-center" >This is the way</h4>
            <div className="row">
                    <div className="col m-5 p5">
                        {user.is_logged && <PostComment />}
                        <div className="col center text-center"> {!user.is_logged && <h2>Login to post comments</h2>} </div>
                    </div>
            </div>
            <div className="row">
                <ShowComments />
            </div>
        </div>
        </>
    )
}

export default Comments;