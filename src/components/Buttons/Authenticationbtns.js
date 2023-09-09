import '../../sassfiles/components/Forms/_authentication.scss'
// Loginbtn

export const Loginbtn = ({formValid})=>{
    return(
           
            <button type="submit" className={` btn ${formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
            style={{fontSize:'20px', width:'100%'}}>Log in</button>
        
    )
}
// SignUpbtn
export const Signupbtn = () => {
  return (
    <button
      type="submit"
      className="btn btn-secondary"
      style={{ fontSize: "20px", width: "100%" }}
    >
      Sign up
    </button>
  );
};
// ResetPasswordbtn
export const ResetPasswordbtn =(props) =>{
    return (
        <button type="submit" className={` btn ${props.formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
        style={{fontSize:'20px', width:'100%'}}>{props.text}</button>
    )
}


// Nextbtn
export const Nextbtn = () => {
  return (
    <button
      type="submit"
      className="btn btn-secondary"
      style={{ fontSize: "20px", width: "100%" }}
    >
      Next
    </button>
  );
};
// AsACompanybtn
// Lawyerbtn

// Adminbtn
