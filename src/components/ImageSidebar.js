// import React, {useState} from 'react'
//
// export default function ImageSidebar({onImagesSelected}) {
//     const [imageUrls, setImageUrls] = useState([]);
//     const handleImageUpload = (e) => {
//         const files = e.target.files;
//         const urls = Array.from(files).map((file) => URL.createObjectURL(file));
//         setImageUrls((prevUrls) => [...prevUrls, ...urls]);
//         onImagesSelected(urls);
//     }
//     return (
//         <div className="w-[200px] bg-[#f4f4f4] p-2 overflow-y-scroll">
//             <label>
//                 <p className="text-2xl text-white border-2 p-2 bg-blue-500 hover:bg-blue-400 cursor-pointer text-center rounded-xl">Select photos</p>
//                 <input className="hidden" type="file" multiple onChange={handleImageUpload}/>
//             </label>
//             <div className="mt-2">
//                 {imageUrls.map((url, index) => (
//                     <img
//                         key={index}
//                         src={url}
//                         alt={`img-${index}`}
//                         className="mb-1 cursor-pointer h-[100] w-[150]"
//                         draggable={true}
//                         onDragStart={(e) => e.dataTransfer.setData('imageUrl', url)}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

export default function ImageSidebar({onDrop, images}) {
    const handleDrop = useCallback((acceptedFiles) => {
        const imageUrls = acceptedFiles.map(file => URL.createObjectURL(file));
        onDrop(imageUrls);
    }, [onDrop]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: handleDrop,
        accept: 'image/*'
    });
    return (
        <div className="w-[250px] bg-gray-600 p-2">
            <div {...getRootProps()}
                 className="border border-gray-200 p-2 cursor-pointer text-center text-white font-bold uppercase hover:bg-gray-400">
                <input {...getInputProps()} />
                <p>Upload some images</p>
            </div>
            <div className="mt-2 overflow-y-scroll h-[700px]">
                {images.length ? images.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`img-${index}`}
                        className="mb-1 cursor-pointer h-[100] w-[150]"
                        draggable={true}
                        onDragStart={(e) => e.dataTransfer.setData('imageUrl', url)}
                    />
                )) : <p className="text-white text-center">There are no images</p>}
            </div>
        </div>
    )
}
