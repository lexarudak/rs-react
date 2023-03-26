import { FormState } from 'base/types';

class Validator {
  public isValueNotEmpty(value: string | undefined): boolean {
    return value ? value.trim() !== '' : false;
  }

  public isValueLonger(longerThan: number, value: string | undefined): boolean {
    return value ? value.trim().length > longerThan : false;
  }

  public isSelectValid(selectedIndex: string | undefined): boolean {
    return Number(selectedIndex) > 0;
  }

  public isMultipleInputDone(checkedArr: (boolean | undefined)[]) {
    if (checkedArr.includes(undefined)) return false;
    let answer = false;
    checkedArr.forEach((checked) => {
      if (checked) answer = true;
    });
    return answer;
  }

  public isFormValid(newState: FormState) {
    let answer = true;
    Object.values(newState).forEach((state) => {
      if (!state) answer = false;
    });
    return answer;
  }

  public isDateValid(date: string | undefined, from: string, to: string) {
    if (!date) return false;
    return Date.parse(date) >= Date.parse(from) && Date.parse(date) <= Date.parse(to);
  }
}

export default Validator;
