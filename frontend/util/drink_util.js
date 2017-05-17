export const createDrink = drink => (
  $.ajax({
    method: 'POST',
    url: '/api/drinks',
    data: drink
  })
);

export const getDrink = id => (
  $.ajax({
    method: 'GET',
    url: `/api/drinks/${id}`
  })
);

export const getAllDrinks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/drinks'
  })
);

export const updateDrink = drink => (
  $.ajax({
    method: 'PATCH',
    url: `/api/drinks/${drink.id}`,
    data: drink
  })
);

export const deleteDrink = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/drinks/${id}`
  })
);

export const editDrink = id => (
  $.ajax({
    method: 'GET',
    url: `/api/drinks/${id}/edit`
  })
);
