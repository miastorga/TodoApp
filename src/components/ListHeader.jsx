import React, { useContext } from 'react'

export const ListHeader = ({ todoItems }) => {
	return (
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
					<div>
						<p>all</p>
						<p>actives</p>
						<p>completed</p>
					</div>
				</>
			)}
		</div>
	)
}
