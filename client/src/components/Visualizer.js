import React, {useState} from "react";
import "../styles/Visualizer.scss";

function Visualizer(props) {
	const image = props.image;
	if(image) {
		const className = "fv-visualizer " + (props.className || "");
		const legend = props.legend;
		const window_style = {
			height: window.innerHeight - 76 + "px"
		};
		const [opened, set_opened] = useState(false);
		const window_className = opened ? "window window-opened" : "window";
		const toggle_window = () => {
			set_opened(!opened);
		};
		return (
			<div className={className} onClick={toggle_window}>
				<div className="box" title={legend ? legend : ""}>
					<div className="content" style={{
						background: "url(" + image + ") center center",
						backgroundSize: "cover"
					}}>
					</div>
				</div>
				<div className={window_className} style={window_style} title="Cliquer pour fermer.">
					<img className="image" src={image} alt={legend ? legend : "Image"} />
				</div>
			</div>
		);
	}
	return null;
}

export default Visualizer;