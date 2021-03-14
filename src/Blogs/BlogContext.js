import React from 'react';

const themes = {
    light: {
        background: '#efefef'
    },
    dark: {
        background: '#333'
    }
}

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    return (
        <BlogContext.Provider value={themes.light}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;