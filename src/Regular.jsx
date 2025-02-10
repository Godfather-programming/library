import { useState } from "react";
import img1 from "./assets/1.png"
import books from "./constants/mockData";
import styles from "./Regular.module.css"
// import books from "./constants/mockData"
import Book from "./components/Book";

function Regular() {
  return (
    <div className={styles.container}> 

    {books.map(book =>        <div key={book.id} className={styles.wrapper}> 
    <Book data={book}/>
        
       </div>)}



    </div>
  )
}

export default Regular













// <div className={styles.part1}>  
// <img src={book.image} alt="png1" className={styles.img}/>
// <div className={styles.inform}>  
// <p className={styles.title}> {book.title} </p>
// <p className={styles.writer}> {book.author} </p>
// <div className={styles.bookData}>
// <span className={styles.language}> {book.language} </span>
// <span className={styles.pages}> {book.pages} </span>
// </div>
// </div>
// </div>

// <div onClick={clickHandler} className={styles.heart}>
//     <span> <FaRegHeart /> </span>
// </div>