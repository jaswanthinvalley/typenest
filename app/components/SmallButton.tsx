interface ButtonProp {
    name : string
}


export default function SmallButton ( {name} :  ButtonProp){ 
   return (
    <button className="bg-black text-white rounded p-2">{name}</button>
   )
}