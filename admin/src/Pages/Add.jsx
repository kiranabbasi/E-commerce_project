import React, { useState } from 'react';
import { assests } from '../assets/Assests';
import axios from 'axios';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [images, setImages] = useState({
    image1: { preview: null, file: null },
    image2: { preview: null, file: null },
    image3: { preview: null, file: null },
    image4: { preview: null, file: null }
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [Category, setCategory] = useState('DinnerWare');
  const [Color, setColor] = useState('White');
  const [prize, setPrize] = useState('');
  const [BestSeller, setBestSeller] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e, imageKey) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload an image in PNG, JPG, or JPEG format.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => ({
          ...prevImages,
          [imageKey]: { preview: reader.result, file: file },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loader
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("Category", Category);
      formData.append("Color", Color);
      formData.append("prize", prize);
      formData.append("BestSeller", BestSeller);

      Object.keys(images).forEach((imageKey) => {
        if (images[imageKey].file) {
          formData.append(imageKey, images[imageKey].file);
        }
      });
      
      const response = await axios.post(BackendUrl + "/api/product/add", formData,{ headers: { Authorization: `Bearer ${token}` } } );

      if (response.data.success === true) {
        console.log(response.data.message || "Product Added Successfully.");
        toast.success(response.data.message || "Product Added Successfully.");
        setName('');
        setDescription('');
        setImages({
          image1: { preview: null, file: null },
          image2: { preview: null, file: null },
          image3: { preview: null, file: null },
          image4: { preview: null, file: null }
        });
        setPrize('');
        setBestSeller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-8'>
      {loading ? (
        <div className='loader-container'>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div>
            <p className='mb-2 text-sm font-medium'>Upload Image</p>
            <div className='flex gap-2 flex-wrap'>
              {['image1', 'image2', 'image3', 'image4'].map((imageKey, index) => (
                <label key={index} htmlFor={imageKey}>
                  <div className='border bg-zinc-100 flex items-center justify-center p-5 flex-col gap-2'>
                    {images[imageKey].preview ? (
                      <img src={images[imageKey].preview} className='w-20 h-20 object-cover' alt="Uploaded" />
                    ) : (
                      <>
                        <img src={assests.upload} className='w-5' alt="Upload Icon" />
                        <p className='text-[12px] text-gray-500'>Upload image</p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    id={imageKey}
                    hidden
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => handleImageChange(e, imageKey)}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className='w-full'>
            <p className='text-sm font-medium mb-2'>Product Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder='Type here...'
              required
              className='bg-inherit placeholder:text-sm w-full max-w-[500px]'
            />
          </div>

          <div className='w-full'>
            <p className='text-sm font-medium mb-2'>Product Description</p>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder='Write content here...'
              required
              className='bg-inherit placeholder:text-sm bg-slate-100 w-full max-w-[500px] textArea'
            />
          </div>

          <div className='flex gap-8 sm:flex-row flex-col'>
            <div>
              <p className='text-sm font-medium mb-2'>Product Category</p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={Category}
                className='w-32 bg-inherit text-sm font-medium'>
                <option value="DinnerWare">Dinner Ware</option>
                <option value="Ceramic">Ceramic</option>
                <option value="Traditional">Traditional</option>
                <option value="DecorArt">Decor Art</option>
                <option value="GiftSets">Gift Sets</option>
              </select>
            </div>

            <div>
              <p className='text-sm font-medium mb-2'>Product Color</p>
              <select
                onChange={(e) => setColor(e.target.value)}
                value={Color}
                className='w-32 bg-inherit text-sm font-medium'>
                <option value="White">White</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Rose">Rose</option>
                <option value="Grey">Grey</option>
                <option value="Brown">Brown</option>
              </select>
            </div>

            <div>
              <p className='text-sm font-medium mb-2'>Product Prize</p>
              <input
                onChange={(e) => setPrize(e.target.value)}
                value={prize}
                type="number"
                placeholder='100'
                required
                className='bg-inherit placeholder:text-sm w-32'
              />
            </div>
          </div>

          <div className='flex gap-2 '>
            <input
              onChange={(e) => setBestSeller(e.target.checked)}  // Update here
              checked={BestSeller}
              type="checkbox"
              id='BestSeller'
              className='w-4'
            />
            <label
              htmlFor="BestSeller"
              className='cursor-pointer font-medium '>
              Add to Best Seller.
            </label>
          </div>

          <button type='submit' className='w-32 bg-slate-700 text-gray-200 py-1 rounded'>
            Upload
          </button>
        </>
      )}
    </form>
  );
}

export default Add;