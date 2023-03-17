import { useState } from 'react'
import axios from 'axios'
import './App.css'

export const ShowQuotes = ({quote, key}) => {
	return (
		<div key={key}>
			<p>{quote.content}</p>
			<hr />
			<p>{quote.author}</p>
		</div>
	)
}

function App() {
	const [quotes, setQuotes] = useState([])

	const getQuote = () => {
		axios
		.get('https://api.quotable.io/random')
		.then(response => {
			setQuotes(oldQuotes => [...oldQuotes, response.data])
		}).catch(error => {
			console.log(error)
		})
	}

	return (
		<div className="App">
			<button onClick={getQuote}>Get A Nice Little Happy Quote!</button>
			<section>
				{quotes.map((quote, id) => <ShowQuotes quote={quote} key={id} /> )}
			</section>
		</div>
	)
}

export default App