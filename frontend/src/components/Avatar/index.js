import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function Avatar({ name, id }) {
  const { defaultValue, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(null);

  const ref = useRef();

  async function getFile(elm) {
    if (elm) {
      const { data } = await api.get('deliveryman', {
        params: {
          id,
        },
      });
      const response = data[0].DeliverymanFile;
      if (response) {
        setPreview(response.url);
      }
    }
  }

  useEffect(() => {
    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  useEffect(() => {
    getFile(id);
  }, []);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor={name}>
        <img
          src={
            preview || 'https://api.adorable.io/avatars/40/abott@adorable.png'
          }
          alt=""
        />
        <input
          type="file"
          id={name}
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
