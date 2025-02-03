import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailedViewComponent } from './recipe-detailed-view.component';

describe('RecipeDetailedViewComponent', () => {
  let component: RecipeDetailedViewComponent;
  let fixture: ComponentFixture<RecipeDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeDetailedViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
