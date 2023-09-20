import useSWR from 'swr'

function Temperature({res, fetcher, key}: {res: any,fetcher: any, key: string}){
    function GetTemperature(){
        const {data, error} = useSWR(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lat}&appid=${key}`, fetcher)
        return data
    }
    return(
        <>
        <h2>Temp {GetTemperature()}</h2>
        </>
    )
}
export default Temperature