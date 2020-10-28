import { TimeUnit, LiquidUnit, TemperatureUnit, HumidityUnit, ElectricalConductivityUnit } from './../../generated';

export const measurementUnitToAbbreviation = (unit: TimeUnit | LiquidUnit | TemperatureUnit | HumidityUnit | ElectricalConductivityUnit): string => {
  if(!unit) {
    return ''
  }
  
  switch(unit) {
    case TimeUnit.Second:
      return 'sec';
    case TimeUnit.Minute:
      return 'min';
    case TimeUnit.Hour:
      return 'hr';
    case TimeUnit.Day:
      return 'day';
    case TimeUnit.Week:
      return 'week';
    case TimeUnit.Month:
      return 'mon';
    case TimeUnit.Year:
      return 'year';
    case TimeUnit.Decade:
      return 'decade';
    case TimeUnit.Century:
      return 'century';
    case LiquidUnit.Gill:
      return 'gill';
    case LiquidUnit.Pint:
      return 'pt.';
    case LiquidUnit.Quart:
      return 'qt.';
    case LiquidUnit.Gallon:
      return 'gal.';
    case LiquidUnit.Milliliter:
      return 'ml';
    case LiquidUnit.Liter:
      return 'l';
    case LiquidUnit.Kiloliter:
      return 'kl';
    case TemperatureUnit.Fahrenheit:
      return '°F';
    case TemperatureUnit.Celsius:
      return '°C';
    case HumidityUnit.GramsPerCubicMeter:
      return 'g/m³';
    case HumidityUnit.GramsPerKilogram:
      return 'g/kg';
    case HumidityUnit.Percentage:
      return '%';
    case ElectricalConductivityUnit.SiemensPerSquareMeterPerMole:
      return 'Sm²/mol';
    case ElectricalConductivityUnit.MillisiemensPerMeter:
      return 'mS/m';
    case ElectricalConductivityUnit.MillisiemensPerCentimeter:
      return 'mS/cm';
    default: 
      return '?';
  }
}