import Image from 'next/image'
import React from 'react'

export default function CardAgricultura({ text='', img='', direction=true }) {
    // Determina la clase CSS para el contenedor de la imagen
    const imageContainerClass = direction ? 'order-first' : 'order-last';

    return (
        <div className="w-full flex items-center p-5 gap-10">
            <div className={`w-1/2 px-10 ${imageContainerClass}`}>
                <p className='font-bold text-2xl sanam-green'>{text}</p>
            </div>
            <div className='w-1/2'>
                <Image width={500} height={250} src={img} alt="Imagen" />
            </div>
        </div>
    );
}
