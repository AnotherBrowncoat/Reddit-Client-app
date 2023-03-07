// library imports:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

// my elements imports:

// styling imports:
import "./Home.css";


export const Home = () => {
    const dispatch = useDispatch();

    return (
        <h1>Howdy</h1>
    );
};

export default Home;