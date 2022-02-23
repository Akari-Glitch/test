

const getCap = async (episode) =>{
	const response = await fetch(`https://rickandmortyapi.com/api/character`) 
	const data = await response.json()
	const main = document.getElementById("main")
	let div = document.createElement('div');
	div.setAttribute('class', 'card')
	data.results.map(item=>{
		div.innerHTML += `<img src="${item.image}" />`	
	})
	
	main.appendChild(div)
}

getCap()


async function getEpisode (episode){
	const response = await fetch(`https://rickandmortyapi.com/api/episode/${dato}`)
	const data = await response.json()
	return data
}



