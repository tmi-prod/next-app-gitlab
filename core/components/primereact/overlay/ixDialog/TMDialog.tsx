'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { Dialog, DialogProps } from 'primereact/dialog';
import * as React from 'react';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';
import './TMDialogStyle.scss';

export const IXDialog = forwardRef(function IXDialog(
  {
    visibility = false,
    setVisibility,
    dialogType = 'defalut',
    headerOptions,
    content,
    methods,
  }: {
    visibility: boolean;
    setVisibility: Function;
    dialogType?: string;
    headerOptions?: DialogProps;
    content: JSX.Element;
    methods?: any;
  },
  ref: any
) {
  const [visible, setVisible] = useState<boolean>(visibility || false);
  const [type, setType] = useState<string>(dialogType);

  const onHide = () => {
    setVisibility(false);
    setVisible(false);
  };

  const onYes = () => {
    onHide();
  };

  useEffect(() => {
    if (ref?.current) {
      ref.current.onYes = onYes;
    }
  }, [ref]);

  //? https://react.dev/reference/react/forwardRef
  useImperativeHandle(
    ref,
    () => {
      let customProps = {
        Properties: {
          IsLoading: true,
        },
        Methods: {
          IsVisible(): any {
            return visible;
          },
          onHide: () => onHide(),
          onYes: () => onYes(),
        },
      };
      return customProps;
    },
    []
  );

  const DialogHeader = (options: DialogProps) => {
    return <div className="col-12 p-0 m-0">{options.children}</div>;
  };

  const DialogFooter = (dialogProps: DialogProps) => {
    return (
      <div className="tm-dialog-footer">
        <Button
          type="submit"
          onClick={() => onYes()}
          className="m-0 mr-2"
          disabled={false}
          value={'Ok'}
        ></Button>
        <Button type="button" onClick={() => onHide()} value={'Cancel'} />
      </div>
    );
  };

  return (
    <Dialog
      id="tm-dialog"
      ref={ref}
      //className="dialog"
      //contentClassName="tm-dialog-content"
      // headerClassName="tm-dialog-header"
      closable
      visible={visibility}
      //style={{ width: '50vw' }}
      position={'center'}
      //header={(options) => DialogHeader(options)}
      header="Header"
      footer={(props: DialogProps) => DialogFooter(props)}
      resizable
      onHide={onHide}
    >
      <FormProvider {...methods}>
        <form className="h-full w-full">{content}</form>
      </FormProvider>
    </Dialog>
  );
});

export default IXDialog;
