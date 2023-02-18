import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return( 
   <div>
      {
       characters.map((chars, index) => {
         return <Card
         key={index}
         name= {chars.name}
         species= {chars.species}
         gender= {chars.gender}
         image= {chars.image}
         onClose= {chars.onClose}
         />
      })
      }
   </div>
   )
}
