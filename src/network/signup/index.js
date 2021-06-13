import firebase from '../../../firebase';


const SignupRequest=async(email,password)=>{
    try {
        return await firebase.auth().createUserWithEmailAndPassword(email,password);
    } catch (error) {
        return error
    }
}

export default SignupRequest;