import {useState} from "react";

export default function Form () {
    let [formData,setFormData] = useState(
        {
            fullName: "",
            userName: ""

        }
    );
    
    // let [fullName,setFullName] = useState("");
    // let [userName,setUsername] = useState("");
   
    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };
    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((currData) => {
            currData[fieldName]  = newValue;
            return{...currData};
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
        });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="fullName">Full name</label>

            <input 
              placeholder = "enter full name"
              type ="text"
              value={formData.fullName}
              id = "fullName"
              name = "fullName" // name humara stateobeject k similar hoga
              onChange={handleInputChange}
            />

            <br></br>

            <label htmlFor="username">Username</label>
            <input 
              placeholder = "enter username"
              type ="text"
              value={formData.userName} 
              id = "username"
              name="userName"
              onChange={handleInputChange}

            />
            <button>Submit</button>
        </form>
    );
}