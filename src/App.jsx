import { Post } from "./Post"
import { Header } from "./components/Header"
import './styles.css'

export function App() {  
  return (
    <div>      
      <Header />
      <Post 
        author="Rodrigo Rodrigues" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ullam voluptatibus, quod, veritatis aperiam nulla cupiditate consectetur tempora sequi perspiciatis deserunt reiciendis quisquam iure facere, repudiandae non quis assumenda error!" 
      />
      <Post 
        author="Thais Bomfim Baptista" 
        content="2º Post" 
      />
    </div>
  )
}

