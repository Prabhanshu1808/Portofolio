import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import AnimatedLetter from "../AnimatedLetter";
import './index.scss';
import Logo from "./Logo";

const Home = () => {
   const [letterClass , setLetterClass] = useState('text-animate')
   const nameArray = ['r','a','b','h','a','n','s','h','u']
   const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

useEffect(() =>{
    setTimeout(() => {
        return setLetterClass('text-animate-hover')
    }, 4000);
})

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                <br/>
                 <span className={`${letterClass} _13`}>I</span>
                 <span className={`${letterClass} _14`}>'</span>
                 <span className={`${letterClass} _14`}>m</span>
                <img src={require("../../assets/images/prabhanshu-back.png")} alt="developer" />
                <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetter letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Fullstack Developer / Java Expert / Javascript / React / SpringBoot</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    );
}


export default Home;
