#DB Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## drinks
column name | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
description    | text      | not null
image_url      | string    | not null
brewery_id     | integer   | not null, indexed
abv            | float     | not null
average_rating | float     | not null

## checkins
 column name    | data type | details               
----------------|-----------|-----------------------
 id             | integer   | not null, primary key
 rating         | integer   | not null, between 1-5
 comment        | text      | optional              
 image_url      | string    | not null              
 user_id        | integer   | not null, indexed     
 drink_id       | integer   | not null, indexed     

## breweries
 column name | data type | details                   
-------------|-----------|---------------------------
 id          | integer   | not null, primary key     
 name        | string    | not null, unique          
 location    | string    | not null       
 image_url   | string    | not null       
