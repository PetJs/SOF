import React, { useState, useContext } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";


const SignOut: React.FC= () => {
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    // Get AuthContext value and handle null case
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('AuthContext must be used within an AuthProvider');
    }

    const { setIsAuthenticated } = authContext;

    const handleSignOut = () =>{
        auth.signOut().then(() => {
            setIsAuthenticated(false); 
            navigate('/'); 
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    return(
        <div>
            <button 
                onClick={() => setShowConfirmation(true)}
                className="bg-[#c54b1f] rounded-full text-lg text-white font-semibold px-10 py-4"
            >
                Sign Out
            </button>

            {showConfirmation && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8">
                        <p className="text-lg mb-4">Are you sure you want to sign out?</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleSignOut}
                                className="rounded-full py-[6px] px-[16px] bg-[#ff5252] text-white font-semibold hover:bg-white hover:[#ff5252]"

                            >
                                Yes
                            </button>
                            <button
                                onClick={()=>setShowConfirmation(false)}
                                className="rounded-full py-[6px] px-[16px] bg-[#72e37e] text-white font-semibold hover:bg-white hover:text-[#3c2c1e]"
                            >
                                No
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default SignOut