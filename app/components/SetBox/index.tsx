import { Set } from '@/app/types/set'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SetBoxProps extends Set {
  key: number;
}

export default function SetBox(setData: SetBoxProps) {
  return (
    <Link href={setData.url}>
      <Flex direction='column'  bg='lavender' p={12} align='center'>
        <h2>
          {setData.name}
        </h2>
        <Box width={400} height={400} position='relative'>
          <Image 
            // src={setData.image_url}
            src={setData.image_url 
              ? setData.image_url 
              : '/images/Lego_uh_oh.png'} 
            alt={`Lego ${setData.number} ${setData.name}`} 
            layout='fill'
            objectFit='contain'
            // width={400}
            // height={400}
          />

        </Box>
      </Flex>
    </Link>
  )
}
