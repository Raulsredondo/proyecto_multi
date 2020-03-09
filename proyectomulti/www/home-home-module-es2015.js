(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Ionic Media Capture\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let f of files\">\n      <ion-item (click)=\"openFile(f)\">\n        <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\n        <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\n        <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\n \n        <ion-label class=\"ion-text-wrap\">\n          {{ f.name }}\n          <p>{{ f.fullPath }}</p>\n        </ion-label>\n      </ion-item>\n \n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"deleteFile(f)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectMedia()\">\n      <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n      Select Media\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");









const MEDIA_FOLDER_NAME = 'my_media';
let HomePage = class HomePage {
    constructor(imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt) {
        this.imagePicker = imagePicker;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.media = media;
        this.streamingMedia = streamingMedia;
        this.photoViewer = photoViewer;
        this.actionSheetController = actionSheetController;
        this.plt = plt;
        this.files = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            let path = this.file.dataDirectory;
            this.file.checkDir(path, MEDIA_FOLDER_NAME).then(() => {
                this.loadFiles();
            }, err => {
                this.file.createDir(path, MEDIA_FOLDER_NAME, false);
            });
        });
    }
    loadFiles() {
        this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(res => {
            this.files = res;
        }, err => console.log('error loading files: ', err));
    }
    selectMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Capture Image',
                        handler: () => {
                            this.captureImage();
                        }
                    },
                    {
                        text: 'Record Video',
                        handler: () => {
                            this.recordVideo();
                        }
                    },
                    {
                        text: 'Record Audio',
                        handler: () => {
                            this.recordAudio();
                        }
                    },
                    {
                        text: 'Load multiple',
                        handler: () => {
                            this.pickImages();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImages() {
        this.imagePicker.getPictures({}).then(results => {
            for (var i = 0; i < results.length; i++) {
                this.copyFileToLocalDir(results[i]);
            }
        });
        // If you get problems on Android, try to ask for Permission first
        // this.imagePicker.requestReadPermission().then(result => {
        //   console.log('requestReadPermission: ', result);
        //   this.selectMultiple();
        // });
    }
    captureImage() {
        this.mediaCapture.captureImage().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
            }
        }, (err) => console.error(err));
    }
    recordAudio() {
        this.mediaCapture.captureAudio().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
            }
        }, (err) => console.error(err));
    }
    recordVideo() {
        this.mediaCapture.captureVideo().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
            }
        }, (err) => console.error(err));
    }
    copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
        }
        const ext = myPath.split('.').pop();
        const d = Date.now();
        const newName = `${d}.${ext}`;
        const name = myPath.substr(myPath.lastIndexOf('/') + 1);
        const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
        const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
        this.file.copyFile(copyFrom, name, copyTo, newName).then(success => {
            this.loadFiles();
        }, error => {
            console.log('error: ', error);
        });
    }
    openFile(f) {
        if (f.name.indexOf('.wav') > -1) {
            // We need to remove file:/// from the path for the audio plugin to work
            const path = f.nativeURL.replace(/^file:\/\//, '');
            const audioFile = this.media.create(path);
            audioFile.play();
        }
        else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
            // E.g: Use the Streaming Media plugin to play a video
            this.streamingMedia.playVideo(f.nativeURL);
        }
        else if (f.name.indexOf('.jpg') > -1) {
            // E.g: Use the Photoviewer to present an Image
            this.photoViewer.show(f.nativeURL, 'MY awesome image');
        }
    }
    deleteFile(f) {
        const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
        this.file.removeFile(path, f.name).then(() => {
            this.loadFiles();
        }, err => console.log('error remove: ', err));
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"],
        _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"],
        _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map