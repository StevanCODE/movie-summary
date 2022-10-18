export async function getShows(url='https://api.tvmaze.com/shows'){
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('Error Getting Data')
    }
    else if(response.ok){
      const data = await response.json()
      return data
    }
    
  }
  catch(err){
    throw new Error(err)
  }
}
