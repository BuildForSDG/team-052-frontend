export const showColorForStatus = (value) => {
  switch (value) {
    case 'acknowledged':
      return 'green';
    case 'pending':
      return 'blue';
    case 'enroute':
      return 'yellow';
  }
};
