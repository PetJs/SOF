import '../App.css'
import { Link } from 'react-router-dom';
import HeaderImage from '../images/HeaderImage.jpg'
import Lawrence from '../images/Lawrence.jpg'
import Jessica from '../images/Jessica.jpg'
import { House, UserRound, ChefHat, Utensils, Facebook, Twitter, Instagram, Mail, FileText, Shield } from 'lucide-react';


export default function LandingPage() {

    return(
        <>
            <div className='bg-[#f6c9b9]'>
                <div className="Header bg-[#c54b1f] p-4 border border-white text-white flex justify-between">
                    <div className=' flex gap-1'>
                        <Utensils />
                        <h3 className="text-[20px] font-bold">SOF</h3>
                    </div>
                    <div className="pageslink flex flex-row gap-6">
                        <Link to="/"><p>Profile</p></Link>
                        <Link to="/"><p>Home</p></Link>                       
                        <Link to="/suggestions"><p>Recipe</p></Link>
                    </div>                    
                    <div className="socialMedia flex flex-row gap-6">
                        <a href="https://facebook.com" className="mx-2">
                            <Facebook className="w-8 h-8"/>
                        </a>
                        <a href="https://twitter.com" className="mx-2">
                            <Twitter className="w-8 h-8"/>
                        </a>
                        <a href="https://instagram.com" className="mx-2">
                            <Instagram className="w-8 h-8"/>
                        </a>
                    </div>
                </div>
                <div className="container1 flex flex-row justify-center">
                    <div className="Texts flex flex-col pr-2">
                        <div className="boldheading flex flex-row lg:space-x-14 md:space-x-5">
                            <h1 className="headingtext text-[#c54b1f] font-bold">SOF</h1>
                            <div className="text-[45px]">
                                <p className="sof italic">Save</p>
                                <p className="sof italic">Our</p>
                                <p className="sof italic">Food</p>
                            </div>
                        </div>
                        <div className="headingimage1">
                            <img className='img rounded-full' src={HeaderImage} alt="An Image" /> 
                        </div>
                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-snug py-4">
                            Welcome to <span className="text-primary-500 font-extrabold">SOF</span>, your ultimate kitchen companion! 
                            Get ready to explore new culinary adventures with 
                            <span className="text-primary-500 font-extrabold"> SOF</span>—where creativity in the kitchen 
                            begins with what you already have!
                        </p>
                    </div>
                    <div className="headingimage py-[80px]">
                        <img className='img rounded-full' src={HeaderImage} alt="An Image" />
                    </div>
                </div>

                <div className='text-center pb-[100px] pt-8 bg-white'>
                    <h1 className='founderheading text-[40px] py-[30px] text-[#c54b1f] font-bold'>Know The Founders</h1>
                    <div className='founders flex flex-wrap gap-16 justify-center pt-10'>
                        <div className="persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]">
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src="" alt="Peter"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    This is the description, This is the description This is the description. This is the description This is the description, This is the description This is the description.
                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-8">Peter</h3>
                        </div>

                        <div className='persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]'>
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src="" alt="Fari"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    This is the description This is the description This is the description. This is the description This is the description, This is the description This is the description.
                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-8">Fari</h3>
                        </div>
                        <div className='persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]'>
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src={Jessica} alt="Jessica"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    This is the description This is the description This is the description. This is the description This is the description, This is the description This is the description.
                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-5">Jessica</h3>
                        </div>
                        <div className='persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]'>
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src={Lawrence} alt="Lawrence"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    This is the description This is the description This is the description. This is the description This is the description, This is the description This is the description.
                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-1">Lawrence</h3>
                        </div>
                    </div>
                </div>

                <div className="footer bg-[hsl(16,73%,45%)] p-8 border border-white text-white text-center">
                    <div className='link1 flex justify-between'>
                        <div className="social-media mb-4 flex place-self-center gap-6">
                            <a href="https://facebook.com" className="mx-2">
                                <Facebook className="w-8 h-8"/>
                            </a>
                            <a href="https://twitter.com" className="mx-2">
                                <Twitter className="w-8 h-8"/>
                            </a>
                            <a href="https://instagram.com" className="mx-2">
                                <Instagram className="w-8 h-8"/>
                            </a>
                        </div>
                        <div className="newsletter mb-4">
                            <p className="mb-2">Subscribe to our newsletter:</p>
                            <div className="flex justify-center items-center">
                                <input type="email" placeholder="Enter your email" className="p-2 rounded-l text-black" />
                                <button className="bg-white text-[#c54b1f] p-2 rounded-r flex items-center">
                                    <Mail className="w-5 h-5 mr-1"/> Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
            
                    <div className="legal mb-4 flex justify-center gap-16 pt-4">
                        <a href="#privacy" className="mx-2 hover:underline flex items-center">
                            <Shield className="w-6 h-6 mr-1"/>
                            Privacy Policy
                        </a>
                        <a href="#terms" className="mx-2 hover:underline flex items-center">
                            <FileText className="w-6 h-6 mr-1"/>
                            Terms of Service
                        </a>
                    </div>
                    <div className="copyright mt-10">
                        <p>© 2024 SOF. All rights reserved.</p>
                    </div>
                </div>

                <div className="footermobile bg-[#c54b1f] p-4 border border-white h-[60px] fixed bottom-0 left-0 right-0 text-white">
                    <Link to="/">
                        <UserRound className='w-9 h-9'/>
                    </Link>                    
                    <Link to="/">
                        <House className='w-9 h-9'/>
                    </Link>
                    <Link to="/suggestions">
                        <ChefHat className='w-9 h-9'/>
                    </Link>                   
                </div>
            </div>
        </>      
    );
    
}

