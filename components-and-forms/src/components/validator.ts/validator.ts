import { FormState } from 'base/types';

class Validator {
  public isValueNotEmpty(value: string | undefined): boolean {
    return value ? value.trim() !== '' : false;
  }

  public isValueLonger(longerThan: number, value: string | undefined): boolean {
    return value ? value.trim().length > longerThan : false;
  }

  public isSelectValid(selectedIndex: string | undefined): boolean {
    return selectedIndex !== '0' && selectedIndex !== undefined;
  }

  public isMultipleInputDone(arr: (HTMLInputElement | null)[]) {
    let answer = false;
    arr.forEach((input) => {
      if (input !== null) {
        if (input.checked) answer = true;
      }
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
}

export default Validator;
