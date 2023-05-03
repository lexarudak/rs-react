import React, { Fragment, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getId, showPopupForSeconds } from 'utils';
import { InnerText, AppFormData } from 'models';
import { useAppDispatch } from 'hooks';
import { createCard } from 'store';
import {
  Popup,
  OuterBanner,
  APP_FORM_CONFIG,
  CheckboxInput,
  DateInput,
  ImageInput,
  InputError,
  RadioInput,
  SelectInput,
  TextInput,
} from 'components';
import styles from './AppForm.module.scss';

function AppForm() {
  const { TEXT, DATE, SELECT, CHECKBOX, RADIO, IMAGE } = APP_FORM_CONFIG;
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
    text: register(TEXT.REG_NAME, TEXT.REG_OPT),
    date: register(DATE.REG_NAME, DATE.REG_OPT),
    select: register(SELECT.REG_NAME, SELECT.REG_OPT),
    checkbox: register(CHECKBOX.REG_NAME, CHECKBOX.REG_OPT),
    radio: register(RADIO.REG_NAME, RADIO.REG_OPT),
    image: register(IMAGE.REG_NAME, IMAGE.REG_OPT),
  };

  const onSubmit: SubmitHandler<AppFormData> = ({ name, date, select, checkbox, radio, image }) => {
    const id = getId();
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
          <TextInput config={TEXT} register={reg.text} />
          <InputError err={errors[TEXT.REG_NAME]?.message} />
          <DateInput config={DATE} register={reg.date} />
          <InputError err={errors[DATE.REG_NAME]?.message} />
          <SelectInput config={SELECT} register={reg.select} />
          <InputError err={errors[SELECT.REG_NAME]?.message} />
          <CheckboxInput config={CHECKBOX} register={reg.checkbox} />
          <InputError err={errors[CHECKBOX.REG_NAME]?.message} />
          <RadioInput config={RADIO} register={reg.radio} />
          <InputError err={errors[RADIO.REG_NAME]?.message} />
          <ImageInput config={IMAGE} register={reg.image} />
          <InputError err={errors[IMAGE.REG_NAME]?.message} />
          <input type="submit" className={styles.button}></input>
        </fieldset>
      </form>
      <Popup isShow={isPopupShow}>
        <OuterBanner text={InnerText.cardCreated} />
      </Popup>
    </Fragment>
  );
}

export default AppForm;
