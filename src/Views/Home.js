import '../Assets/CSS/Home.css';
import laptop from '../Assets/Images/laptop1.jpg';
function Home() {

    return (
        <div>
            <section className="hero">
                <div className="left-section">
                    <h1>Welcome to your<br />professional community</h1>
                    <input type="text" name="input" placeholder="Email or phone number" />
                    <input type="password" name="pass" placeholder="Password" />
                    <a href="#">Forgot password?</a>
                    <input className="mainbtn" type="button" value="Sign in" />
                </div>
                <div className="right-section">
                   <img src={laptop}></img>
                </div>
            </section>
        </div>
    )
}

export default Home;