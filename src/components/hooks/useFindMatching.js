export default function findMatching(products, currentLocation) {
  return products.find((product) => product.name === currentLocation);
}
