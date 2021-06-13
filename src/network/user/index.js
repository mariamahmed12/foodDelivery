import firebase from '../../../firebase';

export const AddUser=async(firstName,lastName,email,password,uid,profileImg)=>{
    try {
        return await firebase
        .database()
        .ref('users/'+uid)
        .set({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            uuid:uid,
            profileImg:profileImg
        })
    } catch (error) {
        return error
    }
}

export const UpdateUser =async(uuid,imagesource)=>{
     try {
         return await firebase
         .database()
         .ref('users/'+uuid)
         .update({
             profileImg:imagesource
         })
         
     } catch (error) {
         return error
     }
}

