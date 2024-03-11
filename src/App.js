import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css';
import { Component } from "react";
import { Container } from "react-bootstrap";




class App extends Component {

    render() {
        return (
            <Container fluid className="justify-content-center p-0 m-0">
                <Banner />
                <Container className="internal-page">
                    <Carousel />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                </Container>
                <Footer />
            </Container>
        );
    }
}

export default App;


