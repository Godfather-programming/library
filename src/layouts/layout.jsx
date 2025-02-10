import styles from "./layout.module.css"

function Layout({children}) {
  return (
    <>
    <header> 
      <div className={`${styles.headerContainer} ${styles.headerFooter}`}>

      <h1> Book app </h1>
      <div className="wrapper">
        <span> Godfather </span>
        <span> | React.js Full Course </span>
      </div>
      </div>
       </header>

      {children}

    <footer> 
      <div className={`${styles.headerFooter} ${styles.footer}`} >
     <span>  
     devloped by Godfather ❤️ 
     </span> 
      </div>
       </footer>
    </>
  )
}

export default Layout