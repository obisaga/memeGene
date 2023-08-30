import React from 'react'
import {useState, useEffect} from 'react'
import "../Meme.css"
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'



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
    <p className="title">Meme Generator</p>
    
    {/* <div className="memeContainer" style={{backgroundImage: `url(${pic})`}}> */}
    <div className="memeContainer">
    <p className="up">{submittedUpper}</p>
    <img className="picture" src={pic}/>
    <p className="bottom">{submittedBottom}</p>
    </div>

    <br/>
    <div className="change">
        <Button className="changer" variant="dark" type="submit" onClick={handleClick}>Change</Button>
</div>
   





{/* <form onSubmit={upperHandler}>
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
        </form> */}
<div>
<Form className="formcontainer" onSubmit={upperHandler}>
      <Form.Group className="mb-3">
        
        <Form.Control type="text" placeholder="Upper text..." value={upper}
        onChange={upperChangeHandler}/>
         <Button variant="light" type="submit" onSubmit={upperHandler}>
        ADD
      </Button>
      </Form.Group>
     
    </Form>

            
<Form className="formcontainer" onSubmit={bottomHandler}>
      <Form.Group className="mb-3">
       
        <Form.Control type="text" placeholder="Bottom text..." value={bottom}
        onChange={bottomChangeHandler}/>
        <Button variant="light" type="submit" onSubmit={bottomHandler}>
        ADD
      </Button>
      </Form.Group>

     
      
    </Form>

</div>
        

    </>
  )
}

export default Meme