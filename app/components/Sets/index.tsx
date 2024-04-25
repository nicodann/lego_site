"use client"

import extractImageHrefs from '@/app/lib/fetch_images';
import { Flex, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'


type Set = {
  category: string;
  id: number;
  image_url: string;
  name: string;
  number: number;
  url: string;
};

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
    // console.log("data:", data[0])
    if (data.length > 0) {
      const legURL: string = data[0].url
      // console.log("data.url:", legURL)
      console.log("running extractImagesHrefs()")
      extractImageHrefs('/').then((res) => {
        console.log("images:", res)
      })
  }}, [data]);

  const data2 = [{id: 1, name: 'name'}]

  return (
    <Flex direction='column' gap={6} align="center">
      <h1>Sets</h1>
      <Flex wrap="wrap" gap={4} justify="center">
        {data.map((set, i) => (
          <Flex key={i} direction='column' boxSize='200px' bg='grey' p={12}>
            <h2>
              {set.name}
            </h2>
            <Link href={set.url}>instructions</Link>
          </Flex>
        ))}

      </Flex>

    </Flex>
  )
}
