import {FiMessageSquare,FiEdit,FiTrash} from 'react-icons/fi';

export default function Comment(props) {
    const {name,body,post_id} = props;

    return (
        <>
        <div className="space-y-4 mt-8">
            <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded">
                <img src="/images/post-profile.svg" alt="user-profile" width={40} className="object-cover rounded-full"></img>
                <div>
                    <p className="font-bold text-dark-hard text-xs">{name}</p>
                    <span 
                    className="text-xs text-slate-500">{new Date().toLocaleDateString("us-ID",{
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit"
                    })}</span>
                    <p className="mt-[10px] text-slate-500">{body}</p>
                    <div className='flex items-center gap-x-3 text-slate-500 text-sm mt-3 mb-3'>
                        <button className='flex items-center space-x-2'>
                            <FiMessageSquare className='w-4 h-auto'/>
                            <span>Reply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}