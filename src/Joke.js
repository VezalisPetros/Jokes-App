import React from 'react'

export default function Joke(){
    const[joke,setJoke]=React.useState({})
    const[newJoke,setNewJoke]=React.useState(0)
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    
    React.useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json())
            .then(data => setJoke(data))
    }, [newJoke])
    
    return(


         <div className='container'>

            <section>
                <h1 className='setup'>Setup: {joke.setup} </h1>
                {isShown && <h2 className='punchline'>Punchline: {joke.punchline}</h2>}
                <button className='btn-showPunchiline' onClick={toggleShown}>{isShown?"Hide punchline":"Show punchline"}</button>
                <button className='btn-newJoke' onClick={() => setNewJoke(prevJoke => prevJoke + 1)}>New Joke</button>
            </section>
        
        </div>
    )
}
