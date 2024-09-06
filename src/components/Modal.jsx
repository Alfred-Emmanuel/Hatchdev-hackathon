import React from 'react';

const Modal = ({ product, closeModal }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] md:w-[50%]">
        <button onClick={closeModal} className="text-right text-gray-500">
          ✕
        </button>
        <div className="flex flex-col mt-4">
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <img src={product.image} alt={product.name} className="h-52 w-52 rounded-md shadow-md" />
                <div className='w-[65%] md:w-[60%]'>
                    <div className='flex flex-col gap-2 md:flex-row md:items-center mt-5 md:gap-20'>
                        <h1 className="text-xl font-semibold">{product.name}</h1>
                        <p className="text-slate-500 text-sm ">${product.price}</p>
                    </div>
                    <div className='flex flex-col md:flex-row mt-2 md:gap-3'>
                        <p className='text-sm font-medium'>Description: </p>
                        <p className="text-slate-400 text-sm ">{product.description}</p>
                    </div>
                    <div className='flex items-center mt-2 gap-3'>
                        <p className='text-sm font-medium'>Style: </p>
                        <p className="text-slate-400 text-sm ">{product.style}</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <p className='text-sm font-medium'>Ecofriendly: </p>
                        <p className="text-slate-400 text-xs ">{product.isEcofriendly ? "Yes" : "No"}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
