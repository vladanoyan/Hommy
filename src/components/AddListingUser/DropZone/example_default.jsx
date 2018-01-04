import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { Field, reduxForm } from 'redux-form';

class ImageUploadClass extends React.Component {
  constructor(props) {
    super(props);
    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      autoProcessQueue: true,
      maxFiles: 10,
      acceptedFiles: 'image/jpeg,image/png,image/gif',
    };

    this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler',
    };
    // this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
    // Simple callbacks work too, of course
    // this.callback = () => console.log('Hello!');
    //
    // this.success = file => console.log('uploaded', file);
    //
    // this.removedfile = file => console.log('removing...', file);
    this.dropzone = null;
  }
  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: (dz => { this.dropzone = dz; }),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile,
      maxfilesexceeded: this.maxfilesexceeded,
    };

    const renderDropzoneInput = (field) => {
      return (
        <div>
          <DropzoneComponent
            config={config}
            eventHandlers={eventHandlers}
            djsConfig={djsConfig}
            name={field.photo}
            onDrop={(filesToUpload) => field.input.onChange(filesToUpload)}
            onDragOver={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          />
        </div>
      );
    };

    return (
      <div>
        <Field
          name="photoDropZone"
          component={renderDropzoneInput}
        />
      </div>
    );
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ImageUploadClass);

