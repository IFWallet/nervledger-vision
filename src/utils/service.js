import http from './http';

export const getPrice = (token) => http({
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`
});

export const getApy = () => http({
    method: 'GET',
    url: `https://api.yearn.tools/vaults/apy`
});