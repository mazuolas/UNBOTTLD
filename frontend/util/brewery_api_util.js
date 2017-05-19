export const createBrewery = (name) => (
  $.ajax({
    method: 'POST',
    url: `/api/breweries`,
    data: { name: name }
  })
);
