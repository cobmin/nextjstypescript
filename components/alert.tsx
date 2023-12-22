import React, { useState } from 'react';
import Container from './container';
import cn from 'classnames';
import { GiCorn } from 'react-icons/gi'; // Make sure to install react-icons

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) {
    return null;
  }

  return (
    <div
      className={cn(
        'border-b-4 relative transition-all duration-500 ease-in-out',
        {
          'bg-yellow-400 border-yellow-600 text-neutral-900': preview,
          'bg-green-400 border-green-600 text-neutral-900': !preview,
        }
      )}
    >
      <Container>
        <div className="py-2 text-center text-sm flex justify-between items-center">
          <GiCorn className="animate-bounce mr-2" size={24} />
          <div className="flex-grow">
            {preview ? (
              <>
                This page is a preview.{' '}
                <a
                  href="/api/exit-preview"
                  className="underline font-bold hover:text-yellow-600 duration-200 transition-colors"
                >
                  Click here
                </a>{' '}
                to exit preview mode.
              </>
            ) : (
              <>
                Get started with my{' '}
                <a
                  href={`https://maizehelps.art/`}
                  className="underline font-bold hover:text-green-800 duration-200 transition-colors"
                >
                  NFT Toolkit
                </a>
                .
              </>
            )}
          </div>
          <button
            onClick={() => setShowAlert(false)}
            className="absolute top-0 right-0 p-2 text-neutral-900 hover:text-neutral-500 transition-colors duration-200"
          >
            &#215;
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
