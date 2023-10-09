/*Dashboard 
companies
verified lawyers
unverified lawyers
unassigned jobs
assigned jobs
pending payments
completed payments           
ratings
create new job
pay
verify*/

/*Pagination */

export const Pagination = ({ pagination, handlePageChange, totalPages }) => {
    const { currentPage } = pagination;
  
    return (
      <nav aria-label='Page navigation' className="py-5 mt-5">
        <ul className='pagination justify-content-center'>
          <li className='page-item' disabled={currentPage === 1}>
            <button
              className='page-link'
              onClick={() => handlePageChange(currentPage - 1)}
              style={{
                margin: '0 10px',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                border:'1px solid black'
              }}
            >
              <h6><i className="bi bi-chevron-left"></i></h6>
            </button>
          </li>
  
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={currentPage === index + 1 ? 'page-item active' : 'page-item'}
            >
              <button
                style={{
                  margin: '0 10px',
                  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)', border:'1px solid black',
                  fontWeight: '700',
                }}
                onClick={() => handlePageChange(index + 1)}
                className='page-link'
              >
                <h6>{index + 1}</h6>
              </button>
            </li>
          ))}
  
          <li className='page-item' disabled={currentPage === totalPages}>
            <button
              className='page-link'
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                margin: '0 10px',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                border:'1px solid black'
              }}
            >
              <h6><i className="bi bi-chevron-right"></i></h6>
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  