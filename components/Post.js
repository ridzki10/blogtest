import Image from 'next/image';
import Link from 'next/link';

const Post = function(props) {
    const {title,body,user_id,users,className} = props;
    //const {usersList} = users;
    //console.log(title);
    //console.log(users);
    const getTitle = () => {
        //let sampleTitle = `Your most unhappy customers are your greatest source of learning`;
        if(title.length >= 50) {
            return title.substring(0,50)+" ...";
        } else {
            return title;
        }
    }

    const getBody = () => {
        if(body.length >= 200) {
            return body.substring(0,200)+" ....";
        } else {
            return body;
        }
    }

    const getAuthor = () => {
        let postAuthor = '';

        users.forEach(val => {
            if(val.id == user_id) {
                postAuthor = val.name;
            }
        })
        return postAuthor;
    }

    return (
        <>
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} width={600} height={600} alt=""/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className={`${className ? className : ''} font-bold text-gray-800 hover:text-gray-600`}>{getTitle()}</a></Link>
                </div>
                <p className='text-gray-500 py-3'>
                    {getBody()}
                </p>
                <h1>{getAuthor()}</h1>
            </div>
        </>
    )
}

export default Post;