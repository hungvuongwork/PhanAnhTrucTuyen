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

- Call Api in Angular 7
	+ https://www.techiediaries.com/angular-by-example-httpclient-get/
	+ https://angular.io/guide/http#making-a-post-request

- Debugging In NodeJS
https://stackify.com/node-js-debugging-tips/

- Upload Mutiple Files in Nodejs 
	+ https://blog.eduonix.com/web-programming-tutorials/learn-build-upload-multiple-files-using-nodejs/
	+ https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
- Check Folder Exists using multer in Nodejs
	+ https://github.com/expressjs/multer/issues/287

## Fix bug
- Fix ion-tabs overlap ion-header
https://forum.ionicframework.com/t/tabs-in-nested-view-top-with-ion-navbar-top-too/56311/12

- OPTIONS api net::ERR_CLEARTEXT_NOT_PERMITTED when build *.apk for Android
https://stackoverflow.com/questions/52707918/webview-showing-err-cleartext-not-permitted-although-site-is-https


## Back-End Tips
- When create new Ionic Project, please press command 
```
ionic cordova prepare
``` 
and to press command
```
ionic serve --devapp
```

- Data Types SQL and C# Mapping
https://stackoverflow.com/questions/425389/c-sharp-equivalent-of-sql-server-datatypes

- Reset Increment ID returns 0
```
DBCC CHECKIDENT (ThuTuc_NopHoSo, RESEED, 0)
```

- Wrap Item into ion-item with:
```
<ion-item>
	<ion-grid>
		<ion-row class="flex-wrap">
			<ion-col></ion-col>
		</ion-row>
	</ion-grid>
</ion-item>
```

## Front-End Tips
- Designed: Bottom mat-tabs Angular Material in Ionic 4
	+ Css: position: sticky; bottom: 0; (Try if you make sure that ion-content can scroll)

- Remove line of ion-item Ionic 4
https://stackoverflow.com/questions/41376147/remove-ion-item-divider

- Css Box-shadow
http://cssdeck.com/labs/pure-css3-apples-ios-icons

## Bugs
- Icon trong kỹ thuật lồng tabs chưa hoàn chỉnh!

## Upgrade
- Chuyển loading list bằng cách sử ion-skeleton-text

## Reports
https://ithutech.github.io/thuctapsv/
