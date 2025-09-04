"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const data = [
  {
    "name": "Electric Nurse - Happy Hippie",
    "type": "Ljus lager, Dortmunder och helles",
    "image":
      "https://product-cdn.systembolaget.se/productimages/51844230/51844230_400.webp?q=75&w=256",
    "origin": "Brewtrade Sweden från Härryda",
    "typeDescription":
      "Detta är världens i särklass vanligaste öltyp. Dortmunder och helles är klassisk lageröl från Tyskland som inspirerat många andra stilar. Både Dortmunder Export och Helles är ljusa lagerstilar med fokus på malt och balanserad beska. Särskilt Helles är tydligt maltframträdande och mjuk, medan Dortmunder är något torrare och mer robust.",
    "description":
      "Maltig smak med inslag av ljust bröd, honung, örter och citrus. ",
    "abv": "5,8%",
    "size": "33cl",
    "id": 1,
  },
  {
    "name": "Svart",
    "type": "Porter, torr",
    "image":
      "https://product-cdn.systembolaget.se/productimages/585076/585076_400.webp?q=75&w=256",
    "origin": "Gamla Slottskällans Bryggeri från Uppsala",
    "typeDescription":
      "Porter eller stout är ett väldigt mörkt varmjäst öl och färgen kan ibland uppfattas som svart. Den mörka färgen kommer från den hårt rostade malten, vilket också ger ölet en rostad smak som påminner om pumpernickel, kaffe och mörk choklad. Torr porter och stout har ingen sötma och beskan är måttlig till tydlig. Öltyperna porter och stout kommer ursprungligen från de brittiska öarna. Portern har kommit att förknippas med London och en lite sötare typ av den mörka drycken.",
    "description":
      "Smakrik, rostad smak med inslag av kaffe, soja, pumpernickel, lakrits och mörk choklad.",
    "abv": "5,5%",
    "size": "33cl",
    "id": 2,
  },
  {
    "name": "DIPA",
    "type": "ALE, Imperial/Dubbel IPA",
    "image":
      "https://product-cdn.systembolaget.se/productimages/24503040/24503040_400.webp?q=75&w=256",
    "origin": "To Øl från Danmark",
    "typeDescription":
      "Ale är en varmjäst ölstil som kommer i många olika varianter. Varmjäsning sker normalt vid rumstemperatur. Denna öl har torrhumlats, vilket innebär att humle även tillsätts efter jäsningen, där den får dra i ett par dagar. Dubbel-IPA (DIPA) växte fram i västra USA under 1990-talet. Den nya ölstilen fick namnet dubbel-IPA eller imperial IPA. Den kallas dubbel eftersom den innehåller mycket mer humle och malt än en vanlig IPA (india pale ale).",
    "description":
      "Humlearomatisk, fruktig smak med tydlig beska och liten sötma, inslag av torkad ananas, tallbarr, mango, sockerkaka och grapefrukt.",
    "abv": "8,7%",
    "size": "44cl",
    "id": 3,
  },
  {
    "name": "Triple Berry Pie",
    "type": "Syrlig öl, Berliner weisse",
    "image":
      "https://product-cdn.systembolaget.se/productimages/24409607/24409607_400.webp?q=75&w=256",
    "origin": "Brewski Brew från Helsingborg",
    "typeDescription":
      "Denna torra och syrliga ölstil härstammar från Berlin. Ölet surnar med hjälp av laktobaciller som finns naturligt på kornmaltens skal. Berliner weisse är en ölstil som fått ett rejält uppsving de senaste åren, både internationellt och i Sverige. Det kan nog räknas som det vanligaste av dagens ”suröl”. Experimentlustan är stor hos bryggarna och det verkar inte finnas någon hejd på vilken typ av bär eller frukt som används som kryddning.",
    "description":
      "Bärig, syrlig smak med inslag av svarta vinbär, hallon, vanilj, sockerkaka och blåbär.",
    "abv": "4%",
    "size": "33cl",
    "id": 4,
  },

  {
    "name": "Oppigårds Pilsner",
    "type": "Ljus lager, Pilsner - tysk stil",
    "image":
      "https://product-cdn.systembolaget.se/productimages/30492549/30492549_400.webp?q=75&w=256",
    "origin": "Oppigårds Bryggeri från Hedemora",
    "typeDescription":
      "Pilsner kommer ursprungligen från staden Pilsen i Tjeckien där den bryggdes för första gången år 1842. I Tyskland började pilsner bryggas cirka 30 år senare. Tysk pilsner är ofta torr, har relativt hög beska och humlen är mer påtaglig än i tjeckisk pilsner. Denna öl är, som all annan lager, kalljäst. Detta innebär bland annat att jäsningen sker vid en relativt låg temperatur, 5-10 grader, och att ölet får mer karaktär av råvaran än av själva jäsningsprocessen. Efter avslutad jäsning lagras ölet i flera veckor, därav namnet.",
    "description":
      "Maltig smak med tydlig beska, inslag av knäckebröd, timjan, honung och citrusskal. ",
    "abv": "4,7%",
    "size": "33cl",
    "id": 5,
  },
];

