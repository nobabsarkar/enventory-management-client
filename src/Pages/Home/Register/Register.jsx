import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()


    const onSubmit = (async (data) => {
        console.log(data)

        // const imageFile = data?.image[0]
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        // console.log(res)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset()
                //  updateUserProfile(data.name, data.photoURL[0])
                //     .then(() => {
                //         reset()
                //         Swal.fire({
                //             position: "top-end",
                //             icon: "success",
                //             title: "User Createted Successfully",
                //             showConfirmButton: false,
                //             timer: 1500
                //         });
                //         navigate('/')
                //     })
                //     .catch(error => {
                //         console.log(error);
                //     })
            })
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <p className="text-red-500">Name is Required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Photo</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                            {errors.photoURL && <p className="text-red-500">PhotoRUL is Required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <p className="text-red-500">Email is Required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=..*[0-9])(?=.*[a-z])/
                            })} placeholder="Password" className="input input-bordered" />
                            {errors.password?.type === "required" && <p className="text-red-500">Password is Required</p>}
                            {errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 characters</p>}
                            {errors.password?.type === "maxLength" && <p className="text-red-500">Password must be less then 20 characters</p>}
                            {errors.password?.type === "pattern" && <p className="text-red-500">Password must have one uppercase one lowercase, one number and one special characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 btn text-white w-full' />
                        </div>
                    </form>
                    <p className="text-center mb-3"><small>Already have an Account Please? <Link to='/login' className="text-green-500">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;