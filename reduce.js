const kaiwa = [
    {name:"Linh", talk:"Dam nhau khong"},
    {name:"Senpai", talk:"Solo"},
    {name:"Linh",talk:"Kamehameha"}
];
const dienbien = kaiwa.reduce((tichluy,dienra)=>`${tichluy}${dienra.name}:${dienra.talk}\n`, '');
console.log(dienbien);