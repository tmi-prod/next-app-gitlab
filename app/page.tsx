'use client';

import ClanedarEditor from '@/core/components/overlay/ixDialog/editor/calendarEditor/calendarEditor';
import IXDialog from '@/core/components/overlay/ixDialog/IXDialog';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const [date, setDate] = useState<any>('01/01/2020');
  const refDialog = useRef<Dialog>(null);

  const content = (
    <p className="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam
    </p>
  );

  useEffect(() => {
    console.log('refDialog', refDialog);
  }, [refDialog]);

  return (
    <div className="flex flex-column h-full w-full p-1 m-1 align-items-center justify-content-center bg-surface gap-2">
      <Button
        label="Secondary"
        severity="secondary"
        raised
        size="small"
        onClick={() => setVisible(true)}
      />

      <ClanedarEditor value={date} onChange={setDate} />

      <IXDialog
        visibility={visible}
        setVisibility={setVisible}
        content={content}
        ref={refDialog}
      />
    </div>
  );
}
