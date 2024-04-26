export default async function fetchSets() {
  // console.log("fetching")
  try {
    const res = await fetch("http://localhost:5001/api/sets");
    const responseData = await res.json();
    return responseData
  } catch (err) {
    console.error(err)
  }
}