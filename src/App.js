import "./App.css";
import { withBlog } from "./Context/BlogContext";
import { withTheme } from "./Context/ThemeContext";

export function App(props) {
  const { themeContext, blogPostContext } = props;

  const currentThemeConfiguration =
    themeContext.state[themeContext.state.currentTheme];
  console.log(currentThemeConfiguration);

  const getBlogPosts = () => {
    return blogPostContext.state.map((blogPost) => {
      return (
        <div key={blogPost.id}>
          {blogPost.title}{" "}
          <button
            onClick={() => blogPostContext.dispatch.deleteBlogPost(blogPost.id)}
          >
            Delete
          </button>
        </div>
      );
    });
  };

  return (
    <div
      className="App"
      style={{
        padding: 20,
        background: currentThemeConfiguration.background,
        color: currentThemeConfiguration.color,
      }}
    >
      some value
      <button onClick={blogPostContext.dispatch.addBlogPost}>
        Add blog post
      </button>
      {getBlogPosts()}
      <div>
        Select your themes :
        <button onClick={() => themeContext.dispatch.changeThemeTo("dark")}>
          Dark
        </button>
        <button onClick={() => themeContext.dispatch.changeThemeTo("light")}>
          Light
        </button>
      </div>
    </div>
  );
}

export default withBlog(withTheme(App));
