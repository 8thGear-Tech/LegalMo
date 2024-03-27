/*company
lawyers
products
quicklinks
ratings*/ 

export const ViewMoreModal =({showViewMoreModal, handleViewMoreClose, lawyer, company, handleVerify, handleCompanyProfileNavigation, handleLawyerProfileNavigation})=>{
  const isLawyer = !!lawyer;
  const isCompany = !!company;

    return(
       <div>
        {isLawyer && 
        (
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
                <h5 className='modal-title text-center' id='' style={{fontWeight:'600'}}>
                  {lawyer?.name}
                </h5>
               
                
                <button type='button' className='btn-close' onClick={handleViewMoreClose}></button>
              </div>
              <div className='modal-body '>
          
              
              {lawyer?.verified === true ? (
                <div className="justify-content-center text-center">
            <button className="btn btn-secondary w-50" onClick={() => handleLawyerProfileNavigation(lawyer?._id) }>Go to profile</button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center text-center">
               <button className="btn btn-secondary w-50" onClick={() => handleLawyerProfileNavigation(lawyer?._id) }>Go to profile</button>
              <button onClick={() => handleVerify(lawyer?._id) }className="btn btn-primary w-50">Verify Lawyer</button>
            </div>
          )}
                  
                
              </div>
             
            </div>
          </div>
        </div>
        )}
        {isCompany && (
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
                
                 <h5 className='modal-title text-center' id='' style={{fontWeight:'600'}}>
                   {company?.companyName}
                 </h5>
                 
                 <button type='button' className='btn-close' onClick={handleViewMoreClose}></button>
               </div>
               <div className='modal-body '>
                <div className="justify-content-center text-center">
             <button className="btn btn-secondary w-50" onClick={() => handleCompanyProfileNavigation(company?._id) }>Go to profile</button>
             </div>
               
                  
               </div>
              
             </div>
           </div>
         </div>
        )}
      <div
        className={`modal-backdrop fade ${showViewMoreModal ? 'show' : ''}`}
        style={{ display: showViewMoreModal ? 'block' : 'none' }}
      ></div>
       </div> 
    )
}