// import PhotoBook from "./components/PhotoBook";
// import ImageSidebar from "./components/ImageSidebar";
// import {useState} from "react";
// import PhotoCanvas from "./components/PhotoCanvas";
//
// function App() {
//     const [uploadedImages, setUploadedImages] = useState([]);
//
//     const handleImageSelected = (newImages) => {
//         setUploadedImages((prevImages) => [...prevImages, ...newImages]);
//     }
//     return (
//         <div className="flex justify-center items-center flex-col">
//             <h1>Photos Clone</h1>
//             <div className="flex">
//                 <ImageSidebar onImagesSelected={handleImageSelected}/>
//                 <PhotoCanvas images={uploadedImages}/>
//             </div>
//         </div>
//     );
// }
//
// export default App;


import React, {useState} from 'react'
import ImageSidebar from "./components/ImageSidebar";
import PhotoCanvas from "./components/PhotoCanvas";

export default function App() {
    const [images, setImages] = useState([]);

    const handleDrop = (newImages) => {
        setImages((prevImages) => [...prevImages, ...newImages])
    }
    return (
        <div className="flex m-5 justify-center">
            <ImageSidebar onDrop={handleDrop} images={images}/>
            <PhotoCanvas images={images}/>
        </div>
    )
}
