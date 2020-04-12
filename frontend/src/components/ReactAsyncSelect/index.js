import React, { useEffect, useState, useRef } from 'react';
import AsyncSelect from 'react-select/async';

import { useField } from '@rocketseat/unform';
import { Select } from './styles';

import api from '~/services/api';

export default function ReactAsyncSelect({ rota, title, name, ...rest }) {
  const { fieldName, registerField, defaultValue } = useField(name);

  const ref = useRef(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState();

  async function loadInputValue(id) {
    const { data } = await api.get(`${rota}?id=${id}`);
    setInputValue(data[0].name);
  }

  async function loadOptions() {
    const { data } = await api.get(`${rota}`, {
      params: {
        name: '',
      },
    });

    const response = [];
    data.forEach(option => {
      response.push({
        value: option.name,
        label: option.name,
        id: option.id,
      });
    });
    setOptions(response);
  }

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue);
      loadInputValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    loadOptions();
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
    });
    console.tron.log(selected);
  }, [ref.current, inputValue, selected]);

  const filterColors = input => {
    if (input) {
      return options.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return options;
  };

  const promiseOptions = input =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterColors(input));
      }, 1000);
    });

  return (
    <Select>
      <strong>{title}</strong>
      <AsyncSelect
        id={fieldName}
        name={fieldName}
        defaultOptions={options}
        loadOptions={promiseOptions}
        onChange={e => setSelected(e.id)}
        selected={selected}
        onInputChange={newValue => setInputValue(newValue)}
        inputValue={inputValue}
        placeholder="Realize um filtro ou selecione uma opção"
        ref={ref}
        {...rest}
      />
    </Select>
  );
}
