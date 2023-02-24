import Image from "next/image";
import Link from "next/link";

export default function Author({users,user_id}) {
    const getAuthor = () => {
        let postAuthor = '';

        users.forEach(val => {
            if(val.id == user_id) {
                postAuthor = val.name;
                //console.log(val.name);
            }
            else {
                val.name
            }
        })
        return postAuthor;
    }

    return (
    <div className="author flex py-5">
        <Image src={"/images/author1.jpg"} width={60} height={60} className="rounded-full" alt="img"></Image>        
        <div className="flex flex-col justify-center px-4">
            <Link legacyBehavior href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600">{getAuthor()}</a></Link>
            <span className="text-sm text-gray-500">Freelance Writer</span>
        </div>
    </div>
    )
}