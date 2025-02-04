"use client"
import { base_url } from "@/libs/globals";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }: { id: string, title: string, description: string }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`${base_url}/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if (!res.ok) {
                throw new Error("Failed to update Topic");
            }
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" placeholder="Topic title" className="border border-slate-500 px-8 py-2" />
            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" placeholder="Topic description" className="border border-slate-500 px-8 py-2" />
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Topic</button>
        </form>
    )
}