import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import {db} from "../firebase"
import firebase from "../firebase"

function InputBox() {
    const {data:session} = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [ImageToPost, setImageToPost] = useState(null)

    

    const SendPost = (e) =>{
        e.preventDefault();

        if(!inputRef.current.value) return;

        db.collection('/posts').add({
            message:inputRef.current.value,
            name:session?.user?.name,
            email:session?.user?.email,
            image:session?.user?.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        inputRef.current.value = '';
    };
    const addImageToPost = (e) =>{}


  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 items-center'>
        <img
        src={session?.user?.image}
        alt="profile-pic"
        height={40}
        width={40}
        className='rounded-full'/>

        <form className='flex flex-1 mb-2'>
            <input
            className=' rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            text="text"
            ref={inputRef}
            placeholder={`oque voce esta pensando, ${session.user.name}`
            }/>
            <button hidden type="submit" onClick={SendPost}>Submit</button>
        </form>
        </div>
        <div className='flex justify-evenly p-3 border-t'>
            <div className='flex items-center space-x-10  justify-center p-2 rounded-xl'>
                <div className='cursor-pointer hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl '>
                    <VideoCameraIcon className='h-7 text-red-500 '/>
                    <p className='text-xs sm:text-sm xl:text-base '>Live video</p>
                </div>

                <div  onClick={()=> filePickerRef.current.click()} className='cursor-pointer hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl '>
                    <CameraIcon className='h-7 text-green-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden/>
                </div>

                <div className='cursor-pointer hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl '>
                    <VideoCameraIcon className='h-7 text-yellow-500'/>
                    <p className='text-xs sm:text-sm xl:text-base'>Felling/Activity</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default InputBox