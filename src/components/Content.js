import React from 'react';
import { usePage, pages } from "../contexts/PageContext.js"

export function Content(props) {
	const page = usePage()

	return (
		<div>
			{pages[page]}
		</div>
	)
}
