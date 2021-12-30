import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import classNames from "classnames";
import styles from "./ArrowLink.module.scss";
export default function ArrowLink({ data, disabled, type, offset }) {
	return (
		<>
			<>
				{type === "link" && (
					<InternalLink data={data} disabled={disabled} />
				)}
			</>
      <>
				{type === "anchor" && (
					<Anchor data={data} disabled={disabled} offset={offset} />
				)}
			</>
		</>
	);
}

function InternalLink({ data, disabled }) {
	return (
		<>
			<Link href={data.url}>
				<a
					className={classNames(styles.arrowLink, {
						[styles.disabled]: disabled,
					})}
				>
					<BsArrowRightShort className={classNames(styles.arrow)} />{" "}
					{data.label}
				</a>
			</Link>
		</>
	);
}

function Anchor({ data, offset, disabled }) {
	return (
		<AnchorLink
			offset={offset}
			href={!disabled ? data.url : null}
			className={classNames([styles.arrowLink], {
				[styles.disabled]: disabled,
			})}
		>
			<BsArrowRightShort className={classNames(styles.arrow)} /> {data.label}
		</AnchorLink>
	);
}

ArrowLink.defaultProps = {
	offset: 100,
	type: "link",
	disabled: false,
};
