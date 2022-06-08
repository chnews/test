import React from 'react'
import { useState } from 'react'

const createPost = () => {

    const [image, setImage] = useState(null);
    const [imageInput, setImageInput] = useState(null);



    const handleImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setImageInput(file);

        const fileReader = new FileReader();
        fileReader.onload = function(e){
            
            setImage(e.target.result);
        }
        fileReader.readAsDataURL(file);

    }
   
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                <form>
                    <div className="form-group mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Title"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Description"
                        />
                    </div>
                </form>

                <div className='row'>
                    <div className='col'>
                        <input 
                            type="file" 
                            className="custom-file-input" 
                            id="customFile" 
                           onChange={handleImage}
                        />
                    </div>

                    <div className='col'>
                   {image && <img src={image} style ={{width: '100px', height: '100px'}}/>}
                    </div>
                </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default createPost