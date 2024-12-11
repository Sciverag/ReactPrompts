import Info from "./info.json";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Header/>
            <div className="container-Card">
                {Info.map(element => <Card person={element}/>)}
            </div>
            <Footer/>
        </>
    )
}