export default function Home() {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBeer, setCurrentBeer] = useState(data[currentIndex]);
  const [scores, setScores] = useState([0, 0, 0, 0, 0]);
  const [currentScore, setCurrentScore] = useState(scores[currentIndex]);

  const submit = () => {
    if (name.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setNameSubmitted(true);
    localStorage.setItem("name", name);
  };

  useEffect(() => {
    setCurrentBeer(data[currentIndex]);
    setCurrentScore(scores[currentIndex]);
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const setScore = (score: number) => {
    setScores((prev) => {
      prev[currentIndex] = score;
      return prev;
    });
    setCurrentScore(score);
  };

  const persistScores = async () => {
    const name = localStorage.getItem("name");

    await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, scores }),
    });

    window.location.href = "/result";
  };

  const currentScoreArray = Array.from({ length: currentScore }).fill(0);

  return (
    <div>
      <nav className="p-4 flex justify-center gap-2">
        <img src="/glas.png" alt="Logo" className="h-8 w-8 mr-4" />
        <h1 className="text-2xl font-bold font-sans">Mack 'n' Beer</h1>
      </nav>
      {nameSubmitted
        ? (
          <div className="mx-6 my-12">
            <div className="flex justify-center mb-12">
              <img
                src={currentBeer.image}
                className="h-80"
              />
            </div>

            <h4 className="text-3xl mb-4">
              #{currentBeer.id.toString()} {currentBeer.name} -{" "}
              {currentBeer.abv}
            </h4>
            <div className="flex mb-8">
              {currentScoreArray.map((_, i) => (
                <img
                  id={i.toString()}
                  src="/glas.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                  onClick={() => setScore(i + 1)}
                />
              ))}
              {Array.from({ length: 5 - currentScore }).fill(0).map((_, i) => (
                <img
                  id={i.toString()}
                  src="/empty-glas.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                  onClick={() => setScore(currentScore + i + 1)}
                />
              ))}
            </div>

            <p className="mb-4">{currentBeer.description}</p>
            <p className="mb-4">{currentBeer.typeDescription}</p>
            <p className="mb-4">Land: {currentBeer.origin}</p>
            <p className="mb-4">Öltyp: {currentBeer.type}</p>
            <p className="mb-4">Storlek: {currentBeer.size}</p>
            <p className="mb-6">Alkoholhalt: {currentBeer.abv}</p>

            {currentIndex === data.length - 1
              ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setCurrentIndex((prev) => {
                        const nextIndex = prev - 1;
                        if (nextIndex >= data.length) {
                          return 0;
                        }
                        return nextIndex;
                      });
                    }}
                    className="bg-gray-500 text-white rounded-lg p-2 mt-4 hover:bg-gray-800 active:bg-gray-900"
                  >
                    Föregående öl!
                  </button>
                  <button
                    onClick={persistScores}
                    className="bg-gray-500 text-white rounded-lg p-2 mt-4 hover:bg-gray-800 active:bg-gray-900"
                  >
                    Se resultatet!
                  </button>
                </div>
              )
              : (
                <div className="flex gap-2">
                  {currentIndex > 0 && (
                    <button
                      onClick={() => {
                        setCurrentIndex((prev) => {
                          const nextIndex = prev - 1;
                          if (nextIndex >= data.length) {
                            return 0;
                          }
                          return nextIndex;
                        });
                      }}
                      className="bg-gray-500 text-white rounded-lg p-2 mt-4 hover:bg-gray-800 active:bg-gray-900"
                    >
                      Föregående öl!
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setCurrentIndex((prev) => {
                        const nextIndex = prev + 1;
                        if (nextIndex >= data.length) {
                          return 0;
                        }
                        return nextIndex;
                      });
                    }}
                    className="bg-gray-500 text-white rounded-lg p-2 mt-4 hover:bg-gray-800 active:bg-gray-900"
                  >
                    Till nästa öl!
                  </button>
                </div>
              )}
          </div>
        )
        : (
          <>
            <div className="h-56" />
            <div className="flex flex-col justify-center gap-2 m-6">
              Fyll i ditt namn
              <input
                type="text"
                placeholder="Ditt namn"
                className={`border border-gray-300 rounded-lg p-4 w-full bg-white text-black ${
                  error ? "border-red-400 border-2" : ""
                }`}
                onChange={(e) => setName(e.target.value)}
              />

              <button
                type="submit"
                className="bg-gray-500 text-white rounded-lg p-2 mt-4 hover:bg-gray-800 active:bg-gray-900"
                onClick={() => submit()}
              >
                Vidare till ölprovningen!
              </button>
            </div>
          </>
        )}
    </div>
  );
}
