/* Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one). */

export default function ipsBetween(firstIP, secondIP) {
  const result = ipToInt(secondIP) - ipToInt(firstIP);
  return result;
}

function ipToInt(ip) {
  const arrIP = ip.split('.');
  let j = 3;

  const result = arrIP.reduce( (acc, el) => {
    acc += 256 ** j * el;
    j--;
    return acc;
  }, 0);

  return result;
}