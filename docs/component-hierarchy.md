## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Nav
 - SideBar

**DrinkContainer**
  - Drink Header
  - DrinkIndex

**DrinkIndex**
 - DrinkIndexItem
  + DrinkDetail

**NewDrinkContainer**
  -  New Drink Form
  
**CheckinsContainer**
  - Checkins Header
  - CheckinIndex

**CheckinsIndex**
 - CheckinIndexItem
  + CheckinDetail

**NewCheckinContainer**
  -  New Checkin Form

**UserProfileContainer**
 - User profile
  + UserDetail
  - CheckinIndexItem

  **NewBreweryContainer**
  -  New Brewery Form

**BreweryProfileContainer**
 - Brewery profile
  + BreweryDetail
  - DrinkIndexItem


## Routes
| Path                          | Component            |
|-------------------------------|----------------------|
| "/"                           | "Splashpage"          |
| "/signup"                     | "AuthFormContainer"  |
| "/login"                      | "AuthFormContainer"  |
| "/home"                       | "HomeContainer"      |
| "/home/drinks/"               | "DrinksContainer"    |
| "/home/drinks/:drink_id"      | "ShowDrinkContainer" |
| "/home/users/:user"           | "ProfileContainer"   |
| "/home/users/:user/check_ins" | "CheckinsContainer"  |
| "/home/feed/"                 | "CheckinsContainer"  |
