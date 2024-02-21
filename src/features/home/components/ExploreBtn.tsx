import { Link } from "react-router-dom"

const ExploreBtn = () => {
    return (
        <div className='flex-1 flex flex-col justify-end pb-[7%]'>
                
            <div className="md:h-1/2 h-full flex uppercase justify-center items-center">

                <Link to="/destination" className="bg-white flex justify-center items-center rounded-full md:text-4xl text-2xl aspect-square w-[150px] md:w-[220px] text-black font-bellefair uppercase">
                    explore
                </Link>

            </div>

        </div>
    )
}

export default ExploreBtn