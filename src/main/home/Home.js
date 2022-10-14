import React from "react";
import "./home.css";
import homePage from "./../../assets/icons/Home-back.png";
import firstClother from "./../../assets/icons/Kyrtka.png";
import secondClother from "./../../assets/icons/Dress.png";
import thirdClother from "./../../assets/icons/T-shirt.png";


function Home() {
    return (
        <main className='home-page'>
            <section className="hero">
                <img src={homePage}/>
                <div className="hero-main">
                    <h1>ІНТЕРНЕТ-МАГАЗИН ОДЯГУ GOLDI</h1>
                    <p>Goldi - мультикультурне об'єднання молодих людей, які змінюють світ кожного дня.
                        Ми вивчаємо модні тенденції та аналізуємо маркет для того, щоб популяризувати культуру
                        різних напрямів та стилів серед звичайних людей. Адже, мода не тільки на дахах дорогих
                        ресторанів мегаполісів, але й в кожному передмісті.</p>
                </div>
            </section>
            <h2 className='new'>НОВИНКИ</h2>
            <section className="clothing">
                <div className="clother">
                    <img src={firstClother}/>
                    <h2>Куртка жіноча з капюшоном</h2>
                    <p>1799 ₴</p>
                </div>
                <div className="clother">
                    <img src={secondClother}/>
                    <h2>Сукня з коміром-стійкою</h2>
                    <p>699 ₴</p>
                </div>
                <div className="clother">
                    <img src={thirdClother}/>
                    <h2>Футболка оверсайз</h2>
                    <p>349 ₴</p>
                </div>
            </section>
            <button className="view-more">View more</button>
        </main>
    );
}

export default Home;