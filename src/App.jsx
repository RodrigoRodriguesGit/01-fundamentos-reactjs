import { Post } from "./Post"

export function App() {  
  return (
    //<h1>Hello World</h1>
    <div>
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

