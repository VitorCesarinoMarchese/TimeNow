import './App.css'
import useSWR from 'swr'
import Temperature from './components/Temperature'


function App() {
  const key = '1'
  const api = 'http://api.openweathermap.org'

  const fetcher = (url:string) => fetch(`${api}/${url}`).then(r => r.json())
  const {data, error} = useSWR(`geo/1.0/direct?q=São%20Paulo,BR&limit=1&appid=${key}`, fetcher) 


  return (
    <>
      <div>
        <h1>TimeNow</h1>
        <p>The time to now the weather is now</p>
        <Temperature key={key} res={data} fetcher={fetcher}/>
      </div>
    </>
  )
}

export default App
