// const thanhthuy = [];
// const demo = thanhthuy.every(a => a>2);

// console.log(demo);


const survey = [
    { name: "Steve",   answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter",   answer: "Yes"},
    { name: "Elaine",  answer: "No"}
  ];
  const demo2 = survey.every((el,index,arr)=> index === 0?true:el.answer === arr[index-1].answer);
  console.log(demo2);
