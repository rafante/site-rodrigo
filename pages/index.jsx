import { useRouter } from "next/dist/client/router";

function Home() {
  const router = useRouter()
  var navegar = ()=>{
    router.push('/about')
  }
  return <div>
    Olá Mundo
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <button onClick={navegar}>Navegar para About</button>
  </div>;
}

export default Home
