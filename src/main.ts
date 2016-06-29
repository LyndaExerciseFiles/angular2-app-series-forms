///<reference path="../typings/index.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { SandoAppComponent } from './app/';

enableProdMode();

bootstrap(SandoAppComponent, [
    disableDeprecatedForms(),
    provideForms()
  ]);
