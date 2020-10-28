
import axios from 'axios';
import React, { useContext, useState, useEffect } from  'react';
import styled from 'styled-components';
import LoginContext from '../context/LoginContext';
import Colors from '../utils/Colors';
import {Link} from "react-router-dom";

const Trending = () => {
    const [treadingHashTags, setTreadingHashtags] = useState([]);
    const {userForm} = useContext(LoginContext);
    const {userRegister, config} = userForm;
 

    useEffect(() => {
        getTreadingHashTags();        
    },[]);

    const getTreadingHashTags = () => {
        requestApi();
    }

    const requestApi = () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending`, {headers : config.headers});
        
        request.then(({data}) => {
            setTreadingHashtags(data.hashtags);
        });

        request.catch(({response}) => {
            console.log(response, 'ERROR TO GET TRADING HASH TAGS');
        }); 
    } 
 
    return (
        <StyledTrending>
            <h2> trending </h2> 
            <ul>
                {treadingHashTags.map((element) => <li>
                                                        <Link to={`/hashtag/${element.name}`}># {element.name}</Link>
                                                    </li>)} 
            </ul>
        </StyledTrending>
    );
}

export default Trending;


export const StyledTrending = styled.div`
    padding: 1rem;
    background: ${Colors.black};
    color: ${Colors.white};
    border-radius: 20px;
    height: auto;
    
    h2 {
        font-weight: bold;
        margin-bottom: 0.5rem;
        font-size: 2rem;
        line-height: 2.5rem;
        font-family: 'Oswald', sans-serif;
    }

    ul {
        border-top: 1px solid ${Colors.darkGrey};
        padding-top: 0.5rem;
    }

    li {
        font-size: 1.5rem;
        margin-bottom: 0.7rem;
    }
`;