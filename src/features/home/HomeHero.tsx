import ExploreBtn from "./components/ExploreBtn"
import Title from "./components/Title"

export const HomeHero = () => {
    
    return (
        <section className="w-full pt-[140px] h-screen md:bg-[url(/images/home/large.jpg)] bg-[url(/images/home/small.jpg)] bg-cover">

            <div className="container h-full flex md:flex-row flex-col gap-5">
                <Title/>
                <ExploreBtn/>
            </div>

        </section>
    )
}
