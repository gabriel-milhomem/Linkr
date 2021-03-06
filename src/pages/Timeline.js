import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Header from  '../components/header/Header';
import Trending from '../components/timeline/Trending';
import Publish from '../components/timeline/Publish';
import Loading from '../components/common/Loading';
import { Error } from '../utils/Error';
import LoginContext from '../context/LoginContext';
import Posts from '../components/posts/Posts';
import { MainPage, ScrollContainer, LoadingContainer, Title } from '../styles/Timeline.styles';

const Timeline = () => {
    const { userForm, controlForm } = useContext(LoginContext);
    const { config } = userForm;
    const { loading, setLoading } = controlForm;

    const [ posts, setPosts ] = useState([]);
    const [ error, setError ] = useState('');
    const [ booleanError, setBooleanError ] = useState(false);

    useEffect(() => {
        setBooleanError(false);
        requestFollowing();
        requestGetPost();
        const interval = setInterval(() => {
            setBooleanError(false);
            requestFollowing();
            requestGetPost();
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    const requestFollowing = () => {
        const apiLink = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows`;
        const request = axios.get(apiLink, config);
        request.then(({data}) => {
            handleFeedFollow(data.users);
        });
    }

    const requestGetPost = () => {
        setLoading(true);
        const apiLink = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=0&limit=10`;
        const request = axios.get(apiLink, config);
        request.then(({data}) => {
            setPosts(data.posts);
            handleFeedPosts(data.posts);
            setLoading(false);
        });
        request.catch(() => {
            setLoading(false);
            setError('Houve uma falha ao obter os posts, por favor atualize a página!');
            setBooleanError(true);
        }); 
    }

    const handleFeedPosts = (posts) => {
        if (posts.length === 0) {
            setError('Nenhuma publicação encontrada');
            setBooleanError(true);
        }
    }
    
    const handleFeedFollow = (followers) => {
        if (followers.length === 0) {
            setError('Você não segue ninguém ainda, procure por perfis na busca');
            setBooleanError(true);
        }
    }
 
    return (
       <MainPage>
            <Header />
            <Title> Timeline </Title>
            <ScrollContainer>
                <Publish getPosts={requestGetPost}/>
                {loading ? 
                    <LoadingContainer>
                        <Loading />
                    </LoadingContainer>
                    :
                    booleanError ?
                        <Error fontSize={'1.25rem'}> {(error) ? error : ''} </Error>
                        :
                        <>
                            {posts?.map((post, index) => (
                                <Posts refreshPage={requestGetPost} post={post} key={index}/>
                            ))}
                        </>
                } 
            </ScrollContainer>
            <Trending />
       </MainPage>
    );
}

export default Timeline;