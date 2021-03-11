import React, { Fragment, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const UserTemplate = ({ Component, ...restProps }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <div className="scroll-to-top">
                {isVisible &&
                    <div onClick={scrollToTop}>
                        <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top' />
                    </div>}
            </div>
            <Component {...propsRoute} />
            <Footer />
        </Fragment>
    }} />
}

