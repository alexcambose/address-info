export const trimAddress = (address: string) => {
  return (
    address.slice(0, 4) +
    '...' +
    address.slice(address.length - 4, address.length)
  );
};
export const formatDecimals = (input: string | number): string => {
  const parsedNumber = parseFloat(String(input));

  if (isNaN(parsedNumber)) {
    throw new Error('Invalid input: Not a valid number string.');
  }

  const trimmedNumber = parsedNumber.toFixed(6).replace(/\.?0+$/, '');

  return trimmedNumber;
};
export const localizedStringNumber = (input: string | number) => {
  const parsedNumber = parseFloat(String(input));
  return parsedNumber.toLocaleString();
};
