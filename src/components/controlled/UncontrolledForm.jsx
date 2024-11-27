import { useRef, useState } from 'react';

export const UnControlledForm = () => {
  const nameInput = useRef();
  const ageInput = useRef();
  const hairColorInput = useRef();
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
    console.log(images);
    e.preventDefault();
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    const newImagesPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentLoaded = Math.round(
              (event.loaded / event.total) * 100,
            );
            console.log(`Progress: ${percentLoaded}%`);
          }
        };

        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (event) => reject(event.target.error);

        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImagesPromises)
      .then((uploadedImages) => {
        setImages((previousImages) => [...previousImages, ...uploadedImages]);
      })
      .catch((error) => {
        console.error('Error reading files:', error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name..." ref={nameInput} />
        <input type="number" name="age" placeholder="Age..." ref={ageInput} />
        <input
          type="text"
          name="hairColor"
          placeholder="Hair Color..."
          ref={hairColorInput}
        />
        <input
          type="file"
          multiple
          onChange={handleImageUpload} // Use onChange instead of onClick
          name="image"
          accept="image/*"
        />
        <input type="submit" value="Submit" />
      </form>
      {images.length > 0 && (
        <div className="my-2 flex gap-2 flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-24 h-24 object-cover"
            />
          ))}
        </div>
      )}
    </>
  );
};
