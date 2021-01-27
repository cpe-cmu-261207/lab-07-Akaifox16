import { createContext, useEffect, useReducer , useState } from "react";
import dynamic from 'next/dynamic'
const CourseCard = dynamic(() => import('../components/CourseCard'))
const CourseForm = dynamic(() => import('../components/CourseForm'))
import Link from 'next/link'

export const CardContext = createContext({});

function App() {
  const [GPA, setGPA] = useState(0.00);
  function calculateGPA() {
    // TODO
    let grade = 0.00
    let credit = 0
    state.currentState.forEach(obj => {
      if(obj.a !== "W"){
        grade += Number(obj.g) * Number(obj.c)
        credit += Number(obj.c)
      }
    })
    grade  = Number(grade) / Number(credit)
    if(Number(grade) >= 0)
      setGPA(Number(grade.toPrecision(3)))
    else setGPA(0.00)
  }

  const reducer = (state , action) =>{
    switch(action.type){
      case "ADD_CARD":
        return {
          ...state,
          currentState: [...state.currentState, action.payload],
        };
      case "SET_CARD":
        return {
          ...state,
          currentState: action.payload,
        };
      case "DELETE_CARD":
        return {
          ...state,
          currentState: state.currentState.filter((card) => card.id !== action.payload),
        };
      }
  }

  const [state,dispatch] = useReducer(reducer, {currentState:[],})
  function fetchCards() {
    const localState = localStorage.getItem("currentState");
    if (localState) {
      dispatch({
        type: "SET_CARD",
        payload: JSON.parse(localState),
      })
    }
    calculateGPA()
  }

  useEffect(fetchCards, [])
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state.currentState));
    calculateGPA()
  }, [state.currentState])
  const style = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  }
  return (
    <CardContext.Provider value = {{state,dispatch}}>
      <div>
      <table id ="Link">
            <tr>
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
            </tr>
        </table>
        <h1>GPA CALCULATOR</h1>
        <CourseCard state={state.currentState} />
      </div>
      <CourseForm />
      <h2>{GPA.toFixed(2)}</h2>
    </CardContext.Provider>
  );
}

export default App;