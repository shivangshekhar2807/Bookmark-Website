import logo from './logo.svg';
import './App.css';
import BackgroundStyle from './components/Background/BackgroundStyle';
import BookmarkForm from './components/Bookmarks/BookmarkForm';
import Wrapper from './components/Store/Wrapper';
import AllBookmark from './components/Bookmarks/AllBookmark';

function App() {
  return <Wrapper>
    
   
     <BackgroundStyle></BackgroundStyle>
    <AllBookmark></AllBookmark>
   </Wrapper>
}

export default App;
