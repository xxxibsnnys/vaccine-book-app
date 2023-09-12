import LocationDateReserve from "@/components/LocationDateReserve"
import TextField from "@mui/material/TextField"

export default function Booking(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
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