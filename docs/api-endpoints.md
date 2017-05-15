# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:user_id`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Drinks

- `GET /api/drinks`
- `GET /api/drinks/:drink_id`
- `GET /api/breweries/drinks`
- `POST /api/drinks`
- `PATCH /api/drinks/:drink_id`
- `DELETE /api/drinks/:drink_id`


### Check-Ins

- `GET /api/check_ins`
- `GET /api/users/:user_id/check_ins`
- `GET /api/users/:user_id/check_ins/:checkin_id`
- `GET /api/drinks/:drink_id/check_ins/`
- `POST /api/users/:user_id/check_ins`
- `PATCH /api/users/:user_id/check_ins/:checkin_id`
- `DELETE /api/users/:user_id/check_ins/:checkin_id`

### Breweries

 - `GET /api/breweries`
 - `GET /api/breweries/:id`
 - `POST /api/breweries/`
 - `PATCH /api/breweries/`
 - `DELETE /api/breweries/:id`
