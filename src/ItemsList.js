import './ItemList.css';
import React, { useEffect, useState } from 'react';


function ItemList({onItemCountChange,itemsPerPage, currentPage}) {
    const[data,setData]=useState();
      useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products  ');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            
            setData(result.products);
            console.log(data)
            onItemCountChange(result.products.length)
          }catch (error) {
            setData(error);
          }
        };
    
        // Call the async function
        fetchData();
      }, []); // Empty dependency array ensures this runs once on mount
    
      const startIndex = (currentPage - 1) * itemsPerPage;
    //   const paginatedItem =
      
      return (
        <div className="list-container">
        
        { data?.slice(startIndex,startIndex+itemsPerPage).map((pdt,index)=>(
          <div className='product-item' key={pdt.id}> 
            <img className='images' src={pdt.images} alt='images'/><br/>
            {pdt.title}
             </div>
        )
        )}
        </div>
      );
    }
    
    export default ItemList;
    