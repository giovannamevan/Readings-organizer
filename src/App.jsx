import React from 'react';
import BookForm from './divs/form';
import TableList from './divs/table';
import InfoHead from './divs/info';
import './styles/App.css'

function App() {
  const [infoList, setInfoList] = React.useState([]);
  function createList(books){
    setInfoList([ ...infoList,books]);
  }
  return (
    <div>
        <div className="main">
              <InfoHead></InfoHead>
              <BookForm createList={createList}></BookForm>
        </div>
        <div>
             <TableList infoList={infoList}></TableList>
        </div>
        
       
    </div>
  );
}

export default App;
