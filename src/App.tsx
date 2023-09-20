import './App.css'
import useSWR from 'swr'

function App() {
  const key = '12dfc2a388dd9f3d311feab48fe9972f'
  const api = 'http://api.openweathermap.org'

  const fetcher = (url:string) => fetch(`${api}/${url}`).then(r => r.json())
  const {data, error} = useSWR(`geo/1.0/direct?q=São%20Paulo,BR&limit=1&appid=${key}`, fetcher) 
  console.log(error)
  console.log(data)
  return (
    <>
      <div>
        <h1>TimeNow</h1>
        <p>The time to now the weather is now</p>
        <h2>Temp {}</h2>
      </div>
    </>
  )
}

export default App
