export const getDrinkCheckins = id => (
  $.ajax({
    method: 'GET',
    url: `/api/drinks/${id}/checkins`
  })
);

export const getUserCheckins = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/checkins`
  })
);

export const getAllCheckins = () => (
  $.ajax({
    method: 'GET',
    url: 'api/checkins'
  })
);

export const getCheckin = id => (
  $.ajax({
    method: 'GET',
    url: `api/checkins/${id}`
  })
);

export const createCheckin = checkin => (
  $.ajax({
    method: 'POST',
    url: 'api/checkins',
    data: checkin
  })
);
