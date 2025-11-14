import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Button } from '../ui/button';

function Test() {
  // we need to keep a reference of the toastId to be able to update it
  const toastId = React.useRef<ReturnType<typeof toast> | null>(null);

  function handleUpload() {
    const myData = new FormData();
    // Example: append fields or files to myData as needed
    // myData.append('file', fileInput.files[0]);

    axios.request({
      method: "post",
      url: "/foobar",
      data: myData,
      onUploadProgress: p => {
        const total = typeof p.total === 'number' ? p.total : 0;
        const progress = total > 0 ? p.loaded / total : 0;

        // check if we already displayed a toast
        if (toastId.current === null) {
          toastId.current = toast('Upload in Progress', { progress });
        } else {
          toast.update(toastId.current, { progress });
        }
      }
    }).then(() => {
      // Upload is done! 
      // The remaining progress bar will be filled up
      // The toast will be closed when the transition end
      if (toastId.current !== null) {
        toast.done(toastId.current);
      }
    })
  }

  return (
    <div className='text-center '>
      <Button onClick={handleUpload}>Upload something</Button>
    </div>
  )
}

export default Test;