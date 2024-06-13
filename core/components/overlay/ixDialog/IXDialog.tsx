'use client';

import Button from '@mui/material/Button';
import { Dialog, DialogProps } from 'primereact/dialog';
import * as React from 'react';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';

export const IXDialog = forwardRef(function IXDialog(
  {
    visibility = false,
    setVisibility,
    dialogType = 'defalut',
    content,
  }: {
    visibility: boolean;
    setVisibility: Function;
    dialogType?: string;
    content: JSX.Element;
  },
  ref: any
) {
  const [visible, setVisible] = useState<boolean>(visibility);
  const [type, setType] = useState<string>(dialogType);

  const methods = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues, ...parameters?.initialValues },
  });

  const DialogHeader = (options: any) => {
    return (
      <div className="flex flex-row justify-content-start w-full">
        <div className="text-right w-full"></div>
      </div>
    );
  };

  const onHide = () => {
    if (!visibility) return;
    setVisibility(false);
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
          GetCurrentImageIndex(): number {
            return currentImageIndex;
          },
          SetCurrentImageIndex(index: number) {
            setCurrentImageIndex(index);
          },
          /*   SlideFirst,
                SlideLast,
                SlideNext,
                SlidePrev, */
        },
      };
      return customProps;
    },
    []
  );

  const DialogFooter = (dialogProps: DialogProps) => {
    return (
      <div className="col-12  p-0">
        <div className="flex justify-content-end medium_text bg_darkBlue">
          <Button
            type="submit"
            onClick={() => onYes()}
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
    <Dialog
      ref={ref}
      className="w-max  md:w-30rem sm:w-30rem"
      contentClassName="px-2"
      closable
      header="Header"
      visible={visibility}
      //style={{ width: '50vw' }}
      position={'center'}
      //header={(options) => DialogHeader(options)}
      footer={(props: DialogProps) => DialogFooter(props)}
      resizable
      onHide={onHide}
    >
      <form method={} className="h-full w-full">
        {content}
      </form>
    </Dialog>
  );
});

export default IXDialog;
