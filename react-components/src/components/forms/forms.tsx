import React, { Component } from 'react';
import { FormFilds } from '../../types';
import './forms.css';

const MAX_IMAGE_SIZE = 1048576;
class Forms extends Component {
  flag: Record<string, boolean>; // красные подсказки
  isGender: boolean;
  isSumbit: boolean; // доступность кнопки
  isChangeForm: boolean; // первое изменений формы
  isImgSize: boolean; // размер изображеня
  constructor(props: Record<string, never>) {
    super(props);
    this.flag = {
      isName: false,
      thisDate: false,
      isImg: false,
      isCheck: false,
    };
    this.isGender = false;
    this.isChangeForm = false;
    this.isSumbit = true;
    this.isImgSize = false;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement & FormFilds>) {
    event.preventDefault();
    if (!this.isChangeForm) this.isChangeForm = true;
    const form = event.currentTarget;
    let isChangeState = false;
    if (form.name.value === '') {
      this.flag.isName = true;
      isChangeState = true;
    }
    if (form.date.value === '') {
      this.flag.isDate = true;
      isChangeState = true;
    }
    if (form.gender.value === '') {
      this.isGender = true;
      isChangeState = true;
    }
    if (form.img.value === '') {
      this.flag.isImg = true;
      isChangeState = true;
    } else {
      this.checkSizeImage(form.img.files);
      isChangeState = true;
    }
    if (form.check.checked === false) {
      this.flag.isCheck = true;
      isChangeState = true;
    }
    if (isChangeState) {
      this.isSumbit = true;
      this.forceUpdate();
    } else {
      this.isSumbit = false;
      console.log('фома заполнена');
    }
  }
  checkSizeImage(curFiles: FileList | null) {
    if (curFiles) {
      const file = curFiles[0];
      if (file.size > MAX_IMAGE_SIZE) {
        this.isImgSize = true;
      } else {
        this.isImgSize = false;
      }
    }
  }
  isFirstActivation() {
    if (!this.isChangeForm) {
      // this.isChangeForm = true;
      this.isSumbit = false;
    } else {
      this.isSumbit =
        this.isGender ||
        this.flag.isName ||
        this.flag.isDate ||
        this.flag.isImg ||
        this.isImgSize ||
        this.flag.isCheck;
    }
    this.forceUpdate();
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>, keyFlag: string) {
    if (!this.isChangeForm) return;
    if (keyFlag === 'isCheck') {
      this.flag[keyFlag] = !e.target.checked;
    } else {
      this.flag[keyFlag] = !(e.target.value !== '');
    }
    if (keyFlag === 'isImg') {
      const curFiles = e.target.files;
      this.checkSizeImage(curFiles);
      /* const file = e.target.files;
      if (curFiles) {
        console.log('curFiles', curFiles);
        const file = curFiles[0];
        if (file.size > 1048576) {
          console.log('не грузите слона');
        } else {
          console.log(file.size);
          const url = URL.createObjectURL(file);
          console.log(url);
        }
      }*/
    }
    this.isFirstActivation();
  }

  handleGanderChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.isGender = !(e.target.value !== '');
    this.isFirstActivation();
  }

  render() {
    return (
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement & FormFilds>) => {
          this.handleSubmit(e);
        }}
        className="forms"
      >
        <h3 className="form_title">Create your characters</h3>
        <div className="form_group">
          <label className="form_label">Name: </label>
          <input
            className="form_input"
            type="text"
            name="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isName')
            }
          />
          {this.flag.isName && <div style={{ color: 'red' }}>Enter character name</div>}
        </div>
        <div className="form_group">
          <label className="form_label">Date created: </label>
          <input
            className="form_input"
            type="date"
            name="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isDate')
            }
          />
          {this.flag.isDate && <div style={{ color: 'red' }}>Select date</div>}
        </div>

        <div className="form_group">
          <label className="form_label">Gender:</label>
          <select
            className="form_input"
            name="gender"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.handleGanderChange(e)}
          >
            <option> </option>
            <option>Female</option>
            <option>Male</option>
            <option>Genderless</option>
            <option>unknown</option>
          </select>
          {this.isGender && <div style={{ color: 'red' }}>Select gender</div>}
        </div>
        <div className="form_group">
          <label className="form_label">Link to the character{"'"}s image</label>
          <input
            className="form_file"
            type="file"
            name="img"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isImg')
            }
          />
          {this.flag.isImg && <div style={{ color: 'red' }}>Upload image</div>}
          {this.isImgSize && <div style={{ color: 'red' }}>Maximum image size 1 Mb</div>}
        </div>

        <div className="form_group">
          <span className="form_label">Is it Human?</span>
          <label className="switch">
            <input type="checkbox" name="switch" onChange={() => this.isFirstActivation()} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="form_group">
          <label className="form_label">I consent to the publication</label>
          <input
            className="input-text"
            type="checkbox"
            name="check"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isCheck')
            }
          />
          {this.flag.isCheck && <div style={{ color: 'red' }}>Сonfirm consent</div>}
        </div>

        <input className="form_button" type="submit" value="Submit" disabled={this.isSumbit} />
      </form>
    );
  }
}
export default Forms;
