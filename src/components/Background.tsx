import type { FunctionComponent } from 'react';

export const Background: FunctionComponent = () => {
  return (
    <div className="background fixed -z-10 overflow-hidden top-0 bottom-0 left-0 right-0">
      <ul className="circles">
        {Array.from({ length: 10 }, (_, i) => i).map((i) => (
          <li key={i} />
        ))}
      </ul>
    </div>
  );
};
