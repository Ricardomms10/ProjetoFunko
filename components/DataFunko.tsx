import Potter from '@/public/assests/potter.webp';
import Rick from '@/public/assests/rick1.webp';
import Rick2 from '@/public/assests/rick2.webp';
import Dobby from '@/public/assests/dobby.webp';
import Dustin from '@/public/assests/dustin.webp';
import Dustin2 from '@/public/assests/dustin2.webp';
import Dustin3 from '@/public/assests/dustin3.webp';
import Doutor from '@/public/assests/fDoutor.webp';
import Buzzy from '@/public/assests/buzzy.webp';
import Buzzy2 from '@/public/assests/buzzy2.webp';
import { StaticImageData } from 'next/image';

enum PlatformName {
    SHOPPE = 'Shoppe',
    MERCADO_LIVRE = 'Mercado Livre',
    GERAL_GEEK = 'Geral Geek',
    OUTROS = 'Outros'
}

export interface Platform {
    name: PlatformName | string;
    link: string;
}

export interface Platform {
    name: string;
    link: string;
}

export interface Character {
    id: string;
    name: string;
    image: StaticImageData[];
    categoria: string;
    condicao: any;
    plataformas: Platform[];
}


export const dataFunko: Character[] = [
    {
        id: '1',
        name: 'Funko Harry Potter',
        image:[ Potter],
        categoria: 'Harry Potter',
        condicao: 'Novo',
        plataformas: [
            { name: PlatformName.SHOPPE, link: 'link_do_shoppe' },
            { name: PlatformName.MERCADO_LIVRE, link: 'link_do_mercado_livre' },
            { name: PlatformName.GERAL_GEEK, link: 'link_do_geral_geek' }
        ]
    }
] 