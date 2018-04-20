
# CENTSIBLE - The Investment Learning App


## Table of Contents

- [Project Description](#Product-Description)
- [Application Links](#Link-to-Deployed-Application)
- [Application Release version](#Release Version)
- [User Guide](#User Guide)
- [Tech Resources used in this application](#Tech-Stack)
- [Server side REST API description](#Server- REST API)
- [Client component description](#Client - Components)
- [Defects](#Defects)
- [Defects fixed in this release](#Defects Fixed)



## Project Description
Centible is an investment learning tool, which allows users to experiment with investing in low to high risk funds.  Users learn how a mix of stocks and bonds define a strategy as low, moderate or high.  Based on this information, users select an investment strategy for year 1 through 5 and are able to see how their investments (gain/losses) compare with real market data over the same period.  Throughout the application, users are provided with textual descriptions and graphs which depict their investment selections and resulting data.  

##### Live Deploy:  https://centsible.netlify.com/

## Release Version
v2.2.0

## Tech Stack

* Front End: HTML, CSS, JavaScript, React, Redux
* Back End: Node.js, Express.js
* Testing: Mocha and Chai
* Database: Mongoose and MongoDB
* Hosting: Travis CI, Netlify, and Heroku for CICD

## Server - REST API

* User Router:
  *  POST - /api/users
        Creates and returns a new user through applicaiton registration
        Protected: No
        Required Fields: username, password, email, bday

  *  GET - /api/users/:id
        Finds and returns a user by id
        Protected: Yes
        Required Fields: user id

  *  GET - /api/users
        Returns all users
        Protected: No
        Required Fields: none

*  Auth Router:
  *  POST - /api/auth/login
        Creates and returns a 'local' authorization token
        Protected: Yes
        Required Fields: username and password

  *  POST - /api/auth/refresh
        Creates and returns a refreshed 'jwt' authorization token
        Protected: Yes
        Required Fields: username, password, token

* level_1 Router:
  *  PUT - /api/risk/invest
        Computes and updates a user's currentFund, previousFund, growth, and previousYear values
        Protected: Yes
        Required Fields: year, risk, currentFund

  *  GET - /api/risk/invest/:year
        Returns all the risk strategies gain values for a provided year
        Protected: Yes
        Required Fields: year

  *  GET - /api/risk/market/all
        Returns and the values from the Risk Db
        Protected: Yes
        Required Fields: none


## Client - Components

* App
    Purpose: Start of application
    Connected: Yes
    State: Stateful
    Children:
      LandingPage
      RegistrationPage
      Dashboard
      Portfolio
      IntroductionPage
      RiskBreakdown
      InvestmentForm
      MarketAnalysis
      InvestmentReturn
      FiveYearMarket
      FiveYearPersonal
* Button
    Purpose: Default function, which displays button based on props passed in.
    Connected: No
    State: Stateless
    Children:
      none
* Chart
    Purpose: Default function, which displays a chart based on props passed in.
    Connected: No
    State: Stateless
    Children:
      none
* Dashboard
    Purpose: Provides the 'welcome' and intro to the user
    Connected: Yes
    State: Stateful
    Children:
      IntroductionPage
      Portfolio
* FiveYearPersonal
    Purpose: Provides the user with a five year summary of their portfolio based on their investments for year 1 - 5
    Connected: Yes
    State: Stateful
    Children:
      Chart
* HeaderBar
    Purpose:  Application nav bar which provides the user with link choices, based on application state
    Connected:  Yes
    State:  Stateful
    Children:
      none
* Input
    Purpose:  Template class for login form
    Connected: No
    State: Stateless
    Children:
      none
* IntroductionPage
    Purpose: Based on the user's state in the application, the introduction will provide user specific information
    Connected: Yes
    State: Stateful
    Children:
      Button
* IntroductionForm
    Purpose: Allows user to select the risk strategy for each year of investment
    Connected: Yes
    State: Stateful
    Children:
      Button
* InvestmentReturn
    Purpose: Provides the user with a graphical representation of their yearly investment (gain/loss)
    Connected: Yes`
    State: Stateful
    Children:
      Chart
      Button
* LandingPage
    Purpose: Provides users with the login modal
    Connected: Yes
    State: Stateful
    Children:
      Modal
* LoginForm
    Purpose: Login form for application
    Connected: No
    State: Stateless
    Children:
      none
* MarketAnalysis
    Purpose: Provides user with a summary of the market based on each type of risk strategy 
    Connected: Yes
    State: Stateful
    Children:
      Button
* Modal
    Purpose: Based on state, shows either the Login Form or Registration Form
    Connected: Yes
    State: Stateful
    Children:
      LoginForm
      RegistrationForm
* PieChart
    Purpose: Default function which displays a pie chart, based on props passed into it.
    Connected: No
    State: Stateless
    Children:
      ReactSvgPieChart
* Portfolio
    Purpose: Provides a year end summary of gain/loss based on user's risk strategy selcted for that year.  Shows the cumulative years
    Connected: Yes
    State: Stateful
    Children:
      YearSummaryList
      Button
      Chart
* RegistrationForm
    Purpose: Provides a registration form for users
    Connected: No
    State: Stateless
    Children:
      none
* RegistrationPage
    Purpose: Renders the registration page or redirects to user dashboard if logged in
    Connected: Yes
    State: Stateful
    Children:
      RegistrationForm
* RequiresLogin
    Purpose: Default Function which provides users with feedback on logging in
    Connected: Yes
    State: Stateful
    Children:
      none
* RiskBreakdown
    Purpose: Provides the user with a definition of low, moderate and high risk 
    Connected: Yes
    State: Stateless
    Children:
      PieChart
      RiskDetail
      Button
* RiskDetail
    Purpose: Helper function for the RiskBreakdown component
    Connected: No
    State: Stateless
    Children:
      none
* RiskOutcomeDetail
    Purpose: Helper functin for the RiskBreakdown component
    Connected: No
    State: Stateless
    Children:
      none
* YearSummaryList
    Purpose: Provides users with a summary of the year, starting funds and ending funds, based on risk strategy
    Connected: Yes
    State: Stateful
    Children:
      none



## Defects



## Defects fixed in this release



