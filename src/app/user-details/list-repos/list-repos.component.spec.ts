import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReposComponent } from './list-repos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsService } from './../user-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListReposComponent', () => {
  let component: ListReposComponent;
  let fixture: ComponentFixture<ListReposComponent>;
  let testBedService: UserDetailsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ListReposComponent ],
      providers: [UserDetailsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReposComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(UserDetailsService)
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have default page vale as 1", () => {
    expect(component.page).toBe(1)
  })

  it("should have default pageSize as 10", () => {
    expect(component.pageSize).toBe(10)
  })


});
