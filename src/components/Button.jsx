import React from 'react'

export const Button = ({ children, className, onCLick }) => {
	return (
		<button className={`${className}`} onClick={onCLick}>
			{children}
		</button>
	)
}
