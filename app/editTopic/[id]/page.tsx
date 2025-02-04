import EditTopicForm from "@/components/EditTopicForm";
import { base_url } from "@/libs/globals";

const getTopicById = async(id:string) =>{
    try {
        const res = await fetch(`${base_url}/api/topics/${id}`)
        if (!res.ok) {
           throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function editTopic({params}:{params:any}) {
    const {id} = params;
    const {topic} = await getTopicById(id);
    const {_id,title,description} = topic;
    return (
        <EditTopicForm id={_id} title={title} description={description}/>
    )
}