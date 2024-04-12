"use client"

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
      console.log("fetching")
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
  }, [data]);

  const data2 = [{id: 1, name: 'name'}]

  return (
    <Flex direction='column' gap={6}>
      <h1>Sets</h1>
      {data.map((set, i) => (
        <Flex key={i} direction='column'>
          {set.name}
          <Link href={set.url}>instructions</Link>
        </Flex>
      ))}

    </Flex>
  )
}
