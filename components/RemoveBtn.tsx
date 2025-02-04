"use client"
import { base_url } from "@/libs/globals";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({id}:{id:string}) {
    const router = useRouter();

    const removeTopic = async () =>{
        const confirmed = confirm("Are you sure?")
        if (confirmed) {
            const res = await fetch(`${base_url}/api/topics?id=${id}`,{
                method: "DELETE"
            });

            if (res.ok) {
                router.refresh();
            }
        }
    }
    return(
        <button onClick={removeTopic}><HiOutlineTrash size={24} className="text-red-400"/></button>
    )
}