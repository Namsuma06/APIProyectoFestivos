import { TestBed } from '@angular/core/testing';
import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'FestivosAño' title`, () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FestivosAño');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello');
  });
});