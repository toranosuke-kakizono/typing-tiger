import { useEffect } from 'react';

const useDisableSpaceScroll = () => {
    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.code === 'Space' || event.key === ' ') {
                event.preventDefault();
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);
};

export default useDisableSpaceScroll;