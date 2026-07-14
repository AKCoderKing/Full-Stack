import {useState} from"react";
import {useFormik} from "formik" 

// export default function CommentsForm({addNewComment}) {
//     let [formData, setFormData] = useState({
//         username :"",
//         remarks:"",
//         rating: 5,
//     });
    
//     // let [isValid,setIsValid] = useState(true);
    
//     let handleInputChange =(event) =>{
//         setFormData((currData) => {
//             return { ...currData , [event.target.name]: event.target.value};
//         });
//     };
 
//     let handleSubmit = (event) => {
//         // if(!formData.username) {
//         //     console.log("username is null");
//         //     setIsValid(false);
//         //     event.preventDefault();
//         //     return;
//         // }
//         // setIsValid(true);

//         console.log(formData);
//         addNewComment(formData);
//         event.preventDefault();
//         setFormData({
//            username: "",
//            remarks: "",
//            rating: 5,
//         });
//     };

//     return (
//         <div> 
//             <h4>Give a Comment!</h4>
//             <form onSubmit = {handleSubmit}>
//             <label htmlFor="username">Username</label>
//             <input placeholder ="username" 
//              type ="text"
//              value = {formData.username} 
//              onChange ={handleInputChange} 
//              name ="username"
//              id = "username"
//             />

//             {/* {!isValid && <p style ={{color:"red"}}>Username can not be empty</p>} */}

//             <br></br><br></br>
//             <label htmlFor="ramarks">Remarks</label>
//             <textarea 
//              value={formData.remarks}  
//              placeholder="add few remarks" 
//              onChange={handleInputChange}
//              name = "remarks"
//              id = "remarks">Remarks</textarea>
//             <br></br><br></br>        

//             <label htmlFor="rating">Rating</label>
//             <input
//              placeholder ="rating"
//              type ="number" 
//              min ={1} 
//              max={5} 
//              value ={formData.rating} 
//              onChange={handleInputChange}
//              name ="rating"
//              id ="rating"
//             />

//             <br></br><br></br>

//             <button>Add Comment</button>
//         </form>

//         </div>
//     );
// }

// validation by formik


export default function CommentsForm({addNewComment}) {

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username cannot be empty";
        } 
    
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username :"",
            remarks:"",
            rating: 5,
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values,null,2));
        },
     });
    
    // let [isValid,setIsValid] = useState(true);
    
    return (
        <div> 
            <h4>Give a Comment!</h4>
            <form onSubmit = {formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input placeholder ="username" 
             type ="text"
             value = {formik.values.username} 
             onChange ={formik.handleChange} 
             name ="username"
             id = "username"
            />

            {formik.errors.username ? <p>{formik.errors.username}</p> : null}

            <br></br><br></br>
            <label htmlFor="ramarks">Remarks</label>
            <textarea 
             value={formik.values.remarks}  
             placeholder="add few remarks" 
             onChange={formik.handleChange}
             name = "remarks"
             id = "remarks">Remarks</textarea>
            <br></br><br></br>        

            <label htmlFor="rating">Rating</label>
            <input
             placeholder ="rating"
             type ="number" 
             min ={1} 
             max={5} 
             value ={formik.values.rating} 
             onChange={formik.handleChange}
             name ="rating"
             id ="rating"
            />

            <br></br><br></br>

            <button type ="submit">Add Comment</button>
        </form>
        </div>
        
    );
}



