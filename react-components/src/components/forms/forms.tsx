import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { IFormFilds, TActionReducer, ICharacter, TGlobalState } from '../../types';
import './forms.css';

import { getFormFilds } from '../../redux/actions';

const MAX_IMAGE_SIZE = 1048576;
interface FormProps {
  callback: (a: ICharacter) => void;
  getFormFilds: (formFilds: IFormFilds) => TActionReducer;
  formFilds: IFormFilds;
}

const Forms = (prop: FormProps) => {
  const { formFilds, callback, getFormFilds } = prop;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: formFilds, // значения из стейта
  });

  const [isDisabled, setDisabled] = useState(true); // доступ кнопки
  const [imgError, setImgError] = useState('');

  useEffect(() => {
    return () => {
      getFormFilds(watch());
    };
  }, []); // выполнить при размонтировании

  useEffect(() => {
    setDisabled(!(isDirty && Object.keys(errors).length === 0));
  }); // доступность кнопки

  const onFormSubmit = (data: IFormFilds) => {
    const curFiles = data.img;
    const imgUrl = curFiles ? URL.createObjectURL(curFiles[0]) : ' ';
    const newCharacter = {
      name: data.name,
      status: data.status,
      image: imgUrl,
      species: data.switch ? 'Human' : 'Alien',
    };
    callback(newCharacter);
    reset();
    getFormFilds({ name: '', date: '', status: '', switch: false, check: false }); // сброс стейта формы после самбита
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="forms" id="form">
      <h3 className="form_title">Create your characters</h3>
      <div className="form_group">
        <label className="form_label">Name: </label>
        <input
          className="form_input"
          type="text"
          {...register('name', {
            required: true,
          })}
        />
        {errors.name && <div style={{ color: 'red' }}>Enter character name</div>}
      </div>

      <div className="form_group">
        <label className="form_label">Date created: </label>
        <input className="form_input" type="date" {...register('date', { required: true })} />
        {errors.date && <div style={{ color: 'red' }}>Select date</div>}
      </div>

      <div className="form_group">
        <label className="form_label">Status:</label>
        <select className="form_input" {...register('status', { required: true })}>
          <option> </option>
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>
        {errors.status && <div style={{ color: 'red' }}>Select status</div>}
      </div>
      <div className="form_group">
        <label className="form_label">Link to the character{"'"}s image</label>
        <input
          className="form_file"
          type="file"
          accept="image/*"
          {...register('img', {
            validate: (curFiles: FileList | undefined) => {
              if (curFiles === undefined) return;
              if (curFiles.length > 0) {
                const file = curFiles[0];
                if (file.size < MAX_IMAGE_SIZE) {
                  return true;
                } else {
                  setImgError('Maximum image size 1 Mb');
                  return false;
                }
              } else {
                setImgError('Upload image');
                return false;
              }
            },
          })}
        />
        {errors.img && <div style={{ color: 'red' }}>{imgError}</div>}
      </div>

      <div className="form_group">
        <span className="form_label">Is it Human?</span>
        <label className="switch">
          <input type="checkbox" {...register('switch')} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="form_group">
        <label className="form_label">I consent to the publication</label>
        <input className="input-text" type="checkbox" {...register('check', { required: true })} />
        {errors.check && <div style={{ color: 'red' }}>Сonfirm consent</div>}
      </div>

      <input className="form_button" type="submit" value="Submit" disabled={isDisabled} />
    </form>
  );
};

const mapStateToProps = (state: TGlobalState) => {
  return {
    formFilds: state.form.formFilds,
  };
};

export default connect(mapStateToProps, {
  getFormFilds,
})(Forms);
