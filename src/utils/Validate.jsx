
export  const checkValidate=(email,password)=>{

    const isValidEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


    if(!isValidEmail) return "Email is not valid ";
    if(!isValidPassword) return "password is not valid"


    return null;

}