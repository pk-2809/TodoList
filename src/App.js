import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Tasks } from './components/tasks/Tasks';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header className="" />
        <div className="flex-1 overflow-y-auto">
          <Tasks className="" />
        </div>
        <Footer className="" />
      </div>
    </>
  );
}

export default App;
