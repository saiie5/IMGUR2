var Data = [];

 
async function getData(){
    let clientId = `ps57a3lUes7uSq4nAJ7L9YZ6aeotkFo1Wev37YIq3x0`
    let query = "cars";
    let url =`https://api.unsplash.com/photos/?client_id=${clientId}&query=${query}`
    const response = await fetch(url)
    const data = await response.json()
    data.map(item => Data.push(item))
}

getData()

export default Data