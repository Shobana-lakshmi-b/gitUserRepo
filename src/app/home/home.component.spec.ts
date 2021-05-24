import { ComponentFixture, TestBed,async} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have default gitUsername as shobana-lakshmi-b",()=>{
    expect(component.gitUsername).toBe('shobana-lakshmi-b')
  })

  it("testing username input", ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const data = fixture.nativeElement;
      expect(data.querySelector('#username').nativeElement.value).toBe(component.gitUsername)
    })
  })

  it('button click should call showRepos()', async(() => {
    spyOn(component, 'showRepos');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.showRepos).toHaveBeenCalled();
    });
  }));

});
