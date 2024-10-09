import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import { BackendUrl, Currency } from '../App'; 
import { toast } from 'react-toastify';
import { assests } from '../assets/Assests';

const List = ({token}) => {
  const [list, setList] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [removing, setRemoving] = useState(false); 

  // Fetch the list of products
  const fetchList = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/api/product/listProduct`);
      if (response.data.success) {
        setList(response.data.Products);
      } else {
        toast.error(response.data.message || 'Error displaying products');
      }
    } catch (err) {
      toast.error('Error fetching the list');
      setError('Error fetching the list');
    } finally {
      setLoading(false);
    }
  };

  // Remove product by id
  const removeProduct = async (id) => {
    setRemoving(true);  // Start removing loader
    try {
      const response = await axios.post(`${BackendUrl}/api/product/remove`, { id }, { headers: token });
      if (response.data.success) {
        toast.success(response.data.message || 'Product removed successfully.');
        await fetchList();  // Refresh the product list after removal
      } else {
        toast.error(response.data.message || 'Error removing the product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error removing the product');
    } finally {
      setRemoving(false);  // Stop removing loader
    }
  };
  
  // Fetch the product list on component mount
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}  {/* Display loading when fetching the list */}
      {error && <p>{error}</p>} 
      {!loading && !error && list.length > 0 ? (
        <div>
          {/* Display the total number of products */}
          <p className='text-xl font-serif text-stone-700 font-medium'>
            All Products ({list.length})
          </p>

          <div className='flex flex-col gap-2'>
            <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-slate-100 text-sm'>
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Prize</b>
              <b className='text-center'>Action</b>
            </div>
          </div>

          
          {list.map((item, index) => (
            <li key={index} className='grid grid-cols-[1fr-3fr-1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-2 border text-sm relative'>
              <img className='w-14' src={item.image[0]} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.Category}</p>
              <p>{Currency}{item.prize}.00</p>
              
              <img
                onClick={() => !removing && removeProduct(item._id)}
                title='Delete'
                className={`w-4 cursor-pointer md:m-auto md:static  absolute top-5 right-10 ${removing ? 'opacity-50 cursor-not-allowed' : ''}`}
                src={assests.cancel}
                alt="Remove"
              />
              
            </li>
          ))}

          {removing && <p>Removing product, please wait...</p>}
          
        </div>
      ) : !loading && !error && (
        <p>No products available</p>
      )}
    </div>
  );
};

export default List;
