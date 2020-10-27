import React from "react"
import { Link } from "gatsby"

export default function StickyMessage(props) {
  return (
    <div className="position-sticky sticky-message">
      <span>
        Abilitiamo vive grazie al supporto delle persone che credono nel suo
        progetto. <Link to="/sostieni">Devolvi il tuo 5x1000</Link>
      </span>
    </div>
  )
}
