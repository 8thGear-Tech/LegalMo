/*company
lawyers
products
quicklinks
ratings*/ 

export const ViewMoreModal =({showViewMoreModal, handleViewMoreClose, handleViewMoreShow})=>{
    return(
       <div>
         <div
        className={`modal fade px-2 ${showViewMoreModal ? 'show' : ''}`}
        style={{ display: showViewMoreModal ? 'block' : 'none' }}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='editPaymentModal'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content gap-3 p-3'>
            <div className='modal-header'>
              <h5 className='modal-title' id='' style={{fontWeight:'600'}}>
                Details
              </h5>
              
              <button type='button' className='btn-close' onClick={handleViewMoreClose}></button>
            </div>
            <div className='modal-body '>
                <h6 className='mb-2' style={{fontWeight:'6000'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor mi in mauris condimentum blandit. Nulla facilisi. Vestibulum in metus nec nisi sodales cursus. Integer interdum ex eu purus commodo, vitae scelerisque mi blandit. Quisque et leo rhoncus, ultricies arcu a, pharetra mi.</h6>
             
          
              
            </div>
           
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${showViewMoreModal ? 'show' : ''}`}
        style={{ display: showViewMoreModal ? 'block' : 'none' }}
      ></div>
       </div> 
    )
}