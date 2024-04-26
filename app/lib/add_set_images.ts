import { Set } from '@/app/types/set';
import fetchSetImage from './routes/fetchSetImage';

export default async function addSetImages(data: Set[]) {
  const updatedData = await Promise.all(

    data.map(async(set) => {
    // fetchSetImage(set.url).then(image => console.log(image))
    const image = await fetchSetImage(set.url)
      .then(images => {
        if (images) {
          console.log("image:", images[0])
          return {...set, image_url: images[0]}          
        } else {
          return {...set, image_url: '/images/Lego_uh_oh.png'}
        }
      })
      // return {...set, image_url: '/images/Lego_uh_oh.png'}
      // console.log("data:",image)
    })
  )
  return updatedData

}