import Mercury from "../assets/Mercury.F16.watermarked.2k.png";
import Moon from "../assets/Moon Version.G09.watermarked.2k.png";
import Neptune from "../assets/Realistic Neptune Planet.G03.watermarked.2k.png";
import Earth from "../assets/Earth.G03.watermarked.2k.png";
import Mars from "../assets/Mars.G03.watermarked.2k.png";
import Venus from "../assets/Venus.G03.watermarked.2k.png";
import Uranus from "../assets/Uranus.H02.watermarked.2k.png";
import Saturn from "../assets/Saturn.J09.watermarked.2k.png";

export const planets = [
    {
      id: 1,
      name: "Mercury",
      img: Mercury,
      info: {
        radius: "2,439.7 km",
        distanceFromSun: "57.9 million km",
        temperature: "−173 to 427 °C",
      },
      description:
        "Меркурий — ближайшая планета к Солнцу. У него практически нет атмосферы, и он сильно нагревается днём и охлаждается ночью.",
    },
    {
      id: 3,
      name: "Earth",
      img: Earth,
      info: {
        radius: "6,371 km",
        distanceFromSun: "149.6 million km",
        temperature: "−88 to 58 °C",
      },
      description:
        "Земля — единственная известная планета, поддерживающая жизнь. Имеет богатую атмосферу и жидкую воду на поверхности.",
    },
    {
      id: 4,
      name: "Mars",
      img: Mars,
      info: {
        radius: "3,389.5 km",
        distanceFromSun: "227.9 million km",
        temperature: "−125 to 20 °C",
      },
      description:
        "Марс известен как Красная планета из-за окисленного железа на его поверхности. Возможная цель для будущей колонизации.",
    },
    {
      id: 5,
      name: "Venus",
      img: Venus,
      info: {
        radius: "6,051.8 km",
        distanceFromSun: "108.2 million km",
        temperature: "462 °C average",
      },
      description:
        "Венера — самая горячая планета в Солнечной системе. Её атмосфера содержит густой слой углекислого газа с сернокислыми облаками.",
    },
    {
      id: 6,
      name: "Saturn",
      img: Saturn,
      info: {
        radius: "58,232 km",
        distanceFromSun: "1.43 billion km",
        temperature: "−178 °C",
      },
      description:
        "Сатурн — газовый гигант, известный своими ярко выраженными кольцами, состоящими изо льда и камней.",
    },
    {
      id: 7,
      name: "Uranus",
      img: Uranus,
      info: {
        radius: "25,362 km",
        distanceFromSun: "2.87 billion km",
        temperature: "−224 °C",
      },
      description:
        "Уран вращается почти лежа на боку. Его атмосфера содержит метан, придающий ему голубоватый цвет.",
    },
    {
      id: 8,
      name: "Moon",
      img: Moon,
      info: {
        radius: "1,737.1 km",
        distanceFromEarth: "384,400 km",
        temperature: "−173 to 127 °C",
      },
      description:
        "Луна — единственный естественный спутник Земли. Её поверхность усеяна кратерами от древних столкновений.",
    },
    {
      id: 9,
      name: "Neptune",
      img: Neptune,
      info: {
        radius: "24,622 km",
        distanceFromSun: "4.5 billion km",
        temperature: "−214 °C",
      },
      description:
        "Нептун — самая дальняя планета от Солнца. Имеет мощные ветры и глубокий синий цвет из-за присутствия метана.",
    },
    
  ]