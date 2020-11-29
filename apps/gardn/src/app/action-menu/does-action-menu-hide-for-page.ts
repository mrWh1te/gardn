export const doesActionMenuHideForPage = (locationPath: string): boolean => {
  const plantEventTypeRouteRegex = /\/plant\/\d{1,}\/event-type\/\w{1,}/g;
  return plantEventTypeRouteRegex.test(locationPath);
}