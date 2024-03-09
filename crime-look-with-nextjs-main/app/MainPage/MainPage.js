import Banner from "./Banner/Banner";
import Carousel from "./Carousel/Carousel";
import Headline from "./Headline/Headline";
import Magzine from "./Magazine/Magzine";
import NewsVideo from "./News/NewsVideo";

const MainPage = () =>{
    return (
        <>
            <Banner />
            <Carousel />
            <Headline />
            <NewsVideo />
            <Magzine />
        </>
    )
}

export default MainPage;