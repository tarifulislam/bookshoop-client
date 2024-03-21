import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Features from "../../components/Features/Features";
import Newleter from "../../components/Newleter/Newleter";
import ReleseBooks from "../../components/ReleseBooks/ReleseBooks";
import Testomonial from "../../components/Testomonial/Testomonial";
import HeroSections from './../../components/HeroSections/HeroSections';
import Faq from './../../components/Faq/Faq';
import Article from './../../components/Article/Article';

const Home = () => {
    return (
        <div className=" min-h-screen">
            <Banner></Banner>
            <Cards></Cards>
            <Testomonial></Testomonial>
            <ReleseBooks></ReleseBooks>
            <Features></Features>
            <Newleter></Newleter>
            <HeroSections></HeroSections>
            <Faq></Faq>
            <Article></Article>
        
        </div>

    );
};

export default Home;