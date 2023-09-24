import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navBar/index';
import Title from './containers/title/Title'
import Author from './containers/author/Auther'
import Subject from './containers/subject/Subject'
import PublishYear from './containers/publisher/PublishYear'

function App() {
  return (
    <div className="App">
    
 
     <Navbar/>        
     <Routes>
      <Route path="/" element={<Title/>}/>
      <Route path="/author" element={<Author/>}/>
      <Route path="/subject" element={<Subject/>}/>
      <Route path="/publishyear" element={<PublishYear/>}/>
     </Routes>     
    </div>
  );
}

export default App;
