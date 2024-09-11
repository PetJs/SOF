import '../App.css'
import { Link } from 'react-router-dom';
import HeaderImage from '../images/HeaderImage.jpg'
import Lawrence from '../images/Lawrence.jpg'
import Jessica from '../images/Jessica.jpg'
import fari from '../images/fari.jpeg'
import peter from '../images/peter.jpeg'
import { House, UserRound, ChefHat, Utensils, Facebook, Twitter, Instagram, Mail, FileText, Shield } from 'lucide-react';


export default function LandingPage() {

    return(
        <>
            <div className=' bg-[#f6c9b9]'>
                <div className="Header bg-[#c54b1f] p-4 text-white flex justify-between">
                    <div className='flex gap-1 items-center'>
                        <Utensils />
                        <h3 className="text-[20px] font-bold">SOF</h3>
                    </div>
                    <div className="pageslink flex flex-row gap-6">                  
                        <Link className='font-bold bg-white rounded-3xl text-[#c54b1f] p-2' to="/suggestions"><p>Get Started</p></Link>
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
                        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 py-4">
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

                <div className='bg-white pt-32 about'>
                <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[#c54b1f]">
            Understanding the Global Food Waste Crisis
        </h1>

        <p className="text-lg mb-4">
            Food waste is a critical issue that impacts every corner of the globe, with profound implications for the environment, economy, and society. Despite the fact that nearly 800 million people around the world are undernourished, a staggering one-third of all food produced is lost or wasted. This disconnect between food production and consumption reveals a severe inefficiency in our global food systems.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
            Environmental Impact
        </h2>
        <p className="text-lg mb-4">
            The environmental toll of food waste is immense. When food is thrown away, it not only represents wasted resources but also contributes significantly to greenhouse gas emissions. Decomposing food in landfills produces methane, a potent greenhouse gas that exacerbates climate change. Additionally, the resources used to grow, process, and transport this food—such as water, energy, and land—are also squandered. The production of food that ultimately ends up as waste contributes to deforestation, habitat destruction, and biodiversity loss.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
            Economic Costs
        </h2>
        <p className="text-lg mb-4">
            The economic impact of food waste is equally alarming. Globally, the value of food wasted annually amounts to nearly $1 trillion. This staggering figure includes not just the cost of the food itself but also the associated costs of labor, packaging, transportation, and disposal. For households, businesses, and governments alike, food waste translates into lost money and inefficient use of resources. Reducing food waste could result in substantial savings and a more efficient allocation of resources.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
            Social and Ethical Concerns
        </h2>
        <p className="text-lg mb-4">
            From a social perspective, food waste represents a profound ethical issue. The paradox of food scarcity in the face of such vast quantities of wasted food highlights deep inequalities in our food systems. While millions suffer from hunger and malnutrition, perfectly edible food is discarded, reflecting a disconnect between food availability and food access. Addressing food waste could significantly improve food security and support those in need.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
            The Path Forward
        </h2>
        <p className="text-lg mb-4">
            Tackling the global food waste crisis requires a multifaceted approach that involves individuals, businesses, and governments. Innovative solutions and technologies can play a crucial role in reducing waste, from improving food storage and distribution to developing apps that help consumers manage their food better. Education and awareness are key components in encouraging better practices at every level of the food supply chain.
        </p>

        <p className="text-lg">
            By understanding the scale and impact of food waste, we can collectively work towards more sustainable food systems and contribute to a healthier planet. It’s a challenge that demands our attention and action, but with concerted effort, we can make meaningful progress in reducing waste and ensuring that food reaches those who need it most.
        </p>
    </div>
                </div>

                <div className='text-center pb-[100px] pt-8 bg-white'>
                    <h1 className='founderheading text-[40px] py-[30px] text-[#c54b1f] font-bold'>Know The Founders</h1>
                    <div className='founders flex flex-wrap gap-16 justify-center pt-10'>
                        <div className="persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]">
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src={peter} alt="Peter"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    He is the Project head and supervisor. He oversaw all the  project activities and ensured that the project was completed on time.
                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-8">Peter</h3>
                        </div>

                        <div className='persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]'>
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src={fari} alt="Fari"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    She worked on the backend. She manages the server-side of the project, focusing on creating reliable and scalable systems. Her expertise ensures our application to run smoothly.

                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-8">Fari</h3>
                        </div>
                        <div className='persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]'>
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src={Jessica} alt="Jessica"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    Jessica combined her talent in design with technical skills to craft a stunning and user-friendy interface while ensuring the deign elements translates into functional code.
                                </p>        
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-5">Jessica</h3>
                        </div>
                        <div className='persons bg-[#f6c9b9] rounded-md p-4 flex flex-col items-start max-w-sm border border-[#c54b1f]'>
                            <div className="flex items-start">
                                <img className="w-24 h-24 mr-4 mt-7 rounded-full object-cover float-left" src={Lawrence} alt="Lawrence"/>
                                <p className="text-sm text-gray-800 flex-1 pt-8">
                                    Larence brings creativity into the project. He focused on building smooth and user-friendly interfaces tha enhanced the overall performance.
                                </p>       
                            </div>
                            <h3 className="person text-xl font-semibold text-center mt-4 ml-1">Lawrence</h3>
                        </div>
                    </div>
                </div>

                <div className="footer bg-[hsl(16,73%,45%)] p-8  text-white text-center">
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

                <div className="footermobile bg-[#c54b1f] p-4  h-[60px] fixed bottom-0 left-0 right-0 text-white">
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

