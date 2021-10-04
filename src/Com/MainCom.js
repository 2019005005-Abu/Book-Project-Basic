import  React ,{Component} from 'react'
import books from '../Assets/BookStore.js'
import ListBook from '../ListBook/ListBook.js'
import changebooks_state from '../Assets/StateChangeBook.js'
class MainCom extends Component{
//declaring state 
constructor(){
super();
this.state={
books:books,
showBooks:null,
	}
}
	
changeState=()=>{
this.setState({
 books:changebooks_state
	})
}
//getting Input
inputState_BookName=(event,index)=>{
const book={
	...this.state.books[index]
}
book.bookName=event.target.value;
const books=[...this.state.books];
books[index]=book;
this.setState({books:books})
}

inputStateWritter=(event,index)=>{
const book={
	...this.state.books[index]
}

book.writter=event.target.value;
const books=[...this.state.books]
books[index]=book;
this.setState({
books:books
})
}
//DeleteSate
stateDelete=index=>{
 const books=this.state.books
 books.splice(index,1);
 this.setState({books:books})
}
//Tofggle Books
ToggleBooks=()=>{
 this.setState({showBooks:!this.state.showBooks})
}
render(){
//const bookState=this.state.books;
let books=null;
if(this.state.showBooks){
books=<ListBook 
books={this.state.books}
inputStateWritter={this.inputStateWritter}
InputChange={this.InputChange}
stateDelete={this.stateDelete}
/>
}


	
  return (
    <div className="App">
	  <h1>Book List </h1>
	 <button onClick={this.changeState}>Change-State</button>
	 <button onClick={this.ToggleBooks}>Toggle Books</button>
     {books}
    </div>
  );
}
	
}
export default MainCom;
