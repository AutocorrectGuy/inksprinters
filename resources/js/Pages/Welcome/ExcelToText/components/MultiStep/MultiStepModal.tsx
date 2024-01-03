import { useRef, RefObject, useEffect } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useExcelToTextContext } from '../../contexts/ExcelToTextContext'
import StepSelectSheet from './Steps/1_SelectSheets/StepSelectSheet'
import StepSelectColumns from './Steps/2_SelectColumns/StepSelectColumns'
import StepEditAndExport from './Steps/3_EditAndExport/StepEditAndExport'
import useUpdateModalContentHeight from '../../hooks/useUpdateModalContentHeight'
import CustomToastContainer from '@/Components/Toast/CustomToastContainer'

export type StepComponentProps = {
  handlePreviousStep?: (stepIncrement?: number) => void
  handleNextStep?: (stepDecrement?: number) => void
}

const STEPS_NAMES = ['Select Sheet', 'Select Column(s)', 'Edit & Export']

const MultiStepModal = ({ dialogRef }: { dialogRef: RefObject<HTMLDialogElement> }) => {
  const { currentStep, setCurrentStep, resetContext, sheetData } = useExcelToTextContext()

  const headerRef = useRef<HTMLHeadingElement>(null) // Assuming this is your header or other elements

  const contentHeight = useUpdateModalContentHeight(headerRef)

  const nextStep = (stepIncrement?: number) =>
    currentStep! < STEPS_NAMES.length - 1 && setCurrentStep(currentStep! + (stepIncrement ?? 1))
  const previousStep = (stepDecrement?: number) =>
    currentStep! > 0 && setCurrentStep(currentStep! - (stepDecrement ?? 1))
  const closeModal = () => resetContext(() => dialogRef.current!.close())

  // handle Escape key press (closing the modal)
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      closeModal()
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [dialogRef, closeModal])

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box flex max-w-4xl flex-col text-left" style={{ height: window.innerHeight - 100 }}>
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-4 top-1 mt-4"
            tabIndex={7}
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} className="h-8 w-8" />
          </button>
        </form>

        {/* Flex container for step content */}
        <div className="flex-grow">
          {currentStep !== null && sheetData ? (
            <div className="h-full w-full">
              <h3 ref={headerRef} className="green-500 pb-4 text-center text-3xl font-bold">
                {STEPS_NAMES[currentStep]}
              </h3>
              {/* Render content based on currentStep */}
              <div style={{ height: contentHeight }}>
                {currentStep === 0 && <StepSelectSheet handleNextStep={nextStep} />}
                {currentStep === 1 && <StepSelectColumns handlePreviousStep={previousStep} handleNextStep={nextStep} />}
                {currentStep === 2 && <StepEditAndExport handlePreviousStep={previousStep} />}
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="loading loading-spinner loading-lg" />
            </div>
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop min-h-screen bg-black bg-opacity-80" onClick={closeModal}>
        <button tabIndex={-1}>close</button>
      </form>
      <CustomToastContainer />
    </dialog>
  )
}

export default MultiStepModal
