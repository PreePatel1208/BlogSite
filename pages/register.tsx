import React from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { baseURL } from './Component/Constant';
import axios from 'axios';

const register = () => {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true })
    const router=useRouter()
    const onSubmit = async (data: any) => {
console.log("data",data);

      let postData
      await axios.post(baseURL + "/register",data).then((response) => {
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
  return (
    <section className="background-radial-gradient overflow-hidden">
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" >
          <h1 className="my-5 display-5 fw-bold ls-tight" >
            The best offer <br />
            <span>for your business</span>
          </h1>
          <p className="mb-4 opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>
  
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1"  {...register("firstname", { required: "Please enter your firstname." })} className="form-control" />
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" {...register("lastname", { required: "Please enter your lastname." })}  className="form-control" />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>
  
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" {...register("email", { required: "Please enter your email." })}  className="form-control" />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" {...register("password", { required: "Please enter your password." })} className="form-control" />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
      
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">already have an account? <a href="#!"
                        className="link-danger" onClick={()=>{router.push('login')}}>Login</a></p>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default register