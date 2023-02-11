import React from "react";
import {Link} from "react-router-dom";
import NoPageImage from '../../assets/nopage-image.jpg'

const NoPage = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <div className="static transition ease-in-out delay-75 bg-blue-100">
                <img className="w-48 opacity-70" src={NoPageImage} alt="no page image"/>
                <div className="absolute m-8">
                    <h1 className="font-extrabold text-8xl sm:text-9xl text-rose-400 opacity-70">404</h1>
                </div>
            </div>
            <div className="absolute m-8">
                <h1 className="font-extrabold sm:text-8xl text-8xl mb-24">It looks like you're lost</h1>
                <Link
                    className="mt-8 sm:mt-0 font-bold text-2xl transition duration-150 ease-out hover:ease-in hover:bg-blue-200 pr-8 py-4  hover:scale-110 sm:hover:scale-125"
                    to="/">
                    return to home
                </Link>
            </div>
        </div>
    )
}

export default NoPage;