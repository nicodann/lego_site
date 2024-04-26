"use client"

import extractImageHrefs from '@/app/lib/fetch_images';
import { Set } from '@/app/types/set';
import { Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import SetBox from '../SetBox';

export default function Sets() {
  const [data, setData] = useState<Set[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("fetching")
      try {
        const res = await fetch("http://localhost:5001/api/sets");
        const responseData = await res.json();
        setData(responseData);
      } catch (err) {
        console.error(err)
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("data:", data[0])
    // if (data.length > 0) {
    //   const legURL: string = data[0].url
    //   // console.log("data.url:", legURL)
    //   console.log("running extractImagesHrefs()")
    //   extractImageHrefs('/').then((res) => {
    //     console.log("images:", res)
    //   })
  // }
}, [data]);

  const data2 = [{id: 1, name: 'name'}]

  return (
    <Flex direction='column' gap={6} align="center">
      <h1>Sets</h1>
      <Flex wrap="wrap" gap={4} justify="center">
        {data.length !== 0 ? data.map((set, i) => <SetBox key={i} {...set}/>) : 'Loading...'}
      </Flex>

    </Flex>
  )
}
