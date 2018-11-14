import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '../material.module'
import { WeatherService } from '../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should generate th ordinal', () => {
    expect(component.getOrdinal(new Date('1/13/2017').getTime())).toEqual('th')
  })

  it('should generate st ordinal', () => {
    expect(component.getOrdinal(new Date('1/21/2017').getTime())).toEqual('st')
  })

  it('should generate nd ordinal', () => {
    expect(component.getOrdinal(new Date('1/22/2017').getTime())).toEqual('nd')
  })

  it('should generate rd ordinal', () => {
    expect(component.getOrdinal(new Date('1/23/2017').getTime())).toEqual('rd')
  })
})
