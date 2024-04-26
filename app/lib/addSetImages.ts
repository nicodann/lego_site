import { Set } from '@/app/types/set';
import fetchSetImage from './routes/fetchSetImage';

export default async function addSetImages(set: Set) {
 
    const newImageURLs = await fetchSetImage(set.url)

    return {...set, image_url: newImageURLs ? newImageURLs[0] : '/images/Lego_uh_oh.png'}

    // return '/images/Lego_uh_oh.png'

}