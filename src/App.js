import {useContext} from 'react';
import './App.css';
import {Context as BlogContext} from './Context/BlogContext';
import {Context as ThemeContext} from './Context/ThemeContext';

function App() {
  const blogPostContext = useContext(BlogContext);
  const themeContext = useContext(ThemeContext);

  const currentThemeConfiguration = themeContext.state[themeContext.state.currentTheme];
  console.log(currentThemeConfiguration);

  const getBlogPosts = () => {
    return blogPostContext.state.map((blogPost) => {
      return <div key={blogPost.id}>{blogPost.title} <button onClick={() => blogPostContext.deleteBlogPost(blogPost.id)}>Delete</button></div>
    })
  }

  return (
    <div className="App" 
    style={{ padding: 20, background: currentThemeConfiguration.background, color: currentThemeConfiguration.color }}
    >
      some value 
      <button onClick={blogPostContext.addBlogPost}>Add blog post</button>
      {getBlogPosts()}
      <div>Select your themes : 
        <button onClick={() => themeContext.changeThemeTo("dark")}>Dark</button>
        <button onClick={() => themeContext.changeThemeTo("light")}>Light</button>
      </div>
      
    </div>
  );
}

export default App;
