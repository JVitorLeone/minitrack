import React from 'react';

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
					>
					</span>
				</button>
			</div>
		);
	}
}

export default class ToolBar extends React.Component {
	render() {
		const { toolBar } = this.props;
		var toolBarItems;

		console.log(Array.isArray(toolBar))
		console.log(toolBar.length)

		if (Array.isArray(toolBar) && toolBar.length) {
			toolBarItems = toolBar.map((item) => {
				return (
					<ToolItem
						key={item.id}
						url={item.url}
						isActive={this.props.activePage === item.id}
						onClick={() => this.props.onClick(item.id)}
						iconName={item.iconName}
					/>
				);
			});
			console.log("toolbar")
			return (
				<div className="sidebar">
					{toolBarItems}
				</div>
			);
		} else {
			console.log(" not toolbar")
			toolBarItems = null
			return toolBarItems
		}

	}
}

// ========================================

export { ToolBar }
