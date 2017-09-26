import { NgModule } from '@angular/core';

import { ParallaxHeaderDirective } from './parallax-header/parallax-header';
import { DragDirective } from './drag/drag';

@NgModule({
	declarations:[DragDirective,ParallaxHeaderDirective],
	imports:[],
	exports:[DragDirective,ParallaxHeaderDirective]
})

export class DirectivesModule {}