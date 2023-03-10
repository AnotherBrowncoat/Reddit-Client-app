import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { FeedCard } from "../../components/feedCard";


import { getSearch,
    getSearchChildren, 
    isLoading, 
    failedToLoad } from "./searchSlice";

import './search.css';

export function Search() {
    const dispatch = useDispatch();
    const searchChildren = useSelector(getSearchChildren);
    const loadingSearch = useSelector(isLoading);
    const failedSearch = useSelector(failedToLoad);
    
    // search is to be the parameter we use:
    const {search} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(search);
        dispatch(getSearch(search));
    }, [dispatch, search]);
    
    if(loadingSearch) {
        <p>Loading search</p>
        // return <Loading />
    };

    if(failedSearch) {
        <p>Search failed</p>
        // return <PageNotFound />
    };

    if(searchChildren !== undefined) {
        return (
            <div className='searchResults'>
                <h2 className='searchTitle'>
                    Search Results
                </h2>
                {searchChildren.map((post, index) => (
                    <FeedCard data={post.data} key={index} />
                ))};
            </div>
        )
    };
};

export default Search;