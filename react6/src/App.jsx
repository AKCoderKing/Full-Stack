import { useState } from 'react'
import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comments from './Comments'
import Counter from './Counter';
import Joker from './Joker';
function App() {

  return (
    <>
      {/* <Form/> */}
      <Comments/>
      <Counter/>
      <Joker/>
      {/* <CommentsForm/> */}

    </>
  )
}

export default App
