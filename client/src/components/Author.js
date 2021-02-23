import React from "react";
import "../styles/Author.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import author from "../img/fihobiana.jpg";

function Author() {
	return (
		<div className="fv-author">
			<div className="container">
				<h2 className="ptitle title title-md">
					<Icon icon={faPencilAlt} /> Biographie de l'auteur
				</h2>
				<div className="pseparator"></div>
				<p className="ptext text">Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat. Aliquip minim laboris laboris dolore sed laborum deserunt in officia nulla ad est amet nulla quis deserunt elit deserunt consectetur ut proident tempor fugiat sed voluptate amet veniam consequat.</p>
				<div className="details">
					<div className="left">
						<div className="box">
							<img className="avatar" src={author} alt="Fihobiana" />
						</div>
					</div>
					<div className="right">
						<div className="box">
							<div className="content">
								<h3 className="title title-xsm">Nasolo Fihobiana</h3>
								<p className="text">Officia excepteur in aute velit cupidatat dolor adipisicing dolor id cupidatat nulla in velit ad sit deserunt consectetur irure occaecat nulla laborum laboris sint magna.</p>
								<ul className="social">
									<li>
										<a className="link" href="#0" title="Likez-moi sur Facebook !">
											<Icon className="icon" icon={faFacebook} />
										</a>
									</li>
									<li>
										<a className="link" href="#0" title="Suivez-moi sur Instagram !">
											<Icon className="icon" icon={faInstagram} />
										</a>
									</li>
									<li>
										<a className="link" href="#0" title="Je suis sur Twitter !">
											<Icon className="icon" icon={faTwitter} />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Author;