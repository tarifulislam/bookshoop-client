import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Books = () => {
    return (
        <div>
            <Header></Header>
            <div className=" container mx-auto min-h-screen">
                <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                    <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">Tariful</div>
                </div>
                <div className="diff-item-2">
                    <div className="bg-base-200 text-9xl font-black grid place-content-center">Shihab</div>
                </div>
                <div className="diff-resizer"></div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Books;