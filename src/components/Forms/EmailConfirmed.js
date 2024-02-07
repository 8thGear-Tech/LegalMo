import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import check from '../../assets/images/check.svg'

const EmailConfirmedModal = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

 
  const closeModal = () => {
    setShowModal(false);
    navigate('/login'); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div
        className={`modal fade px-3 ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none'}}
        tabIndex='-1'
        role='dialog'
        onClick={closeModal} 
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content p-sm-5 p-3' style={{backgroundColor:'#D9DAF9'}}>
            <div className='d-flex justify-content-end'>
              <button type='button' className='btn-close' onClick={closeModal}></button>
            </div>
            <div className='modal-body text-center'>
              <div className='' role='alert'>
                <img src={check} alt='check' style={{ width: '130px' }} />
                <h4 className='mt-5' style={{ fontWeight: '700' }}>Email confirmed successfully</h4>
                <p>You can now log in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
      ></div>
    </div>
  );
};

export default EmailConfirmedModal;

