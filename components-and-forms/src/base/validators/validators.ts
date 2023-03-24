export function isValueNotEmpty(value: string | undefined): boolean {
  console.log(value);
  return value ? value.trim() !== '' : false;
}

export function isValueLonger(longerThan: number, value: string | undefined): boolean {
  return value ? value.trim().length > longerThan : false;
}

export function isSelectValid(selectedIndex: string | undefined): boolean {
  return selectedIndex !== '0' && selectedIndex !== undefined;
}
