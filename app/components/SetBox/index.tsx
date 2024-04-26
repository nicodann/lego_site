import { Set } from '@/app/types/set'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SetBoxProps extends Set {
  key: number;
}

export default function SetBox(setData: SetBoxProps) {
  return (
    <Link href={setData.url}>
      <Flex direction='column' width={200} height={200} bg='lavender' p={12} align='center' justify='space-around'>
        <h2>
          {setData.name}
        </h2>
        <Image 
          src={setData.image_url 
            ? setData.image_url 
            : '/images/Lego_uh_oh.png'} alt={`Lego ${setData.number} ${setData.name}`} 
          width={100}
          height={100}
        />
      </Flex>
    </Link>
  )
}
