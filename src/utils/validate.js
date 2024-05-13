export const checkValidData =(email,password,) =>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   
    if(!isEmailValid) return "Email Is Not Valid";
    if(!isPasswordValid) return "Password Is Not Valid";
    return null;
};