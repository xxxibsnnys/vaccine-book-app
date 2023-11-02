import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals"
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AddHospitalForm from '@/components/AddHospitalForm';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';

export default async function hospital() {
	const hospitals = getHospitals();
	const session = await getServerSession(authOptions);
	const profile = session ? await getUserProfile(session.user.token) : null;
	return (
		<main className="text-center p-5">
			<h1 className="text-4xl font-bold my-5">Hospitals</h1>
			<Suspense fallback={<p>Loading...<LinearProgress/></p>}>
				<HospitalCatalog hospitalRawJson={hospitals}/>
				{
					(profile?.data.role == "admin")?
					<AddHospitalForm/>
					:null
				}
			</Suspense>
		</main>
	)
}