import React, { Component } from 'react';
import { FormFilds, ICharacter } from '../../types';
import './forms.css';

const MAX_IMAGE_SIZE = 1048576;
interface FormProps {
  colback: (a: ICharacter) => void;
}

class Forms extends Component<FormProps> {
  flag: Record<string, boolean>; // красные подсказки
  isStatus: boolean;
  isSumbit: boolean; // доступность кнопки
  isChangeForm: boolean; // первое изменений формы
  isImgSize: boolean; // размер изображеня
  constructor(props: FormProps) {
    super(props);
    this.flag = {
      isName: false,
      thisDate: false,
      isImg: false,
      isCheck: false,
    };
    this.isStatus = false;
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
    if (form.status.value === '') {
      this.isStatus = true;
      isChangeState = true;
    }
    if (form.img.value === '') {
      this.flag.isImg = true;
      isChangeState = true;
    } else {
      this.checkSizeImage(form.img.files);
      isChangeState = this.isImgSize;
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
      // фома заполнена
      const curFiles = form.img.files;
      const imgUrl = curFiles ? URL.createObjectURL(curFiles[0]) : ' ';
      const newCharacter = {
        name: form.name.value,
        status: form.status.value,
        image: imgUrl,
        species: form.switch.checked ? 'Human' : 'Alien',
      };
      this.props.colback(newCharacter);
      form.reset();
      this.resetFlags();
    }
  }
  resetFlags() {
    this.flag = {
      isName: false,
      thisDate: false,
      isImg: false,
      isCheck: false,
    };
    this.isStatus = false;
    this.isChangeForm = false;
    this.isSumbit = true;
    this.isImgSize = false;
    this.forceUpdate();
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
      this.isSumbit = false;
    } else {
      this.isSumbit =
        this.isStatus ||
        this.flag.isName ||
        this.flag.isDate ||
        this.flag.isImg ||
        this.isImgSize ||
        this.flag.isCheck;
    }
    this.forceUpdate();
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>, keyFlag: string) {
    if (!this.isChangeForm) {
      this.isSumbit = false;
      this.forceUpdate();
      return;
    }
    if (keyFlag === 'isCheck') {
      this.flag[keyFlag] = !e.target.checked;
    } else {
      this.flag[keyFlag] = !(e.target.value !== '');
    }
    if (keyFlag === 'isImg') {
      const curFiles = e.target.files;
      this.checkSizeImage(curFiles);
    }
    this.isFirstActivation();
  }

  handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.isStatus = !(e.target.value !== '');
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
          <label className="form_label">Status:</label>
          <select
            className="form_input"
            name="status"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.handleStatusChange(e)}
          >
            <option> </option>
            <option>Alive</option>
            <option>Dead</option>
            <option>unknown</option>
          </select>
          {this.isStatus && <div style={{ color: 'red' }}>Select status</div>}
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
