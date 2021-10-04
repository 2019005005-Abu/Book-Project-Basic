import  React from 'react';
import  Book from '../ReprCom/Book.js'
function ListBook(props){
return (
props.books.map((book,index)=>{
return (
 <Book 
bookName={book.bookName} 
writter={book.writter}
stateDelete={()=>props.stateDelete(index)}
key={book.id}
InputChange={(event)=>props.inputState_BookName(event,index)}
inputStateWritter={(event)=>props.inputStateWritter(event,index)}
ToggleBooks={props.ToggleBooks}
/>
           )
	   })
	)
}
export default ListBook;