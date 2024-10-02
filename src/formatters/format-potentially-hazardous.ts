export default function formatPotentiallyHazardous (value: string)  {
  if (value === 'Y') return 'Yes';
  if (value === 'N') return 'No';
  return '';
};