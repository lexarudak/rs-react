import { AppFormData, AppFormProps } from 'base/types';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CheckboxInput from '../../inputs/checkboxInput/checkboxInput';
import DateInput from '../../inputs/dateInput/dateInput';
import ImageInput from '../../inputs/imageInput/imageInput';
import RadioInput from '../../inputs/radioInput/radioInput';
import SelectInput from '../../inputs/selectInput/selectInput';
import TextInput from '../../inputs/textInput/textInput';
import AppFormBlock from './appFormBlock/appFormBlock';
import {
  checkboxConfig,
  dateConfig,
  imageConfig,
  nameConfig,
  radioConfig,
  selectConfig,
} from './appFormConfig/appFormConfig';
import styles from './appForm.module.scss';

function AppForm({ showPopupForSeconds, addNewCard }: AppFormProps) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AppFormData>({
    reValidateMode: 'onSubmit',
  });

  const registers = {
    name: register(nameConfig.registerName, nameConfig.registerOptions),
    date: register(dateConfig.registerName, dateConfig.registerOptions),
    select: register(selectConfig.registerName, selectConfig.registerOptions),
    checkbox: register(checkboxConfig.registerName, checkboxConfig.registerOptions),
    radio: register(radioConfig.registerName, radioConfig.registerOptions),
    image: register(imageConfig.registerName, imageConfig.registerOptions),
  };

  const onSubmit: SubmitHandler<AppFormData> = ({ name, date, select, checkbox, radio, image }) => {
    addNewCard({ name, date, select, checkbox, radio, imageSrc: URL.createObjectURL(image[0]) });
    showPopupForSeconds(1.5);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.border}>
        <legend className={styles.title}>Create form card</legend>
        <AppFormBlock
          inputBlock={<TextInput config={nameConfig} register={registers.name} />}
          err={errors[nameConfig.registerName]}
        />
        <AppFormBlock
          inputBlock={<DateInput config={dateConfig} register={registers.date} />}
          err={errors[dateConfig.registerName]}
        />
        <AppFormBlock
          inputBlock={<SelectInput config={selectConfig} register={registers.select} />}
          err={errors[selectConfig.registerName]}
        />
        <AppFormBlock
          inputBlock={<CheckboxInput config={checkboxConfig} register={registers.checkbox} />}
          err={errors[checkboxConfig.registerName]}
        />
        <AppFormBlock
          inputBlock={<RadioInput config={radioConfig} register={registers.radio} />}
          err={errors[radioConfig.registerName]}
        />
        <AppFormBlock
          inputBlock={<ImageInput config={imageConfig} register={registers.image} />}
          err={errors[imageConfig.registerName]}
        />
        <input type="submit" className={styles.button}></input>
      </fieldset>
    </form>
  );
}

export default AppForm;
