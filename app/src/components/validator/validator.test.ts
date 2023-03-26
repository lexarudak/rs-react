import { FormState } from 'base/types';
import Validator from './validator';
const validator = new Validator();

describe('validator.isValueNotEmpty tests', () => {
  test('undefined test', () => {
    expect(validator.isValueNotEmpty(undefined)).toBeFalsy();
  });

  test('empty test', () => {
    expect(validator.isValueNotEmpty('')).toBeFalsy();
  });

  test('not empty test', () => {
    expect(validator.isValueNotEmpty('undefined')).toBeTruthy();
  });
});

describe('isValueNotEmpty tests', () => {
  test('validator.isValueLonger test', () => {
    expect(validator.isValueLonger(0, undefined)).toBeFalsy();
  });

  test('equal test', () => {
    expect(validator.isValueLonger(2, '22')).toBeFalsy();
    expect(validator.isValueLonger(1, '1')).toBeFalsy();
  });

  test('minus test', () => {
    expect(validator.isValueLonger(-1, '1')).toBeTruthy();
  });

  test('trim test', () => {
    expect(validator.isValueLonger(2, ' 1 ')).toBeFalsy();
  });
});

describe('validator.isDateValid tests', () => {
  test('undefined test', () => {
    expect(validator.isDateValid(undefined, '01-01-2001', '01-01-2002')).toBeFalsy();
  });

  test('incorrect date format test', () => {
    expect(validator.isDateValid('012001', '01-01-2000', '01-01-2002')).toBeFalsy();
  });

  test('false test', () => {
    expect(validator.isDateValid('01-01-2000', '01-02-2000', '01-01-2002')).toBeFalsy();
  });

  test('true test', () => {
    expect(validator.isDateValid('12-31-2002', '01-01-2000', '12-31-2002')).toBeTruthy();
  });
});

describe('validator.isMultipleInputDone tests', () => {
  test('undefined test', () => {
    expect(validator.isSelectValid(undefined)).toBeFalsy();
  });

  test('0 test', () => {
    expect(validator.isSelectValid('0')).toBeFalsy();
  });

  test('true test', () => {
    expect(validator.isSelectValid('1')).toBeTruthy();
  });

  test('text test', () => {
    expect(validator.isSelectValid('a')).toBeFalsy();
  });

  test('empty test', () => {
    expect(validator.isSelectValid('')).toBeFalsy();
  });
});

describe('validator.isMultipleInputDone tests', () => {
  test('undefined test', () => {
    expect(validator.isMultipleInputDone([undefined, true])).toBeFalsy();
  });

  test('empty test', () => {
    expect(validator.isMultipleInputDone([])).toBeFalsy();
  });

  test('one true test', () => {
    expect(validator.isMultipleInputDone([true])).toBeTruthy();
  });

  test('true test', () => {
    expect(validator.isMultipleInputDone([true, false])).toBeTruthy();
  });

  test('false test', () => {
    expect(validator.isMultipleInputDone([false, false])).toBeFalsy();
  });
});

describe('validator.isMultipleInputDone tests', () => {
  const formState: FormState = {
    isCheckboxValid: true,
    isDateValid: true,
    isImageValid: true,
    isNameValid: true,
    isRadioValid: true,
    isSelectValid: true,
  };

  test('true test', () => {
    expect(validator.isFormValid(formState)).toBeTruthy();
  });

  test('false test', () => {
    const falseForm = { ...formState };
    falseForm.isDateValid = false;
    expect(validator.isFormValid(falseForm)).toBeFalsy();
  });

  test('all false test', () => {
    const allFalseState: FormState = {
      isCheckboxValid: false,
      isDateValid: false,
      isImageValid: false,
      isNameValid: false,
      isRadioValid: false,
      isSelectValid: false,
    };
    expect(validator.isFormValid(allFalseState)).toBeFalsy();
  });
});
