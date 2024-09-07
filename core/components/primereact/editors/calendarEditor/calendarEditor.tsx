import useDebounce from '@/core/hooks/useDebounce';
import { Calendar, CalendarProps } from 'primereact/calendar';
import {
  forwardRef,
  MutableRefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const ClanedarEditor = forwardRef(function ClanedarEditor(
  props: CalendarProps,
  ref
) {
  // const [localValue, setLocalValue] = useState(value);
  const inputRef: MutableRefObject<Calendar | null | undefined> =
    useRef(undefined);
  const [value, setValue] = useState<any>(props?.value);

  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 1000);

  const isValid = () => {
    console.log('cccccccccccc');
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef?.current?.focus();
        },
        getInput() {
          inputRef?.current?.getInput();
        },
      };
    },
    []
  );

  return (
    <Calendar
      ref={inputRef}
      className="p-invalid w-full"
      value={value}
      onChange={(e) => debounced(e.target.value)}
      required={true}
      dateFormat="dd/mm/yy"
      mask="99/99/9999"
      showOnFocus={false}
      id="basic"
      locale="en"
      /*  parseDateTime={(d) => {
            console.log('dateFormat', d);
            return new Date(d);
          }} */
      formatDateTime={(d) => {
        console.log('formatDateTime', d);
        let formatDate = `${d.getDate()}/${
          d.getMonth() + 1
        }/${d.getFullYear()}`;
        return formatDate;
      }}
      {...props}
    />
  );
});

export default ClanedarEditor;
