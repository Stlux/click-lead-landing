import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TopBox from './components/top-box';
import VideoBox from './components/video-box';
import HistoryBox from './components/history-box';
import ExperienceBox from './components/experience-box';
import ProgramBox from './components/program-box';
import Confabox from './components/confa-box';
import SearchBox from './components/search-box';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TopBox />
      <VideoBox />
      <HistoryBox />
      <ExperienceBox />
      <ProgramBox />
      <Confabox />
      <SearchBox />
      <Footer />
    </div>
  );
}

export default App;
