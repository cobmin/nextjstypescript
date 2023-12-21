import React, { useState } from 'react';
import Container from './container';
import cn from 'classnames';

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
      className={cn('border-b relative', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
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
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                NFT Toolkit
              </a>
              .
            </>
          )}
          <button
            onClick={() => setShowAlert(false)}
            className="absolute top-0 right-0 p-2"
          >
            &#215;
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
