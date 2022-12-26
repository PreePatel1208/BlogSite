import React from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { baseURL } from './Component/Constant';
import axios from 'axios';


const login = () => {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true })
    const onSubmit = async (data: any) => {

        let postData
        await axios.post(baseURL + "/login",data).then((response) => {
            console.log("response", response);
            if(response.status==201|| response.status==200){
                localStorage.setItem("token",response.data.data.token)
                router.push("/")
            }
        }).catch((error: any) => {
            console.log("error", error);
        })
        console.log(data);
    };
    const router = useRouter()
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" {...register("email", { required: "Please enter your email." })} className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4"    {...register("password", { required: "Please enter your password." })} className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                {/* <a href="#!" className="text-body">Forgot password?</a> */}
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger" onClick={() => { router.push('register') }}>Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default login