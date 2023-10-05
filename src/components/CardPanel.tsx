'use client'
import ProductCard from "./ProductCard";
import { useReducer, useState } from "react"
import { List } from "@mui/material";
import Link from "next/link";

export default function CardPanel() {
    const [ratingList, setRatingList] = useState<string[]>([]);

    const ratingReducer = (ratingMap: Map<string, number>, action: {type:string, hospitalName: string, rating: number}) => {
		if (action.type == 'add')
			ratingMap.set(action.hospitalName, action.rating);
		else if (action.type == 'remove')
			ratingMap.delete(action.hospitalName);
		setRatingList(Array.from(ratingMap.keys()));
		return ratingMap;
	}

    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, number>());

	const mockProductCard = [{hid:"001", name:"Chulalongkorn Hospital", shortName:"chula", img:"/img/chula.jpg"},
	{hid:"002", name:"Rajavithi Hospital", shortName:"rajavithi", img:"/img/rajavithi.jpg"},
	{hid:"003", name:"Thammasat University Hospital", shortName:"thammasat", img:"/img/thammasat.jpg"}]

    return(
        <div>
            <div style ={{margin:"20px", display:"flex", flexDirection:"row", 
            flexWrap:"wrap" , justifyContent:"space-around", alignContent:"space-around", backgroundColor:"white"} }>
                
				{
					mockProductCard.map((info) => (
						<Link href={`/hospital/${info.hid}`} key={info.hid} passHref={true} className="w-1/5">
							<ProductCard
							hosName={info.name}
							imgSrc={info.img}
							onRatingChange={(rating:number) => dispatchRating({type: 'add', hospitalName: info.shortName, rating: rating})}
							passedRating={ratingList.findIndex((hospitalName)=>hospitalName==info.shortName) != -1 ? ratingMap.get(info.shortName) || 0 : 0}
							/>
						</Link>
						)
					)	
				}

                
				
            </div>
            <div>
				<List>
					{ratingList.map((hospitalName, index) => {
						return (
							<div key={index} onClick={()=>dispatchRating({type: 'remove', hospitalName: hospitalName, rating: 0}) }>
								{hospitalName} : {ratingMap.get(hospitalName)}
							</div>
						)
					})}
				</List>
			</div>
        </div>
    )
}