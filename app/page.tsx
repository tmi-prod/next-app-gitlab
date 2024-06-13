'use client';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

export default function App() {
  const [serachValue, setSerachValue] = useState<string>('');

  const [hideDialog, setHideDialog] = useState<boolean>(true);

  const onButtonClickEvent = () => {};

  const DialogHeader = (options: any) => {
    return (
      <div className="flex flex-row justify-content-start w-full">
        <div className="text-right w-full">
          <div className="p-input-icon-left w-full">
            <i className="pi pi-search"></i>
            <InputText
              type="search"
              value={serachValue}
              onChange={(e) => setSerachValue}
              placeholder="Search"
              className="w-full h-30"
            />
          </div>
        </div>
      </div>
    );
  };

  const OnSubmit = () => {};

  const DialogFooter = (options: any) => {
    return (
      <div className="col-12  p-0">
        <div className="flex justify-content-end medium_text bg_darkBlue">
          <Button
            type="submit"
            onClick={() => OnSubmit()}
            className="m-0 mr-2"
            disabled={false}
            value={'Ok'}
          ></Button>
          <Button type="button" onClick={() => {}} value={'Cancel'} />
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full p-1 m-1 align-items-center justify-content-center bg-surface">
      <Button
        label="Secondary"
        severity="secondary"
        raised
        size="small"
        onClick={onButtonClickEvent}
      />
      <Dialog
        className="w-max  md:w-30rem sm:w-30rem "
        contentClassName="px-2"
        closable
        visible
        position={'center'}
        //header={(options) => DialogHeader(options)}
        //footer={(options) => DialogFooter(options)}
        onHide={() => setHideDialog(true)}
        resizable
      >
        <form className="h-full w-full"></form>
      </Dialog>
    </div>
  );
}
