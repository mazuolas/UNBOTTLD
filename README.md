# UNBOTTLD

UNBOTTLD is a single page web app that was inspired by UNTAPPD, where users can keep track of what beers they've tried by rating it and also see what other people are drinking.  

[UNBOTTLD live](https://unbottld.herokuapp.com)

## Technologies used

* Ruby
* Rails
* JavaScript
* React.js
* Redux
* PostgreSQL
* Cloudinary
* webpack

## Features and Implementation

### Side Bar

![side bar]

#### Current User's stats

The first box in the side bar holds the current user's profile picture, username, total checkins and unique checkins.  The user's picture is stored on cloudinary and a link to the image is stored in a users table.  The checkin stats are calculated on the back end by using active record to count the number of checkins and unique checkins the belong to the current user.

#### Top Rated Bottles

The drinks table stores the average rating for each beer, and currently that average is updated on every checkin.  Currently this method is fine for calculating averages but would not scale well when many users are creating many checkins.  If the site gets large enough the averages will be changed to only update once a day instead of on every checkin.


### Search

Updating the beer list in real time as the user types was implemented by sending an ajax request with the value of the search sent as a query parameter every time the search input field changes.  The filtering is handled on the back end by the `pg_search` gem.
``` Ruby
pg_search_scope :search_by_name,
 against: :name,
 associated_against: {brewery: :name },
 using: { tsearch: {prefix: true } }
```

This allows the search to check both the name of drinks and the name of the associated brewery.

## Future of the project

I plan on adding more features in the future, the next additions will be below.

### Brewery Page

A page simmilar to a user's profile that will display information about the brewery and show a list of their beers.

### Commenting on checkins

Allow users to comment on other people's checkins.

### webpack code splitting

Improve the initial load time by only sending the code needed for the current page being viewed.

[side bar]: ./docs/screens/side_bar.png
