import { Farm } from "./types";
import wozx from "../assets/wozx.png";

export const OneDay = 86400;
export const stakePools: Farm[] = [
  // {
  //   pid: 0,
  //   symbol: "WOZX",
  //   name: "WOZX",
  //   id: "0",
  //   icon: wozx,
  //   decimals: 18,
  //   lockPeriod: 0,
  //   unlockPeriod: 0,
  //   allocPoint: 0,
  // },
  {
    pid: 1,
    symbol: "WOZX",
    name: "WOZX(2 Week)",
    id: "1",
    icon: wozx,
    decimals: 18,
    lockPeriod: OneDay * 14,
    unlockPeriod: OneDay * 2,
    allocPoint: 0,
  },
  {
    pid: 2,
    symbol: "WOZX",
    name: "WOZX(1 Month)",
    id: "2",
    icon: wozx,
    decimals: 18,
    lockPeriod: OneDay * 30,
    unlockPeriod: OneDay * 2,
    allocPoint: 1.5,
  },
  {
    pid: 3,
    symbol: "WOZX",
    name: "WOZX(3 Month)",
    id: "3",
    icon: wozx,
    decimals: 18,
    lockPeriod: OneDay * 90,
    unlockPeriod: OneDay * 2,
    allocPoint: 2.5,
  },
  {
    pid: 4,
    symbol: "WOZX",
    name: "WOZX(6 Month)",
    id: "4",
    icon: wozx,
    decimals: 18,
    lockPeriod: OneDay * 180,
    unlockPeriod: OneDay * 2,
    allocPoint: 4,
  },
  // {
  //   pid: 5,
  //   symbol: "WOZX",
  //   name: "WOZX(1 Year)",
  //   id: "4",
  //   icon: wozx,
  //   decimals: 18,
  //   lockPeriod: OneDay * 365,
  //   unlockPeriod: OneDay * 2,
  //   allocPoint: 8,
  // },
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
