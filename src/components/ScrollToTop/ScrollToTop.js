import React, { useEffect, useState } from 'react';
import "./ScrollToTop.css";

const ScrollToTop = () => {
    const [isvisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);
    return (
        <div className='scroll-to-top'>
            {isvisible && (
                <div onClick={ScrollToTop}>
                    <i className='fas fa-arrow-circle-up fa-3x'></i>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop
