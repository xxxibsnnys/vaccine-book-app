"user client"
import LocationDateReserve from "@/components/LocationDateReserve"
import TextField from "@mui/material/TextField"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking(){
    // If user has logined,  call getUserProfile(token) to get user profile and show profile
	const session = await getServerSession(authOptions);
	if(!session || !session.user.token)	return null
	const profile = await getUserProfile(session.user.token)
	var createdAt = new Date(profile.data.createdAt)
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            {
				session?
				<div className='z-30 font-semibold text-xl text-center'>
					User Profile
					<div className="text-left text-lg">
						<div>Name: {profile.data.name}</div>
						<div>Email: {profile.data.email}</div>
						<div>Tel.: {profile.data.tel}</div>
						<div>Member Since {createdAt.toString()}</div>
					</div>

				</div>
				:null
			}
            <div className="text-xl font-medium">New Reservatitons</div>
    
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Pick-up Name, ID, Hospital and Date
                </div>
                <LocationDateReserve/>
                
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white">Reserve vaccine</button>
        </main>
    )
}