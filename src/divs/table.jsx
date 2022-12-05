import React from 'react';
import '../styles/tableList.css'

function TableList (props){
    console.log(props.infoList);
    return (
        <div className='tableOfBooks'>
            <div className='nameList'> 
                <h3>
                    Readings list
                </h3>
            </div>
            <table>
                <thead>
                    <tr className='table'>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                {props.infoList.map((info) => {
                    return(
                    <tr className='table'>
                        <td>{info.bookName}</td>
                        <td>{info.bookAuthor}</td>
                        <td>{info.bookPublisher}</td>
                        <td>{info.bookGenre}</td>
                    </tr>
                )})}
                </tbody>

            </table>

        </div>

    );
}
export default TableList;