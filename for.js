const Obj = [
{question1:"Do U Love Me",answer:"Yes, I Love You"},
{question1:"So Why You Leave Me ?",answer:"Im sorry"},
{question1:"Do U Love Me Again?",answer:"Yes, I Love You"},
{question1:"So why you love me again?",answer:"Uhm..."}
];
const demo = Obj.reduce((q,a)=>`${q}${q.question1}:${q.talk}\n`, '');

console.log(Obj);