import { useState, useEffect } from 'react';
export function useMediaQuery(query) {
    const [matches, setMatch] = useState(false);

    useEffect(() => {
        const handleChange = mql => {
            setMatch(mql.matches);
            console.log(mql);
        }
        const mediaQueryList = window.matchMedia(query);
        mediaQueryList.addEventListener('change', handleChange);
        // mediaQueryList.addListener(handleChange);
    
        // run handler once
        handleChange(mediaQueryList);

        return () => mediaQueryList.removeEventListener('change', handleChange);
        // return () => mediaQueryList.removeListener(handleChange);
    }, []);

    return matches;
}