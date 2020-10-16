//filtering an array of people whose first name is longer than 5 letters
const people = [
{
    name: 'Ioan', surname: 'Latrovaliev'
}, {
    name: 'Konstantin', surname: 'Simeonov'
}, {
    name: 'Georgy', surname: 'Tomov'
}, {
    name: 'Bella', surname: 'Zaharieva'
}, {
    name: 'Martin', surname: 'Georgiev'
}, {
    name: 'Maria', surname: 'Madzharova'
}, {
    name: 'Ventcislava', surname: 'Nekova'
}, {
    name: 'Ventsisalva', surname: 'Stamenova'
}
];
console.log(people.filter(p => p.name.length > 5))