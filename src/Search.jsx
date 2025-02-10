import books from "./constants/mockData"
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className={styles.container}> 
      <input type="text" placeholder="Search title"/>
      <button className={styles.button}> <FaSearch />  </button>  
    </div>
  )
}

export default Search