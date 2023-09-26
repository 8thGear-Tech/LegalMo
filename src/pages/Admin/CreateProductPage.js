import React, { useState } from 'react'
import { CreateProductForm } from '../../components/Forms/Admin'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import { LoginModal } from '../../components/Forms/Authenticationforms';

function CreateProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <AdminNavbar>
    <div className='py-5 py-lg-0 my-sm-5 px-md-5 px-3'>
    <div className='mb-5'>
    <div
      className='card p-sm-5 p-3 my-5'
      style={{
        borderRadius: '20px',
        background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
        border: 'none',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
    <div className='px-3 px-md-5 py-5'><CreateProductForm setShowModal={setShowModal}
          setSuccessMessage={setSuccessMessage}
          modalText='New Product Created'/></div>
    </div>
    </div>
    </div>
    <LoginModal
        showModal={showModal}
        successMessage={successMessage}
        closeModal={closeModal}
        modalText='New Product Created'
      />
    </AdminNavbar>
  )
}

export default CreateProductPage