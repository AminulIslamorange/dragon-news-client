import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'
            ><h2 className='text-3xl '>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />

                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />

                    Login With Github
                </button>



            </div>
            <div className='p-4 mb-6'
            ><h2 className='text-3xl '>Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href=''> <FaFacebook className='mr-3'></FaFacebook>
                    Facebook


                </a>
                <a className='p-4 flex text-lg items-center border-x  ' href=''> <FaTwitter className='mr-3'></FaTwitter>
                    Twitter


                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href=''> <FaTwitch className='mr-3'></FaTwitch>
                    Twitch

                </a>




            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'
            ><h2 className='text-3xl '>Q-Zone</h2>
            <img alt=''src={qZone1}/>
            <img alt=''src={qZone2}/>
            <img alt=''src={qZone3}/>
                



            </div>
        </div>
    );
};

export default RightSideNav;