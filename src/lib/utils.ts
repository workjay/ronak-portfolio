import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const copyTextToClipboard = async (text: string) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
};

export const calculateExperience = () => {
  const start = new Date("2015-07-01");
  const now = new Date();

  // Calculate the difference in months
  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  // Convert months to years
  const years = totalMonths / 12;

  // Apply rounding logic
  if (years % 1 === 0 || years % 1 > 0.5) {
    return Math.round(years).toString();
  } else {
    return Math.floor(years) + "+";
  }
};
