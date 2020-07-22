import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

/*
	TODO
		- 	Adicionar ícones
*/

function ToolBar(props) {
	const auth = useAuth();
	const history = useHistory();

	return (
		<div className="sidebar">
			<ToolItem
				key={1}
				url={"#1"}
				isActive={true}
				onClick={() => { }}
			/>
			<ToolItem
				key={2}
				url={"#2"}
				isActive={ false }
				onClick={() => { }}
			/>
			<ToolItem
				key={2}
				url={"#2"}
				isActive={ false }
				onClick={() => { }}
			/>
			<ToolItem
				key={3}
				url={"#3"}
				isActive={false}
				onClick={ () => auth.logout(() => { history.push("/teste") }) }
			/>
		</div>
	);
}

class ToolItem extends React.Component {
	render() {
		const active = this.props.isActive ? "sidebar-link sidebar-active" : "sidebar-link";

		return (
			<div className="sidebar-item" id="side-bar-item-home">
				<button
					onClick={() => this.props.onClick(this.props.url)}
					className={active}
				>
					<span
						data-feather="home"
						className="icon-light big-icon"
					></span>
				</button>
			</div>
		);
	}
}

// ========================================

export { ToolBar }
