import './App.css'
import HeaderImage from './images/HeaderImage.jpg'
import Lawrence from './images/Lawrence.jpg'
import Jessica from './images/Jessica.jpg'
import { House, UserRound, ChefHat, Utensils, Facebook, Twitter, Instagram, Mail, FileText, Shield } from 'lucide-react';
import SuggestionsPage from './components/suggestions-page';
import { Link } from 'react-router-dom';



export default function LandingPage() {

    return(
        <>
             <div className='bg-[#f6c9b9]'>
                <div className="Header bg-[#c54b1f] p-4 border border-white text-white flex justify-between gap-1">
                    <div className='flex'>
                        <Utensils />
                        <h3 className="text-3xl  font-bold">SOF</h3>
                    </div>
                    
                    <Link to="/suggestions">
                        <h2 
                            className="bg-[#964b00db] rounded-full text-white text-2xl font-bold pb-4 px-6 pt-2 text-center animate-bounce"
                            style={{ animation: 'bounce 1s infinite' }}
                        >
                            Go to Recipe
                        </h2>
                    </Link>

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

                <div className='text-center pb-[100px]'>
                    <h1 className='text-[30px] py-[20px]'>Know The Founders</h1>
                    <div className='founders flex flex-wrap gap-16 justify-center pt-10'>
                        <div className='persons p-2 flex flex-col items-center text-center max-w-xs border border-[#c54b1f]'>
                            <img className='w-24 h-24 mb-4' alt='Peter' />
                            <h3 className='person text-xl font-semibold'>Peter</h3>
                            <p className='text-sm text-gray-800 break-words whitespace-normal w-full'>
                                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                        </div>
                        <div className='persons p-2 flex flex-col items-center text-center max-w-xs border border-[#c54b1f]'>
                            <img className='w-24 h-24 mb-4' alt='Fari' />
                            <h3 className='person text-xl font-semibold'>Fari</h3>
                            <p className='text-sm text-gray-800 break-words whitespace-normal w-full'>
                                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                        </div>
                        <div className='persons p-2 flex flex-col items-center text-center max-w-xs border border-[#c54b1f]'>
                            <img className='w-[150px] mb-4' src={Jessica} alt='Jessica' />
                            <h3 className='person text-xl font-semibold'>Jessica</h3>
                            <p className='text-sm text-gray-800 break-words whitespace-normal w-full'>
                                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                        </div>
                        <div className='persons p-2 flex flex-col items-center text-center max-w-xs border border-[#c54b1f]'>
                            <img className='w-[150px] mb-4' src={Lawrence} alt='Lawrence' />
                            <h3 className='person text-xl font-semibold'>Lawrence</h3>
                            <p className='text-sm text-gray-800 break-words whitespace-normal w-full'>
                                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer bg-[#c54b1f] p-8 border border-white text-white text-center">
                    <div className='flex justify-between px-10'>
                        <div className="social-media mb-4 flex place-self-center gap-6">
                            <a href="https://facebook.com/sof" className="mx-2">
                                <Facebook className="w-8 h-8"/>
                            </a>
                            <a href="https://twitter.com/sof" className="mx-2">
                                <Twitter className="w-8 h-8"/>
                            </a>
                            <a href="https://instagram.com/sof" className="mx-2">
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
                    <UserRound className='w-9 h-9'/>
                    <House className='w-9 h-9'/>
                    <ChefHat className='w-9 h-9'/>
                </div>
            </div>
        </>      
    );
    
}

