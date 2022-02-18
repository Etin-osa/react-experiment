import { useState, useCallback } from "react"
import ChildHook from './ChildHook'

const Hooks = () => {
  const [ data, setData ] = useState('Something important')
  const [ toggle, setToggle ] = useState(false)

  const returnComments = useCallback(() => {
    return data
  }, [data])

  return (
    <div>
      <ChildHook returnComments={returnComments} />
      <button onClick={() => setToggle(!toggle)}>Toggle Button</button>
      { toggle && <h4>Just to prove a point</h4>}
    </div>
  )
}

export default Hooks



// React Hooks


/*  useCallback

  This hook is pretty much the same as the useMemo hook the only difference being that the useMemo stores the value gotten from the function and compares it why the useCallback store the entire function itself

  Step(s) in Parent !
  1.  import the useCallback hook and assigned a function and a dependency variable
  const returnComments = useCallback(() => {
    return data
  }, [data])

  2.  Assigned the function to whichever children component
  <ChildHook returnComments={returnComments} />


  Step(s) in Child
  1.  In the children component we call the we called the function in the child component
  <h2>{ returnComments() }</h2>

  2.  Create a useEffect that react to changes in the returnComments function
  useEffect(() => {
    console.log('THIS WAS FUN!!')
  }, [returnComments])



  Complete Code In Parent
  const [ data, setData ] = useState('Hey everyone, how we doing?')
  const [ toggle, setToggle ] = useState(false)

  const returnComments = useCallback(() => {
    return data
  }, [data])

  return (
    <div>
      <ChildHook returnComments={returnComments} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      { toggle && <h2>Toggle text</h2>}
    </div>
  )


  Complete code in Children
  useEffect(() => {
    console.log('THIS WAS FUN!!')
  }, [returnComments])

  return (
    <div className="">
      <h2>{ returnComments() }</h2>
    </div>
  )

*/




/*  useMemo
  This hook is used for optimization, Normally in react when there is a re-render of any sort, every function(that returns a value) that gets called in the dom element get re-rendered even when they weren't called.

  The useMemo prevents that from happening by storing the value returned from the function and for the function to only be called when a certain value it's relying on changes.

  First is to import useMemo and then set the useMemo to the function
  const getLongestName = useMemo(() => function-that-needs-memoization(), [data-changing-dependency])

  And then call the getLongestName in place of the function in the dom;



  Full Code
  const [ data, setData ] = useState(null)
  const [ toggle, setToggle ] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(res => setData(res.splice(0, 100)))
      .catch(err => console.log(err));
  }, [])

  const longestName = (comments) => {
    if (!comments) return

    let longest = ''
    for ( let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name
      if (currentName.length > longest.length) {
        longest = currentName
      }
    }

    console.log('STOP CALLING ME ALL THE TIME')
    return longest
  }

  const getLongestName = useMemo(() => longestName(data), [data])

  return (
    <div>
      <h2>{ getLongestName }</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      { toggle && <h2>Toggle text</h2>}
    </div>
  )

*/




/*  useContext
  This hook helps us transfer data(mainly states) through the useContext api from parent to children component without having to pass them manually

  In this example we transfering username and setUsername to 2 different component, One to display, the other to change

  Steps on How  !

  Parent Component
  1.  Import the createContext(built-in) react file
  import { createContext } from 'react'

  2.  Use useState to set the data being transferred
  const [ username, setUsername ] = useState('')

  3.  Set our context API and export (Outside of main Component function)
  export const AppContext = createContext(); // The AppContext name can be any name you choose

  4.  Wrap our dom with Appcontext and then set it value to our state and setState
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <ChildComponent1 />
      <ChildComponent2 />
    </AppContext.Provider>
  )


  Child Component
  1.  Import useContext from react and AppContext from parent
  import { useContext } from 'react'
  import { AppContext } from 'path-to-parent'

  2.  Get the data from useContext and AppContext
  const { username } = useContext(AppContext) or in the other component const { setUsername } = useContext(AppContext)

  3.  You can now easily apply to anything part of the component you choose e.g
  <input type="text" onChange={(e) => {
    setUsername(e.target.value)
  }} /> Or <h1>User: { username }</h1>


*/




