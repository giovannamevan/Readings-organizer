import React from "react";
import '../styles/form.css'

function BookForm (props){
    const [books, setBooks] = React.useState({
        bookName: " ",
        bookAuthor: "",
        bookPublisher: " ",
        bookGenre: " "


    });
    function handleChange(event){
        
        setBooks ({ 
            ...books,
            [event.target.name]: event.target.value,
            
    }); console.log(books);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.createList(books);
        setBooks({
            bookName: " ",
            bookAuthor: "",
            bookPublisher: " ",
            bookGenre: " "

        });
    }
 
    return (
        <div className="bookQuestions">
            <form className="form">
                <label forhtml="bookName"> Book Name</label>
                <input type="text" className="questions" name="bookName" value={books.bookName} onChange={handleChange} />

                <label forhtml="bookAuthor">Author</label>
                <input type="text" className="questions" name="bookAuthor" value={books.bookAuthor} onChange={handleChange}/>

                <label forhtml="bookPublisher">Publisher</label>
                <input type="text" className="questions" name="bookPublisher" value={books.bookPublisher} onChange={handleChange}/>

                <label forhtml="bookGenre">Genre</label>
                <select className="questions" name="bookGenre" value={books.bookGenre} onChange={handleChange}>
                    <option value="Romance"> Romance</option>
                    <option value="Drama"> Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Historical">Historical</option>
                    <option value="Horror">Horror</option>
                    <option value="Dystopia">Dystopia</option>
                    <option value="Other"> Other</option>
                </select>
                <input type="submit" id="submitButton" value="Send new read" onClick={handleSubmit}/>
                

            </form>

        </div>

    );
}
export default BookForm;