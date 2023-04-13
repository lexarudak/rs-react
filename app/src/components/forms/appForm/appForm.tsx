import InnerText from '../../../base/enums/innerText';
import { AppFormData } from '../../../base/models';
import InputError from '../../../components/inputs/inputError/inputError';
import React, { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { showPopupForSeconds } from '../../../base/helpers';
import Banner from '../../../components/banner/banner';
import Popup from '../../../components/popup/popup';
import { useActions } from '../../../hooks/hooks';
import CheckboxInput from '../../inputs/checkboxInput/checkboxInput';
import DateInput from '../../inputs/dateInput/dateInput';
import ImageInput from '../../inputs/imageInput/imageInput';
import RadioInput from '../../inputs/radioInput/radioInput';
import SelectInput from '../../inputs/selectInput/selectInput';
import TextInput from '../../inputs/textInput/textInput';
import styles from './appForm.module.scss';
import {
  checkboxConfig,
  dateConfig,
  imageConfig,
  nameConfig,
  radioConfig,
  selectConfig,
} from './appFormConfig';

function AppForm() {
  const [isPopupShow, setIsPopupShow] = useState(false);
  const { createCard } = useActions();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AppFormData>({
    reValidateMode: 'onSubmit',
  });

  const reg = {
    name: register(nameConfig.registerName, nameConfig.registerOptions),
    date: register(dateConfig.registerName, dateConfig.registerOptions),
    select: register(selectConfig.registerName, selectConfig.registerOptions),
    checkbox: register(checkboxConfig.registerName, checkboxConfig.registerOptions),
    radio: register(radioConfig.registerName, radioConfig.registerOptions),
    image: register(imageConfig.registerName, imageConfig.registerOptions),
  };

  const onSubmit: SubmitHandler<AppFormData> = ({ name, date, select, checkbox, radio, image }) => {
    const id = Date.now().toString();
    const imageSrc = URL.createObjectURL(image[0]);
    createCard({ name, date, select, checkbox, radio, imageSrc: imageSrc, id });
    showPopupForSeconds(setIsPopupShow, 1);
    reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.border}>
          <legend className={styles.title}>Create form card</legend>
          <TextInput config={nameConfig} register={reg.name} />
          <InputError {...errors[nameConfig.registerName]} />
          <DateInput config={dateConfig} register={reg.date} />
          <InputError {...errors[dateConfig.registerName]} />
          <SelectInput config={selectConfig} register={reg.select} />
          <InputError {...errors[selectConfig.registerName]} />
          <CheckboxInput config={checkboxConfig} register={reg.checkbox} />
          <InputError {...errors[checkboxConfig.registerName]} />
          <RadioInput config={radioConfig} register={reg.radio} />
          <InputError {...errors[radioConfig.registerName]} />
          <ImageInput config={imageConfig} register={reg.image} />
          <InputError {...errors[imageConfig.registerName]} />
          <input type="submit" className={styles.button}></input>
        </fieldset>
      </form>
      <Popup isShow={isPopupShow}>
        <Banner text={InnerText.cardCreated} />
      </Popup>
    </Fragment>
  );
}

export default AppForm;
