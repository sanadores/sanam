import Image from 'next/image';
import React from 'react'
import { FaFlag } from 'react-icons/fa';

interface TarjetaBanderaProps {
  country: string;
  description: string[];
  imageUrl: string;
}

export default function TarjetaBandera({ country, description, imageUrl }: TarjetaBanderaProps) {

  //console.log(description)
  return (
    <div className="w-full lg:w-1/2 p-4 relative flex items-center">
      <div className="w-1/2">

        <Image
          src={imageUrl}
          alt={country}
          width={400}
          height={300}
          className="object-cover rounded-lg shadow-xl mb-4"
        />
      </div>
      <div className="w-1/2">

        <div className="flex flex-col items-start p-5">
          <div className="flex justify-center items-center bg-white rounded-md w-full ">
            <h2 className="text-3xl font-bold m-2">{country}</h2>
          </div>

          {Array.isArray(description) &&
            description.map((des, index) => (
              <p className="text-center font-bold pt-3" key={index}>{des}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}