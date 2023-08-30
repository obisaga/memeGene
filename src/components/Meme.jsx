import React from 'react'
import {useState, useEffect} from 'react'
import "../Meme.css"




const Meme = () => {


const url = "https://api.imgflip.com/get_memes"

// const [pic, setPic] = useState("");
const [pic, setPic] = useState("")
const [num, setNum] = useState(0)
const randomNum = Math.floor(Math.random() * (99 - 0 + 1)) + 0


const handleClick = () => {
    setNum(randomNum)
    console.log(num)
  };



useEffect(() => {

  
      const fetchMeme = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setPic(data.data.memes[num].url)
        } 
        catch (error) {
          console.error(error);
        }
            
      };
      fetchMeme()

    }, [handleClick]);


//     const [upper, setUpper] = useState("")

// let tmpUpper;

//   const onChange = (event) => {
//     event.preventDefault();

//     tmpUpper = event.target.value;

//   };



  const [upper, setUpper] = useState("");
  const [submittedUpper, setSubmittedUpper] = useState(null);
  const upperChangeHandler = (e) => {
    setUpper(e.target.value);
  };

  const upperHandler = (event) => {
    event.preventDefault();
    setSubmittedUpper(upper);
    setUpper("");
  };



  const [bottom, setBottom] = useState("");
  const [submittedBottom, setSubmittedBottom] = useState(null);
  const bottomChangeHandler = (e) => {
    setBottom(e.target.value);
  };

  const bottomHandler = (event) => {
    event.preventDefault();
    setSubmittedBottom(bottom);
    setBottom("");
  };




  return (
    <>
    <h1>Meme</h1>
    
    <div className="memeContainer" style={{backgroundImage: `url(${pic})`}}>
    <p className="up">{submittedUpper}</p>
    <p className="bottom">{submittedBottom}</p>

    </div>

    <br/>
    <button onClick={handleClick}>Change</button>



    <form onSubmit={upperHandler}>
        <label>
        Add upper text:
       
      <input
        placeholder="Type something..."
        type="text"
        value={upper}
        onChange={upperChangeHandler}
      />
       </label>
      <button type="submit" > Submit </button> <span></span>
      </form>
      <form onSubmit={bottomHandler}>
        <label> Add bottom text:<span/>
      <input
        placeholder="Type something..."
        type="text"
        value={bottom}
        onChange={bottomChangeHandler}
      />
      </label>
      <button type="submit" > Submit </button> <span></span> 
        </form>

    
    </>
  )
}

export default Meme