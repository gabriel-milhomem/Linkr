import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

import Header from  '../components/Header';
import Trending from "../components/Trending";
import {Main, Title, Error, ContainerTrending, ContainerLinkdr, ContainerLoading} from '../components-style/cmpnt-styles';;
import LoginContext from "../context/LoginContext";
import Loading from "../components/Loading";
import Posts from "../components/Posts";
<<<<<<< HEAD
import InfiniteScroll from "react-infinite-scroll-component";
=======
>>>>>>> 07a0c69ceff3e8389242bdc52e81b1ec5d102d6c

const Timeline = () => {
    const [posts, setPosts] = useState([]);
    const {userForm, controlForm} = useContext(LoginContext);
    const {config} = userForm;
    const {loading, setLoading} = controlForm;
    const { hashtag } = useParams();
    const [error, setError] = useState('');
    const [booleanError, setBooleanError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        requestApi();        
    }, [hashtag]);
    
    const requestApi = () => {
        setLoading(true);
<<<<<<< HEAD
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=${offset}&limit=2`, config);
        
=======
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=0&limit=10`, config); 
>>>>>>> 07a0c69ceff3e8389242bdc52e81b1ec5d102d6c
        request.then(({data}) => {
            setLoading(false);
            if(data.posts.length === 0) {
                setError('Nenhum post encontrado!');
                setHasMore(false);
            }
            setOffset(offset + 2);
            setPosts(posts => [...posts, ...data.posts]);
        });
        request.catch(({response}) => {
            setError('Houve uma falha ao obter os posts, por favor atualize a página!');
            setBooleanError(true);
            setLoading(false);
        }); 
    } 

    return (
        <Main>
            <Header />
            <Title> {`# ${hashtag}`} </Title>
            <ContainerLinkdr>            
<<<<<<< HEAD
            {booleanError ?
=======
                {loading ? 
                    <ContainerLoading>
                        <Loading />
                    </ContainerLoading>
                    :
                    booleanError ?
>>>>>>> 07a0c69ceff3e8389242bdc52e81b1ec5d102d6c
                        <Error fontSize= {'1.25rem'}> {(error) ? error : ''} </Error>
                        :
                        <InfiniteScroll
                            dataLength={posts.length}
                            next={() => requestApi(hashtag)}
                            hasMore={hasMore}
                            loader={
                                <ContainerLoading>
                                    <Loading />
                                </ContainerLoading>
                            }

                            endMessage= {
                                <Error fontSize= {'1.25rem'}> {(error) ? error : ''} </Error>
                            }
                        >
                                {posts.map(post => (<Posts post= {post} key= {post.id}/>))}
                        </InfiniteScroll>
            }
            </ContainerLinkdr>
            <ContainerTrending>
                <Trending />
            </ContainerTrending>
        </Main>
    );
}

export default Timeline;
