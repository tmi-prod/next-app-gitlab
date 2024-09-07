import { PrimeReactPTOptions } from 'primereact/api';
import { classNames } from 'primereact/utils';

//My Design System with Tailwind
export const MyDesignSystem: PrimeReactPTOptions = {
  inputtext: {
    root: ({ props, context }: { props: any; context: any }) => ({
      className: classNames(
        'm-0',
        'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
        {
          'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
            !context.disabled,
          'opacity-60 select-none pointer-events-none cursor-default':
            context.disabled,
        },
        {
          'text-lg px-4 py-4': props.size == 'large',
          'text-xs px-2 py-2': props.size == 'small',
          'p-3 text-base': props.size == null,
        }
      ),
    }),
  },
  panel: {
    header: ({ props }: { props: any }) => ({
      className: classNames(
        'flex items-center justify-between', // flex and alignments
        'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
        'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
        { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
      ),
    }),
    title: 'leading-none font-bold' as any,
    toggler: {
      className: classNames(
        'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
        'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
        'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
      ),
    },
    togglerIcon: 'inline-block' as any,
    content: {
      className: classNames(
        'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
        'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
      ),
    },
    //transition: TRANSITIONS.toggleable,
  },
};

export default MyDesignSystem;
