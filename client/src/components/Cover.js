import React, {Component} from "react";
import "../styles/Cover.scss";
import cover_diapo from "../data/cover_diapo";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faCircle, faDotCircle, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faPinterest, faGithub} from "@fortawesome/free-brands-svg-icons";

class Cover extends Component {
	constructor(props) {
		super();
		this.social = [
			{
				link: "#0",
				title: "Suivez-nous sur Facebook !",
				icon: faFacebook
			},
			{
				link: "#0",
				title: "Rejoingnez-nous sur Pinterest !",
				icon: faPinterest
			},
			{
				link: "#0",
				title: "Le repository du développeur web.",
				icon: faGithub
			}
		];
		this.state = {
			diapo_current: 0
		};
		this.update_diapo = this.update_diapo.bind(this);
	}

	//When component mounts
	componentDidMount() {
		setInterval(this.update_diapo, cover_diapo.delay);
	}

	//Advances diaporama
	update_diapo() {
		this.setState(prev_state => {
			const next = prev_state.diapo_current + 1 >= cover_diapo.content.length ? 0 : prev_state.diapo_current + 1;
			return {
				diapo_current: next
			};
		});
	}

	//Build dots
	build_dots(number, current) {
		let dots = [];
		for(let i = 0; i < number; i ++) {
			if(i === current)
				dots.push(<Icon className="dot" icon={faDotCircle} key={i} />);
			else
				dots.push(<Icon className="dot" icon={faCircle} key={i} />);
		}
		return dots;
	}

	//Build the diaporama list
	build_diapo() {
		return cover_diapo.content.map((content, n) => {
			const diapo_style = {
				position: "relative",
				top: (-100 * n) + "%",
				opacity: this.state.diapo_current == n ? "1" : "0"
			};
			const mapped_dots = this.build_dots(cover_diapo.content.length, n);
			return (
				<div className="diapo" style={diapo_style} key={n}>
					<div className="box">
						<h2 className="title title-xlg">{content}</h2>
						<div className="dots">
							{mapped_dots}
						</div>
					</div>
				</div>
			);
		});
	}

	//Builds social list
	build_social() {
		return this.social.map((item, n) => {
			return (
				<li key={n}>
					<a className="link" href={item.link} title={item.title}>
						<Icon className="icon" icon={item.icon} />
					</a>
				</li>
			);
		});
	}

	//Render component
	render() {
		const mapped_diapo = this.build_diapo();
		const mapped_social = this.build_social();
		return (
			<div className="fv-cover">
				<div className="diapo-container">
					{mapped_diapo}
				</div>
				<div className="social">
					<button className="text discover" title="Se renseigner."><Icon icon={faCaretDown} /> Découvrir</button>
					<div className="separator"></div>
					<ul className="list">
						{mapped_social}
					</ul>
				</div>
			</div>
		);
	}
}

export default Cover;