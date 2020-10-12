# API endpoinst

## '/api/epic'

GET '/api/epic' get all epics

GET '/api/epic/:id' get an epic with specific id

POST '/api/epic' create an epic :epicObj {title: string}

PATCH '/api/epic/:id' update an epic :epicObj {title: string}

PATCH '/api/epic/:id' delete an epic :epicObj {title: string}

## 'api/userstory'

GET 'api/userstory' get all userstoried in db

GET 'api/userstory/:id' get a specific userstory

POST 'api/userstory/' create a userstory
        UserstoryData:
        {
            title: string;
            epic: IEpic['id']
        }

PATCH  'api/userstory/:id' update a specific userstory
       UserstoryData:
        {
            title: string;
        }

DELETE 'api/userstory/:id' delete a specific userstory
