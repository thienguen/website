import React from 'react'

interface NotificationModalProps {
  onClose: () => void
}

export default function NotificationModal({ onClose }: NotificationModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="font-sans relative flex w-80 flex-col justify-between border-4 border-slate-200 bg-gray-100 p-6 shadow-[10px_10px_0px_rgba(0,0,0,1)] dark:border-gray-600 dark:bg-gray-800 dark:shadow-[10px_10px_0px_rgba(255,255,255,0.2)]">
        {/* <div className="absolute inset-0 -translate-x-2 translate-y-2 border-4 border-gray-300 bg-white shadow-xl shadow-black/20 dark:border-gray-500 dark:bg-gray-700" /> */}

        {/* Modal Content */}
        <div className="relative z-10">
          <h2 className="mb-4 text-xl font-bold uppercase text-white">New Version in Development</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300">
            {`This website is running on an old code base that hasn't been updated for 3.5 years. A new website (version 3) is currently
            in development (ETA: Fall 2025, I hope, Summer was a ehm, idk...).`}
          </p>
          <button
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700"
            onClick={onClose}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}
