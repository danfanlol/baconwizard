import {useState,useEffect} from 'react'
import axios from 'axios'
// Firebase Demo
// import {db} from './firebase-config'
// import {collection,getDocs, addDoc, doc, updateDoc} from 'firebase/firestore'

// function App(){
//     const [newName,setnewName] = useState("")
//     const [newAge,setnewAge] = useState(0)
//     const [users,setUsers] = useState([]);
//     const userscollection = collection(db, "users")

//     const createUser = async () => {
//         await addDoc(userscollection, {name: newName, age: newAge})
//     }

//     const updateUser = async (id, prevAge) => {
//         const userDoc = doc(db,"users",id)
//         const newfields = {age: prevAge + 1}
//         await updateDoc(userDoc, newfields)
//     }
//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(userscollection)
//             setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
//         }

//         getUsers()
//     }, [])
//     return (
//         <div>   
//             <input placeholder = "Name..." onChange = {(event) => { setnewName(event.target.value)}}/>
//             <input type = "number" placeholder = "Age..."  onChange = {(event) => { setnewAge(event.target.value)}}/>
//             <button onClick = {createUser}> Create User </button>
//             {users.map((user) => {
//             return <div> 
//                 <h1> Name: {user.name} </h1>
//                 <h1> Age: {user.age} </h1>
//                 <button onClick = {() => {updateUser(user.id, user.age)}}> Increase Age </button>
//                  </div>
//         })}</div>
//     )
// }

function App(){

    const [file,setFile] = useState(null)
    const handleFile = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }
    const handleUpload = (e) => {
        let formdata = new FormData()
        formdata.append('image',file)
        formdata.append('name','Daniel Fan')
        axios.post('http://localhost:5000/api',file).then((res) => {console.log(res + " SUCCESSFUL")})
    }
    return (
        <div> 
            <h1> THE FORM  </h1>
            <form> 
                <div> 
                    <label> Select File</label>
                    <input type = "file" onChange ={(e) => {handleFile(e)}}/> 
                </div>
                <button type = "button" onClick ={(e) => {handleUpload(e)}}> Upload </button>
            </form>
        </div>
    )
}




export default App