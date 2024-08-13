// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
"https://www.google.com/search?sca_esv=83d4d981e1094711&sca_upv=1&sxsrf=ADLYWIKQLjgo-98N9Tva4NVqrEHOgxxtBw:1723537467393&q=images+of+girl+studying&udm=2&fbs=AEQNm0CFDpRHaDHkXm_YXueHTfHtrgIXUKlluACpCix4T5ZoUSz6e3GWv4zN_09JkP2cR-DwqD-ER1CSuTjXzdXNKT0Wma9mNyum3oWLzhs1xt8u5GJdCx58_F0ZS8HPQnKQz9WgsdJpThHV1BWzodOO8E_BatEjT0dIL3U5ECu78v7bqTooU6tI88M-Qrvjqh0VwmagWSscc3JaO_0BmvDToqXs55uEqQ&sa=X&ved=2ahUKEwi92oC0xfGHAxXpSGwGHSeGPPEQtKgLegQIFRAB&biw=1091&bih=419&dpr=1.76#vhid=zEnCrRnhdcNjxM&vssid=mosaic"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                   I am a Student who is looking forward to Achieve Excellence...
                </p>
                <p>
                    I am a passionate self taught developer
                    who is Aspiring to utilize my academic background 
                    and passion to contribute effectively to a dynamic
                    organization , while continuosly learning and 
                    enhancing  my skills to achieve peofessional growth
                    and excellence.
                    
                </p>
            </div>
        </section>
    );
}
