import Greeting from './Greeting.jsx'
import Component from './Component.jsx'
import Message from './Message.jsx'
import Person from './Person.jsx'
import BookList from './components/BookList.jsx'

const Hello = ()=>{

  return(
    <>
      <h1>Hello from hello</h1>
    </>
  )
  
}

const Calc = ()=>{

  return(
    <>
      <p>You have {2+3} notifications</p>
    </>
  )

}

function App() {

  return (
    <>
    <BookList/>
    <Person/>
    <Message/>
    <Calc/>
    <Hello/>
    <Greeting />
    <Component />
    </>
  )
}

export default App
