import Image from 'next/image'
import getHospital from '@/libs/getHospital';
export default async function hospitalDetailPage({params}: {params: {hid: string}}) {
	const hospitalDetail = await getHospital(params.hid);
    return (
		<main className="text-center p-5">
			<h1 className="text-2xl font-medium">{hospitalDetail.data.name}</h1>
			<div className="flex flex-row my-5">
				<Image
					src={hospitalDetail.data.picture}
					alt="Hospital Picture"
					width={0} height={0} sizes="100vw"
					className="rounded-lg w-[30%] bg-black"
				/>
				<div className="text-left">
					<div className='text-xl mx-5 my-5'>Address: {hospitalDetail.data.address}, {hospitalDetail.data.district}, {hospitalDetail.data.province} {hospitalDetail.data.postalcode}
					</div>
					<div className='text-xl mx-5 my-5'>Tel: {hospitalDetail.data.tel}</div>
				</div>
			</div>
		</main>
	)
}