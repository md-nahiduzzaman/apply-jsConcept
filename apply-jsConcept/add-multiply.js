function woodCalculator(chairQuatity, tableQuantity, almiraQuentity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perAlmiraWood = 20;

  const chairWoodQuentity = perChairWood * chairQuatity;
  const tableWoodQuentity = perTableWood * tableQuantity;
  const almiraWoodQuentity = perAlmiraWood * almiraQuentity;

  const totalWood = chairWoodQuentity + tableWoodQuentity + almiraWoodQuentity;

  return totalWood;
}

const myWood = woodCalculator(1, 1, 1);
console.log(myWood);
