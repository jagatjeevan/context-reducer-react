import {useContext} from 'react';
import './App.css';
import BlogContext from './Blogs/BlogContext';

function App(props) {
  const value = useContext(BlogContext);
  console.log(value)
  return (
    <div className="App" style={{ background: value.background }}>
      some value 
    </div>
  );
}

export default App;
