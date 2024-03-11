import React, { useState } from 'react';
import { MdNavigation } from 'react-icons/md';

const ScrollTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);
    return (
        <MdNavigation
            className='scrollTop'
            onClick={scrollTop}
            style={{ display: showScroll ? 'flex' : 'none' }}
        />
    );
};

export default ScrollTop;
