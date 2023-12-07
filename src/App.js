import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TopBox from './components/top-box';
import VideoBox from './components/video-box';
import HistoryBox from './components/history-box';
import ExperienceBox from './components/experience-box';
import ProgramBox from './components/program-box';

function App() {
  return (
    <div className="App">
      <Header />
      <TopBox />
      <VideoBox />
      <HistoryBox />
      <ExperienceBox />
      <ProgramBox />
    </div>
  );
}

export default App;
