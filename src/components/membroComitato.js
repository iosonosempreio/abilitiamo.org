import React from "react"
import Img from "gatsby-image"

export default function MembroComitato(props) {
	return (
		<div className="row d-flex align-items-center my-md-5">
			<div className="col-8 offset-2 mt-5 col-md-3 offset-md-1 my-md-0 col-lg-3 offset-lg-1 col-xl-2">
				<Img fluid={props.image.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
			</div>
			<div className="col-10 offset-1 mt-3 mb-5 col-md-8 offset-md-0 my-md-0 col-lg-7 col-xl-6">
				<h3>{props.name}</h3>
                {/* <h4>{props.role}</h4> */}
				{props.bio}
			</div>
		</div>
	)
}
