import Link from "next/link";
import styles from "./logo.module.scss"

export default function Logo(props) {
  return (
    <div className={styles.logo} style={props.logoStyle}>
      <Link href="/" style={{textDecoration:'none', color:'inherit'}}>
        <>
          <span style={{fontWeight:600}}>
            Abi<span style={{color:"var(--red)"}}>lí</span>tiamo
          </span>{" "}
          autismo
          <span style={{display:props.showOnlus?'inline':'none'}}> ODV</span>
        </>
      </Link>
    </div>
  )
}

Logo.defaultProps = {
  showOnlus:false
}