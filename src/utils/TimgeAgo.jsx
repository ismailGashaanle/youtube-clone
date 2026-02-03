// utils/timeAgo.js
export const timeAgo = (dateString) => {
  const now = new Date();
  const publishedDate = new Date(dateString);
  const diff = now - publishedDate; // difference in milliseconds

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerWeek = msPerDay * 7;
  const msPerMonth = msPerDay * 30; // approximate
  const msPerYear = msPerDay * 365; // approximate

  if (diff < msPerDay) {
    const days = Math.floor(diff / msPerDay);
    return days <= 0 ? 'Today' : `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diff < msPerWeek) {
    const days = Math.floor(diff / msPerDay);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diff < msPerMonth) {
    const weeks = Math.floor(diff / msPerWeek);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diff < msPerYear) {
    const months = Math.floor(diff / msPerMonth);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diff / msPerYear);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};
