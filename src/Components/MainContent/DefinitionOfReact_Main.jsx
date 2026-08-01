export default function DefinitionOfReact(props) {
	return (
		<>
			<li className="item_Concept">
				<figure>
					<img src={props.img} alt={props.title} className="img_main img_hover" />
				</figure>
				<p className="txt_desc">{props.desc}</p>
			</li>
		</>
	);
}
