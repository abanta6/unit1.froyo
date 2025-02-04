const flavorString = prompt(
  "Please enter a list of froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const flavors = flavorString.split(",");
const counts = count(flavors);

console.table(counts);

function count(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i = i + 1) {
    const element = arr[i];
    if (!(element in counts)) {
      counts[element] = 0;
    }
    counts[element] += 1;
  }
  return counts;
}
