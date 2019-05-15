# ThucTap_HMTT
The purpose of this project is intership of Hutech University. It uses Angular Material 7 and Ionic Framework 4 to develope.

## Installing
When you want to checkout this project, please run this command: (Required NodeJS)

```
npm install
```

When you want to demo on mobile devices with 'ionic serve --devapp', please use this command:

```
ionic cordova prepare
```

## Authorize
* Author: Hung Vuong;
* Created date: 28/03/2019;
* Project way: Private;

## Project Status
Still developing...

## Noted
- Integrate Angular Material into Ionic Framework
https://www.freakyjolly.com/use-angular-material-in-ionic-3/

- Integrate Ionic Tabs Page -- Not Recommend
https://alligator.io/ionic/ionic-4-tabs/

- Custom Side Menu 
https://www.youtube.com/watch?v=I82_roQSgco

- Passing Data Angular > 2.x
	+ https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
	+ https://ionicacademy.com/pass-data-angular-router-ionic-4/

- Using Modal Ionic 4
https://www.freakyjolly.com/ionic-4-how-to-use-ionic-modal-popovers-and-pass-data-and-receive-response/#more-1885

- Create simple API Server with NodeJS and MSSQL
https://www.codeproject.com/Articles/1239390/Creating-Simple-API-in-Node-js

## Fix bug
- Fix ion-tabs overlap ion-header
https://forum.ionicframework.com/t/tabs-in-nested-view-top-with-ion-navbar-top-too/56311/12

## Tips
- When create new Ionic Project, please press command "ionic cordova prepare" to use command "ionic serve --devapp"

- Designed: Bottom mat-tabs Angular Material in Ionic 4
	+ Css: position: sticky; bottom: 0; (Try if you make sure that ion-content can scroll)

- Data Types SQL and C# Mapping
https://stackoverflow.com/questions/425389/c-sharp-equivalent-of-sql-server-datatypes

- Remove line of ion-item Ionic 4
https://stackoverflow.com/questions/41376147/remove-ion-item-divider

- Reset Increment ID returns 0
```
DBCC CHECKIDENT (ThuTuc_NopHoSo, RESEED, 0)
```

## Bugs
- Icon trong kỹ thuật lồng tabs chưa hoàn chỉnh!

## Reports
https://ithutech.github.io/thuctapsv/
