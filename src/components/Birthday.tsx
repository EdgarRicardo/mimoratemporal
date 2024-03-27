import '../css/Birthday.css';

const Birthday = () => (
    <div className='birthday'>
        <div className="birthdayCard">
            <div className="cardFront">
                <h3 className="happy">Feliz cumpleaños MIAMOR 🎂!</h3>
                <div className="balloons">
                    <div className="balloonOne" />
                    <div className="balloonTwo" />
                    <div className="balloonThree" />
                    <div className="balloonFour" />
                </div>
            </div>
            <div className="cardInside">
                <h3 className="back">Feliz cumpleaños MIAMOR 🎂!</h3>
                <p>Amorcito, mi Karla con K: </p>
                <p>
                    Hoy cumples una añito más de vida, poco a poco nos hacemos viejitos.
                    Quiero desearte que tengas un hermoso día y que cumplas todos
                    tus deseos, yo sé que eres capaz de hacer cualquier cosa que te propongas.
                    Tambien quiero externarte que soy muy feliz estando a tu lado
                    y que llegaste a cambiar mi vida por completo. 
                    Le has dado amor a mi vida y cada momento a tu lado es un regalo que atesoro con todo mi ser. 
                    Amor de mi vida gracias por estar a mi lado!
                    <span className="name">Ricardo ❤️</span>
                </p>
            </div>
        </div>
    </div>
);

export default Birthday;
