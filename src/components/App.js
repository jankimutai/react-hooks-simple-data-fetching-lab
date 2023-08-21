// create your App component here
import React , {useEffect, useState} from "react";
function App (){
    const [getImg , setImg] = useState(null)
    //const [getIsLoaded , setIsLoaded] = useState(false)
   useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImg(data.message));
  },[]); 
    return(
        <div>
      {getImg ? (
        <img src={getImg} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )

};
export default App;
