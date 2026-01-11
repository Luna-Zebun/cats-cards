
import Card from "../card/card.component";
import "./card-list.style.css"

const CardList = ({ cats }) => {
    return(
        <div className="card-list-container"> 
            {cats.map(({name, email, id }, index)=>{
                return(
                <Card key={`${name}-${index}`} name={name} email={email} id={id}></Card>
                );
            })}
        
        </div>
    );
};
export default CardList;
// {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//         }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//     }
// }