import React, { useEffect } from 'react'

const App = () => {

  const getMusic = async() => {
    const url = 'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist';
const data = new FormData();

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '914e1f0257msh86a195672f972d7p138004jsn8995b6ce7b04',
		'x-rapidapi-host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
  }

  useEffect(() => {
    getMusic()
  },[])

  return (
    <div>App</div>
  )
}

export default App