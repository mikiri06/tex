import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Page = () => {
	const [card, setCard] = useState([])

	const fetchCards = () => {
		axios
			.get('https://rickandmortyapi.com/api/character')
			.then(response => {
				setCard(response.data.results)
			})
			.catch(error => {
				console.error('Error fetching data:', error)
			})
	}

	useEffect(() => {
		fetchCards()
	}, [])

	return (
		<div className='card-container'>
			{card.map(item => (
				<div className='card'>
					<img src={item.image} alt={item.name} />
					<div className='row'>
						<div className='col-3'>
							<h2>{item.name}</h2>
							<p className='card-text'>
								{item.status === 'Alive' ? (
									<span className='alive circle'> </span>
								) : item.status === 'Dead ' ? (
									<span className='dead circle'> </span>
								) : (
									<span className='unknown circle'> </span>
								)}{' '}
								{item.status} - {item.species}
							</p>
						</div>
						<h3>{item.gender}</h3>
						<div className='col-3'>
							<h3>Origin: {item.origin.name}</h3>
							<h4>
								Last known location:
								{item.location.name}
							</h4>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Page
