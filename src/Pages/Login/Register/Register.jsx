import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Register = () => {
    const{createUser}=useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name=form.get('Name');
        const photo=form.get('PhotoURL');
        const email=form.get('email');
        const password =form.get('password');
        console.log(email,password,name,photo);
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.error(error))
    }


    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl my-10 text-center">Please Register</h3>

            <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input  name="Name" type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input  name="PhotoURL" type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="mt-4 text-center"> Allready Have an accout?    <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>

        </div>
    );
};

export default Register;