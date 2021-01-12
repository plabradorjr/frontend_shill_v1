import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, logoutUser } from '../actions/userActions';
import styled from 'styled-components';
import { deleteSearchResults } from '../actions/cryptosAction';
import { Link } from 'react-router-dom';



const NavBar = () => {

    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.userReducer.currentUser)

    useEffect(() => {
       if (!user.is_logged) dispatch(fetchCurrentUser());
    },[dispatch, user.is_logged]);


    const handleLogoutClick = (e) => {
    
        dispatch(logoutUser());
        e.preventDefault();
    }

    const handleLoginClick = (e) => {
        window.location = 'http://localhost:3030/auth/twitter'
    }

    const handleDeleteSearch = () => {
        dispatch(deleteSearchResults());
      }

    return (
        <StyledNav>
        <nav className="navbar navbar-light bgx justify-content-between pt-4 px-5">
            <Link to="/"> <p id="logo" onClick={handleDeleteSearch}>✨ Shill.lol ✨</p> </Link>
            {user.is_logged && <p>Hello,  {user.name}</p>}

            <form className="form-inline">
                <Link to="/shills"><button className="btn btn-outline-light my-2 mx-2 my-sm-0" type="button">Shills</button></Link>
                {user.is_logged && <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={handleLogoutClick}>Logout</button>}
                {!user.is_logged && <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={handleLoginClick}>Login via Twitter</button>}
                
            </form>
        </nav>
        </ StyledNav>
    )
}

const StyledNav = styled.div`
    #logo {
        cursor: pointer;
    }
    .bgx {
        background-color: #192734;
    }
`
export default NavBar;