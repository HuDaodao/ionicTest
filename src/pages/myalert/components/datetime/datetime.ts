import { Component } from '@angular/core';

@Component({
    selector: 'page-datetime',
    templateUrl: 'datetime.html'
})

export class MyDatetimePage {
    public event = {
        month: '1990-02-19',
        timeStarts: '07:45',
        timeEnds: '1990-02-20'
    }
}