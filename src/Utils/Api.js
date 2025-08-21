


export const fetchAll =  async () => {
    
    const NASA_KEY = import.meta.env.VITE_API_KEY;
    const today = new Date();
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(today.getDate() - 14);

    const startDate = twoWeeksAgo.toISOString().split('T')[0];
    const endDate = today.toISOString().split('T')[0];

    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&start_date=${startDate}&end_date=${endDate}`;
    
    try {
      const response = await fetch(url); 
      return await response.json(); 
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  export const fetchToday =  async () => {
    
    const NASA_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
    
    try {
      const response = await fetch(url); 
      const apiData = await response.json(); 
      return apiData;
    } catch (error) {
        console.log(error)
      console.error('Error fetching data:', error.message);
    }
  }

  export const fetchSingleDate =  async (date) => {
    
    const NASA_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;

    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      const apiData = await response.json(); 
      return apiData;
    } catch (error) {
        console.log(error)
      console.error('Error fetching data:', error.message);
    }
  }


  export const nasaLoader = async() => {
    const data = await fetchAll();
    return data;
  }


  export const dateLoader = async({params : {date}}) => {

    const data = await fetchSingleDate(date);

    if (!date) {
        throw new Error("Date parameter is missing");
      }

    return data;
  }
