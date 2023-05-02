export function randomizeResult(arr, maxResults) {
  const randomResult = [];
  let max = maxResults;

  while (max > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const selectedItem = arr[randomIndex];

    if (!randomResult.includes(selectedItem)) {
      randomResult.push(selectedItem);
      max--;
    }
  }

  return randomResult;
}