/*  useImperativeHandle
  This hook is a bit complicated but what it does is simply gives the parent component the ability to change the value of a useState's state created in the child component using the useRef hook

  In this example we are going to show a text in the child component base on if the state is true or false;

  STEPS in the Child Component

    1.  Import forwardRef(a built-in method in react) property from react
    import { forwardRef } from 'react'

    2.  Wrap your component with the forwardRef, and add a new parameter called ref.
    const childComponent = forwardRef((props, ref) => {...}); The ref always has to be the second parameter

    3.  Create your state in child component that you want to change
    const [toggle, setToggle] = useState(true);

    4. use the useImperativeHandle in the child component
    useImperativeHandle(ref, () => ({
      alterToggle() {
        setToggle(!toggle)
      }
    }));


    The function inside the useImperativeHandle is going be accessed by the parent element and when called it toggles the value of the current state between true and false, and i believe you can add multiple functions inside the useImperativeHandle hook

    The dom of the child element
    return (
      <div className="">
        <button><h2>Button from Child</h2></button>
        { toggle && <h1>Toggle Text</h1>}
      </div>
    )




    STEPS in the Parent Component

      1.  import the child component
      import ChildComponent from 'path-to-child-component'

      2.  Set your useRef
      const changeRef = useRef()

      3.  Pass the ref to the child component
      <ChildComponent ref={changeRef} />

      4.  Now you can access the alterToggle function from the parent
      <button onClick={() => {
        changeRef.current.alterToggle()
      }}>Button from Parent</button>


      The dom of the parent component
      return (
        <div>
          <button
            onClick={() => {
              childRef.current.alterToggle()
            }}
          ><h1>Button from Parent</h1></button>
          <ChildHook ref={ childRef } />
        </div>
      )
*/




/*  useLayoutEffect
  This hook is very similar to useEffect, the difference is that, useEffect is called after the browser has updated and painted the changes why useLayoutEffect is called after the browser has updated and before the painting, It is a synchronous re-render by updating state. A user won't really notice the changes unless using console log
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    inputRef.current.value = 'Big Man Etin-osa'
  })

  // Changing a dom element and see that the input layout called the old value before it was changed by useEffect
*/




/*  useRef
  This is used to access and manipulate the dom, and it's a very easy state to use

  Let say we want to get a dom input and manipulate it's value or focus or whatever we choose. just know you access the dom element property with useRef
  const inputRef = useRef();

  // Jsx
  <input type="text" ref={inputRef} placeholder="Eg." />

  in A button or in a function called somewhere else and reference in the button we can manipulate the inputRef
  But we will manipulate it in the button
  <button onClick={() => {
    console.log(inputRef.current.value)
    console.log(inputRef.current.focus())
    // The current property returns the input element itself so everything you can do with an element in vanilla js that has being querySelected(document.querySelector) you can do with the current property
  }}>Click Me</button>



  Full Code
  <h1>Etin-osa</h1>
  <input type="text" ref={inputRef} placeholder='Eg.' />
  <button onClick={() => {
    console.log(inputRef.current.value)
  }}>Click Me</button>
*/




/*  useReducer
  This hook is similar to useState the major difference is that useReducer is more advisable for mulitple states.
  const [state-property, like-setState-in-useState] = useReducer(some-function, properties-in-state)
  const [state, dispatch] = useReducer(reducer, { count: 0, something: true })

  The reducer is a function(that can be named anything) that set cases for when to change each or multiple properties of the state
  function reducer(state, action) {
    switch (action.type) {
      case "Inc":
        return { count: state.count + 1, showText: state.showText }
      case "Dec":
        return { count: state.count, showText: !state.showText }
      default:
        return state
    }
  }

  To change the state maybe in something like a button click we use the dispatch button to set the action type we need for that button
  <button
    onClick={() => {
      dispatch({ type: "Inc" })
      dispatch({ type: "Dec" })
    }}
  >Click Me</button>



  Full Code
  <div>
    <h1>{ state.count }</h1>
    <button
      onClick={() => {
        dispatch({ type: "Inc" })
        dispatch({ type: "Dec" })
      }}
    >Click Me</button>
    { state.showText && <div>This is only visible in showText</div>}
  </div>

*/