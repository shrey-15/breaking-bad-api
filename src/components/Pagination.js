 import React from 'react'

 
 const Pagination = ({cardsPerPage, totalCards, paginate}) => {
     const pageNo = [];

     for(let i=1;i<=Math.ceil(totalCards/ cardsPerPage);i++){
        pageNo.push(i);
     }
     return (
        <nav aria-label="Page navigation example" className="center page">
            <ul className="pagination">
           
                {pageNo.map(number =>(
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>    
                    </li>
                ))}
              
            </ul>
        </nav>
     )
 }
 
 export default Pagination