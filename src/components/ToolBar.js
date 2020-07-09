import React from 'react';

const toolItems = [
	{
		id: 1,
		iconName: "home",
		url: "#1",
	},
	{
		id: 2,
		iconName: "message-square",
		url: "#2",
	},
	{
		id: 3,
		iconName: "tool",
		url: "#3",
	},
	{
		id: 4,
		iconName: "log-out",
		url: "#4",
	},
];

function ToolBar(props)  {

	if (Array.isArray(toolItems) && toolItems.length) {
		const toolBarItems = toolItems.map((item) => {
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

		return (
			<div className="sidebar">
				{toolBarItems}
			</div>
		);
	} else {
		return null;
	}

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
					>
					</span>
				</button>
			</div>
		);
	}
}

// ========================================

export { ToolBar }
