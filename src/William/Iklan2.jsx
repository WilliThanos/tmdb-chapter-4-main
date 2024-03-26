import React from 'react';

export default function IklanTerbang() {
  return (
    <div className="max-w-md mx-auto bg-white shadow sm:rounded-lg py-10 my-11">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Ya Begitulah Kadang-Kadang</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Kartu Ini Hanya Pemanis, Jika kamu melihat ini Maka Kamu Lebih Manis
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Klik Tombol Ini Manis
          </button>
        </div>
      </div>
    </div>
  )
}
