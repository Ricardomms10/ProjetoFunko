import { StaticImageData } from "next/image";
import Disney from '@/public/assests/disney.webp';
import Harry from '@/public/assests/harry.webp';
import Stranger from '@/public/assests/strang.webp';
import Marvel from '@/public/assests/marvel.webp';


export interface InterBtn {
    id: string;
    name: string;
    image: StaticImageData;
}

export const dataBtn: InterBtn[] = [
{
    id: '1',
    name: 'Disney',
    image: Disney,
},
{
    id: '2',
    name: 'Marvel',
    image: Marvel,
},
{
    id:'3',
    name: 'Harry Potter',
    image: Harry,
},
{
    id:'4',
    name: 'Stranger Things',
    image: Stranger,
}
]