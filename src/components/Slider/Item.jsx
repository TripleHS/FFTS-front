import React from 'react';
import Button from '@material-ui/core/Button';

const Item1 = () => {
    return(
        <div className='flex'>
            <img className='w-80 opacity-80 rounded-l-lg' src='https://images.pexels.com/photos/3985170/pexels-photo-3985170.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
            <div className='flex flex-col mx-auto my-2'>
                <p className='text-2xl text-footer text-center mb-4'>ZAPISY NA SZCZEPIENIA</p>
                <p className='text-xl text-footer text-center mb-4'>Już dziś zarezerwuj wizytę <br/> w dogodnym dla Ciebie terminie</p>
                <Button variant="outlined" color='primary' className='max-w-xs self-center'>SPRAWDŹ WOLNE TERMINY</Button>
            </div>
        </div>
    )
}
const Item2 = () => {
    return(
        <div className="flex">
            <img className='w-80 opacity-80 rounded-l-lg' src='https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
            <div className="flex flex-col mx-auto my-2">
                <p className='text-2xl text-footer text-center mb-4'>BADANIA KIEROWCÓW</p>
                <p className='text-xl text-footer text-center mb-4'>Wykonujemy niezbędne badania <br/> na prawo jazdy</p>
                <Button variant="outlined" color='primary' className='max-w-xs self-center'>SPRAWDŹ WOLNE TERMINY</Button>
            </div>
        </div>
    )
}
const Item3 = () => {
    return(
        <div className="flex">
            <img className='w-80 opacity-80 rounded-l-lg' src='https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
            <div className="flex flex-col mx-auto my-2">
                <p className='text-2xl text-footer text-center mb-4'>USŁUGI STOMATOLOGICZNE</p>
                <p className='text-xl text-footer text-center mb-4'>Zapisz się na bezpłatną wizytę ze specjalistą <br/> i zasięgnij porady lekarskiej</p>
                <Button variant="outlined" color='primary' className='max-w-xs self-center'>SPRAWDŹ WOLNE TERMINY</Button>
            </div>
        </div>
    )
}

export {Item1, Item2, Item3};