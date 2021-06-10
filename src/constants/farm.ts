import { Farm } from "./types";
import seelenicon from "../assets/seelen.png";
import susdticon from "../assets/susdt.png";

export const OneDay = 86400;
export const stakePools: Farm[] = [
  {
    pid: 0,
    symbol: "WOZX",
    name: "WOZX(2 Weeks)",
    id: "0",
    icon: "https://etherscan.io/token/images/efforce_32.png",
    lockPeriod: OneDay * 14,
    unlockPeriod: OneDay * 2,
    allocPoint: 1,
    decimals: 18,
  },
  {
    pid: 1,
    symbol: "WOZX",
    name: "WOZX(1 Month)",
    id: "1",
    icon: "https://etherscan.io/token/images/efforce_32.png",
    lockPeriod: OneDay * 30,
    unlockPeriod: OneDay * 4,
    allocPoint: 1.5,
    decimals: 18,
  },
  {
    pid: 2,
    symbol: "WOZX",
    name: "WOZX(3 Months)",
    id: "2",
    icon: "https://etherscan.io/token/images/efforce_32.png",
    lockPeriod: OneDay * 90,
    unlockPeriod: OneDay * 7,
    allocPoint: 2.5,
    decimals: 18,
  },
];

export const getFarm = (id: string): Farm => {
  const farm = stakePools.find((farm) => farm.id === id);
  return farm;
};

export const getFarms = (): Farm[] => {
  return stakePools;
};

export const getFarmDecimals = (id: string): Number => {
  const farm = stakePools.find((farm) => farm.id === id);
  return farm.decimals;
};
