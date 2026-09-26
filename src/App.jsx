import { useEffect, useState } from 'react'
import './App.css'
function App() {
   const [posts,setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const fetchposts = async()=>{
      try {
      setLoading(true)
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json();
      setPosts(data);
      setLoading(false)
      } catch (error) {
   console.log(error.message);
   setLoading(false)
      }
    }
    fetchposts()
  },[])
  if(loading){
    return <h1>Loading.....</h1>
  }
  else if(!posts){
    return <h1>No data</h1>
  }
  return (
    <div className='tutorial'>

      <h1>Heloo</h1>
      <ul>
         {
          posts.map(p=>{
            return <li key={p.id}>{p.title}</li>
          })
         }
      </ul>
    </div>
  )
}

export default App
