export function readPrices(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          type: "room",
          capacity: 1,
          price: 18,
        },
        {
          type: "room",
          capacity: 2,
          price: 24,
        },
        {
          type: "hostel",
          price: 11,
        },
      ]);
    }, 1000);
  });
}
