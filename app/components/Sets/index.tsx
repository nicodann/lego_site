"use client"

import extractImageHrefs from '@/app/lib/fetch_images';
import { Set } from '@/app/types/set';
import { Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import SetBox from '../SetBox';
import fetchSetsData from '@/app/lib/routes/fetchSets';
import fetchSetImage from '@/app/lib/routes/fetchSetImage';
// import fetchSetsData from '@/app/lib/routes/fetchSets';

export default function Sets() {
  const [data, setData] = useState<Set[]>([]);

  useEffect(() => {
    fetchSetsData().then((res) => setData(res))
  }, []);

  useEffect(() => {
    // console.log("data:", data[0])
    data.length !== 0 && data.forEach((set, i) => {
      if (!set.image_url) {
        fetchSetImage(set.url).then(images => {
          images && setData(prev => {
            console.log("prev:", prev[i])
            prev[i].image_url = images[0]
            console.log("prev_after:", prev[i])
            return prev
          })
        })
      }
    })
    console.log("updated data?:", data[0])
}, [data]);

  // const data2 = [{id: 1, name: 'name'}]

  return (
    <Flex direction='column' gap={6} align="center">
      <h1>Sets</h1>
      <Flex wrap="wrap" gap={4} justify="center">
        {data.length !== 0 ? data.map((set, i) => <SetBox key={i} {...set}/>) : 'Loading...'}
      </Flex>

    </Flex>
  )
}
