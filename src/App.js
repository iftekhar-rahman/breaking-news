import './App.css';
import {Button, Card} from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import TestFragment from './components/TestFragment/TestFragment';

function App() {
  return (
    <div>
      <h2>React bootstrap</h2>
      <Header></Header>
      <TestFragment></TestFragment>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
