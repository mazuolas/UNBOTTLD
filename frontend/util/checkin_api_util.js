export const getDrinkCheckins = (id, pos) => (
  $.ajax({
    method: 'GET',
    url: `/api/drinks/${id}/checkins?pos=${pos}`
  })
);

export const getUserCheckins = (id, pos) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/checkins?pos=${pos}`
  })
);

export const getAllCheckins = (pos) => (
  $.ajax({
    method: 'GET',
    url: `api/checkins?pos=${pos}`
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
