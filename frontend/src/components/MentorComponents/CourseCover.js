import React, { useState } from 'react';
import '../../styles/CourseCover.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';

const CourseCover = ({coverName, setCoverName, saveData})=>{
  
    const [file, setFile] = useState();
    
    const handleFormSubmit = async e =>{
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);

      try{
        const config = {
          headers: {
            'Content-Type': 'Application/json'
          }
        }
        const res = await axios.post('/api/upload', data, config);
        setCoverName(res.data.file.filename)
        } catch(e){
            console.log(e); 
            let error={message: "Something went wrong. Try again!"};
            let errors = [];
            this.setState({
                errors: errors.concat(error)
            })
        }
    }
    
    
    return (
        <div className= "coursecover-container">
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <h2 className='coursecover-container__heading'>Upload Cover Image</h2>
                <p>If you are not sure about it, just upload something related to your course as you can edit it later on</p>
                    {coverName ?
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                     <img src={`http://localhost:5100/api/image/${coverName}`} style={{width: "30%", height:"30%", marginTop:"30px", marginBottom:"30px"}} alt="Course Thumbnail" />
                     <label htmlFor="file" ></label>
                     <input
                     type="file"
                     id="file"
                     className={{ marginLeft:"20px"}}
                     accept=".png, .jpeg, .jpg"
                     onChange={event => {
                         const file = event.target.files[0];
                         setFile(file);
                     }}
                     />
                     <input
                    className="coursecover-container__upload-button"
                    type="submit"
                    name="submit"
                    value="Upload"
                    />
                    </div>
                    : 
                    <section className="coursecover-container__upload-box">
                    <label htmlFor="file" style={{marginTop:"90px"}}>Upload Cover</label>
                    <input
                    type="file"
                    id="file"
                    accept=".png, .jpeg, .jpg"
                    style={{marginTop:"20px", marginLeft:"50px"}}
                    onChange={event => {
                        const file = event.target.files[0];
                        setFile(file);
                    }}
                    />                
                    <input
                    className="coursecover-container__upload-button"
                    type="submit"
                    name="submit"
                    value="Upload"
                    />
                    </section>
                    }
            </form>

             <Link className="coursecover-container__previous-btn" to="/mentor/create-cover/description">
              Previous
            </Link>
            <button
                className="coursecover-container__continue-btn"
                onClick={e => saveData(e)}
            > Save </button>
        </div>
  );
} 

export default CourseCover;