const getPosition = (event: MouseEvent | TouchEvent) => {
  event.preventDefault();
  if (event instanceof TouchEvent) {
    return event.touches[0].clientX;
  } else {
    return (event as MouseEvent).clientX;
  }
};

export default getPosition;
