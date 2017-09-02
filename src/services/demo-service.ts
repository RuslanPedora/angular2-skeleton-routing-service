import { Injectable }     from '@angular/core';
//--------------------------------------------------------------------------------
@Injectable()
export class DemoService {
    showAlert(message: string) {
        alert(message);
    }
}