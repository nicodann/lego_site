"use client"

import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

type User = {
  id: number;
  name: string;
};

export default function Sets() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching")
      try {
        const res = await fetch("http://localhost:5001/api/v1/users");
        const responseData = await res.json();
        setData(responseData.users);
      } catch (err) {
        console.error(err)
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("data:", data)
  }, [data]);

  const data2 = [{id: 1, name: 'name'}]

  return (
    <Flex direction='column' gap={6}>
      <h1>Sets</h1>
      {data.map((user, i) => (
        <Flex key={i} direction='column'>
          {user.id}
          {user.name}
        </Flex>
      ))}

    </Flex>
  )
}
