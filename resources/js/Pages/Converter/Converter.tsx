import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { router, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ALLOWED_EXTENSIONS = ['PDF', 'EPS', 'AI'] as const;
type AllowedExtensionsType = typeof ALLOWED_EXTENSIONS[number];
// const EXTENSION_MIME_MAP: { [key in AllowedExtensionsType]: string } = {
//   'PDF': 'application/pdf',
//   'EPS': 'application/postscript',
//   'AI': 'application/postscript'
// };
type FormData = {
  file: File | null;
  from: AllowedExtensionsType | null;
  to: AllowedExtensionsType | null;
};

const Converter: React.FC<PageProps> = ({ auth, posts }) => {

  const { data, setData } = useForm<FormData>({
    file: null,
    from: null,
    to: null
  })

  const [fromDropdownOpen, setFromDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [toDropdownOpen, setToDropdownOpen] = useState<boolean>(false);
  const toDropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const notifySuccess = () => toast.success(`File converted from ${data.from} to ${data.to} successfully!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Initialize a new FormData object
    const formData = new FormData();

    // Append the data to the FormData object
    if (data.file) {
      formData.append('file', data.file);
    }
    if (data.from) {
      formData.append('from', data.from);
    }
    if (data.to) {
      formData.append('to', data.to);
    }

    setIsProcessing(true);

    // Post the FormData
    axios.post('/convert/filetype-via-api', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        window.location.href = response.data.download_url
        notifySuccess()
      })
      .catch(error => console.error("Error:", error))
      .finally(() => setIsProcessing(false))
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFromDropdownOpen(false);
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target as Node)) {
        setToDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleFromDropdownItemClick = (value: AllowedExtensionsType) => {
    setData('from', value);
    setFromDropdownOpen(false);
  };

  const handleToDropdownItemClick = (value: AllowedExtensionsType) => {
    setData('to', value);
    setToDropdownOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setData('file', event.target.files[0]);
      setSelectedFileName(event.target.files[0].name);
    } else {
      setData('file', null);
      setSelectedFileName(null);
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Converter</h2>}
    >
      <Head title="Converter" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-14">
            <div className="text-gray-900 dark:text-gray-300 text-center text-2xl">
              Convert your files
            </div>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
              <div className='flex items-center justify-center pt-2 my-12'>
                <div className="file-input-container relative inline-block mr-6">
                  <label htmlFor="fileInput" className="btn btn-outline mb-2 cursor-pointer h-16 px-8 border text-lg shadow-lg">Choose File</label>
                  <input
                    id="fileInput"
                    type="file"
                    className="file-input file-input-bordered w-full absolute opacity-0 cursor-pointer"
                    style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                    onChange={handleFileChange}
                  />
                </div>
                <div className="dropdown" ref={dropdownRef}>
                  <label
                    tabIndex={0}
                    className="btn btn-lg mb-2"
                    onClick={() => setFromDropdownOpen(!fromDropdownOpen)}
                  >
                    {data.from ?? 'FROM'}
                    <FontAwesomeIcon icon={faChevronDown} className='ml-1 w-4 h-4' />
                  </label>
                  {fromDropdownOpen && (
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {ALLOWED_EXTENSIONS.filter(ext => ext !== data.to).map(ext => (
                        <li key={ext} onClick={() => handleFromDropdownItemClick(ext)}><a>{ext}</a></li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className='text-xl text-gray-300 px-3 mb-2'>to</div>
                <div className="dropdown" ref={toDropdownRef}>
                  <label
                    tabIndex={0}
                    className="btn btn-lg mb-2"
                    onClick={() => setToDropdownOpen(!toDropdownOpen)}
                  >
                    {data.to ?? 'TO'}
                    <FontAwesomeIcon icon={faChevronDown} className='ml-1 w-4 h-4' />
                  </label>
                  {toDropdownOpen && (
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {ALLOWED_EXTENSIONS.filter(ext => ext !== data.from).map(ext => (
                        <li key={ext} onClick={() => handleToDropdownItemClick(ext)}><a>{ext}</a></li>
                      ))}
                    </ul>
                  )}
                </div>
                <button type='submit' disabled={isProcessing} className='btn h-14 px-6 text-lg btn-primary shadow-lg mb-2 ml-6'>
                  CONVERT{isProcessing && 'ing'}
                  {isProcessing && <span className="ml-2 loading loading-spinner loading-md"></span>}
                </button>
              </div>
              <div className={`mt-2 ${selectedFileName ? "text-gray-200" : "text-gray-600"} text-center`}>
                Selected file:&nbsp;<b>{selectedFileName || 'No file selected'}</b>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AuthenticatedLayout>
  )
}

export default Converter;
