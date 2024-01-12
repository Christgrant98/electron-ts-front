
export const getRandomPastelColor = () => {

  const pastelColors = [
    "#ffd6ba", "#baffd1", "#c4b8ff", "#ffeeba", "#c1e7ff",
    "#ffd3e3", "#ffefb5", "#d0e6a5", "#a2d2ff", "#f9c0bb",
    "#ffd8e2", "#ffebc7", "#b4f8c8", "#b5c1ff", "#c8e6c9",
  ];
  // Math.floor(Math.random() * (i + 1)); 
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};