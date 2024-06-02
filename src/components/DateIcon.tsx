import type { FunctionComponent } from 'react';

export const DateIcon: FunctionComponent<{
  value: number;
  unit: 'days' | 'hours' | 'min';
}> = ({ unit, value }) => {
  return (
    <div className="flex flex-row items-center font-['Cheri_Liney']">
      <div className="text-4xl">{value}</div>
      <div className="px-1 flex flex-col items-center">
        <div
          className="date-icon text-4xl text-pink w-fit pl-2 pt-6"
          data-text="days"
        >
          /&nbsp;
        </div>
        <div className="text-white">{unit}</div>
      </div>
    </div>
  );
};
