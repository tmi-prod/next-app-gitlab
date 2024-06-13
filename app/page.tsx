'use client';

import IXDialog from '@/core/components/overlay/ixDialog/IXDialog';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const refDialog = useRef<Dialog>(null);

  const content = (
    <p className="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );

  useEffect(() => {
    console.log('refDialog', refDialog);
  }, [refDialog]);

  return (
    <div className="flex h-full w-full p-1 m-1 align-items-center justify-content-center bg-surface">
      <Button
        label="Secondary"
        severity="secondary"
        raised
        size="small"
        onClick={() => setVisible(true)}
      />
      <IXDialog
        visibility={visible}
        setVisibility={setVisible}
        content={content}
        ref={refDialog}
      />
    </div>
  );
}
