import Painel1 from '@/public/assests/Painel1.png';
import Painel2 from '@/public/assests/Painel2.png';
import Painel3 from '@/public/assests/Painel3.png';
import { StaticImageData } from 'next/image';

export interface DataPainel {
    id: number;
    image: StaticImageData
}

export const painels: DataPainel[] = [
    {
        id: 1,
        image: Painel1
    },
    {
        id:2,
        image:Painel2
    },
    {
        id:3,
        image:Painel3
    }
]