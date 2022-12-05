import React from 'react';
import '../styles/info.css';
import BookImage from './imgs/bookimage';

function InfoHead (){
    return (
        <div className='mainInfos'>
            <h1>Hello!</h1>
            <div className='info'>
            <h3> Welcome to my first React app. Here you can put the books you've already 
                read in a list to organize your readings. 
            </h3>
            </div>
            <BookImage></BookImage>
            <div className='note'>
            <h3>Note: Since this is a front-end only app, 
                the information will be reset as soon as the page is reloaded.
            </h3>
            </div>


        </div>
        

    )

}
export default InfoHead;