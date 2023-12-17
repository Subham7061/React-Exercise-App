export const options = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '81f296760fmshf2b61cbe2b8f65fp1c3309jsn3a2643b7c9b0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
  export const youTubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ffec53856dmsh109f00e0023eb06p12be30jsn4639a6db357d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const  fetchData  =  async(url,options)=>  {
        const response=await fetch(url,options);
        const data=  await response.json();
        
        return data;
}