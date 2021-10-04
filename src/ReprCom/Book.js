import React  from 'react';
import '../ReactStyle/Book.css'
const Book=props=>{
	return (
		<div className='Book'>
		<h3 onClick={props.stateDelete}>
		Book-Name:{props.bookName}</h3>
		<h5>Writter:{props.writter}</h5>
		<h4>For Book_Name</h4>
		<h6>For Writter</h6>
		<input type='text' 
		onChange={props.InputChange_Writter}/>
		</div>
	)
}
export default Book;