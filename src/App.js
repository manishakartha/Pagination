import logo from './logo.svg';
import './App.css';
import ItemList from './ItemsList';
import Pagination from './Pagination';
import { useState } from 'react';


function App() {
  const[length,setLength]=useState(0);
  const [currentPage, setCurrentPage] = useState(1);

const handleClick=(length)=>{
  console.log("length",length);
  setLength(length);
}
const itemsPerPage = 10;
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const totalPages = Math.ceil(length / itemsPerPage);
console.log("total,",totalPages)

  
  return (
    <div className="App">
    <ItemList onItemCountChange={handleClick}
    itemsPerPage={itemsPerPage}
    currentPage={currentPage}
    />
    <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    <div>
    
    </div>
    </div>
    )
}

export default App;
