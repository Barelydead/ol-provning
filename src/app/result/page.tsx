"use client";

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

const scores = [
  {
    name: "Christofer",
    scores: [5, 4, 3, 2, 1],
  },
  {
    name: "Erika",
    scores: [3, 4, 2, 5, 1],
  },
];

export default function Home() {
  return (
    <div>
      <nav className="p-4 flex justify-center gap-2">
        <img src="/glas.png" alt="Logo" className="h-8 w-8 mr-4" />
        <h1 className="text-2xl font-bold font-sans">Mack 'n' Beer</h1>
      </nav>
      <div className="h-2" />
      <div className="mx-6 my-12">
        {data.map((beer, index) => (
          <div key={beer.id} className="max-w-md mx-auto mb-8">
            <h4 className="text-2xl mb-4">
              #{beer.id.toString()} {beer.name} - {beer.abv}
            </h4>

            <span className="font-bold mb-4">
              Genomsnitt: {scores.reduce((acc, curr) =>
                acc + curr.scores[index], 0) / scores.length}
            </span>

            {scores.map((score) => (
              <div key={score.name} className="mb-4">
                <h5 className="font-bold mb-2">{score.name}</h5>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl cursor-pointer ${
                        star <= score.scores[index]
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex mb-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
