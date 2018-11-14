import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { MaterialModule } from './material.module'
import { WeatherService } from './weather/weather.service'
import { WeatherServiceFake } from './weather/weather.service.fake'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, NoopAnimationsModule],
      declarations: [AppComponent, CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title in a span tag', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('Awesome Local Weather')
  })
})
