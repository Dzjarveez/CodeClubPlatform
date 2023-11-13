import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <main className='main'>
        <div class="nav_and_content">
          <Nav />
          <Content />
        </div>
      </main>
    </div>
  );
}

export default App;
