import React, { useState, useRef, RefObject, useContext, useEffect } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StepChooseColumn from './StepChooseColumn';
import StepSelectSheet from './StepSelectSheet';
import StepEditAndExport from '../StepEditAndExport';
import { ExcelToTextContext } from '../Contexts/ExcelToTextContext';


export type StepComponentProps = {
  handlePreviousStep?: () => void
  handleNextStep?: () => void
}

const STEPS_NAMES = ['Select Sheet', 'Choose Column(s)', 'Edit & Export'];
const MODAL_PADDING = 24 // Default padding for modal-box from Daisy-ui (one-side)

const MultiStepModal = ({ dialogRef }: { dialogRef: RefObject<HTMLDialogElement> }) => {

  const { resetContext } = useContext(ExcelToTextContext)

  const [currentStep, setCurrentStep] = useState(0);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const headerRef = useRef<HTMLHeadingElement>(null); // Assuming this is your header or other elements

  const updateContentHeight = () => {
    if (!headerRef.current)
      return
    const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;
    setContentHeight(window.innerHeight - 100 - headerHeight - MODAL_PADDING * 2);
  };

  useEffect(() => {
    window.addEventListener('resize', updateContentHeight);
    updateContentHeight(); // Initial calculation

    return () => window.removeEventListener('resize', updateContentHeight);
  }, []);

  const nextStep = () => {
    if (currentStep < STEPS_NAMES.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeModal = () => {
    dialogRef.current!.close();
    resetContext()
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box text-left max-w-4xl flex flex-col" style={{ height: window.innerHeight - 100 }}>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 mt-4 top-1" tabIndex={7} onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} className='w-8 h-8' />
          </button>
        </form>

        {/* Flex container for step content */}
        <div className="flex-grow">
          <div className='w-full h-full'>
            <h3
              ref={headerRef}
              className="font-bold text-3xl pb-4 green-500 text-center">
              {STEPS_NAMES[currentStep]}
            </h3>
            {/* Render content based on currentStep */}
            <div style={{ height: contentHeight }}>
              {currentStep === 0 && <StepSelectSheet handleNextStep={nextStep} />}
              {currentStep === 1 && <StepChooseColumn handlePreviousStep={previousStep} handleNextStep={nextStep} />}
              {currentStep === 2 && <StepEditAndExport handlePreviousStep={previousStep} />}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-black bg-opacity-80 min-h-screen" onClick={closeModal}>
        <button tabIndex={-1}>close</button>
      </form>
    </dialog>

  );
};

export default MultiStepModal;
