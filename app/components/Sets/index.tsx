"use client"

import extractImageHrefs from '@/app/lib/fetch_images';
import { Set } from '@/app/types/set';
import { Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import SetBox from '../SetBox';
import fetchSets from '@/app/lib/routes/fetchSets';
import fetchSetImage from '@/app/lib/routes/fetchSetImage';
import addSetImages from '@/app/lib/add_set_images';

export default function Sets() {
  const [data, setData] = useState<Set[]>([]);
  const [updatedData, setUpdatedData] = useState<Set[]>([]);

  useEffect(() => {
    fetchSets()
      .then((res) => {
        // console.log("res:", res)
        setData(res);
      })
  }, []);

  useEffect(() => {
    addSetImages(data).then(res => setUpdatedData(res))
  }, [data]);

  useEffect(() => {
    // console.log("data:", data)
  }, [data]);

  useEffect(() => {
    // console.log("updatedData:", updatedData)
  }, [updatedData]);

  return (
    <Flex direction='column' gap={6} align="center">
      <h1>Sets</h1>
      <Flex wrap="wrap" gap={4} justify="center">
        {updatedData.length !== 0 ? updatedData.map((set, i) => <SetBox key={i} {...set}/>) : 'Loading...'}
      </Flex>

    </Flex>
  )
}
