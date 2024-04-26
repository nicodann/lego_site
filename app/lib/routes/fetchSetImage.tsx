export default async function fetchSetImage(url:string) {
  try {
    const res = await fetch(`http://localhost:5001/images?url=${url}`)
    const responseData = await res.json()
    return responseData.images
  } catch (err) {
    console.error(err)
  }
}