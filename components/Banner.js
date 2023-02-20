import Image from 'next/image';
import Link from 'next/link';
export default function Banner() {
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                {Slide()}
            </div>
        </section>
    );
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} width={600} height={600}/>
                </Link>
            </div>
            <div className="info">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness Travel </Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- Feb 21, 2023</Link>
                </div>
            </div>
        </div>
    )
}