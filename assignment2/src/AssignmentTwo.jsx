import { useState } from 'react'

const AssignmentTwo = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name: inputName, value } = e.target;
        if (inputName === "name") {
            setName(value);
        } else if (inputName === "age") {
            setAge(value);
        }
    }

    const handleSubmit = () => {
        const obj = {
            name:name,
            age:age
        }
        setData([...data,obj])
    }

    return (
        <div>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <input type="text" name="age" value={age} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            {data.map((item,index)=>(
                <h1 key={index}>{item.name}{item.age}</h1> 
            ))}
        </div>
    )
}

export default AssignmentTwo