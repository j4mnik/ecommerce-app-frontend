import ThanksImage from '../../assets/thanks-image.jpg'
import {Link} from "react-router-dom";

const ThanksOrderPage = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center h-screen sm:w-3/4">
            <div className="flex flex-col w-1/2 items-start sm:ml-16 justify-around h-full">
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl mt-8">Your item has been successfully ordered! 👏</h1>
                    <h1 className="my-4">Thank you for buying!<br/> It's gonna be delivered in 3-5
                        business days.</h1>
                </div>
                <div className="flex flex-col items-start w-full">
                    <Link to="/">
                        <p className="font-semibold py-2">return to home</p>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-1/2 items-center justify-center h-full">
                <img src={ThanksImage} alt="shoes box" className="w-96"/>
            </div>
        </div>
        </div>
    )
}

export default ThanksOrderPage;