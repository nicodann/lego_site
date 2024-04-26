export default async function extractImageHrefs(url:string) {
  try {
    // Fetch the HTML content
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const htmlText = await response.text();

    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");

    // Extract image hrefs
    const imageTags = doc.querySelectorAll('img');
    const imageHrefs = [];

    for (let imageTag of imageTags) {
      const href = imageTag.getAttribute('src');
      if (href) {
        imageHrefs.push(href);
      } 
    }

    return imageHrefs;

  } catch (error) {
    console.error("Error extracting image hrefs:", error);
    return []; // Return an empty array in case of errors
  }
}