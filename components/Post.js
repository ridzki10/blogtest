import Link from 'next/link';
import Author from './child/Author';
import Router from 'next/router';

const Post = function(props) {
    const {
        post_id,
        title,
        body,
        user_id,
        users,
        className,
        children} = props;

    function sendProps() {
        Router.push({
          pathname: "/single-post/page",
          query: {post_id,user_id}
        });
      }

    const getTitle = () => {
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

    return (
        <>
            {/* <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} width={width} height={height} alt=""/>
                </Link>
            </div> */}
            {children}
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
                </div>
                <div className="title">
                   <a onClick={() => sendProps()} className={`${className ? className : ''} font-bold text-gray-800 hover:text-gray-600 cursor-pointer`}>{getTitle()}</a>
                </div>
                <p className='text-gray-500 py-3'>
                    {getBody()}
                </p>
                <Author users={users} user_id={user_id}/>
            </div>
        </>
    )
}

export default Post;