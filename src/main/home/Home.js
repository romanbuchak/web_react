import React from "react";
import "./home.css";
import homePage from "./../../assets/icons/Home-back.png";
import firstClother from "./../../assets/icons/Kyrtka.png";
import secondClother from "./../../assets/icons/Dress.png";
import thirdClother from "./../../assets/icons/T-shirt.png";
import Clother from "../../component/clother/Clother";


function Home() {
    return (
        <main>
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
            <h2>НОВИНКИ</h2>
            <section className="clothing">
                <Clother image={firstClother} name={"Куртка жіноча з капюшоном"} price={1799}/>
                <Clother image={secondClother} name={"Сукня з коміром-стійкою"} price={699}/>
                <Clother image={thirdClother} name={"Футболка оверсайз"} price={349}/>
            </section>
            <button className="view-more">View more</button>
        </main>
    );
}

export default Home;