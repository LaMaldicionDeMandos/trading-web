import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LazulyAvatarComponent } from './lazuly-avatar.component';

// Export module's public API
export { LazulyAvatarComponent } from './lazuly-avatar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LazulyAvatarComponent
  ],
  declarations: [
    LazulyAvatarComponent
  ]
})
export class LazulyAvatarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LazulyAvatarModule,
      providers: []
    };
  }
}
