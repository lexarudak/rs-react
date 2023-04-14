import React, { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InnerText from '../../../base/enums/innerText';
import { showPopupForSeconds } from '../../../base/helpers';
import { AppFormData } from '../../../base/models';
import Banner from '../../../components/banner/banner';
import InputError from '../../../components/inputs/inputError/inputError';
import Popup from '../../../components/popup/popup';
import { useAppDispatch } from '../../../hooks/hooks';
import { createCard } from '../../../store/form/formSlice';
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
  const dispatch = useAppDispatch();

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
    dispatch(createCard({ name, date, select, checkbox, radio, imageSrc: imageSrc, id }));
    showPopupForSeconds(setIsPopupShow, 1);
    reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.border}>
          <legend className={styles.title}>Create form card</legend>
          <TextInput config={nameConfig} register={reg.name} />
          <InputError err={errors[nameConfig.registerName]?.message} />
          <DateInput config={dateConfig} register={reg.date} />
          <InputError err={errors[dateConfig.registerName]?.message} />
          <SelectInput config={selectConfig} register={reg.select} />
          <InputError err={errors[selectConfig.registerName]?.message} />
          <CheckboxInput config={checkboxConfig} register={reg.checkbox} />
          <InputError err={errors[checkboxConfig.registerName]?.message} />
          <RadioInput config={radioConfig} register={reg.radio} />
          <InputError err={errors[radioConfig.registerName]?.message} />
          <ImageInput config={imageConfig} register={reg.image} />
          <InputError err={errors[imageConfig.registerName]?.message} />
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
