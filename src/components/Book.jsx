import styles from "../Regular.module.css"
import { FaHeart } from "react-icons/fa";
import { useState } from "react"
import books from "../constants/mockData";

function Book({data : {image, title, author, language, pages, id}}) {
    const [color, setColor] = useState(false)
    const [favorite, setFavorite] = useState([])
    const colorHandler = () => {
        setColor(color => !color)
        setFavorite(books.push((book) => book.id === id))
    }
  return (<>
    <div className={styles.part1}>  
    <img src={image} alt="png1" className={styles.img}/>
    <div className={styles.inform}>  
    <p className={styles.title}> {title} </p>
    <p className={styles.writer}> {author} </p>
    <div className={styles.bookData}>
    <span className={styles.language}> {language} </span>
    <span className={styles.pages}> {pages} pages </span>
    </div>
    </div>
    </div>
   
    <div onClick={colorHandler} className={styles.heart} >
         <FaHeart color={color ? "red" : "#fff"}/> 
    </div>
    </>
  )
}

export default Book