import React, { useContext } from 'react'
import { Context } from '../TodoContext'

export const ListHeader = () => {
	const { todoItems } = useContext(Context)
	return (
		<li>
			<div className={todoItems.length ? 'list-header' : ''}>
				{todoItems.length === 0 && <h2>No todos added</h2>}
				{todoItems.length > 0 && (
					<>
						<p>
							{todoItems.length === 1 ? (
								<>{todoItems.length} item</>
							) : (
								<>{todoItems.length} items</>
							)}
						</p>
					</>
				)}
			</div>
		</li>
	)
}
