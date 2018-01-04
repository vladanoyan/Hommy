import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file) => <li key={file.name}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
};

class ImageUploadClass extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={FILE_FIELD_NAME}>Files</label>
        <Field
          name={FILE_FIELD_NAME}
          component={renderDropzoneInput}
        />
      </div>
    );
  }
}
export default reduxForm({
  form: 'wizard',
})(ImageUploadClass);
