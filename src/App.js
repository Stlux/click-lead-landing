import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TopBox from './components/top-box';
import VideoBox from './components/video-box';
import HistoryBox from './components/history-box';
import ExperienceBox from './components/experience-box';

function App() {
  return (
    <div className="App">
      <Header />
      <TopBox />
      <VideoBox />
      <HistoryBox />
      <ExperienceBox />
    </div>
  );
}

export default App;
