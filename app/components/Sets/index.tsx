"use client"

import { Set } from '@/app/types/set';
import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import SetBox from '../SetBox';
import fetchSets from '@/app/lib/routes/fetchSets';
import addSetImages from '@/app/lib/addSetImages';

export default function Sets() {
  const [data, setData] = useState<Set[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedSets = await fetchSets()

        const setsWImages = await Promise.all(
          fetchedSets.map(addSetImages)
        )

        setData(setsWImages)

      } catch (err) {
        console.error('Error fetching or transforming data:', err)
      }    
    };

    loadData();
  }, []);

  return (
    <Flex wrap="wrap" gap={32} justify="center">
      {data.length !== 0 ? data.map((set, i) => <SetBox key={i} {...set}/>) : 'Loading...'}
    </Flex>
  )
}
