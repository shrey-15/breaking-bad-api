 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.css';

 
 const Pagination = (cardsPerPage, totalCards, paginate) => {
     const pageNo = [];

     for(let i=1;i<=Math.ceil(totalCards/ cardsPerPage);i++){
         pageNo.push(i)
     }
     return (
        <nav>
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