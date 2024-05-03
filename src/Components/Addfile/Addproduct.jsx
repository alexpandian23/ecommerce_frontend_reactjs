
// import React, { useState } from 'react'

// export const Addproduct = () => {

//     //image upload
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedOption, setSelectedOption] = useState('');

//     let uploadedImage = null

//     const handleFile = () => {
//         console.log("hello world")
//         const formData = new FormData();
//         formData.append("file", selectedImage);
//         fetch("http://localhost:8080/file/upload", {
//             method: 'POST',
//             body: formData,
//             dataType: "jsonp"
//         })
//             .then(response => response.text())
//             .then(text => {
//                 uploadedImage = text
//                 console.log(text)
//                 alert("imageuploded")
//             })
//     }


//     //add detils
//     const [file, setFile] = useState({
//         productName: "",
//         description: "",
//         price: "",
//         catogries: "",

//     })

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFile({ ...file, [name]: value })
//         console.log(name, value);
//     }
//     const handleSubmit = (event) => {

//         event.preventDefault();
//     }


//     const Addfiles = () => {
//         const files = {
//             productName: file.productName,
//             description: file.description,
//             price: file.price,
//             catogries: selectedOption,
//             image: uploadedImage,

//         }
//         console.log("===Files====", JSON.stringify(files));
//         fetch("http://localhost:8080/file/upload", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(files)
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return (
//                         response.json()
//                     );
//                 } else {
//                     throw new Error(`Server returned status: ${response.status}`);
//                 }
//             })
//     }
//     const handleSelect = event => {
//         console.log("Value----->", event.target.value)
//         setSelectedOption(event.target.value);
//     };
//     return (
//         <div>

//             {selectedImage && (
//                 <div>
//                     <img
//                         alt="not found"
//                         width={"250px"}
//                         src={URL.createObjectURL(selectedImage)}
//                     />
//                     <br />
//                     <button onClick={() => setSelectedImage(null)}>RemoveImage</button>
//                     <button onClick={() => { handleFile() }}>UploadImage</button>
//                 </div>
//             )}


//             <center>

//                 <form onSubmit={handleSubmit} className='bg-primary pro' >
//                     <input type="text" name='productName' className='mb-3' value={file.productName} onChange={handleChange} placeholder='enter a product name' />
//                     <input type="text" name='description' className='mb-3' value={file.description} onChange={handleChange} placeholder='enter a description' />
//                     <input type="text" name='price' className='mb-3' value={file.price} onChange={handleChange} placeholder='enter a price' />
//                     <label htmlFor="catagorie" className='mb-3'>Choose a catagorie:</label>

//                     <select id="catagorie" value={selectedOption} onChange={handleSelect}>
//                         <option value="men">Men</option>
//                         <option value="women">Women</option>
//                         <option value="kids">Kids</option>

//                     </select>
//                     <input type="file" name="image" onChange={(event) => {
//                         console.log(event.target.files[0]);
//                         setSelectedImage(event.target.files[0]);
//                     }} /><br /><br />
//                     <button onClick={() => { Addfiles() }}>Add</button>

//                 </form>
//             </center>
//         </div>
//     )
// }




import React, { useState } from 'react'
// import ReactPlayer from 'react-player';
import axios from 'axios';

export const Addproduct = () => {



    //song image upload
    const [selectedproductImage, setSelectedproductImage] = useState(null);

    const [selectedOption, setSelectedOption] = useState('');

    //add detils in database
    const [file, setFile] = useState({
        productName: "",
        description: "",
        price: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFile({ ...file, [name]: value })
        console.log(name, value);
    }

    const handleChange1 = (event) => {
        setSelectedOption(event.target.value);
        console.log("category",event.target.value);
      };

    const Addfiles = () => {
        console.log("Uploading files...");

        const formData = new FormData();
        formData.append("productName", file.productName);
        formData.append("description", file.description);
        formData.append("price", file.price);
        formData.append("productImage", selectedproductImage);
        formData.append("category", selectedOption);

        axios.post("http://localhost:8080/file/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                console.log("Response:", response.data);
                alert("Product Added successfully")
                clearInputFields();
            })
            .catch(error => {
                console.log("Error:", error);
                // Handle error
            });
        const clearInputFields = () => {
            // Clear input fields
            setFile({
                productName: "",
             description: "",
                price: ""
            });
            setSelectedproductImage(null);
           
            setSelectedOption("");
        };
    };


    return (
        <div>

            {selectedproductImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"} height={"250px"}
                        src={URL.createObjectURL(selectedproductImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedproductImage(null)}>RemoveproductImage</button>
                </div>
            )}


           

            <center>
                <div id='form1' className='bg-info'>
                    <input type="text" name='productName' value={file.productName} onChange={handleChange} placeholder='enter a product name' />
                    <input type="text" name='description' value={file.description} onChange={handleChange} placeholder='enter a description' />
                    <input type="text" name='price' value={file.price} onChange={handleChange} placeholder='enter a price' />
                    <br />
                    <label htmlFor="productImage" className="file-input-label">Choose an product image</label>
                    <input id="productImage" type="file" name="productImage" onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedproductImage(event.target.files[0]);
                    }} /><br /><br />

                   
                   
                    <select value={selectedOption} onChange={handleChange1}>
                        <option value="">Select a categeroy</option>
                        <option value="mens">mens</option>
                        <option value="womens">womens</option>
                        <option value="kids">kids</option>
                    </select><br /><br />
                    <button onClick={() => Addfiles()}>Add</button>
                </div>
            </center>
        </div>
    )
}


