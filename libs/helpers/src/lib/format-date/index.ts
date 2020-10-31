import { formatMonth } from '../format-month';

export const formatDate = (timestamp: number): string => {
  if (!timestamp) {
    return ''
  }

  const date = new Date(timestamp)

  // ie 4:31pm Dec 12, 2020
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase() + 
        ' ' + formatMonth(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();
}