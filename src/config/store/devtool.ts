import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

export const StoreDevModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 100,
    logOnly: environment.production,
  }),
];
