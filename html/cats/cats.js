// Take an array of objects that represent cats 
// (a cat has name, age and imageUrl properties) 
// and output each cat as a separate row in an html table. 
// Your table should have a column for each property.

const cats = [
    {name: 'Tomi', age: 2, imageUrl: 'https://img.bg.sof.cmestatic.com/media/images/640x360/Apr2012/2110610080.jpg'},
    {name: 'Belcho', age: 1, imageUrl: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/American-Curl_White.jpg'},
    {name: 'Fruko', age: 5, imageUrl: 'https://thumbs.dreamstime.com/z/cat-plays-drums-musician-white-background-130791241.jpg'},
    {name: 'Yoda', age: 95, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb5cf632274075.5677d56f5e64b.jpg'},
    {name: 'Garfield', age: 5, imageUrl: 'https://petskb.com/wp-content/uploads/2019/10/Garfield-face-2.jpg'},
    {name: 'Mark', age: 15, imageUrl: 'https://i.pinimg.com/originals/15/cb/f1/15cbf1d43f0efaaf9c78a4b7d46a99bf.jpg'},
    {name: 'Oksana', age: 6, imageUrl: 'https://i0.wp.com/bp1.blogger.com/_FgL2FhJczTE/Rkc5sCdY8PI/AAAAAAAAAGw/F8qAIgizzBA/s320/CAIJOH2N.jpg'},
]
const catsTable = `<table border="5px">${cats.map(cat => `<tr>${Object.values(cat).map((prop,i) => {
    if(/imageUrl/.test(Object.keys(cat)[i])){
        return `<td><img src="${prop}" width="100px" height="100px"></td>`
    }else{
        return `<td>${prop}</td>`
    }
}).join('')}</tr>`).join('')}</table>`
console.log(catsTable)
