import React from 'react'
// import Header from './component/header/header'
import UserContext from '../src/component/context/context'
import { useEffect, useState } from 'react'
import Fetching from './component/body/Fetching'


const App = () => {


  
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2https://reqres.in/https://reqres.in/api/users?page=2');
      const result = await response.json();
      setData(result.data);
      // console.log(result.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 return (
  <>
    {/* <Header /> */}
    <UserContext.Provider value={data}><Fetching/></UserContext.Provider>

  </>
)
}

export default App